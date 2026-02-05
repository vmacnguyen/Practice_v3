import React, { useCallback } from 'react';
import { FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { usePaginatedQuery, useQuery } from 'convex/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../../convex/_generated/api';
import { useAuth } from '../../../hooks/useAuth';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Box,
  VStack,
  Text,
  Heading,
  Spinner,
  Button,
  ButtonText,
  Center,
  Icon,
  HStack,
} from '@gluestack-ui/themed';
import { Play } from 'lucide-react-native';
import { formatDateShort } from '../../../utils/formatting';

const ITEMS_PER_PAGE = 10;

export default function HistoryScreen() {
  const router = useRouter();
  const { user } = useAuth();
  
  const { results, status, loadMore, isLoading } = usePaginatedQuery(
    api.analyses.getAnalysisHistory,
    {},
    { initialNumItems: ITEMS_PER_PAGE }
  );

  const userInitials = user?.email ? user.email.substring(0, 2).toUpperCase() : 'JD';

  const handleLoadMore = useCallback(() => {
    if (status === 'CanLoadMore' && !isLoading) {
      loadMore(ITEMS_PER_PAGE);
    }
  }, [status, isLoading, loadMore]);

  const renderItem = ({ item }: { item: any }) => {
    // Capitalize sport
    const sportName = item.sport.charAt(0).toUpperCase() + item.sport.slice(1);
    
    return (
      <TouchableOpacity 
        onPress={() => router.push(`/analysis/${item._id}`)}
        activeOpacity={0.9}
      >
        <Box 
          bg="white" 
          rounded="$2xl" 
          overflow="hidden" 
          mb="$4" 
          borderWidth={1} 
          borderColor="rgba(0,0,0,0.05)"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
        >
          {/* Thumbnail Area */}
          <Box h={180} bg="#F3F4F6" position="relative">
            {item.thumbnailUrl ? (
              <Image 
                source={{ uri: item.thumbnailUrl }}
                style={{ position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover' }}
              />
            ) : (
              /* Gradient Overlay Placeholder since we don't have real thumbnails yet */
              <LinearGradient
                colors={['#F3F4F6', '#E5E7EB']}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              />
            )}
            
            {/* Play Button Overlay */}
            <Center position="absolute" w="100%" h="100%">
              <Box 
                bg="rgba(255,255,255,0.9)" 
                rounded="$full" 
                w={48} 
                h={48} 
                justifyContent="center" 
                alignItems="center"
                pl="$1"
              >
                <Icon as={Play} size="md" color="#101828" fill="#101828" />
              </Box>
            </Center>

            {/* Duration Label - Placeholder */}
            <Box 
              position="absolute" 
              bottom="$2" 
              right="$2" 
              bg="rgba(0,0,0,0.7)" 
              px="$2" 
              py="$1" 
              rounded="$sm"
            >
              <Text color="white" size="xs" fontWeight="$medium">
                0:45
              </Text>
            </Box>
          </Box>

          {/* Content Area */}
          <VStack p="$4" space="xs">
            <Heading size="md" color="#0A0A0A" numberOfLines={1}>
              {sportName} Session
            </Heading>
            <Text color="#6A7282" size="sm">
              {formatDateShort(item.createdAt)} • Session {item.sessionNumber}
            </Text>
            
            {/* Status/Badges */}
            <HStack space="xs" mt="$2">
              {item.status === 'completed' && (
                <Box bg="#F3F4F6" px="$2" py="$1" rounded="$md">
                  <Text size="xs" color="#364153" fontWeight="$medium">
                    Analysis Ready
                  </Text>
                </Box>
              )}
              {item.status === 'processing' && (
                <Box bg="#DBEAFE" px="$2" py="$1" rounded="$md">
                  <Text size="xs" color="#155DFC" fontWeight="$medium">
                    Processing
                  </Text>
                </Box>
              )}
              {item.status === 'failed' && (
                <Box bg="#FEE2E2" px="$2" py="$1" rounded="$md">
                  <Text size="xs" color="#DC2626" fontWeight="$medium">
                    Failed
                  </Text>
                </Box>
              )}
            </HStack>
          </VStack>
        </Box>
      </TouchableOpacity>
    );
  };

  const renderEmptyState = () => (
    <Center flex={1} py="$20">
      <Box bg="#F3F4F6" p="$6" rounded="$full" mb="$6">
        <Icon as={Play} size="xl" color="#9CA3AF" />
      </Box>
      <Heading size="xl" color="#0A0A0A" mb="$2" textAlign="center">
        No History Yet
      </Heading>
      <Text color="#6A7282" textAlign="center" mb="$8" px="$8">
        Your practice sessions will appear here once you've recorded and analyzed them.
      </Text>
      <Button
        size="lg"
        bg="#155DFC"
        rounded="$lg"
        onPress={() => router.push('/(main)/(tabs)/practice')}
      >
        <ButtonText fontWeight="$medium">Start First Session</ButtonText>
      </Button>
    </Center>
  );

  const renderFooter = () => {
    if (status === 'LoadingMore') {
      return (
        <Box py="$4" justifyContent="center" alignItems="center">
          <Spinner size="small" color="#155DFC" />
        </Box>
      );
    }
    return <Box h={100} />; // Bottom spacer for tab bar
  };

  if (status === 'LoadingFirstPage') {
    return (
      <Box flex={1} bg="#F9FAFB" justifyContent="center" alignItems="center">
        <Spinner size="large" color="#155DFC" />
      </Box>
    );
  }

  return (
    <Box flex={1} bg="#F9FAFB">
      <SafeAreaView style={{ flex: 1 }}>
        <VStack flex={1}>
          {/* Header */}
          <Box px="$6" pt="$2" pb="$4" bg="white">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading size="3xl" color="#0A0A0A">History</Heading>
              <TouchableOpacity onPress={() => router.push('/profile')}>
                <LinearGradient
                  colors={['#2B7FFF', '#155DFC']}
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

          <FlatList
            data={results}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListEmptyComponent={renderEmptyState}
            ListFooterComponent={renderFooter}
            contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        </VStack>
      </SafeAreaView>
    </Box>
  );
}
