import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from 'convex/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../../convex/_generated/api';
import { useAuth } from '../../../hooks/useAuth';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  Spinner,
} from '@gluestack-ui/themed';
import { Plus, CheckCircle, AlertCircle, ChevronDown, Play } from 'lucide-react-native';
import { SPORTS_CONFIG } from '../../../config/sports-config';
import { formatDate } from '../../../utils/formatting';

export default function HomeScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const stats = useQuery(api.analyses.getUserStats);
  
  const userInitials = user?.email ? user.email.substring(0, 2).toUpperCase() : 'JD';

  if (stats === undefined) {
    return (
      <Box flex={1} bg="#F9FAFB" justifyContent="center" alignItems="center">
        <Spinner size="large" color="#155DFC" />
      </Box>
    );
  }

  return (
    <Box flex={1} bg="#F9FAFB">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          {/* Header */}
          <Box bg="white" pt="$4" px="$6" pb="$8">
            <HStack justifyContent="space-between" alignItems="flex-start" mb="$3">
              <Heading size="3xl" color="#0A0A0A" fontWeight="$bold">
                Welcome back!
              </Heading>
              <TouchableOpacity onPress={() => router.push('/profile')}>
                <LinearGradient
                  colors={['#2B7FFF', '#9810FA']}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text color="white" fontWeight="$bold" size="sm">
                    {userInitials}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </HStack>
          </Box>

          <Box px="$6" mt={-16}>
            {/* CTA Button */}
            <TouchableOpacity
              onPress={() => router.push('/(main)/(tabs)/practice')}
              style={{ marginBottom: 32 }}
            >
              <LinearGradient
                colors={['#155DFC', '#9810FA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  paddingVertical: 16,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 4,
                }}
              >
                <Text color="white" fontWeight="$medium" size="md">
                  Add a practice session
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Stats Grid */}
            <HStack space="md" mb="$8">
              <Box
                bg="white"
                flex={1}
                rounded="$2xl"
                p="$4"
                alignItems="center"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <Text color="#155DFC" fontWeight="$bold" size="2xl" mb="$1">
                  {stats?.totalSessions || 0}
                </Text>
                <Text color="#4A5565" size="xs">Total Sessions</Text>
              </Box>
              <Box
                bg="white"
                flex={1}
                rounded="$2xl"
                p="$4"
                alignItems="center"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <Text color="#9810FA" fontWeight="$bold" size="2xl" mb="$1">
                  {stats?.totalMinutes || 0}m
                </Text>
                <Text color="#4A5565" size="xs">Total Time</Text>
              </Box>
            </HStack>

            {/* Latest Analysis */}
            <Heading size="md" color="#0A0A0A" mb="$4">
              Your Last Practice Session
            </Heading>

            {stats?.recentSession ? (
              <Box
                bg="white"
                rounded="$2xl"
                overflow="hidden"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.05,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                {/* Session Info Header */}
                <Box px="$5" pt="$4" pb="$2">
                  <VStack space="xs">
                    <Heading size="sm" color="#0A0A0A">
                      {stats.recentSession.sport.charAt(0).toUpperCase() + stats.recentSession.sport.slice(1)} Session {stats.recentSession.sessionNumber}
                    </Heading>
                    <Text color="#6A7282" size="xs">
                      {formatDate(stats.recentSession.createdAt)}
                    </Text>
                  </VStack>
                </Box>

                {/* Thumbnail */}
                <TouchableOpacity onPress={() => {
                  if (stats.recentSession?._id) {
                    router.push(`/analysis/${stats.recentSession._id}`);
                  }
                }}>
                  <Box h={192} bg="#E5E7EB" justifyContent="center" alignItems="center">
                    {stats.recentSession.thumbnailUrl ? (
                      <Image 
                        source={{ uri: stats.recentSession.thumbnailUrl }}
                        style={{ position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover' }}
                      />
                    ) : (
                      /* Placeholder gradient */
                      <LinearGradient
                        colors={['#E5E7EB', '#D1D5DC']}
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                      />
                    )}
                    <Box
                      bg="rgba(255,255,255,0.3)"
                      rounded="$full"
                      width={64}
                      height={64}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Icon as={Play} color="white" size="xl" fill="white" /> 
                    </Box>
                  </Box>
                </TouchableOpacity>

                {/* Content */}
                <Box p="$5">
                  <Box mb="$6">
                    <HStack alignItems="center" space="xs" mb="$3">
                      <Box bg="#DCFCE7" rounded="$full" p="$0.5">
                        <Icon as={CheckCircle} color="#00A63E" size="xs" />
                      </Box>
                      <Heading size="md" color="#0A0A0A">What went well</Heading>
                    </HStack>
                    <Text color="#364153" size="sm" ml="$0">
                      • {stats.recentSession.overallFeedback ? stats.recentSession.overallFeedback.split('.')[0] + '...' : 'Analysis completed'}
                    </Text>
                  </Box>

                  <TouchableOpacity
                    onPress={() => {
                      if (stats.recentSession?._id) {
                        router.push(`/analysis/${stats.recentSession._id}`);
                      }
                    }}
                  >
                    <Box
                      bg="#155DFC"
                      py="$3"
                      rounded="$lg"
                      alignItems="center"
                    >
                      <Text color="white" fontWeight="$medium" size="sm">
                        View Full Analysis →
                      </Text>
                    </Box>
                  </TouchableOpacity>
                </Box>
              </Box>
            ) : (
              <Box bg="white" p="$6" rounded="$2xl" alignItems="center">
                <Text color="#4A5565">No sessions yet. Start your first practice!</Text>
              </Box>
            )}
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}