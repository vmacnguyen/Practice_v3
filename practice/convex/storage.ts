import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getUserId } from "./auth";
import { ConvexError } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    return await ctx.storage.generateUploadUrl();
  },
});

export const getVideoUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
