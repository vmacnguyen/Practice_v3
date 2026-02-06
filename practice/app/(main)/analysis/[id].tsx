import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery, useMutation } from 'convex/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  ButtonText,
  ButtonIcon,
  Spinner,
  Icon,
} from '@gluestack-ui/themed';
import { ChevronLeft, RefreshCw, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react-native';
import VideoPlayer from '../../../components/video/VideoPlayer';
import { formatDate } from '../../../utils/formatting';

export default function AnalysisDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const analysis = useQuery(api.analyses.getAnalysis, { 
    analysisId: id as Id<"analyses"> 
  });
  
  const retryAnalysis = useMutation(api.analyses.retryAnalysis);
  
  const [showLongProcessingMessage, setShowLongProcessingMessage] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (analysis && (analysis.status === 'pending' || analysis.status === 'processing')) {
      timer = setTimeout(() => {
        setShowLongProcessingMessage(true);
      }, 15000);
    } else {
      setShowLongProcessingMessage(false);
    }
    return () => clearTimeout(timer);
  }, [analysis?.status]);

  const handleRetry = async () => {
    if (!analysis) return;
    try {
      setIsRetrying(true);
      await retryAnalysis({ analysisId: analysis._id });
    } catch (error) {
      console.error('Retry failed:', error);
    } finally {
      setIsRetrying(false);
    }
  };

  if (analysis === undefined) {
     return (
      <Box flex={1} bg="#F9FAFB" justifyContent="center" alignItems="center">
        <Spinner size="large" color="#155DFC" />
      </Box>
    );
  }

  const isProcessing = analysis.status === 'pending' || analysis.status === 'processing';
  const isFailed = analysis.status === 'failed';
  const isCompleted = analysis.status === 'completed';

  return (
    <Box flex={1} bg="#F9FAFB">
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <Box px="$6" pt="$2" pb="$4" bg="white" borderBottomWidth={1} borderBottomColor="#F3F4F6">
          <TouchableOpacity onPress={() => router.push('/history')} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <Icon as={ChevronLeft} color="#155DFC" size="md" />
            <Text color="#155DFC" fontWeight="$medium" ml="$1">History</Text>
          </TouchableOpacity>
          
          <Heading size="xl" color="#0A0A0A" mb="$1">
            Session {analysis.sessionNumber}
          </Heading>
          <Text color="#4A5565" size="sm">
            {formatDate(analysis.createdAt)} • {analysis.sport.charAt(0).toUpperCase() + analysis.sport.slice(1)}
          </Text>
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Video Player Card */}
          <Box p="$6">
            <Box rounded="$2xl" overflow="hidden" shadowColor="#000" shadowOffset={{width:0, height:4}} shadowOpacity={0.1} shadowRadius={8} elevation={4} bg="black" height={220}>
               <VideoPlayer videoUrl={analysis.videoUrl} />
            </Box>
          </Box>

          <VStack px="$6" space="lg" pb="$12">
            {/* Status Section */}
            {isProcessing && (
              <Box 
                bg="#F3F4F6" 
                p="$6" 
                rounded="$2xl" 
                alignItems="center" 
              >
                <Spinner size="large" color="#155DFC" mb="$4" />
                <Heading size="md" color="#0A0A0A" mb="$2">Analyzing your video...</Heading>
                <Text textAlign="center" color="#4A5565" size="sm">
                   Our AI is identifying key actions and looking for improvements.
                </Text>
                {showLongProcessingMessage && (
                  <Text textAlign="center" color="#6A7282" size="xs" mt="$4">
                    This might take up to a minute.
                  </Text>
                )}
              </Box>
            )}

            {isFailed && (
              <Box 
                bg="#FEF2F2" 
                p="$6" 
                rounded="$2xl" 
                alignItems="center"
                borderWidth={1}
                borderColor="#FECACA"
              >
                <Icon as={AlertTriangle} size="xl" color="#DC2626" mb="$4" />
                <Heading size="md" color="#991B1B" mb="$2">Analysis Failed</Heading>
                <Text textAlign="center" color="#7F1D1D" mb="$4" size="sm">
                  {analysis.errorMessage || "We couldn't analyze this video. Please try again."}
                </Text>
                <Button 
                  action="negative" 
                  onPress={handleRetry}
                  isDisabled={isRetrying}
                  bg="#DC2626"
                >
                  <ButtonIcon as={RefreshCw} mr="$2" />
                  <ButtonText>{isRetrying ? 'Retrying...' : 'Retry Analysis'}</ButtonText>
                </Button>
              </Box>
            )}

            {isCompleted && (
              <VStack space="md">
                {/* Overall Feedback (Green / Went Well) */}
                <Box bg="white" rounded="$2xl" p="$5" shadowColor="#000" shadowOffset={{width:0, height:1}} shadowOpacity={0.05} shadowRadius={2} elevation={1}>
                  <HStack alignItems="center" space="xs" mb="$3">
                    <Box bg="#DCFCE7" rounded="$full" p="$1.5">
                      <Icon as={CheckCircle} color="#00A63E" size="sm" />
                    </Box>
                    <Heading size="md" color="#0A0A0A">Analysis Summary</Heading>
                  </HStack>
                  <Text color="#364153" lineHeight="$md" size="sm">
                    {analysis.overallFeedback}
                  </Text>
                </Box>

                {/* Identified Actions (Orange / Improvements) */}
                <Box bg="white" rounded="$2xl" p="$5" shadowColor="#000" shadowOffset={{width:0, height:1}} shadowOpacity={0.05} shadowRadius={2} elevation={1}>
                  <HStack alignItems="center" space="xs" mb="$4">
                    <Box bg="#FFEDD4" rounded="$full" p="$1.5">
                      <Icon as={AlertCircle} color="#F54900" size="sm" />
                    </Box>
                    <Heading size="md" color="#0A0A0A">Key Actions & Tips</Heading>
                  </HStack>
                  
                  {analysis.identifiedActions.length === 0 ? (
                    <Text color="#4A5565" fontStyle="italic" size="sm">
                      No specific actions were identified in this video.
                    </Text>
                  ) : (
                    <VStack space="md">
                      {analysis.identifiedActions.map((action, index) => (
                        <Box key={index} borderLeftWidth={2} borderLeftColor="#F54900" pl="$3">
                          <Text color="#0A0A0A" fontWeight="$medium" mb="$1">
                            {action.action} {action.timestamp ? `(${action.timestamp})` : ''}
                          </Text>
                          <Text color="#4A5565" size="sm" mb="$2">
                            {action.analysis}
                          </Text>
                          {action.practiceTips.map((tip, i) => (
                             <HStack key={i} alignItems="flex-start" space="xs" mt="$1">
                               <Text color="#F54900" fontSize="$xs" mt="$1">•</Text>
                               <Text color="#364153" size="sm" flex={1}>{tip}</Text>
                             </HStack>
                          ))}
                        </Box>
                      ))}
                    </VStack>
                  )}
                </Box>
              </VStack>
            )}
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
}