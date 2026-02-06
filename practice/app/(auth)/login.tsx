import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { LinearGradient } from 'expo-linear-gradient';
import {
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
  Text,
  Heading,
  Center,
  Box,
  Toast,
  useToast,
  ToastTitle,
  ToastDescription,
} from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await signIn("password", { email, password, flow: "signIn" });
      router.replace('/(main)/(tabs)');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Login Failed</ToastTitle>
                <ToastDescription>{err.message || 'Please check your credentials.'}</ToastDescription>
              </VStack>
            </Toast>
          )
        }
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center flex={1} px="$6" bg="#F9FAFB">
      <VStack space="lg" w="$full">
        <Box alignItems="center" mb="$4">
          <Text fontSize={40} mb="$2">🎾</Text>
          <Heading size="3xl" color="#0A0A0A" mb="$2">Welcome Back</Heading>
          <Text size="md" color="#4A5565" textAlign="center">
            Sign in to continue your practice journey
          </Text>
        </Box>

        <VStack space="md">
          <FormControl isInvalid={!!error}>
            <FormControlLabel mb="$1">
              <FormControlLabelText color="#364153">Email</FormControlLabelText>
            </FormControlLabel>
            <Input size="xl" bg="white" borderWidth={1} borderColor="#E5E7EB" rounded="$lg">
              <InputField
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="your.email@example.com"
                color="#0A0A0A"
              />
            </Input>
          </FormControl>

          <FormControl isInvalid={!!error}>
            <FormControlLabel mb="$1">
              <FormControlLabelText color="#364153">Password</FormControlLabelText>
            </FormControlLabel>
            <Input size="xl" bg="white" borderWidth={1} borderColor="#E5E7EB" rounded="$lg">
              <InputField
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Enter your password"
                color="#0A0A0A"
              />
            </Input>
          </FormControl>
        </VStack>

        {error ? <Text color="$red500" size="sm" textAlign="center">{error}</Text> : null}

        <TouchableOpacity onPress={handleLogin} disabled={loading}>
          <LinearGradient
            colors={['#155DFC', '#9810FA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              paddingVertical: 16,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: loading ? 0.7 : 1,
            }}
          >
            <Text color="white" fontWeight="$bold" size="lg">
              {loading ? 'Signing In...' : 'Sign In'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Box flexDirection="row" justifyContent="center" mt="$4">
          <Text size="md" color="#4A5565">Don't have an account? </Text>
          <Link href="/(auth)/signup" asChild>
            <Text size="md" color="#155DFC" fontWeight="$bold">
              Sign Up
            </Text>
          </Link>
        </Box>
      </VStack>
    </Center>
  );
}