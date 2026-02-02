import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery, useMutation } from 'convex/react';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { api } from '../../../convex/_generated/api';
import VideoRecorder from '../../../components/video/VideoRecorder';
import { validateVideo } from '../../../utils/video';
import { SPORTS_LIST } from '../../../config/sports-config';
import {
  Box, VStack, Text, Button, ButtonText, ButtonIcon,
  Heading, Select, SelectTrigger, SelectInput, SelectIcon,
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
  const [uploadProgress, setUploadProgress] = useState(0);

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

      // 3. Upload File
      // Using FileSystem.uploadAsync for reliable background upload
      const uploadResult = await FileSystem.uploadAsync(uploadUrl, uri, {
        httpMethod: 'POST',
        // 1 represents FileSystemUploadType.BINARY_CONTENT
        uploadType: 1 as any,
        mimeType: 'video/mp4', // Assuming mp4 from camera/validation
      });

      if (uploadResult.status !== 200) {
        throw new Error('Upload failed');
      }

      const { storageId } = JSON.parse(uploadResult.body);

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
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true, // Allows trimming
      quality: 1,
      videoMaxDuration: 60, // Helper, but we validate too
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
      <Box flex={1} bg="$backgroundLight0" justifyContent="center" alignItems="center" p="$6">
        <Spinner size="large" color="$primary500" mb="$4" />
        <Heading size="lg" mb="$2">Uploading Video...</Heading>
        <Text textAlign="center" color="$textLight500">
          Please wait while we prepare your video for analysis.
        </Text>
      </Box>
    );
  }

  return (
    <Box flex={1} bg="$backgroundLight0">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack space="xl" p="$4" flex={1}>
        <VStack space="xs">
          <Heading size="2xl">Practice</Heading>
          <Text color="$textLight500">Record or upload a video to get AI feedback.</Text>
        </VStack>

        <VStack space="sm">
          <Text fontWeight="$medium" color="$textLight700">Select Sport</Text>
          <Select
            selectedValue={selectedSport}
            onValueChange={setSelectedSport}
          >
            <SelectTrigger variant="outline" size="lg">
              <SelectInput placeholder="Select option" />
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
                    label={sport.name}
                    value={sport.id}
                  />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </VStack>

        <VStack flex={1} justifyContent="center" space="lg">
           <Button
            size="xl"
            variant="solid"
            action="primary"
            onPress={() => setIsRecorderOpen(true)}
            isDisabled={!selectedSport}
            bg="$primary500"
            $active-bg="$primary600"
          >
            <ButtonIcon as={VideoIcon} color="$white" mr="$2" />
            <ButtonText>Record Video</ButtonText>
          </Button>

          <Button
            size="xl"
            variant="outline"
            action="secondary"
            onPress={openGallery}
            isDisabled={!selectedSport}
            borderColor="$primary500"
          >
             <ButtonIcon as={Upload} color="$primary500" mr="$2" />
            <ButtonText color="$primary500">Upload from Gallery</ButtonText>
          </Button>

          {!selectedSport && (
             <HStack space="sm" alignItems="center" justifyContent="center" mt="$2">
               <Icon as={AlertCircle} color="$error500" size="sm" />
               <Text color="$error500" size="sm">Please select a sport first</Text>
             </HStack>
          )}
        </VStack>
      </VStack>
      </SafeAreaView>
    </Box>
  );
}
