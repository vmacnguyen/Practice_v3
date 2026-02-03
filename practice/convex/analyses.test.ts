/// <reference types="vitest/globals" />
import { convexTest } from "convex-test";
import schema from "./schema";
import { api } from "./_generated/api";
import { internal } from "./_generated/api";

describe("Convex Analyses", () => {
  const setup = async () => {
    const t = convexTest(schema);
    const userId = await t.mutation((api.auth as any).signUp, {
      email: "test@example.com",
      password: "password123",
    });
    const tAuth = t.withIdentity({ subject: userId });

    // Create a valid storage ID
    const storageId = await t.run(async (ctx) => {
      return await ctx.storage.store(new Blob(["fake-video"]));
    });

    return { t, tAuth, userId, storageId };
  };

  test("createAnalysis creates record and schedules job", async () => {
    const { t, tAuth, userId, storageId } = await setup();

    const analysisId = await tAuth.mutation(api.analyses.createAnalysis, {
      videoStorageId: storageId,
      sport: "tennis",
    });

    await t.finishInProgressScheduledFunctions();

    // Verify record created
    const analysis = await t.run(async (ctx) => {
      return await ctx.db.get(analysisId);
    });

    expect(analysis).toBeDefined();
    expect(analysis?.userId).toEqual(userId);
    expect(analysis?.sport).toBe("tennis");
    expect(analysis?.status).toBe("pending");
    expect(analysis?.sessionNumber).toBe(1); // First session of day
  });

  test("getAnalysis returns record for owner", async () => {
    const { t, tAuth, userId, storageId } = await setup();

    const analysisId = await tAuth.mutation(api.analyses.createAnalysis, {
      videoStorageId: storageId,
      sport: "golf",
    });

    await t.finishInProgressScheduledFunctions();

    const analysis = await tAuth.query(api.analyses.getAnalysis, { analysisId });
    expect(analysis._id).toEqual(analysisId);
  });

  test("getAnalysis fails for other user", async () => {
    const { t, tAuth, storageId } = await setup();

    // User 1 creates analysis
    const analysisId = await tAuth.mutation(api.analyses.createAnalysis, {
      videoStorageId: storageId,
      sport: "golf",
    });

    await t.finishInProgressScheduledFunctions();

    // User 2 tries to read
    const user2Id = await t.mutation((api.auth as any).signUp, {
      email: "test2@example.com",
      password: "password123",
    });
    const tAuth2 = t.withIdentity({ subject: user2Id });

    await expect(
      tAuth2.query(api.analyses.getAnalysis, { analysisId })
    ).rejects.toThrow("Unauthorized");
  });

  test("getAnalysisHistory returns paginated results", async () => {
    const { t, tAuth, storageId } = await setup();

    // Create 3 analyses
    await tAuth.mutation(api.analyses.createAnalysis, { videoStorageId: storageId, sport: "tennis" });
    await tAuth.mutation(api.analyses.createAnalysis, { videoStorageId: storageId, sport: "golf" });
    await tAuth.mutation(api.analyses.createAnalysis, { videoStorageId: storageId, sport: "volleyball" });

    await t.finishInProgressScheduledFunctions();

    const result = await tAuth.query(api.analyses.getAnalysisHistory, {
      paginationOpts: { numItems: 2, cursor: null }
    });
    
    expect(result.page.length).toBe(2);
    expect(result.isDone).toBe(false);
    expect(result.continueCursor).toBeDefined();

    const result2 = await tAuth.query(api.analyses.getAnalysisHistory, {
      paginationOpts: { numItems: 2, cursor: result.continueCursor }
    });

    expect(result2.page.length).toBe(1);
    expect(result2.isDone).toBe(true);
  });
});
