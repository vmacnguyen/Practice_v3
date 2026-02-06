import { useConvexAuth, useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../convex/_generated/api";
import { ENV } from "../config/env";

export function useAuth() {
  const { isAuthenticated: realIsAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  const user = useQuery(api.auth.getCurrentUser);

  // Dev bypass logic
  const isBypassEnabled = ENV.DEV_BYPASS_AUTH;
  const isAuthenticated = isBypassEnabled || realIsAuthenticated;

  // Debug logging
  // console.log("[useAuth] Hook State:", { isAuthenticated, isLoading, userLoaded: !!user, isBypassEnabled });

  return {
    isAuthenticated,
    isLoading,
    signIn,
    signOut,
    user,
  };
}
