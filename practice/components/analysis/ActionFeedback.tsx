import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Icon,
  Heading,
} from '@gluestack-ui/themed';
import { AlertCircle } from 'lucide-react-native';

interface ActionFeedbackProps {
  identifiedAction: {
    action: string;
    timestamp: string | null;
    analysis: string;
    practiceTips: string[];
  };
}

export default function ActionFeedback({ identifiedAction }: ActionFeedbackProps) {
  return (
    <Box
      bg="white"
      rounded="$2xl"
      p="$5"
      mb="$4"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
      }}
    >
      <HStack alignItems="center" space="xs" mb="$4">
        <Box bg="#FFEDD4" rounded="$full" p="$1.5">
          <Icon as={AlertCircle} color="#F54900" size="sm" />
        </Box>
        <Heading size="md" color="#0A0A0A">
          {identifiedAction.action}
        </Heading>
        {identifiedAction.timestamp && (
          <Box bg="#F3F4F6" px="$2" py="$0.5" rounded="$sm" ml="$2">
            <Text size="xs" color="#6A7282" fontWeight="$medium">
              {identifiedAction.timestamp}
            </Text>
          </Box>
        )}
      </HStack>

      <Text color="#364153" size="sm" mb="$3">
        {identifiedAction.analysis}
      </Text>

      {identifiedAction.practiceTips && identifiedAction.practiceTips.length > 0 && (
        <VStack space="sm" mt="$2">
          {identifiedAction.practiceTips.map((tip, index) => (
            <HStack key={index} alignItems="flex-start" space="xs">
              <Box w={6} h={6} rounded="$full" bg="#F54900" mt="$1" />
              <Text color="#364153" size="sm" flex={1}>
                {tip}
              </Text>
            </HStack>
          ))}
        </VStack>
      )}
    </Box>
  );
}
