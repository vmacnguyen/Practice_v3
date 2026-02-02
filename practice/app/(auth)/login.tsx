import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
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
    <Center flex={1} px="$4" bg="$white">
      <VStack space="md" w="$full" maxW="$96">
        <Heading size="xl">Welcome Back</Heading>
        <Text size="sm" color="$coolGray600">
          Sign in to continue your practice journey.
        </Text>

        <FormControl isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Enter your email"
            />
          </Input>
        </FormControl>

        <FormControl isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Enter your password"
            />
          </Input>
        </FormControl>

        {error ? <Text color="$red500" size="sm">{error}</Text> : null}

        <Button onPress={handleLogin} isDisabled={loading}>
          {loading ? <ButtonText>Signing In...</ButtonText> : <ButtonText>Sign In</ButtonText>}
        </Button>

        <Box flexDirection="row" justifyContent="center" mt="$4">
          <Text size="sm">Don't have an account? </Text>
          <Link href="/(auth)/signup" asChild>
            <Text size="sm" color="$primary500" fontWeight="$bold">
              Sign Up
            </Text>
          </Link>
        </Box>
      </VStack>
    </Center>
  );
}
