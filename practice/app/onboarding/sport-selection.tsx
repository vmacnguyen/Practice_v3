import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useMutation } from 'convex/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../convex/_generated/api';
import { useAuth } from '../../hooks/useAuth';
import { SPORTS_LIST } from '../../config/sports-config';
import {
  Box,
  VStack,
  Text,
  Heading,
  Pressable,
  HStack,
  Icon,
  Spinner,
} from '@gluestack-ui/themed';
import { ChevronLeft } from 'lucide-react-native';

export default function SportSelectionScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useAuth();
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const updatePreferredSport = useMutation(api.auth.updatePreferredSport);

  console.log("SportSelection Render:", { isAuthenticated, isLoading, userId: user?._id });

  const handleSelectSport = async (sportId: string) => {
    setSelectedSport(sportId);
    
    if (isLoading) return;

    if (!isAuthenticated) {
      console.log('Waiting for authentication...');
      // In a real scenario we might wait or show a loader, 
      // but here we block navigation to prevent broken state.
      return; 
    }

    try {
      await updatePreferredSport({ sport: sportId });
      // Only navigate on success
      router.push('/onboarding/tutorial');
    } catch (error) {
      console.error('Failed to update sport:', error);
    }
  };

  if (isLoading) {
    return (
      <Box flex={1} bg="#F9FAFB" justifyContent="center" alignItems="center">
        <Spinner size="large" color="#155DFC" />
        <Text color="#4A5565" mt="$4">Checking authentication...</Text>
      </Box>
    );
  }

  return (
    <Box flex={1} bg="#F9FAFB">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack flex={1} p="$6">
          {/* Header */}
          <Pressable onPress={() => router.back()} mb="$6">
            <HStack alignItems="center" space="xs">
              <Icon as={ChevronLeft} color="#155DFC" size="md" />
              <Text color="#155DFC" fontWeight="$medium">Back</Text>
            </HStack>
          </Pressable>

          <Heading size="3xl" color="#0A0A0A" mb="$2">
            Choose Your Sport
          </Heading>
          <Text color="#4A5565" size="md" mb="$8">
            Select the sport you want to practice
          </Text>

          {/* Grid */}
          <Box flexDirection="row" flexWrap="wrap" mx={-8}>
            {SPORTS_LIST.map((sport) => {
              const isSelected = selectedSport === sport.id;
              return (
                <Box key={sport.id} width="33.33%" p="$2">
                  <Pressable
                    onPress={() => handleSelectSport(sport.id)}
                    bg="white"
                    rounded="$2xl"
                    p="$4"
                    alignItems="center"
                    justifyContent="center"
                    borderWidth={2}
                    borderColor={isSelected ? '#155DFC' : 'transparent'}
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.05,
                      shadowRadius: 2,
                      elevation: 1,
                    }}
                  >
                    <Text fontSize={40} mb="$2">{sport.emoji}</Text>
                    <Text
                      color="#0A0A0A"
                      fontWeight="$medium"
                      size="sm"
                      textAlign="center"
                    >
                      {sport.name}
                    </Text>
                  </Pressable>
                </Box>
              );
            })}
          </Box>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}