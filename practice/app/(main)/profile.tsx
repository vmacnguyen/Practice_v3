import React from 'react';
import { ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Button,
  ButtonText,
  Divider,
} from '@gluestack-ui/themed';
import {
  ChevronLeft,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Shield,
  HelpCircle,
} from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const stats = useQuery(api.analyses.getUserStats);

  const handleLogout = async () => {
    await signOut();
    router.replace('/(auth)/login');
  };

  const userInitials = user?.email
    ? user.email.substring(0, 2).toUpperCase()
    : 'JD';

  return (
    <Box flex={1} bg="#F9FAFB">
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <Box px="$6" pt="$2" pb="$4">
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}
          >
            <Icon as={ChevronLeft} color="#155DFC" size="md" />
            <Text color="#155DFC" fontWeight="$medium" ml="$1">
              Back
            </Text>
          </TouchableOpacity>

          <Heading size="3xl" color="#0A0A0A" mb="$2">
            Profile
          </Heading>
          <Text color="#4A5565" size="md">
            Manage your account and preferences
          </Text>
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space="xl" px="$6" pb="$10">
            {/* Profile Card */}
            <Box
              bg="white"
              rounded="$2xl"
              p="$6"
              shadowColor="#000"
              shadowOffset={{ width: 0, height: 1 }}
              shadowOpacity={0.05}
              shadowRadius={2}
              elevation={1}
            >
              <HStack space="md" alignItems="center">
                <LinearGradient
                  colors={['#2B7FFF', '#9810FA']}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text color="white" fontWeight="$bold" size="2xl">
                    {userInitials}
                  </Text>
                </LinearGradient>
                <VStack>
                  <Heading size="md" color="#0A0A0A">
                    {user?.email?.split('@')[0] || 'Athlete'}
                  </Heading>
                  <Text color="#4A5565" size="sm">
                    {user?.email}
                  </Text>
                </VStack>
              </HStack>
            </Box>

            {/* Log Out */}
            <TouchableOpacity onPress={handleLogout} style={{ marginTop: 24 }}>
              <HStack justifyContent="center" alignItems="center" space="sm">
                <Icon as={LogOut} color="#EF4444" size="md" />
                <Text color="#EF4444" fontWeight="$semibold">
                  Log Out
                </Text>
              </HStack>
            </TouchableOpacity>

            <Box alignItems="center" mt="$8" mb="$8">
              <Text color="#6A7282" size="sm">
                Version 1.0.0
              </Text>
            </Box>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}
