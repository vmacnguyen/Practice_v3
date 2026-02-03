/// <reference types="jest" />
import { convexTest } from "convex-test";
import schema from "./schema";
import * as auth from "./auth";
import { api } from "./_generated/api";

describe("Convex Auth", () => {
  test("signUp creates a new user", async () => {
    const t = convexTest(schema);
    
    // Call the signUp mutation
    const userId = await t.mutation((api.auth as any).signUp, {
      email: "test@example.com",
      password: "password123",
    });

    // Verify user was created
    const user = await t.run(async (ctx) => {
      return await ctx.db.get(userId);
    });

    expect(user).toBeDefined();
    expect((user as any)?.email).toBe("test@example.com");
    expect((user as any)?.onboardingCompleted).toBe(false);
  });

  test("signUp fails if user already exists", async () => {
    const t = convexTest(schema);
    
    // First signup
    await t.mutation((api.auth as any).signUp, {
      email: "test@example.com",
      password: "password123",
    });

    // Second signup should fail
    await expect(
      t.mutation((api.auth as any).signUp, {
        email: "test@example.com",
        password: "password123",
      })
    ).rejects.toThrow("User already exists");
  });

  test("updatePreferredSport updates the user", async () => {
    const t = convexTest(schema);
    
    // Create user
    const userId = await t.mutation((api.auth as any).signUp, {
      email: "test@example.com",
      password: "password123",
    });

    // Fake authentication for subsequent calls
    const tAuth = t.withIdentity({ subject: userId });

    // Update sport
    await tAuth.mutation(api.auth.updatePreferredSport, {
      sport: "tennis",
    });

    // Verify update
    const user = await t.run(async (ctx) => {
      return await ctx.db.get(userId);
    });

    expect((user as any)?.preferredSport).toBe("tennis");
  });

  test("completeOnboarding updates status", async () => {
    const t = convexTest(schema);
    
    // Create user
    const userId = await t.mutation((api.auth as any).signUp, {
      email: "test@example.com",
      password: "password123",
    });

    const tAuth = t.withIdentity({ subject: userId });

    await tAuth.mutation(api.auth.completeOnboarding);

    const user = await t.run(async (ctx) => {
      return await ctx.db.get(userId);
    });

    expect((user as any)?.onboardingCompleted).toBe(true);
  });
});
