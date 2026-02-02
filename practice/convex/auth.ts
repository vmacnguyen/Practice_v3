import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const signUp = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Convex Auth handles the actual auth
    // This creates the user profile record
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingUser) {
      throw new ConvexError("User already exists");
    }

    const now = Date.now();
    const userId = await ctx.db.insert("users", {
      email: args.email,
      onboardingCompleted: false,
      createdAt: now,
      updatedAt: now,
    });

    return userId;
  },
});

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    return await ctx.db.get(userId);
  },
});

export const updatePreferredSport = mutation({
  args: {
    sport: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
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
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    await ctx.db.patch(userId, {
      onboardingCompleted: true,
      updatedAt: Date.now(),
    });
  },
});
