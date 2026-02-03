import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery, useMutation } from 'convex/react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
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
  HStack, Spinner, Center
} from '@gluestack-ui/themed';
import { Upload, Video as VideoIcon, AlertCircle } from 'lucide-react-native';

export default function PracticeScreen() {
  const router = useRouter();
  const user = useQuery(api.auth.getCurrentUser);
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const createAnalysis = useMutation(api.analyses.createAnalysis);

  const [selectedSport, setSelectedSport] = useState<string>('');
  const [isRecorderOpen, setIsRecorderOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (user?.preferredSport && !selectedSport) {
      setSelectedSport(user.preferredSport);
    }
  }, [user]);

  const handleVideoSelected = async (uri: string) => {
    setIsRecorderOpen(false);

    // 1. Validate
    const validation = await validateVideo(uri);
    if (!validation.valid) {
      Alert.alert('Invalid Video', validation.error);
      return;
    }

    if (!selectedSport) {
      Alert.alert('Select Sport', 'Please select a sport before uploading.');
      return;
    }

    try {
      setIsUploading(true);

      // 2. Get Upload URL
      const uploadUrl = await generateUploadUrl();

      // 3. Upload File using fetch to ensure raw binary transmission
      // We read the file as a string (base64) then convert to blob/buffer behavior via fetch body
      const response = await fetch(uri);
      const blob = await response.blob();
      
      const uploadResult = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": "video/mp4" },
        body: blob,
      });

      if (!uploadResult.ok) {
        throw new Error(`Upload failed: ${uploadResult.statusText}`);
      }

      const { storageId } = await uploadResult.json();

      // 4. Create Analysis
      const analysisId = await createAnalysis({
        videoStorageId: storageId,
        sport: selectedSport,
      });

      // 5. Navigate
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
      handleVideoSelected(result.assets[0].uri);
    }
  };

  if (isRecorderOpen) {
    return (
      <VideoRecorder
        onVideoRecorded={handleVideoSelected}
        onCancel={() => setIsRecorderOpen(false)}
      />
    );
  }

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

          {/* Sport Selector */}
          <VStack space="xs">
            <Text size="sm" fontWeight="$semibold" color="#364153">Select Sport</Text>
            <Select
              selectedValue={selectedSport}
              onValueChange={setSelectedSport}
            >
              <SelectTrigger variant="outline" size="lg" borderColor="#D1D5DC" rounded="$lg" bg="white">
                <SelectInput placeholder="Select option" color="#0A0A0A" />
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