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

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn, signOut } = useAuth();
  const router = useRouter();
  const toast = useToast();

  // Clear any stale auth state on mount
  React.useEffect(() => {
    void signOut();
  }, []);

  const handleSignup = async () => {
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await signIn("password", { email, password, flow: "signUp" });
      router.replace('/onboarding');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
      toast.show({
        placement: "top",
        render: ({ id }) => {
          return (
            <Toast nativeID={"toast-" + id} action="error" variant="accent">
              <VStack space="xs">
                <ToastTitle>Signup Failed</ToastTitle>
                <ToastDescription>{err.message || 'Could not create account.'}</ToastDescription>
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
          <Text fontSize={40} mb="$2">🚀</Text>
          <Heading size="3xl" color="#0A0A0A" mb="$2">Create Account</Heading>
          <Text size="md" color="#4A5565" textAlign="center">
            Join Practice to improve your skills with AI
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
                placeholder="Create a password"
                color="#0A0A0A"
              />
            </Input>
          </FormControl>

          <FormControl isInvalid={!!error}>
            <FormControlLabel mb="$1">
              <FormControlLabelText color="#364153">Confirm Password</FormControlLabelText>
            </FormControlLabel>
            <Input size="xl" bg="white" borderWidth={1} borderColor="#E5E7EB" rounded="$lg">
              <InputField
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="Confirm password"
                color="#0A0A0A"
              />
            </Input>
          </FormControl>
        </VStack>

        {error ? <Text color="$red500" size="sm" textAlign="center">{error}</Text> : null}

        <TouchableOpacity onPress={handleSignup} disabled={loading}>
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
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Box flexDirection="row" justifyContent="center" mt="$4">
          <Text size="md" color="#4A5565">Already have an account? </Text>
          <Link href="/(auth)/login" asChild>
            <Text size="md" color="#155DFC" fontWeight="$bold">
              Sign In
            </Text>
          </Link>
        </Box>
      </VStack>
    </Center>
  );
}