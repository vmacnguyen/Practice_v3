import React, { useEffect } from 'react';
import { Redirect, useRouter } from 'expo-router';
import { useAuth } from '../hooks/useAuth';
import { useConvex } from 'convex/react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { secureStorage } from '../utils/storage';
import { ENV } from '../config/env';

// Helper to decode JWT parts without external libs
const decodeJwt = (token: string) => {
  try {
    const [headerB64, payloadBase64] = token.split('.');
    
    const decodePart = (b64: string) => {
        const base64 = b64.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    };

    return {
        header: decodePart(headerB64),
        payload: decodePart(payloadBase64)
    };
  } catch (e) {
    return null;
  }
};

export default function Index() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const convex = useConvex();
  const router = useRouter();

  useEffect(() => {
    // DEBUG: Diagnose Auth Issues via HTTP Endpoint AND Manual SetAuth
    const checkToken = async () => {
      try {
        const logKey = `__convexAuthJWT_${ENV.CONVEX_URL.replace(/[^a-zA-Z0-9]/g, '')}`;
        const token = await secureStorage.getItem(logKey);
        
        if (!token) {
          console.log("[DEBUG] No token found in storage.");
          return;
        }

        const decoded = decodeJwt(token);
        console.log("---------------------------------------------------");
        console.log("[DEBUG] JWT Header:", JSON.stringify(decoded?.header, null, 2));
        console.log("[DEBUG] JWT Payload:", JSON.stringify(decoded?.payload, null, 2));
        console.log("---------------------------------------------------");

        console.log("[DEBUG] Manual setAuth trigger...");
        convex.setAuth(() => Promise.resolve(token));

        console.log("[DEBUG] Sending token to Debug Endpoint...");
        // HTTP Actions are hosted on the Site URL
        const siteUrl = process.env.EXPO_PUBLIC_CONVEX_SITE_URL;
        const response = await fetch(`${siteUrl}/debug-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        console.log("---------------------------------------------------");
        console.log("[DEBUG] Server Auth Diagnosis:", JSON.stringify(result, null, 2));
        console.log("[DEBUG] Client Time:", Date.now());
        console.log("---------------------------------------------------");
      } catch (error) {
        console.error("[DEBUG] Diagnosis Failed:", error);
      }
    };
    checkToken();
  }, [convex]);

  if (isLoading) {
    return <LoadingSpinner text="Starting Practice..." />;
  }

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  // If user exists but hasn't completed onboarding/sport selection
  if (user && !user.preferredSport) {
    return <Redirect href="/onboarding/sport-selection" />;
  }
  
  if (user && !user.onboardingCompleted) {
    return <Redirect href="/onboarding/tutorial" />;
  }

  return <Redirect href="/(main)/(tabs)" />;
}
