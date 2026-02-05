import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import { ConvexError, v } from "convex/values";
import { mutation, query, QueryCtx, MutationCtx } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Password],
  callbacks: {
    async afterAccountCreation(ctx, { newUserId }) {
      const identity = await ctx.auth.getUserIdentity();
      if (identity) {
         // Check if user already exists (shouldn't for new account, but safety)
         const existing = await ctx.db
            .query("users")
            .withIndex("by_email", (q) => q.eq("email", identity.email!))
            .first();
            
         if (!existing) {
             await ctx.db.insert("users", {
               email: identity.email!,
               onboardingCompleted: false,
               createdAt: Date.now(),
               updatedAt: Date.now(),
             });
         }
      }
    },
  },
});

/**
 * Helper to get the authenticated user ID, with an optional dev bypass.
 */
export async function getUserId(ctx: QueryCtx | MutationCtx) {
  const userId = await getAuthUserId(ctx);
  if (userId) return userId;

  // Check for dev bypass
  const bypassEnv = process.env.DEV_BYPASS_AUTH;
  // console.log("[Convex Auth] Checking bypass. Env:", bypassEnv);
  
  if (bypassEnv === "true") {
    const devUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", "vivien14@test.com"))
      .first();
    
    // console.log("[Convex Auth] Bypass user found:", devUser?._id);
    return devUser?._id ?? null;
  }

  return null;
}

// Debug query to inspect auth state
export const debugAuth = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    return {
      identity,
      authUserId: await getAuthUserId(ctx),
      bypassEnabled: process.env.DEV_BYPASS_AUTH === "true",
    };
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getUserId(ctx);
    if (userId) {
      return await ctx.db.get(userId);
    }

    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return null;
    }

    // FALLBACK: User ID mapping failed, but identity exists.
    // This happens if the 'users' profile is missing or ID is mismatched.
    console.log("[Convex Auth] Mapping failed for identity:", identity.email);
    
    // Find by email instead
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", identity.email!))
      .first();

    return user;
  },
});

export const updatePreferredSport = mutation({

  args: {

    sport: v.string(),

  },

  handler: async (ctx, args) => {

    const userId = await getUserId(ctx);

    console.log("[Convex Auth] updatePreferredSport called. Auth ID:", userId);

    

    if (!userId) throw new ConvexError("Not authenticated");



    await ctx.db.patch(userId, {

      preferredSport: args.sport,

      updatedAt: Date.now(),

    });

  },

});



export const completeOnboarding = mutation({

  args: {},

  handler: async (ctx) => {

    const userId = await getUserId(ctx);

    console.log("[Convex Auth] completeOnboarding called. Auth ID:", userId);



    if (!userId) throw new ConvexError("Not authenticated");



    await ctx.db.patch(userId, {

      onboardingCompleted: true,

      updatedAt: Date.now(),

    });

  },

});
