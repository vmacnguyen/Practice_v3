import * as FileSystem from 'expo-file-system';
import { ENV } from '../config/env';

export interface VideoValidationResult {
  valid: boolean;
  error?: string;
}

const VALID_EXTENSIONS = ['.mp4', '.mov', '.m4v'];

export const isValidVideoFormat = (filename: string): boolean => {
  if (!filename) return false;
  const lowerName = filename.toLowerCase();
  return VALID_EXTENSIONS.some(ext => lowerName.endsWith(ext));
};

export const validateVideo = async (uri: string): Promise<VideoValidationResult> => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(uri);

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

    // We can't easily check duration here without loading it into a video component or using another library.
    // Duration check is typically done on selection/recording.

    return { valid: true };
  } catch (error) {
    console.error('Video validation error:', error);
    return { valid: false, error: 'Failed to validate video file.' };
  }
};
