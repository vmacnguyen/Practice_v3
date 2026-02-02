import { useConvexAuth, useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../convex/_generated/api";

export function useAuth() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { signIn, signOut } = useAuthActions();
  const user = useQuery(api.auth.getCurrentUser);

  return {
    isAuthenticated,
    isLoading,
    signIn,
    signOut,
    user,
  };
}
