import { v } from "convex/values";
import { mutation, query, internalMutation, internalQuery } from "./_generated/server";
import { getUserId } from "./auth";
import { ConvexError } from "convex/values";
import { internal } from "./_generated/api";
import { paginationOptsValidator } from "convex/server";

// Create a new analysis record (pending state)
export const createAnalysis = mutation({
  args: {
    videoStorageId: v.id("_storage"),
    thumbnailStorageId: v.optional(v.id("_storage")),
    sport: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const videoUrl = await ctx.storage.getUrl(args.videoStorageId);
    if (!videoUrl) throw new ConvexError("Video not found");
    
    // Get thumbnail URL if ID is provided
    let thumbnailUrl = null;
    if (args.thumbnailStorageId) {
      thumbnailUrl = await ctx.storage.getUrl(args.thumbnailStorageId);
    }

    // Calculate session number for today
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const todaysSessions = await ctx.db
      .query("analyses")
      .withIndex("by_user_and_created", (q) =>
        q.eq("userId", userId).gte("createdAt", startOfDay.getTime())
      )
      .collect();

    const sessionNumber = todaysSessions.length + 1;
    const now = Date.now();

    const analysisId = await ctx.db.insert("analyses", {
      userId,
      videoStorageId: args.videoStorageId,
      thumbnailStorageId: args.thumbnailStorageId,
      videoUrl,
      sport: args.sport,
      identifiedActions: [],
      overallFeedback: "",
      status: "pending",
      sessionNumber,
      createdAt: now,
      updatedAt: now,
    });

    // Schedule the AI analysis
    await ctx.scheduler.runAfter(0, internal.services.analysisService.runAnalysis, {
      analysisId,
    });

    return analysisId;
  },
});

// Get a single analysis by ID
export const getAnalysis = query({
  args: { analysisId: v.id("analyses") },
  handler: async (ctx, args) => {
    const userId = await getUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const analysis = await ctx.db.get(args.analysisId);
    if (!analysis) throw new ConvexError("Analysis not found");
    if (analysis.userId !== userId) throw new ConvexError("Unauthorized");

    let thumbnailUrl = null;
    if (analysis.thumbnailStorageId) {
      thumbnailUrl = await ctx.storage.getUrl(analysis.thumbnailStorageId);
    }

    return { ...analysis, thumbnailUrl };
  },
});

// Get paginated analysis history
export const getAnalysisHistory = query({
  args: {
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    const userId = await getUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const results = await ctx.db
      .query("analyses")
      .withIndex("by_user_and_created", (q) => q.eq("userId", userId))
      .order("desc")
      .paginate(args.paginationOpts);

    return {
      ...results,
      page: await Promise.all(
        results.page.map(async (analysis) => {
          let thumbnailUrl = null;
          if (analysis.thumbnailStorageId) {
            thumbnailUrl = await ctx.storage.getUrl(analysis.thumbnailStorageId);
          }
          return { ...analysis, thumbnailUrl };
        })
      ),
    };
  },
});

// Get user stats for home page
export const getUserStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getUserId(ctx);
    if (!userId) return null;

    const analyses = await ctx.db
      .query("analyses")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const completedAnalyses = analyses.filter((a) => a.status === "completed");
    
    // Sort by creation time (descending) to get the most recent one reliably
    // Note: 'collect()' order isn't guaranteed without an index sort, but .filter preserves order.
    // Ideally we'd use a separate query for recentSession, but this is fine for now.
    const sortedCompleted = completedAnalyses.sort((a, b) => b.createdAt - a.createdAt);
    const recentSession = sortedCompleted[0] || null;

    let recentSessionWithUrl = null;
    if (recentSession) {
      let thumbnailUrl = null;
      if (recentSession.thumbnailStorageId) {
        thumbnailUrl = await ctx.storage.getUrl(recentSession.thumbnailStorageId);
      }
      recentSessionWithUrl = { ...recentSession, thumbnailUrl };
    }

    return {
      totalSessions: completedAnalyses.length,
      // Approximate minutes (1 min max per video)
      totalMinutes: completedAnalyses.length,
      recentSession: recentSessionWithUrl,
    };
  },
});

// Retry a failed analysis
export const retryAnalysis = mutation({
  args: { analysisId: v.id("analyses") },
  handler: async (ctx, args) => {
    const userId = await getUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const analysis = await ctx.db.get(args.analysisId);
    if (!analysis) throw new ConvexError("Analysis not found");
    if (analysis.userId !== userId) throw new ConvexError("Unauthorized");
    if (analysis.status !== "failed") throw new ConvexError("Analysis is not in failed state");

    await ctx.db.patch(args.analysisId, {
      status: "pending",
      errorMessage: undefined,
      updatedAt: Date.now(),
    });

    await ctx.scheduler.runAfter(0, internal.services.analysisService.runAnalysis, {
      analysisId: args.analysisId,
    });

    return args.analysisId;
  },
});

// Internal mutation to update analysis with results
export const updateAnalysisResult = internalMutation({
  args: {
    analysisId: v.id("analyses"),
    identifiedActions: v.array(
      v.object({
        action: v.string(),
        timestamp: v.union(v.string(), v.null()),
        analysis: v.string(),
        practiceTips: v.array(v.string()),
      })
    ),
    overallFeedback: v.string(),
    rawResponse: v.any(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.analysisId, {
      identifiedActions: args.identifiedActions,
      overallFeedback: args.overallFeedback,
      rawResponse: args.rawResponse,
      status: "completed",
      updatedAt: Date.now(),
    });
  },
});

// Internal mutation to mark analysis as failed
export const markAnalysisFailed = internalMutation({
  args: {
    analysisId: v.id("analyses"),
    errorMessage: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.analysisId, {
      status: "failed",
      errorMessage: args.errorMessage,
      updatedAt: Date.now(),
    });
  },
});

// Internal query to get analysis (for actions)
export const getAnalysisInternal = internalQuery({
  args: { analysisId: v.id("analyses") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.analysisId);
  },
});

// Internal mutation to update status
export const updateAnalysisStatus = internalMutation({
  args: {
    analysisId: v.id("analyses"),
    status: v.union(
      v.literal("pending"),
      v.literal("processing"),
      v.literal("completed"),
      v.literal("failed")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.analysisId, {
      status: args.status,
      updatedAt: Date.now(),
    });
  },
});
