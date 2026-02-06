/// <reference types="vitest/globals" />
import { describe, test, expect, vi, beforeEach } from "vitest";
import { convexTest } from "convex-test";
import schema from "../schema";
import { api, internal } from "../_generated/api";
import * as geminiAdapter from "./adapters/geminiAdapter";

// Mock the Gemini adapter
vi.mock("./adapters/geminiAdapter", () => ({
  analyzeWithGemini: vi.fn(),
}));

describe("Analysis Service", () => {
  const setup = async () => {
    const t = convexTest(schema);
    const userId = await t.mutation((api.auth as any).signUp, {
      email: "test@example.com",
      password: "password123",
    });
    
    const storageId = await t.run(async (ctx) => {
      return await ctx.storage.store(new Blob(["video"]));
    });

    // Manually insert an analysis record to avoid the scheduler during setup
    const analysisId = await t.run(async (ctx) => {
      return await ctx.db.insert("analyses", {
        userId,
        videoStorageId: storageId,
        videoUrl: "https://example.com/video.mp4",
        sport: "tennis",
        identifiedActions: [],
        overallFeedback: "",
        status: "pending",
        sessionNumber: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    });

    return { t, analysisId };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("runAnalysis updates record on success", async () => {
    const { t, analysisId } = await setup();

    const mockResult = {
      identified_actions: [
        {
          action: "Serve",
          timestamp: "0:05",
          analysis: "Great power",
          practice_tips: ["Keep it up"]
        }
      ],
      overall_feedback: "Well done"
    };

    vi.mocked(geminiAdapter.analyzeWithGemini).mockResolvedValue(mockResult);

    // Call the action directly
    await t.action(internal.services.analysisService.runAnalysis, { analysisId });

    // Verify record updated
    const analysis = await t.run(async (ctx) => {
      return await ctx.db.get(analysisId);
    });

    expect(analysis?.status).toBe("completed");
    expect(analysis?.identifiedActions[0].action).toBe("Serve");
    expect(geminiAdapter.analyzeWithGemini).toHaveBeenCalledTimes(1);
  });

  test("runAnalysis retries once on failure", async () => {
    const { t, analysisId } = await setup();

    // Mock first call fails, second succeeds
    vi.mocked(geminiAdapter.analyzeWithGemini)
      .mockRejectedValueOnce(new Error("Network timeout"))
      .mockResolvedValueOnce({
        identified_actions: [],
        overall_feedback: "Recovered"
      });

    await t.action(internal.services.analysisService.runAnalysis, { analysisId });

    const analysis = await t.run(async (ctx) => {
      return await ctx.db.get(analysisId);
    });

    expect(analysis?.status).toBe("completed");
    expect(geminiAdapter.analyzeWithGemini).toHaveBeenCalledTimes(2);
  });

  test("runAnalysis marks as failed after retries exhaust", async () => {
    const { t, analysisId } = await setup();

    vi.mocked(geminiAdapter.analyzeWithGemini).mockRejectedValue(new Error("Persistent error"));

    await t.action(internal.services.analysisService.runAnalysis, { analysisId });

    const analysis = await t.run(async (ctx) => {
      return await ctx.db.get(analysisId);
    });

    expect(analysis?.status).toBe("failed");
    expect(analysis?.errorMessage).toBe("Persistent error");
    expect(geminiAdapter.analyzeWithGemini).toHaveBeenCalledTimes(2); // Initial + 1 retry
  });
});
