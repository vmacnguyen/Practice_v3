import { mutation } from "./_generated/server";

export const seedUser = mutation({
  args: {},
  handler: async (ctx) => {
    const email = "vivien14@test.com";
    
    // Check if user exists
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      return existing._id;
    }

    // Create user
    const userId = await ctx.db.insert("users", {
      email,
      onboardingCompleted: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    // Also create an auth account for them (simulating what Convex Auth does)
    // Note: We can't easily simulate the Auth tables directly without internal access,
    // but our Dev Bypass only checks the 'users' table, so this is sufficient!
    
    return userId;
  },
});
