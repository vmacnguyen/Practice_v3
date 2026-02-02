import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import {
  VStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
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

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleSignup = async () => {
    setError('');

    // Validation
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
      // Flow: 'signUp' triggers the signup flow in Convex Auth
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
    <Center flex={1} px="$4" bg="$white">
      <VStack space="md" w="$full" maxW="$96">
        <Heading size="xl">Create Account</Heading>
        <Text size="sm" color="$coolGray600">
          Join Practice to improve your skills with AI.
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
          <FormControlHelper>
            <FormControlHelperText>
              Must be at least 8 characters.
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <FormControl isInvalid={!!error}>
          <FormControlLabel>
            <FormControlLabelText>Confirm Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholder="Confirm your password"
            />
          </Input>
        </FormControl>

        {error ? <Text color="$red500" size="sm">{error}</Text> : null}

        <Button onPress={handleSignup} isDisabled={loading}>
          {loading ? <ButtonText>Creating Account...</ButtonText> : <ButtonText>Sign Up</ButtonText>}
        </Button>

        <Box flexDirection="row" justifyContent="center" mt="$4">
          <Text size="sm">Already have an account? </Text>
          <Link href="/(auth)/login" asChild>
            <Text size="sm" color="$primary500" fontWeight="$bold">
              Sign In
            </Text>
          </Link>
        </Box>
      </VStack>
    </Center>
  );
}
