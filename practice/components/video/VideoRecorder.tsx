import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, useCameraPermissions, useMicrophonePermissions } from 'expo-camera';
import {
  Text,
  Button,
  ButtonText,
  Icon,
} from '@gluestack-ui/themed';
import {
  RefreshCw,
  X,
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
    return <View style={{ flex: 1, backgroundColor: 'black' }} />;
  }

  if (!permission.granted || !micPermission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', padding: 16 }}>
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
      </View>
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
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing={facing}
        ref={cameraRef}
        mode="video"
      />
      
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={onCancel} disabled={isRecording}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: 8, borderRadius: 999 }}>
              <Icon as={X} color="$white" size="xl" />
            </View>
          </TouchableOpacity>

          <View style={{ backgroundColor: isRecording ? '#EF4444' : 'transparent', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999 }}>
            <Text color="$white" fontWeight="$bold">
              {formatTime(duration)} / {formatTime(ENV.MAX_VIDEO_DURATION_SECONDS)}
            </Text>
          </View>

          <View style={{ width: 40 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 32 }}>
          <View style={{ width: 50 }} />

          <TouchableOpacity
            onPress={isRecording ? stopRecording : startRecording}
            style={styles.recordButtonContainer}
          >
            <View style={{
              width: 80,
              height: 80,
              borderRadius: 999,
              borderWidth: 4,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                width: isRecording ? 40 : 70,
                height: isRecording ? 40 : 70,
                borderRadius: isRecording ? 6 : 999,
                backgroundColor: '#EF4444'
              }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleCameraFacing} disabled={isRecording}>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: 12, borderRadius: 999, opacity: isRecording ? 0.3 : 1 }}>
              <Icon as={RefreshCw} color="$white" size="xl" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
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
