import React from 'react';
import { StyleSheet } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import {
  Box,
  Spinner,
  Text,
  Icon,
  Center,
} from '@gluestack-ui/themed';
import { AlertCircle } from 'lucide-react-native';

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const player = useVideoPlayer(videoUrl, player => {
    player.loop = true;
    player.play();
  });

  return (
    <Box bg="$black" width="100%" height={240} justifyContent="center" overflow="hidden" rounded="$2xl">
      <VideoView 
        style={styles.video} 
        player={player} 
        allowsFullscreen 
        allowsPictureInPicture
        contentFit="contain"
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});
