import React from 'react';
import { Box, Spinner, Text, VStack } from '@gluestack-ui/themed';

interface LoadingSpinnerProps {
  size?: 'small' | 'large';
  text?: string;
  color?: string;
}

export default function LoadingSpinner({ size = 'large', text, color = '#155DFC' }: LoadingSpinnerProps) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="#F9FAFB">
      <VStack space="md" alignItems="center">
        <Spinner size={size} color={color} />
        {text && (
          <Text color="#4A5565" size="md">
            {text}
          </Text>
        )}
      </VStack>
    </Box>
  );
}
