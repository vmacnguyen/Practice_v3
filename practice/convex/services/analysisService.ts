import { v } from "convex/values";
import { internalAction } from "../_generated/server";
import { internal } from "../_generated/api";
import { buildPrompt } from "./promptTemplate";
import { analyzeWithGemini, AnalysisResult } from "./adapters/geminiAdapter";

// Sports config (duplicated here for backend use)
const SPORTS_ACTIONS: Record<string, string[]> = {
  tennis: ["Serve", "Forehand", "Backhand", "Volley", "Overhead"],
  volleyball: ["Serve", "Set", "Spike/Hit", "Pass/Bump", "Block"],
  pickleball: ["Serve", "Dink", "Drive", "Volley", "Third Shot Drop"],
  badminton: ["Serve", "Clear", "Smash", "Drop Shot", "Net Play"],
  golf: ["Drive", "Iron Shot", "Chip", "Putt", "Bunker Shot"],
  weightlifting: ["Squat", "Deadlift", "Bench Press", "Overhead Press", "Clean & Jerk"],
  ballet: ["Pirouette", "Grand Jeté", "Arabesque", "Plié", "Fouetté"],
  snowboarding: ["Carving Turns", "Ollies", "180s/360s", "Rails/Boxes", "Jumps", "Butters"],
};

const MAX_RETRIES = 1;

export const runAnalysis = internalAction({
  args: {
    analysisId: v.id("analyses"),
  },
  handler: async (ctx, args) => {
    // Get the analysis record
    const analysis = await ctx.runQuery(internal.analyses.getAnalysisInternal, {
      analysisId: args.analysisId,
    });

    if (!analysis) {
      console.error("Analysis not found:", args.analysisId);
      return;
    }

    // Update status to processing
    await ctx.runMutation(internal.analyses.updateAnalysisStatus, {
      analysisId: args.analysisId,
      status: "processing",
    });

    const sportId = analysis.sport.toLowerCase();
    const actionTypes = SPORTS_ACTIONS[sportId] || [];
    const prompt = buildPrompt(analysis.sport, actionTypes);

    let lastError: Error | null = null;
    let result: AnalysisResult | null = null;

    // Try analysis with retry logic
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        result = await analyzeWithGemini(prompt, analysis.videoUrl);
        break; // Success, exit retry loop
      } catch (error) {
        lastError = error as Error;
        console.error(`Analysis attempt ${attempt + 1} failed:`, error);

        if (attempt < MAX_RETRIES) {
          // Wait before retry
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }

    if (result) {
      // Transform result to match schema
      const identifiedActions = result.identified_actions.map((action) => ({
        action: action.action,
        timestamp: action.timestamp,
        analysis: action.analysis,
        practiceTips: action.practice_tips,
      }));

      await ctx.runMutation(internal.analyses.updateAnalysisResult, {
        analysisId: args.analysisId,
        identifiedActions,
        overallFeedback: result.overall_feedback,
        rawResponse: result,
      });
    } else {
      await ctx.runMutation(internal.analyses.markAnalysisFailed, {
        analysisId: args.analysisId,
        errorMessage: lastError?.message || "Analysis failed",
      });
    }
  },
});