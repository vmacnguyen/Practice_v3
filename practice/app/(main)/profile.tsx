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
              <HStack space="md" alignItems="center" mb="$6">
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

              <Divider bg="#E5E7EB" mb="$4" />

              <HStack>
                <VStack flex={1} alignItems="center">
                  <Heading size="xl" color="#155DFC">
                    {stats?.totalSessions || 0}
                  </Heading>
                  <Text size="xs" color="#4A5565">
                    Sessions
                  </Text>
                </VStack>
                <VStack flex={1} alignItems="center">
                  <Heading size="xl" color="#00A63E">
                    {/* Placeholder for streak */}
                    12
                  </Heading>
                  <Text size="xs" color="#4A5565">
                    Day Streak
                  </Text>
                </VStack>
              </HStack>
            </Box>

            {/* Settings */}
            <VStack space="md">
              <Heading size="md" color="#0A0A0A" mb="$1">
                Settings
              </Heading>

              {/* Notifications */}
              <Box
                bg="white"
                rounded="$2xl"
                p="$4"
                shadowColor="#000"
                shadowOffset={{ width: 0, height: 1 }}
                shadowOpacity={0.05}
                shadowRadius={2}
                elevation={1}
              >
                <HStack alignItems="center" space="md">
                  <Box bg="#DBEAFE" p="$3" rounded="$full">
                    <Icon as={Bell} color="#155DFC" size="md" />
                  </Box>
                  <VStack flex={1}>
                    <Text fontWeight="$medium" color="#0A0A0A">
                      Notifications
                    </Text>
                    <Text size="sm" color="#4A5565">
                      Push notifications enabled
                    </Text>
                  </VStack>
                  <Switch
                    trackColor={{ false: '#767577', true: '#155DFC' }}
                    thumbColor={'#f4f3f4'}
                    value={true}
                  />
                </HStack>
              </Box>

              {/* Preferences */}
              <TouchableOpacity>
                <Box
                  bg="white"
                  rounded="$2xl"
                  p="$4"
                  shadowColor="#000"
                  shadowOffset={{ width: 0, height: 1 }}
                  shadowOpacity={0.05}
                  shadowRadius={2}
                  elevation={1}
                >
                  <HStack alignItems="center" space="md">
                    <Box bg="#F3E8FF" p="$3" rounded="$full">
                      <Icon as={Settings} color="#9810FA" size="md" />
                    </Box>
                    <VStack flex={1}>
                      <Text fontWeight="$medium" color="#0A0A0A">
                        Preferences
                      </Text>
                      <Text size="sm" color="#4A5565">
                        Customize your experience
                      </Text>
                    </VStack>
                    <Icon as={ChevronRight} color="#D1D5DC" size="md" />
                  </HStack>
                </Box>
              </TouchableOpacity>
            </VStack>

            {/* Help & Support */}
            <VStack space="md">
              <Heading size="md" color="#0A0A0A" mb="$1">
                Help & Support
              </Heading>

              <TouchableOpacity>
                <Box
                  bg="white"
                  rounded="$2xl"
                  p="$4"
                  shadowColor="#000"
                  shadowOffset={{ width: 0, height: 1 }}
                  shadowOpacity={0.05}
                  shadowRadius={2}
                  elevation={1}
                >
                  <HStack alignItems="center" space="md">
                    <Box bg="#DBEAFE" p="$3" rounded="$full">
                      <Icon as={HelpCircle} color="#155DFC" size="md" />
                    </Box>
                    <VStack flex={1}>
                      <Text fontWeight="$medium" color="#0A0A0A">
                        Get Assistance
                      </Text>
                    </VStack>
                    <Icon as={ChevronRight} color="#D1D5DC" size="md" />
                  </HStack>
                </Box>
              </TouchableOpacity>
            </VStack>

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
