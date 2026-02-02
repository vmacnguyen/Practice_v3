import { v } from "convex/values";
import { internalAction } from "../_generated/server";

export const runAnalysis = internalAction({
  args: {
    analysisId: v.id("analyses"),
  },
  handler: async (ctx, args) => {
    console.log("Mock runAnalysis called for", args.analysisId);
    return;
  },
});
