/// <reference types="vitest/globals" />
import { convexTest } from "convex-test";
import schema from "./schema";
import { api } from "./_generated/api";

describe("Convex Storage", () => {
  test("generateUploadUrl returns a URL for authenticated user", async () => {
    const t = convexTest(schema);
    
    // Create user
    const userId = await t.mutation(api.auth.signUp, {
      email: "storage@example.com",
      password: "password123",
    });

    const tAuth = t.withIdentity({ subject: userId });

    const url = await tAuth.mutation(api.storage.generateUploadUrl);
    
    // convex-test returns a mock URL by default
    expect(url).toBeDefined();
    expect(typeof url).toBe("string");
  });

  test("generateUploadUrl fails for unauthenticated user", async () => {
    const t = convexTest(schema);
    
    await expect(
      t.mutation(api.storage.generateUploadUrl)
    ).rejects.toThrow("Not authenticated");
  });

  test("getVideoUrl returns a URL", async () => {
    const t = convexTest(schema);
    // Store something to get a valid storage ID
    const storageId = await t.run(async (ctx) => {
      return await ctx.storage.store(new Blob(["test"]));
    });
    
    const url = await t.query(api.storage.getVideoUrl, { storageId });
    expect(url).toBeDefined();
  });
});