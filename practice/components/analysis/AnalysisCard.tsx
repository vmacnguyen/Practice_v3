import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  BadgeText,
  Icon,
} from '@gluestack-ui/themed';
import { ChevronRight } from 'lucide-react-native';
import { formatDateShort } from '../../utils/formatting';

interface AnalysisCardProps {
  analysis: any; // We can use the generated Analysis type if available
  onPress: () => void;
}

export default function AnalysisCard({ analysis, onPress }: AnalysisCardProps) {
  const isCompleted = analysis.status === 'completed';
  const isFailed = analysis.status === 'failed';
  const isPending = analysis.status === 'pending' || analysis.status === 'processing';

  let statusColor = '$warning500';
  let statusText = 'Processing';
  let badgeAction = 'warning';

  if (isCompleted) {
    statusColor = '$success500';
    statusText = 'Completed';
    badgeAction = 'success';
  } else if (isFailed) {
    statusColor = '$error500';
    statusText = 'Failed';
    badgeAction = 'error';
  }

  // Capitalize sport
  const sportName = analysis.sport.charAt(0).toUpperCase() + analysis.sport.slice(1);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Box
        bg="$white"
        p="$4"
        rounded="$lg"
        borderWidth={1}
        borderColor="$borderLight200"
        shadowColor="$backgroundLight900"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.05}
        shadowRadius={4}
        elevation={2}
      >
        <VStack space="sm">
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text fontWeight="$bold" size="md" color="$textLight900">
                {sportName}
              </Text>
              <Text size="sm" color="$textLight500">
                {formatDateShort(analysis.createdAt)} • Session {analysis.sessionNumber}
              </Text>
            </VStack>
            
            <Badge size="md" variant="solid" borderRadius="$full" action={badgeAction as any}>
              <BadgeText>{statusText}</BadgeText>
            </Badge>
          </HStack>

          {isCompleted && analysis.overallFeedback ? (
             <Text numberOfLines={2} color="$textLight700" size="sm">
               {analysis.overallFeedback}
             </Text>
          ) : null}

          <HStack justifyContent="flex-end" alignItems="center" mt="$1">
            <Text color="$primary500" size="sm" fontWeight="$medium">
              View Details
            </Text>
            <Icon as={ChevronRight} color="$primary500" size="sm" ml="$1" />
          </HStack>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
}
