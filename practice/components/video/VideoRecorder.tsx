import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
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
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [duration, setDuration] = useState(0);
  const [permission, requestPermission] = useCameraPermissions();
  const [micPermission, requestMicPermission] = useMicrophonePermissions();
  const cameraRef = useRef<CameraView>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Web-specific refs
  const mediaRecorderRef = useRef<any>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setDuration(prev => {
          if (prev >= ENV.MAX_VIDEO_DURATION_SECONDS) {
            console.log('Max duration reached, stopping recording automatically');
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
    if (Platform.OS === 'web') {
      await startWebRecording();
    } else {
      await startNativeRecording();
    }
  };

  const stopRecording = () => {
    if (Platform.OS === 'web') {
      stopWebRecording();
    } else {
      stopNativeRecording();
    }
  };

  const startNativeRecording = async () => {
    if (cameraRef.current) {
      try {
        console.log('Starting native recording...');
        setIsRecording(true);
        const video = await cameraRef.current.recordAsync({
          maxDuration: ENV.MAX_VIDEO_DURATION_SECONDS,
        });
        console.log('Native recordAsync finished:', video);
        if (video && video.uri) {
          onVideoRecorded(video.uri);
        }
      } catch (error) {
        console.error('Failed to record native video:', error);
        Alert.alert('Error', 'Could not start recording.');
        setIsRecording(false);
      }
    }
  };

  const stopNativeRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      // isRecording will be set to false in startNativeRecording's finally block
    }
  };

  const startWebRecording = async () => {
    try {
      console.log('Starting web recording via MediaRecorder...');
      
      // Access the underlying video element from expo-camera on web
      // expo-camera on web uses a video element. We can find it.
      const videoElement = document.querySelector('video');
      if (!videoElement || !videoElement.srcObject) {
        console.error('No video element or stream found for web recording');
        // Fallback: try to get stream manually if expo-camera hasn't provided it
        Alert.alert('Camera Error', 'Camera stream not found. Please refresh the page.');
        return;
      }

      const stream = videoElement.srcObject as MediaStream;
      const options = { mimeType: 'video/webm;codecs=vp9,opus' };
      
      // Check for supported types
      let finalOptions: any = options;
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        finalOptions = { mimeType: 'video/webm' };
        if (!MediaRecorder.isTypeSupported(finalOptions.mimeType)) {
          finalOptions = {}; // Let browser choose
        }
      }

      const mediaRecorder = new MediaRecorder(stream, finalOptions);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log('Web MediaRecorder stopped, creating blob...');
        const blob = new Blob(chunksRef.current, { type: 'video/mp4' }); // Use mp4 container for compatibility
        const url = URL.createObjectURL(blob);
        console.log('Web video blob created:', url);
        onVideoRecorded(url);
        setIsRecording(false);
      };

      mediaRecorder.start();
      console.log('Web MediaRecorder started');
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start web recording:', error);
      Alert.alert('Recording Error', 'Could not start browser recording.');
    }
  };

  const stopWebRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      console.log('Stopping web recording...');
      mediaRecorderRef.current.stop();
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
