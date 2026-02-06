import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery, useMutation } from 'convex/react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as VideoThumbnails from 'expo-video-thumbnails';
import { api } from '../../../convex/_generated/api';
import VideoRecorder from '../../../components/video/VideoRecorder';
import { validateVideo } from '../../../utils/video';
import { SPORTS_LIST } from '../../../config/sports-config';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Box, VStack, Text, Heading, 
  Select, SelectTrigger, SelectInput, SelectIcon,
  SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper,
  SelectDragIndicator, SelectItem, Icon, ChevronDownIcon,
  HStack, Spinner, Center, Button, ButtonText
} from '@gluestack-ui/themed';
import { Upload, Video as VideoIcon, AlertCircle, ArrowLeft } from 'lucide-react-native';

export default function PracticeScreen() {
  const router = useRouter();
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const createAnalysis = useMutation(api.analyses.createAnalysis);

  const [selectedSport, setSelectedSport] = useState<string>('');
  const [isRecorderOpen, setIsRecorderOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [tempVideoUri, setTempVideoUri] = useState<string | null>(null);
  const [tempThumbnailUri, setTempThumbnailUri] = useState<string | null>(null);

  const handleVideoAcquired = async (uri: string) => {
    setIsRecorderOpen(false);

    // 1. Validate
    const validation = await validateVideo(uri);
    if (!validation.valid) {
      Alert.alert('Invalid Video', validation.error);
      return;
    }

    try {
      // Generate Thumbnail
      let thumbnailUri = null;
      try {
        const { uri: thumbUri } = await VideoThumbnails.getThumbnailAsync(uri, {
          time: 1000,
          quality: 0.7,
        });
        thumbnailUri = thumbUri;
      } catch (e) {
        console.warn("Thumbnail generation failed, trying fallback...", e);
        try {
           const { uri: thumbUri } = await VideoThumbnails.getThumbnailAsync(uri, { time: 0 });
           thumbnailUri = thumbUri;
        } catch (e2) {
           console.warn("Thumbnail fallback failed", e2);
        }
      }
      
      setTempVideoUri(uri);
      setTempThumbnailUri(thumbnailUri);
    } catch (e) {
      console.error("Error processing video", e);
      Alert.alert("Error", "Could not process selected video");
    }
  };

  const handleAnalyze = async () => {
    if (!tempVideoUri || isUploading) return;

    if (!selectedSport) {
      Alert.alert('Select Sport', 'Please select a sport before uploading.');
      return;
    }

    try {
      setIsUploading(true);
      const uri = tempVideoUri;
      const thumbnailUri = tempThumbnailUri;

      // 2. Get Upload URLs (one for video, one for thumbnail if it exists)
      const videoUploadUrl = await generateUploadUrl();
      const thumbnailUploadUrl = thumbnailUri ? await generateUploadUrl() : null;

      // 3. Upload Files
      // Video upload
      const videoFetch = fetch(uri).then(r => r.blob());
      
      const uploadPromises = [
        videoFetch.then(blob => fetch(videoUploadUrl, {
          method: "POST",
          headers: { "Content-Type": "video/mp4" },
          body: blob,
        }).then(r => r.json()))
      ];

      // Thumbnail upload
      if (thumbnailUploadUrl && thumbnailUri) {
        const thumbFetch = fetch(thumbnailUri).then(r => r.blob());
        uploadPromises.push(
          thumbFetch.then(blob => fetch(thumbnailUploadUrl, {
            method: "POST",
            headers: { "Content-Type": "image/jpeg" },
            body: blob,
          }).then(r => r.json()))
        );
      }

      const results = await Promise.all(uploadPromises);
      const videoStorageId = results[0].storageId;
      const thumbnailStorageId = results[1]?.storageId;

      // 4. Create Analysis
      const analysisId = await createAnalysis({
        videoStorageId,
        thumbnailStorageId, // Pass the optional thumbnail ID
        sport: selectedSport,
      });

      // 5. Navigate
      setTempVideoUri(null);
      setTempThumbnailUri(null);
      router.push(`/analysis/${analysisId}`);

    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Error', 'Failed to upload video. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['videos'],
      allowsEditing: true,
      quality: 1,
      videoMaxDuration: 60,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      handleVideoAcquired(result.assets[0].uri);
    }
  };

  if (isUploading) {
    return (
      <Box flex={1} bg="#F9FAFB" justifyContent="center" alignItems="center" p="$6">
        <Box bg="#DBEAFE" p="$6" rounded="$full" mb="$6">
          <Spinner size="large" color="#155DFC" />
        </Box>
        <Heading size="xl" color="#0A0A0A" mb="$2">Analyzing your video...</Heading>
        <Text textAlign="center" color="#4A5565">
          This will just take a moment
        </Text>
      </Box>
    );
  }

  if (isRecorderOpen) {
    return (
      <VideoRecorder
        onVideoRecorded={handleVideoAcquired}
        onCancel={() => setIsRecorderOpen(false)}
      />
    );
  }

  if (tempVideoUri) {
    return (
      <Box flex={1} bg="#F9FAFB">
        <SafeAreaView style={{ flex: 1 }}>
          <VStack space="xl" p="$6" flex={1}>
             {/* Header with Back Button */}
            <HStack alignItems="center" space="md" pt="$2">
              <TouchableOpacity onPress={() => {
                  setTempVideoUri(null);
                  setTempThumbnailUri(null);
              }}>
                <Icon as={ArrowLeft} size="xl" color="#0A0A0A" />
              </TouchableOpacity>
              <Heading size="2xl" color="#0A0A0A">New Analysis</Heading>
            </HStack>

            {/* Video Preview */}
            <Box 
                bg="black" 
                rounded="$xl" 
                height={200} 
                width="100%" 
                overflow="hidden"
                justifyContent="center"
                alignItems="center"
            >
                {tempThumbnailUri ? (
                    <Image 
                        source={{ uri: tempThumbnailUri }} 
                        style={{ width: '100%', height: '100%' }} 
                        resizeMode="cover"
                    />
                ) : (
                    <Icon as={VideoIcon} size="xl" color="white" />
                )}
            </Box>

            {/* Sport Selector */}
            <VStack space="xs" mt="$4">
                <Text size="sm" fontWeight="$semibold" color="#364153">Select Sport</Text>
                <Select
                  selectedValue={selectedSport}
                  onValueChange={setSelectedSport}
                >
                  <SelectTrigger variant="outline" size="lg" borderColor="#D1D5DC" rounded="$lg" bg="white">
                    <SelectInput placeholder="Select sport" color="#0A0A0A" />
                    <SelectIcon mr="$3" as={ChevronDownIcon} />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      {SPORTS_LIST.map((sport) => (
                        <SelectItem
                          key={sport.id}
                          label={`${sport.emoji} ${sport.name}`}
                          value={sport.id}
                        />
                      ))}
                    </SelectContent>
                  </SelectPortal>
                </Select>
            </VStack>

            {/* Action Button */}
            <VStack space="md" mt="$8">
                <TouchableOpacity 
                  onPress={handleAnalyze}
                  disabled={!selectedSport || isUploading}
                >
                  <LinearGradient
                    colors={['#155DFC', '#9810FA']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      paddingVertical: 16,
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: !selectedSport || isUploading ? 0.5 : 1,
                    }}
                  >
                    <Text color="white" fontWeight="$bold" size="lg">
                      Analyze Practice
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
            </VStack>

          </VStack>
        </SafeAreaView>
      </Box>
    );
  }


  return (
    <Box flex={1} bg="#F9FAFB">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack space="xl" p="$6" flex={1}>
          {/* Header */}
          <Box pt="$2">
            <Heading size="3xl" color="#0A0A0A" mb="$2">Add a practice</Heading>
          </Box>

          {/* Main Card */}
          <Box 
            bg="white" 
            rounded="$2xl" 
            borderWidth={2} 
            borderColor="#D1D5DC" 
            p="$8" 
            alignItems="center"
          >
            {/* Icon Circle */}
            <Box bg="#DBEAFE" p="$6" rounded="$full" mb="$6">
              <Icon as={Upload} size="xl" color="#155DFC" />
            </Box>
            
            <Text color="#4A5565" textAlign="center" mb="$8" px="$4">
              Get instant AI-powered analysis of your practice session
            </Text>

            <VStack space="md" w="100%">
              {/* Choose from Library Button */}
              <TouchableOpacity onPress={openGallery}>
                <Box bg="#155DFC" py="$3" rounded="$lg" flexDirection="row" alignItems="center" justifyContent="center">
                  <Icon as={Upload} color="white" size="sm" mr="$2" />
                  <Text color="white" fontWeight="$medium">Choose from Library</Text>
                </Box>
              </TouchableOpacity>

              {/* Record Now Button */}
              <TouchableOpacity onPress={() => setIsRecorderOpen(true)}>
                <Box bg="white" borderWidth={1} borderColor="rgba(0,0,0,0.1)" py="$3" rounded="$lg" flexDirection="row" alignItems="center" justifyContent="center">
                  <Icon as={VideoIcon} color="#0A0A0A" size="sm" mr="$2" />
                  <Text color="#0A0A0A" fontWeight="$medium">Record Now</Text>
                </Box>
              </TouchableOpacity>
            </VStack>
          </Box>



          {/* Tips Section */}
          <Box mt="$4">
            <Text size="sm" fontWeight="$semibold" color="#364153" mb="$3">
              Tips for best results:
            </Text>
            <VStack space="sm">
              {[
                'Position camera to capture full body movement',
                'Ensure good lighting for accurate analysis',
                'Keep camera stable throughout recording',
              ].map((tip, index) => (
                <HStack key={index} space="md" alignItems="center">
                  <Box bg="#DBEAFE" w={20} h={20} rounded="$full" alignItems="center" justifyContent="center">
                    <Text color="#155DFC" size="xs" fontWeight="$bold">{index + 1}</Text>
                  </Box>
                  <Text size="sm" color="#4A5565">{tip}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}