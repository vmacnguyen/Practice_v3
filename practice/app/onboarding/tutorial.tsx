import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useMutation } from 'convex/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../convex/_generated/api';
import { useAuth } from '../../hooks/useAuth';
import {
  Box,
  VStack,
  Text,
  Button,
  ButtonText,
  Heading,
  Icon,
  ButtonIcon,
  HStack,
  Center,
} from '@gluestack-ui/themed';
import { Video, Brain, ArrowRight, Check } from 'lucide-react-native';

const STEPS = [
  {
    id: 1,
    title: 'Record or Upload',
    description: 'Capture your practice session directly in the app or upload an existing video from your gallery.',
    icon: Video,
  },
  {
    id: 2,
    title: 'Get AI Feedback',
    description: 'Our AI analyzes your form, identifies key actions, and provides personalized tips for improvement.',
    icon: Brain,
  },
];

export default function TutorialScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const completeOnboarding = useMutation(api.auth.completeOnboarding);

  const handleNext = async () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      await handleComplete();
    }
  };

  const handleComplete = async () => {
    if (isLoading) return;
    
    if (!isAuthenticated) {
      console.warn("User not authenticated, cannot complete onboarding");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await completeOnboarding();
      router.replace('/(main)/(tabs)');
    } catch (error) {
      console.error('Failed to complete onboarding:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const step = STEPS[currentStep];
  const StepIcon = step.icon;

  return (
    <Box flex={1} bg="$backgroundLight0">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack flex={1} justifyContent="space-between" p="$6" pb="$12">
        <Box flex={1} justifyContent="center" alignItems="center">
          <Center
            bg="$primary100"
            w={120}
            h={120}
            rounded="$full"
            mb="$8"
          >
            <Icon as={StepIcon} size="xl" color="$primary600" />
          </Center>

          <Heading size="2xl" textAlign="center" mb="$4" color="$textLight900">
            {step.title}
          </Heading>

          <Text textAlign="center" color="$textLight500" size="lg" px="$4">
            {step.description}
          </Text>
        </Box>

        <VStack space="xl">
          {/* Step Indicators */}
          <HStack space="sm" justifyContent="center">
            {STEPS.map((_, index) => (
              <Box
                key={index}
                w="$2.5"
                h="$2.5"
                rounded="$full"
                bg={currentStep === index ? '$primary500' : '$borderLight300'}
              />
            ))}
          </HStack>

          <Button
            size="lg"
            onPress={handleNext}
            isDisabled={isSubmitting}
            bg="$primary500"
            $active-bg="$primary600"
          >
            <ButtonText>
              {currentStep === STEPS.length - 1 ? 'Get Started' : 'Next'}
            </ButtonText>
            <ButtonIcon
              as={currentStep === STEPS.length - 1 ? Check : ArrowRight}
              color="$white"
              ml="$2"
            />
          </Button>
        </VStack>
        </VStack>
      </SafeAreaView>
    </Box>
  );
}
