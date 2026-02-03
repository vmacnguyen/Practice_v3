import { Stack } from 'expo-router';
import { ConvexReactClient } from 'convex/react';
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { ENV } from '../config/env';
import { secureStorage } from '../utils/storage';

const convex = new ConvexReactClient(ENV.CONVEX_URL as string, {
  verbose: true,
});

export default function RootLayout() {
  return (
    <ConvexAuthProvider client={convex} storage={secureStorage}>
      <GluestackUIProvider config={config}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="(main)" />
        </Stack>
      </GluestackUIProvider>
    </ConvexAuthProvider>
  );
}
