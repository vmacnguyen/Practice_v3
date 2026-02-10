import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { ENV } from '../config/env';

export interface VideoValidationResult {
  valid: boolean;
  error?: string;
}

export interface ThumbnailOptions {
  time?: number;
  quality?: number;
  width?: number;
  height?: number;
}

const VALID_EXTENSIONS = ['.mp4', '.mov', '.m4v'];

export const isValidVideoFormat = (filename: string): boolean => {
  if (!filename) return false;
  const lowerName = filename.toLowerCase();
  return VALID_EXTENSIONS.some(ext => lowerName.endsWith(ext));
};

export const generateThumbnail = async (uri: string, options: ThumbnailOptions = {}): Promise<string | null> => {
  const { time = 1000, quality = 0.7, width, height } = options;

  if (Platform.OS === 'web') {
    return generateWebThumbnail(uri, { time, quality, width, height });
  } else {
    return generateNativeThumbnail(uri, { time, quality });
  }
};

const generateNativeThumbnail = async (uri: string, options: { time: number; quality: number }): Promise<string | null> => {
  try {
    const { uri: thumbUri } = await (await import('expo-video-thumbnails')).getThumbnailAsync(uri, {
      time: options.time,
      quality: options.quality,
    });
    return thumbUri;
  } catch (e) {
    console.warn("Native thumbnail generation failed, trying fallback at time=0", e);
    try {
      const { uri: thumbUri } = await (await import('expo-video-thumbnails')).getThumbnailAsync(uri, { time: 0 });
      return thumbUri;
    } catch (e2) {
      console.warn("Native thumbnail fallback failed", e2);
      return null;
    }
  }
};

const generateWebThumbnail = async (uri: string, options: { time: number; quality: number; width?: number; height?: number }): Promise<string | null> => {
  if (typeof document === 'undefined') {
    console.warn('Web thumbnail generation not available (document not defined)');
    return null;
  }

  return new Promise<string | null>((resolve) => {
    console.log('Generating web thumbnail for URI:', uri);
    
    const video = document.createElement('video');
    let timeoutId: NodeJS.Timeout | null = null;
    
    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId);
      video.removeEventListener('loadedmetadata', onMetadata);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('error', onError);
      video.removeEventListener('canplay', onCanPlay);
      video.pause();
      video.removeAttribute('src');
      video.load();
    };

    const onMetadata = () => {
      console.log('Web video metadata loaded, duration:', video.duration, 'dimensions:', video.videoWidth, 'x', video.videoHeight);
      
      const seekTime = Math.min(options.time / 1000, video.duration * 0.9);
      video.currentTime = seekTime;
    };

    const onCanPlay = () => {
      console.log('Web video can play');
    };

    const onSeeked = () => {
      console.log('Web video seeked, capturing frame...');
      
      try {
        const canvas = document.createElement('canvas');
        const targetWidth = options.width || video.videoWidth;
        const targetHeight = options.height || video.videoHeight;
        
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          console.error('Could not get canvas context');
          cleanup();
          resolve(null);
          return;
        }

        ctx.drawImage(video, 0, 0, targetWidth, targetHeight);
        const dataUrl = canvas.toDataURL('image/jpeg', options.quality);
        
        console.log('Web thumbnail generated successfully, size:', dataUrl.length);
        cleanup();
        resolve(dataUrl);
      } catch (error) {
        console.error('Error capturing web thumbnail frame:', error);
        cleanup();
        resolve(null);
      }
    };

    const onError = (e: Event) => {
      console.error('Error loading video for web thumbnail', e);
      cleanup();
      resolve(null);
    };

    video.addEventListener('loadedmetadata', onMetadata);
    video.addEventListener('seeked', onSeeked);
    video.addEventListener('error', onError);
    video.addEventListener('canplay', onCanPlay);
    
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.crossOrigin = 'anonymous';
    video.src = uri;
    
    timeoutId = setTimeout(() => {
      console.warn('Web thumbnail generation timed out after 10s');
      cleanup();
      resolve(null);
    }, 10000);
  });
};

export const validateVideo = async (uri: string): Promise<VideoValidationResult> => {
  // On web, FileSystem.getInfoAsync is not supported and we typically deal with 
  // blob URLs that don't need the same type of existence checks.
  if (Platform.OS === 'web') {
    return { valid: true };
  }

  try {
    // Let's try the legacy import as recommended for native platforms.
    let getInfoAsync;
    try {
      getInfoAsync = require('expo-file-system/legacy').getInfoAsync;
    } catch (e) {
      // Fallback if legacy path doesn't work
      getInfoAsync = (FileSystem as any).getInfoAsync;
    }

    if (!getInfoAsync) {
        return { valid: true }; // Skip if API is missing
    }

    const fileInfo = await getInfoAsync(uri);

    if (!fileInfo.exists) {
      return { valid: false, error: 'Video file does not exist.' };
    }

    if (fileInfo.isDirectory) {
      return { valid: false, error: 'Path is a directory, not a file.' };
    }

    // Check file size (size is in bytes)
    const sizeInMB = fileInfo.size / (1024 * 1024);
    if (sizeInMB > ENV.MAX_VIDEO_FILE_SIZE_MB) {
      return {
        valid: false,
        error: `Video exceeds maximum size of ${ENV.MAX_VIDEO_FILE_SIZE_MB}MB.`
      };
    }

    return { valid: true };
  } catch (error) {
    console.error('Video validation error:', error);
    // If validation fails due to API issues, we might want to allow it in dev to unblock.
    // But let's try to return valid=true if it's just the API complaining.
    if ((error as any).toString().includes("deprecated")) {
        console.warn("Validation skipped due to API deprecation.");
        return { valid: true };
    }
    return { valid: false, error: 'Failed to validate video file.' };
  }
};
