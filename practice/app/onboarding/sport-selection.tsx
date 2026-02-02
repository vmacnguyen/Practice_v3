import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useMutation } from 'convex/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../convex/_generated/api';
import { SPORTS_LIST } from '../../config/sports-config';
import {
  Box,
  VStack,
  Text,
  Button,
  ButtonText,
  Heading,
  HStack,
  Pressable,
  Icon,
} from '@gluestack-ui/themed';
import {
  Dumbbell,
  Activity,
  Target,
  Wind,
  Snowflake,
  Trophy,
  Medal,
  CheckCircle
} from 'lucide-react-native';

// Icon mapping helper
const getSportIcon = (iconName: string) => {
  switch (iconName) {
    case 'tennis': return Activity; // Fallback
    case 'volleyball': return Activity; // Fallback
    case 'racquet': return Activity; // Fallback for Pickleball
    case 'badminton': return Activity; // Fallback
    case 'golf': return Target;
    case 'dumbbell': return Dumbbell;
    case 'ballet': return Wind; // Abstract
    case 'snowboard': return Snowflake;
    default: return Trophy;
  }
};

export default function SportSelectionScreen() {
  const router = useRouter();
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updatePreferredSport = useMutation(api.auth.updatePreferredSport);

  const handleContinue = async () => {
    if (!selectedSport) return;

    try {
      setIsSubmitting(true);
      await updatePreferredSport({ sport: selectedSport });
      router.push('/onboarding/tutorial');
    } catch (error) {
      console.error('Failed to update sport:', error);
      // Could add toast here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box flex={1} bg="$backgroundLight0">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack space="xl" flex={1} px="$4" py="$6">
        <VStack space="xs">
          <Heading size="xl" color="$textLight900">
            What do you practice?
          </Heading>
          <Text color="$textLight500" size="md">
            Select your primary sport to get personalized feedback.
          </Text>
        </VStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space="md" pb="$24">
            {SPORTS_LIST.map((sport) => {
              const isSelected = selectedSport === sport.id;
              const SportIcon = getSportIcon(sport.icon);

              return (
                <Pressable
                  key={sport.id}
                  onPress={() => setSelectedSport(sport.id)}
                  borderWidth={1}
                  borderColor={isSelected ? '$primary500' : '$borderLight200'}
                  bg={isSelected ? '$primary50' : '$white'}
                  rounded="$lg"
                  p="$4"
                  $active-opacity={0.8}
                >
                  <HStack justifyContent="space-between" alignItems="center">
                    <HStack space="md" alignItems="center">
                      <Box
                        bg={isSelected ? '$primary100' : '$backgroundLight100'}
                        p="$2.5"
                        rounded="$full"
                      >
                        <Icon
                          as={SportIcon}
                          size="xl"
                          color={isSelected ? '$primary600' : '$textLight500'}
                        />
                      </Box>
                      <Text
                        fontWeight={isSelected ? '$bold' : '$medium'}
                        color={isSelected ? '$textLight900' : '$textLight700'}
                        size="lg"
                      >
                        {sport.name}
                      </Text>
                    </HStack>

                    {isSelected && (
                      <Icon as={CheckCircle} color="$primary500" size="xl" />
                    )}
                  </HStack>
                </Pressable>
              );
            })}
          </VStack>
        </ScrollView>

          <Box
            p="$4"
            bg="$backgroundLight0"
            borderTopWidth={1}
            borderTopColor="$borderLight100"
          >
            <Button
              size="lg"
              isDisabled={!selectedSport || isSubmitting}
              onPress={handleContinue}
              bg="$primary500"
              $active-bg="$primary600"
              $disabled-bg="$primary200"
            >
              {isSubmitting ? (
                <ButtonText>Saving...</ButtonText>
              ) : (
                <ButtonText>Continue</ButtonText>
              )}
            </Button>
          </Box>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}
