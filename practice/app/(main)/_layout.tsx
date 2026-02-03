import React from 'react';
import { Stack, Redirect } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { Box, Spinner } from '@gluestack-ui/themed';

export default function MainLayout() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight0">
        <Spinner size="large" color="$primary500" />
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  // Optional: Redirect to onboarding if not completed (can also be done in index)
  // if (user && !user.onboardingCompleted) {
  //   return <Redirect href="/onboarding" />;
  // }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="analysis/[id]" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}