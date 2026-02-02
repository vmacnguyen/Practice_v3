import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera';
import {
  Box,
  Text,
  Icon,
  VStack,
  HStack,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {
  Camera,
  StopCircle,
  RefreshCw,
  X,
  Video as VideoIcon
} from 'lucide-react-native';
import { ENV } from '../../config/env';

interface VideoRecorderProps {
  onVideoRecorded: (uri: string) => void;
  onCancel: () => void;
}

export default function VideoRecorder({ onVideoRecorded, onCancel }: VideoRecorderProps) {
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [permission, requestPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const cameraRef = useRef<CameraView>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setDuration(prev => {
          if (prev >= ENV.MAX_VIDEO_DURATION_SECONDS) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setDuration(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  if (!permission || !micPermission) {
    // Camera permissions are still loading
    return <Box flex={1} bg="$black" />;
  }

  if (!permission.granted || !micPermission.granted) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" bg="$black" p="$4">
        <Text color="$white" textAlign="center" mb="$4">
          We need your permission to use the camera and microphone.
        </Text>
        <Button onPress={() => {
          requestPermission();
          requestMicPermission();
        }}>
          <ButtonText>Grant Permission</ButtonText>
        </Button>
        <Button variant="link" onPress={onCancel} mt="$4">
          <ButtonText color="$white">Cancel</ButtonText>
        </Button>
      </Box>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        setIsRecording(true);
        const video = await cameraRef.current.recordAsync({
          maxDuration: ENV.MAX_VIDEO_DURATION_SECONDS,
        });
        if (video) {
          onVideoRecorded(video.uri);
        }
      } catch (error) {
        console.error('Failed to record video:', error);
      } finally {
        setIsRecording(false);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box flex={1} bg="$black">
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
        mode="video"
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Box flex={1} justifyContent="space-between" p="$4">
            {/* Top Bar */}
            <HStack justifyContent="space-between" alignItems="center">
            <TouchableOpacity onPress={onCancel} disabled={isRecording}>
              <Box bg="$black" opacity={0.6} p="$2" rounded="$full">
                <Icon as={X} color="$white" size="xl" />
              </Box>
            </TouchableOpacity>

            <Box bg="$error500" px="$3" py="$1" rounded="$full" opacity={isRecording ? 1 : 0}>
              <Text color="$white" fontWeight="$bold">
                {formatTime(duration)} / {formatTime(ENV.MAX_VIDEO_DURATION_SECONDS)}
              </Text>
            </Box>

            <Box w={40} /> {/* Spacer */}
          </HStack>

          {/* Bottom Bar */}
          <HStack justifyContent="space-around" alignItems="center" pb="$8">
             <Box w={50} /> {/* Spacer */}

            <TouchableOpacity
              onPress={isRecording ? stopRecording : startRecording}
              style={styles.recordButtonContainer}
            >
              <Box
                w={80}
                h={80}
                rounded="$full"
                borderWidth={4}
                borderColor="$white"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  w={isRecording ? 40 : 70}
                  h={isRecording ? 40 : 70}
                  rounded={isRecording ? "$sm" : "$full"}
                  bg="$error500"
                />
              </Box>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleCameraFacing} disabled={isRecording}>
              <Box bg="$black" opacity={isRecording ? 0.3 : 0.6} p="$3" rounded="$full">
                <Icon as={RefreshCw} color="$white" size="xl" />
              </Box>
            </TouchableOpacity>
          </HStack>
          </Box>
        </SafeAreaView>
      </CameraView>
    </Box>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  recordButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
