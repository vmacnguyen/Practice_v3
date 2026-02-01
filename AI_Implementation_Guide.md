# AI Implementation Guide: Practice App

This document provides a detailed, machine-readable implementation plan for the "Practice" mobile application. It is designed to guide an AI coding agent through the development process.

---

## Agent Workflow: The Ralph Wiggum Approach

This project uses the **Ralph Wiggum technique** for AI-assisted development—a methodology built on the insight that **iteration beats perfection**. The name comes from The Simpsons character who is perpetually confused, always making mistakes, but never stops trying.

> "Ralph is a Bash loop." — Geoffrey Huntley

### Core Principles

1. **One Issue Per Session**: Work on exactly ONE user story per agent session
2. **Small, Atomic Tasks**: Each user story should be completable in a single focused effort
3. **Strong Feedback Loops**: Tests, typechecks, and lints must pass before declaring victory
4. **Persistent Progress**: Always commit or document progress before ending a session

### Session Workflow

Each agent session follows this exact workflow:

```
┌─────────────────────────────────────────────────────────────────┐
│  1. READ user_stories.json                                      │
│  2. FIND highest priority story where passes=false              │
│  3. IMPLEMENT the acceptance criteria                           │
│  4. RUN validation checks (typecheck, lint, tests)              │
│  5. IF all pass → UPDATE passes=true, COMMIT changes            │
│     ELSE → UPDATE notes with context, COMMIT notes              │
│  6. END session                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Step 1: Select the Next User Story

At the start of each session:

```bash
# Read and parse user_stories.json
# Find the FIRST story (lowest ID) where:
#   - passes = false
#   - All blocking dependencies (if any) have passes = true
```

**Priority Rules:**
- Always work on the lowest-numbered incomplete story
- Never skip ahead to "easier" stories
- Hard problems first—they often unblock multiple downstream stories

### Step 2: Implement the Story

For the selected user story:

1. **Read the acceptance criteria** carefully
2. **Reference this guide** for implementation details
3. **Write the code** following the patterns in this document
4. **Keep changes focused** on the single story—avoid scope creep

### Step 3: Run Validation Checks

Before marking a story complete, ALL checks must pass:

```bash
# TypeScript compilation
npx tsc --noEmit

# Linting
npx eslint . --ext .ts,.tsx

# Unit tests (if applicable to the story)
npm test

# Convex validation (for backend stories)
npx convex dev --once

# App builds without errors
npx expo start --no-dev --minify
```

**Validation Matrix by Story Type:**

| Story Type | Typecheck | Lint | Tests | Convex | Build |
|------------|-----------|------|-------|--------|-------|
| Config files | ✅ | ✅ | ✅ | - | - |
| Convex backend | ✅ | ✅ | - | ✅ | - |
| React components | ✅ | ✅ | ✅ | - | ✅ |
| Utility functions | ✅ | ✅ | ✅ | - | - |
| Full screens | ✅ | ✅ | ✅ | - | ✅ |

### Step 4: Update User Story Status

#### On Success (All Checks Pass)

Update `user_stories.json`:

```json
{
  "id": "US-XXX",
  "passes": true,
  "notes": ""
}
```

#### On Failure (Any Check Fails)

Update `user_stories.json` with context for the next session:

```json
{
  "id": "US-XXX",
  "passes": false,
  "notes": "TypeScript error in VideoRecorder.tsx:45 - CameraView type mismatch. Need to check expo-camera version compatibility. Attempted fix: updating @types/expo-camera but peer dependency conflict with expo@51."
}
```

**Notes Field Best Practices:**
- Include specific file paths and line numbers
- Document what was attempted and why it failed
- List any external blockers (missing API keys, dependency issues)
- Provide context for the next agent session to continue

### Step 5: Git Commit Protocol

**Every session MUST end with a git commit**, regardless of success or failure.

#### Successful Implementation

```bash
git add <specific files changed>
git commit -m "$(cat <<'EOF'
US-XXX: <Story title>

- Implemented <brief description>
- All acceptance criteria met
- Typecheck: ✅ Lint: ✅ Tests: ✅

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

#### Work In Progress (Checks Failed)

```bash
git add user_stories.json
git commit -m "$(cat <<'EOF'
US-XXX: WIP - <Story title>

- Progress: <what was completed>
- Blocker: <what's preventing completion>
- Next steps documented in user_stories.json notes

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

#### No Code Changes (Research/Investigation Only)

```bash
git add user_stories.json
git commit -m "$(cat <<'EOF'
US-XXX: Investigation notes added

- Investigated: <what was researched>
- Findings documented in user_stories.json notes
- Ready for implementation in next session

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Backpressure: Creating Quality Gates

The Ralph Wiggum approach relies on **backpressure**—automated checks that reject invalid work. Configure these gates:

#### 1. TypeScript Strict Mode

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

#### 2. ESLint Configuration

`.eslintrc.js`:
```javascript
module.exports = {
  extends: ['expo', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
};
```

#### 3. Pre-commit Hooks (Optional)

If available, configure hooks to block commits when checks fail:
```bash
# .husky/pre-commit
npx tsc --noEmit && npx eslint . --ext .ts,.tsx
```

### Common Patterns for Handling Blockers

#### External Dependency Issues

```json
{
  "notes": "BLOCKED: expo-camera@14.x has breaking changes. Need to either: (1) downgrade to 13.x, (2) update CameraView usage per migration guide at https://docs.expo.dev/versions/latest/sdk/camera/"
}
```

#### Missing Prerequisites

```json
{
  "notes": "BLOCKED: Requires US-007 (Convex schema) to be completed first. Schema file doesn't exist yet."
}
```

#### Ambiguous Requirements

```json
{
  "notes": "CLARIFICATION NEEDED: Acceptance criteria says 'sport picker at top' but Figma shows it in header. Implemented in header per Figma. May need revision if PRD takes precedence."
}
```

### Anti-Patterns to Avoid

| Anti-Pattern | Why It's Bad | Instead Do |
|--------------|--------------|------------|
| Working on multiple stories | Increases complexity, harder to debug | One story per session |
| Skipping failing tests | Technical debt accumulates | Fix tests or document blocker |
| Large commits | Hard to review, hard to revert | Atomic commits per story |
| Empty notes on failure | Next session has no context | Always document blockers |
| Guessing at requirements | May implement wrong thing | Document ambiguity, ask for clarification |
| Hardcoding values | Creates future bugs | Use config/env files |

### Session Checklist

Use this checklist at the end of every session:

```markdown
## Session End Checklist

- [ ] Selected lowest-priority incomplete story
- [ ] Implemented all acceptance criteria (or documented blockers)
- [ ] Ran typecheck: `npx tsc --noEmit`
- [ ] Ran linter: `npx eslint . --ext .ts,.tsx`
- [ ] Ran tests: `npm test` (if applicable)
- [ ] Updated user_stories.json (passes flag and/or notes)
- [ ] Created git commit with appropriate message
- [ ] Verified commit was successful
```

### Reference: User Story JSON Schema

```typescript
interface UserStory {
  id: string;           // Format: "US-XXX"
  title: string;        // Brief imperative title
  description: string;  // User story format or developer task
  acceptanceCriteria: string[];  // Testable requirements
  priority: number;     // Lower = higher priority (1 is highest)
  passes: boolean;      // true when ALL criteria met and checks pass
  notes: string;        // Context for next session (blockers, progress, etc.)
}
```

---

## Prerequisites

Before starting implementation, ensure:
- Node.js 18+ installed
- Expo CLI installed globally (`npm install -g expo-cli`)
- Convex account created
- Gemini API key obtained
- Development environment set up for iOS/Android

---

## Phase 1: Project Setup & Configuration

### Epic 1.1: Initialize Project Structure

**Task 1.1.1: Create Expo Project**
```bash
npx create-expo-app@latest practice --template blank-typescript
cd practice
```

**Task 1.1.2: Install Core Dependencies**
```bash
# UI Framework
npx gluestack-ui init

# Navigation
npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

# Convex
npm install convex convex-react-native

# Media handling
npx expo install expo-camera expo-image-picker expo-av expo-file-system

# Utilities
npx expo install expo-secure-store expo-constants
```

**Task 1.1.3: Initialize Convex**
```bash
npx convex dev --once
```
This creates the `convex/` directory structure.

**Task 1.1.4: Create Project Directory Structure**
```
practice/
├── app/                          # Expo Router app directory
│   ├── (auth)/                   # Auth screens (login, signup)
│   │   ├── login.tsx
│   │   ├── signup.tsx
│   │   └── _layout.tsx
│   ├── (main)/                   # Main app screens (authenticated)
│   │   ├── (tabs)/               # Tab navigator screens
│   │   │   ├── index.tsx         # Home tab
│   │   │   ├── practice.tsx      # Practice tab (video capture)
│   │   │   ├── history.tsx       # History tab
│   │   │   └── _layout.tsx       # Tab layout
│   │   ├── analysis/[id].tsx     # Analysis detail screen
│   │   ├── profile.tsx           # Profile screen
│   │   └── _layout.tsx
│   ├── onboarding/               # Onboarding flow
│   │   ├── index.tsx             # Welcome screen
│   │   ├── sport-selection.tsx
│   │   ├── tutorial.tsx
│   │   └── _layout.tsx
│   ├── _layout.tsx               # Root layout
│   └── index.tsx                 # Entry point (redirects based on auth)
├── components/
│   ├── ui/                       # Gluestack UI customizations
│   ├── video/
│   │   ├── VideoRecorder.tsx
│   │   ├── VideoPlayer.tsx
│   │   └── VideoThumbnail.tsx
│   ├── analysis/
│   │   ├── AnalysisCard.tsx
│   │   ├── ActionFeedback.tsx
│   │   └── SportPicker.tsx
│   ├── common/
│   │   ├── LoadingSpinner.tsx
│   │   └── ErrorBoundary.tsx
│   └── navigation/
│       └── BottomNavBar.tsx
├── convex/
│   ├── schema.ts                 # Database schema
│   ├── auth.ts                   # Auth configuration
│   ├── users.ts                  # User functions
│   ├── analyses.ts               # Analysis CRUD functions
│   ├── storage.ts                # File storage functions
│   └── services/
│       ├── analysisService.ts    # AI analysis orchestration
│       └── adapters/
│           └── geminiAdapter.ts  # Gemini API adapter
├── config/
│   ├── sports-config.ts          # Sports & actions configuration
│   ├── constants.ts              # App constants
│   └── env.ts                    # Environment variable handling
├── hooks/
│   ├── useAuth.ts
│   ├── useAnalysis.ts
│   └── useVideo.ts
├── types/
│   ├── analysis.ts
│   ├── sports.ts
│   └── navigation.ts
├── utils/
│   ├── video.ts                  # Video validation utilities
│   └── formatting.ts             # Date/text formatting
└── assets/
    └── images/
```

---

### Epic 1.2: Environment Configuration

**Task 1.2.1: Create Environment Configuration**

File: `config/env.ts`
```typescript
export const ENV = {
  // Video constraints
  MAX_VIDEO_DURATION_SECONDS: parseInt(process.env.EXPO_PUBLIC_MAX_VIDEO_DURATION_SECONDS || '60', 10),
  MAX_VIDEO_FILE_SIZE_MB: parseInt(process.env.EXPO_PUBLIC_MAX_VIDEO_FILE_SIZE_MB || '150', 10),

  // AI Service
  AI_ANALYSIS_TIMEOUT_MS: parseInt(process.env.EXPO_PUBLIC_AI_ANALYSIS_TIMEOUT_MS || '60000', 10),
  AI_PROCESSING_NOTIFICATION_MS: parseInt(process.env.EXPO_PUBLIC_AI_PROCESSING_NOTIFICATION_MS || '15000', 10),

  // Video recording
  VIDEO_QUALITY: '720p',
  VIDEO_FPS: 30,

  // Convex
  CONVEX_URL: process.env.EXPO_PUBLIC_CONVEX_URL || '',
};
```

**Task 1.2.2: Create .env.local Template**

File: `.env.local.example`
```
EXPO_PUBLIC_CONVEX_URL=your_convex_deployment_url
EXPO_PUBLIC_MAX_VIDEO_DURATION_SECONDS=60
EXPO_PUBLIC_MAX_VIDEO_FILE_SIZE_MB=150
EXPO_PUBLIC_AI_ANALYSIS_TIMEOUT_MS=60000
EXPO_PUBLIC_AI_PROCESSING_NOTIFICATION_MS=15000

# Convex environment variables (set in Convex dashboard)
# GEMINI_API_KEY=your_gemini_api_key
```

---

### Epic 1.3: Sports Configuration

**Task 1.3.1: Create Sports Configuration**

File: `config/sports-config.ts`
```typescript
export interface SportConfig {
  id: string;
  name: string;
  icon: string; // Icon name for UI
  actions: string[];
}

export const SPORTS_CONFIG: Record<string, SportConfig> = {
  tennis: {
    id: 'tennis',
    name: 'Tennis',
    icon: 'tennis',
    actions: ['Serve', 'Forehand', 'Backhand', 'Volley', 'Overhead'],
  },
  volleyball: {
    id: 'volleyball',
    name: 'Volleyball',
    icon: 'volleyball',
    actions: ['Serve', 'Set', 'Spike/Hit', 'Pass/Bump', 'Block'],
  },
  pickleball: {
    id: 'pickleball',
    name: 'Pickleball',
    icon: 'racquet',
    actions: ['Serve', 'Dink', 'Drive', 'Volley', 'Third Shot Drop'],
  },
  badminton: {
    id: 'badminton',
    name: 'Badminton',
    icon: 'badminton',
    actions: ['Serve', 'Clear', 'Smash', 'Drop Shot', 'Net Play'],
  },
  golf: {
    id: 'golf',
    name: 'Golf',
    icon: 'golf',
    actions: ['Drive', 'Iron Shot', 'Chip', 'Putt', 'Bunker Shot'],
  },
  weightlifting: {
    id: 'weightlifting',
    name: 'Weightlifting',
    icon: 'dumbbell',
    actions: ['Squat', 'Deadlift', 'Bench Press', 'Overhead Press', 'Clean & Jerk'],
  },
  ballet: {
    id: 'ballet',
    name: 'Ballet',
    icon: 'ballet',
    actions: ['Pirouette', 'Grand Jeté', 'Arabesque', 'Plié', 'Fouetté'],
  },
  snowboarding: {
    id: 'snowboarding',
    name: 'Snowboarding',
    icon: 'snowboard',
    actions: ['Carving Turns', 'Ollies', '180s/360s', 'Rails/Boxes', 'Jumps', 'Butters'],
  },
};

export const SPORTS_LIST = Object.values(SPORTS_CONFIG);

export function getSportById(sportId: string): SportConfig | undefined {
  return SPORTS_CONFIG[sportId];
}

export function getActionsForSport(sportId: string): string[] {
  return SPORTS_CONFIG[sportId]?.actions || [];
}
```

---

## Phase 2: Backend (Convex) Implementation

### Epic 2.1: Database Schema

**Task 2.1.1: Define Convex Schema**

File: `convex/schema.ts`
```typescript
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    preferredSport: v.optional(v.string()),
    onboardingCompleted: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_email", ["email"]),

  analyses: defineTable({
    userId: v.id("users"),
    videoStorageId: v.id("_storage"),
    videoUrl: v.string(),
    sport: v.string(),
    identifiedActions: v.array(
      v.object({
        action: v.string(),
        timestamp: v.union(v.string(), v.null()),
        analysis: v.string(),
        practiceTips: v.array(v.string()),
      })
    ),
    overallFeedback: v.string(),
    rawResponse: v.optional(v.any()),
    status: v.union(
      v.literal("pending"),
      v.literal("processing"),
      v.literal("completed"),
      v.literal("failed")
    ),
    sessionNumber: v.number(),
    errorMessage: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_and_created", ["userId", "createdAt"])
    .index("by_user_and_status", ["userId", "status"]),
});
```

---

### Epic 2.2: Authentication

**Task 2.2.1: Configure Convex Auth**

File: `convex/auth.config.ts`
```typescript
export default {
  providers: [
    {
      domain: process.env.CONVEX_SITE_URL,
      applicationID: "convex",
    },
  ],
};
```

**Task 2.2.2: Implement Auth Functions**

File: `convex/auth.ts`
```typescript
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
```

---

### Epic 2.3: File Storage

**Task 2.3.1: Implement Storage Functions**

File: `convex/storage.ts`
```typescript
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
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
```

---

### Epic 2.4: Analysis CRUD Operations

**Task 2.4.1: Implement Analysis Functions**

File: `convex/analyses.ts`
```typescript
import { v } from "convex/values";
import { mutation, query, internalMutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";
import { internal } from "./_generated/api";

// Create a new analysis record (pending state)
export const createAnalysis = mutation({
  args: {
    videoStorageId: v.id("_storage"),
    sport: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const videoUrl = await ctx.storage.getUrl(args.videoStorageId);
    if (!videoUrl) throw new ConvexError("Video not found");

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
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const analysis = await ctx.db.get(args.analysisId);
    if (!analysis) throw new ConvexError("Analysis not found");
    if (analysis.userId !== userId) throw new ConvexError("Unauthorized");

    return analysis;
  },
});

// Get paginated analysis history
export const getAnalysisHistory = query({
  args: {
    cursor: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new ConvexError("Not authenticated");

    const limit = args.limit || 10;

    let query = ctx.db
      .query("analyses")
      .withIndex("by_user_and_created", (q) => q.eq("userId", userId))
      .order("desc");

    const analyses = await query.take(limit + 1);

    const hasMore = analyses.length > limit;
    const items = hasMore ? analyses.slice(0, -1) : analyses;

    return {
      items,
      cursor: hasMore ? items[items.length - 1]._id : null,
      hasMore,
    };
  },
});

// Get user stats for home page
export const getUserStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    const analyses = await ctx.db
      .query("analyses")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    const completedAnalyses = analyses.filter((a) => a.status === "completed");

    return {
      totalSessions: completedAnalyses.length,
      // Approximate minutes (1 min max per video)
      totalMinutes: completedAnalyses.length,
      recentSession: completedAnalyses[completedAnalyses.length - 1] || null,
    };
  },
});

// Retry a failed analysis
export const retryAnalysis = mutation({
  args: { analysisId: v.id("analyses") },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
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
```

---

### Epic 2.5: AI Analysis Service

**Task 2.5.1: Create Prompt Template**

File: `convex/services/promptTemplate.ts`
```typescript
export const AI_PROMPT_TEMPLATE = `You are an expert {sport} coach. Analyze the provided video clip of a user practicing {sport}.

The possible action types for {sport} are: {action_types}

Your task:
1. Identify which action(s) the user performs in the video
2. For each identified action, note the approximate timestamp if possible
3. Provide a concise, constructive analysis of their form and technique
4. Provide 2-3 actionable practice tips for improvement

Respond *only* with a valid JSON object in the following schema:
{
  "identified_actions": [
    {
      "action": "Name of the identified action",
      "timestamp": "Approximate timestamp (e.g., '0:05-0:12') or null if unclear",
      "analysis": "Your analysis of their form for this specific action...",
      "practice_tips": [
        "Your first tip...",
        "Your second tip..."
      ]
    }
  ],
  "overall_feedback": "Any general observations about the session..."
}`;

export function buildPrompt(sport: string, actionTypes: string[]): string {
  return AI_PROMPT_TEMPLATE
    .replace(/{sport}/g, sport)
    .replace(/{action_types}/g, actionTypes.join(", "));
}
```

**Task 2.5.2: Implement Gemini Adapter**

File: `convex/services/adapters/geminiAdapter.ts`
```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";

export interface AnalysisResult {
  identified_actions: Array<{
    action: string;
    timestamp: string | null;
    analysis: string;
    practice_tips: string[];
  }>;
  overall_feedback: string;
}

export async function analyzeWithGemini(
  prompt: string,
  videoUrl: string
): Promise<AnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  // Fetch video and convert to base64
  const videoResponse = await fetch(videoUrl);
  const videoBuffer = await videoResponse.arrayBuffer();
  const videoBase64 = Buffer.from(videoBuffer).toString("base64");

  // Determine mime type (default to mp4)
  const mimeType = videoUrl.includes(".mov") ? "video/quicktime" : "video/mp4";

  const result = await model.generateContent([
    {
      inlineData: {
        mimeType,
        data: videoBase64,
      },
    },
    { text: prompt },
  ]);

  const response = result.response;
  const text = response.text();

  // Extract JSON from response (handle markdown code blocks)
  let jsonString = text;
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonMatch) {
    jsonString = jsonMatch[1].trim();
  }

  // Parse and validate response
  const parsed = JSON.parse(jsonString) as AnalysisResult;

  // Validate schema
  if (!parsed.identified_actions || !Array.isArray(parsed.identified_actions)) {
    throw new Error("Invalid response: missing identified_actions array");
  }

  if (typeof parsed.overall_feedback !== "string") {
    throw new Error("Invalid response: missing overall_feedback string");
  }

  for (const action of parsed.identified_actions) {
    if (!action.action || !action.analysis || !Array.isArray(action.practice_tips)) {
      throw new Error("Invalid response: malformed action object");
    }
  }

  return parsed;
}
```

**Task 2.5.3: Implement Analysis Service**

File: `convex/services/analysisService.ts`
```typescript
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
```

**Task 2.5.4: Add Internal Query for Analysis**

Add to `convex/analyses.ts`:
```typescript
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
```

---

## Phase 3: Frontend Implementation

### Epic 3.1: App Setup & Navigation

**Task 3.1.1: Configure Root Layout**

File: `app/_layout.tsx`
```typescript
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { config } from "@gluestack-ui/config";
import { ENV } from "../config/env";

const convex = new ConvexReactClient(ENV.CONVEX_URL);

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <GluestackUIProvider config={config}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="(main)" />
        </Stack>
      </GluestackUIProvider>
    </ConvexProvider>
  );
}
```

**Task 3.1.2: Configure Tab Navigation**

File: `app/(main)/(tabs)/_layout.tsx`
```typescript
import { Tabs } from "expo-router";
import { Icon } from "@gluestack-ui/themed";
import { Home, Video, History } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon as={Home} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: "Practice",
          tabBarIcon: ({ color, size }) => (
            <Icon as={Video} color={color} size={size} />
          ),
          tabBarItemStyle: {
            backgroundColor: "#6366f1", // Primary color
            borderRadius: 25,
            marginHorizontal: 20,
          },
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <Icon as={History} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
```

---

### Epic 3.2: Authentication Screens

**Task 3.2.1: Login Screen**

File: `app/(auth)/login.tsx`
```typescript
import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import { useAuthActions } from "@convex-dev/auth/react";

export default function LoginScreen() {
  const router = useRouter();
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await signIn("password", { email, password, flow: "signIn" });
      router.replace("/(main)/(tabs)");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} justifyContent="center" padding="$6" bg="$backgroundLight0">
      <VStack space="lg">
        <Heading size="2xl" textAlign="center">
          Welcome Back
        </Heading>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Input>
        </FormControl>

        {error ? <Text color="$error500">{error}</Text> : null}

        <Button onPress={handleLogin} isDisabled={loading}>
          <ButtonText>{loading ? "Signing in..." : "Sign In"}</ButtonText>
        </Button>

        <Link onPress={() => router.push("/(auth)/signup")}>
          <LinkText textAlign="center">
            Don't have an account? Sign up
          </LinkText>
        </Link>
      </VStack>
    </Box>
  );
}
```

**Task 3.2.2: Signup Screen**

File: `app/(auth)/signup.tsx`
```typescript
import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Box,
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
  Link,
  LinkText,
} from "@gluestack-ui/themed";
import { useAuthActions } from "@convex-dev/auth/react";

export default function SignupScreen() {
  const router = useRouter();
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      await signIn("password", { email, password, flow: "signUp" });
      router.replace("/onboarding");
    } catch (err: any) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} justifyContent="center" padding="$6" bg="$backgroundLight0">
      <VStack space="lg">
        <Heading size="2xl" textAlign="center">
          Create Account
        </Heading>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Create a password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Input>
        </FormControl>

        <FormControl>
          <FormControlLabel>
            <FormControlLabelText>Confirm Password</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </Input>
        </FormControl>

        {error ? <Text color="$error500">{error}</Text> : null}

        <Button onPress={handleSignup} isDisabled={loading}>
          <ButtonText>{loading ? "Creating account..." : "Sign Up"}</ButtonText>
        </Button>

        <Link onPress={() => router.push("/(auth)/login")}>
          <LinkText textAlign="center">
            Already have an account? Sign in
          </LinkText>
        </Link>
      </VStack>
    </Box>
  );
}
```

---

### Epic 3.3: Onboarding Flow

**Task 3.3.1: Sport Selection Screen**

File: `app/onboarding/sport-selection.tsx`
```typescript
import { useState } from "react";
import { useRouter } from "expo-router";
import { useMutation } from "convex/react";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  Text,
  VStack,
  HStack,
  Pressable,
} from "@gluestack-ui/themed";
import { api } from "../../convex/_generated/api";
import { SPORTS_LIST } from "../../config/sports-config";

export default function SportSelectionScreen() {
  const router = useRouter();
  const updatePreferredSport = useMutation(api.auth.updatePreferredSport);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!selectedSport) return;

    setLoading(true);
    try {
      await updatePreferredSport({ sport: selectedSport });
      router.push("/onboarding/tutorial");
    } catch (err) {
      console.error("Failed to save sport:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box flex={1} padding="$6" bg="$backgroundLight0">
      <VStack space="lg" flex={1}>
        <Heading size="xl">What do you practice?</Heading>
        <Text color="$textLight500">
          Select your primary sport or activity
        </Text>

        <VStack space="sm" flex={1}>
          {SPORTS_LIST.map((sport) => (
            <Pressable
              key={sport.id}
              onPress={() => setSelectedSport(sport.id)}
              bg={selectedSport === sport.id ? "$primary100" : "$backgroundLight100"}
              borderWidth={2}
              borderColor={selectedSport === sport.id ? "$primary500" : "transparent"}
              borderRadius="$lg"
              padding="$4"
            >
              <HStack alignItems="center" space="md">
                <Text fontSize="$lg" fontWeight="$medium">
                  {sport.name}
                </Text>
              </HStack>
            </Pressable>
          ))}
        </VStack>

        <Button
          onPress={handleContinue}
          isDisabled={!selectedSport || loading}
          size="lg"
        >
          <ButtonText>{loading ? "Saving..." : "Continue"}</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
```

**Task 3.3.2: Tutorial Screen**

File: `app/onboarding/tutorial.tsx`
```typescript
import { useState } from "react";
import { useRouter } from "expo-router";
import { useMutation } from "convex/react";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
} from "@gluestack-ui/themed";
import { Video, Brain, ChevronRight } from "lucide-react-native";
import { api } from "../../convex/_generated/api";

const tutorialSteps = [
  {
    icon: Video,
    title: "Record or Upload",
    description:
      "Capture a video of your practice session or upload one from your gallery. Videos can be up to 1 minute long.",
  },
  {
    icon: Brain,
    title: "Get AI Feedback",
    description:
      "Our AI coach analyzes your technique and provides personalized tips to help you improve your form.",
  },
];

export default function TutorialScreen() {
  const router = useRouter();
  const completeOnboarding = useMutation(api.auth.completeOnboarding);
  const [step, setStep] = useState(0);

  const handleNext = async () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    } else {
      await completeOnboarding();
      router.replace("/(main)/(tabs)");
    }
  };

  const currentStep = tutorialSteps[step];

  return (
    <Box flex={1} justifyContent="center" padding="$6" bg="$backgroundLight0">
      <VStack space="xl" alignItems="center">
        <Box
          bg="$primary100"
          borderRadius="$full"
          padding="$6"
        >
          <Icon as={currentStep.icon} size="xl" color="$primary500" />
        </Box>

        <VStack space="md" alignItems="center">
          <Heading size="xl" textAlign="center">
            {currentStep.title}
          </Heading>
          <Text textAlign="center" color="$textLight500" maxWidth={300}>
            {currentStep.description}
          </Text>
        </VStack>

        <HStack space="sm" marginTop="$4">
          {tutorialSteps.map((_, index) => (
            <Box
              key={index}
              width={8}
              height={8}
              borderRadius="$full"
              bg={index === step ? "$primary500" : "$backgroundLight300"}
            />
          ))}
        </HStack>

        <Button onPress={handleNext} size="lg" marginTop="$8">
          <ButtonText>
            {step === tutorialSteps.length - 1 ? "Get Started" : "Next"}
          </ButtonText>
          <Icon as={ChevronRight} color="$white" marginLeft="$2" />
        </Button>
      </VStack>
    </Box>
  );
}
```

---

### Epic 3.4: Home Screen

**Task 3.4.1: Home Screen Implementation**

File: `app/(main)/(tabs)/index.tsx`
```typescript
import { useRouter } from "expo-router";
import { useQuery } from "convex/react";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  Spinner,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
} from "@gluestack-ui/themed";
import { api } from "../../../convex/_generated/api";
import { SPORTS_LIST } from "../../../config/sports-config";
import { formatDate } from "../../../utils/formatting";

export default function HomeScreen() {
  const router = useRouter();
  const user = useQuery(api.auth.getCurrentUser);
  const stats = useQuery(api.analyses.getUserStats);

  if (!user || !stats) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
      </Box>
    );
  }

  return (
    <Box flex={1} padding="$6" bg="$backgroundLight0" safeArea>
      <VStack space="lg" flex={1}>
        {/* Sport Picker */}
        <Select
          selectedValue={user.preferredSport || SPORTS_LIST[0].id}
        >
          <SelectTrigger>
            <SelectInput placeholder="Select sport" />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              {SPORTS_LIST.map((sport) => (
                <SelectItem
                  key={sport.id}
                  label={sport.name}
                  value={sport.id}
                />
              ))}
            </SelectContent>
          </SelectPortal>
        </Select>

        {/* Stats */}
        <VStack space="md">
          <Heading size="lg">Your Progress</Heading>
          <HStack space="md">
            <Card flex={1} padding="$4">
              <Text color="$textLight500" size="sm">
                Sessions
              </Text>
              <Heading size="xl">{stats.totalSessions}</Heading>
            </Card>
            <Card flex={1} padding="$4">
              <Text color="$textLight500" size="sm">
                Minutes
              </Text>
              <Heading size="xl">{stats.totalMinutes}</Heading>
            </Card>
          </HStack>
        </VStack>

        {/* CTA Button */}
        <Button
          size="xl"
          onPress={() => router.push("/(main)/(tabs)/practice")}
          bg="$primary500"
        >
          <ButtonText>Start Practice Session</ButtonText>
        </Button>

        {/* Recent Session */}
        {stats.recentSession && (
          <VStack space="md">
            <Heading size="md">Recent Session</Heading>
            <Card
              padding="$4"
              onPress={() =>
                router.push(`/(main)/analysis/${stats.recentSession._id}`)
              }
            >
              <VStack space="sm">
                <Text fontWeight="$medium">
                  {stats.recentSession.sport} -{" "}
                  {formatDate(stats.recentSession.createdAt)}
                </Text>
                <Text color="$textLight500" numberOfLines={2}>
                  {stats.recentSession.overallFeedback || "Analysis pending..."}
                </Text>
              </VStack>
            </Card>
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
```

---

### Epic 3.5: Video Capture & Upload

**Task 3.5.1: Video Utilities**

File: `utils/video.ts`
```typescript
import * as FileSystem from "expo-file-system";
import { ENV } from "../config/env";

export interface VideoValidationResult {
  valid: boolean;
  error?: string;
}

export async function validateVideo(uri: string): Promise<VideoValidationResult> {
  try {
    const fileInfo = await FileSystem.getInfoAsync(uri, { size: true });

    if (!fileInfo.exists) {
      return { valid: false, error: "Video file not found" };
    }

    // Check file size (convert bytes to MB)
    const fileSizeMB = (fileInfo.size || 0) / (1024 * 1024);
    if (fileSizeMB > ENV.MAX_VIDEO_FILE_SIZE_MB) {
      return {
        valid: false,
        error: `Video exceeds maximum size of ${ENV.MAX_VIDEO_FILE_SIZE_MB}MB`,
      };
    }

    return { valid: true };
  } catch (error) {
    return { valid: false, error: "Failed to validate video" };
  }
}

export function isValidVideoFormat(filename: string): boolean {
  const validExtensions = [".mp4", ".mov", ".m4v"];
  const ext = filename.toLowerCase().slice(filename.lastIndexOf("."));
  return validExtensions.includes(ext);
}
```

**Task 3.5.2: Video Recorder Component**

File: `components/video/VideoRecorder.tsx`
```typescript
import { useState, useRef, useEffect } from "react";
import { Camera, CameraType, CameraView } from "expo-camera";
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Text,
  VStack,
  Icon,
  Pressable,
} from "@gluestack-ui/themed";
import { Circle, Square, RotateCcw } from "lucide-react-native";
import { ENV } from "../../config/env";

interface VideoRecorderProps {
  onVideoRecorded: (uri: string) => void;
  onCancel: () => void;
}

export function VideoRecorder({ onVideoRecorded, onCancel }: VideoRecorderProps) {
  const cameraRef = useRef<CameraView>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(status === "granted" && audioStatus.status === "granted");
    })();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (recordingTime >= ENV.MAX_VIDEO_DURATION_SECONDS) {
      stopRecording();
    }
  }, [recordingTime]);

  const startRecording = async () => {
    if (!cameraRef.current) return;

    setIsRecording(true);
    setRecordingTime(0);

    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);

    try {
      const video = await cameraRef.current.recordAsync({
        maxDuration: ENV.MAX_VIDEO_DURATION_SECONDS,
      });
      if (video?.uri) {
        onVideoRecorded(video.uri);
      }
    } catch (error) {
      console.error("Recording error:", error);
    }
  };

  const stopRecording = async () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsRecording(false);

    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (hasPermission === null) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Requesting camera permission...</Text>
      </Box>
    );
  }

  if (hasPermission === false) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" padding="$6">
        <Text textAlign="center">
          Camera permission is required to record videos.
        </Text>
        <Button onPress={onCancel} marginTop="$4">
          <ButtonText>Go Back</ButtonText>
        </Button>
      </Box>
    );
  }

  return (
    <Box flex={1} bg="$black">
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing={facing}
        mode="video"
      >
        <VStack flex={1} justifyContent="space-between" padding="$4">
          {/* Top controls */}
          <HStack justifyContent="space-between" alignItems="center">
            <Button variant="link" onPress={onCancel}>
              <ButtonText color="$white">Cancel</ButtonText>
            </Button>

            {isRecording && (
              <Box bg="$error500" paddingHorizontal="$3" paddingVertical="$1" borderRadius="$full">
                <Text color="$white" fontWeight="$bold">
                  {formatTime(recordingTime)} / {formatTime(ENV.MAX_VIDEO_DURATION_SECONDS)}
                </Text>
              </Box>
            )}

            <Pressable onPress={toggleCameraFacing} disabled={isRecording}>
              <Icon as={RotateCcw} color="$white" size="xl" />
            </Pressable>
          </HStack>

          {/* Bottom controls */}
          <HStack justifyContent="center" paddingBottom="$8">
            <Pressable
              onPress={isRecording ? stopRecording : startRecording}
              bg={isRecording ? "$error500" : "$white"}
              width={72}
              height={72}
              borderRadius="$full"
              justifyContent="center"
              alignItems="center"
              borderWidth={4}
              borderColor="$white"
            >
              <Icon
                as={isRecording ? Square : Circle}
                color={isRecording ? "$white" : "$error500"}
                size="xl"
              />
            </Pressable>
          </HStack>
        </VStack>
      </CameraView>
    </Box>
  );
}
```

**Task 3.5.3: Practice Screen**

File: `app/(main)/(tabs)/practice.tsx`
```typescript
import { useState, useCallback } from "react";
import { useRouter } from "expo-router";
import { useMutation } from "convex/react";
import * as ImagePicker from "expo-image-picker";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Spinner,
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@gluestack-ui/themed";
import { Camera, Upload, AlertCircle } from "lucide-react-native";
import { api } from "../../../convex/_generated/api";
import { SPORTS_LIST } from "../../../config/sports-config";
import { VideoRecorder } from "../../../components/video/VideoRecorder";
import { validateVideo, isValidVideoFormat } from "../../../utils/video";
import { ENV } from "../../../config/env";

type Mode = "select" | "record" | "preview" | "uploading";

export default function PracticeScreen() {
  const router = useRouter();
  const generateUploadUrl = useMutation(api.storage.generateUploadUrl);
  const createAnalysis = useMutation(api.analyses.createAnalysis);

  const [mode, setMode] = useState<Mode>("select");
  const [selectedSport, setSelectedSport] = useState(SPORTS_LIST[0].id);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleVideoRecorded = useCallback((uri: string) => {
    setVideoUri(uri);
    setMode("preview");
  }, []);

  const handlePickVideo = async () => {
    setError(null);

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      setError("Gallery permission is required to select videos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });

    if (result.canceled || !result.assets?.[0]) {
      return;
    }

    const asset = result.assets[0];

    // Validate format
    if (!isValidVideoFormat(asset.uri)) {
      setError("Please select an MP4 or MOV video.");
      return;
    }

    // Validate duration
    if (asset.duration && asset.duration > ENV.MAX_VIDEO_DURATION_SECONDS * 1000) {
      setError(`Video must be ${ENV.MAX_VIDEO_DURATION_SECONDS} seconds or less.`);
      return;
    }

    // Validate file size
    const validation = await validateVideo(asset.uri);
    if (!validation.valid) {
      setError(validation.error || "Invalid video");
      return;
    }

    setVideoUri(asset.uri);
    setMode("preview");
  };

  const handleUploadAndAnalyze = async () => {
    if (!videoUri) return;

    setUploading(true);
    setError(null);

    try {
      // Get upload URL
      const uploadUrl = await generateUploadUrl();

      // Upload video
      const response = await fetch(videoUri);
      const blob = await response.blob();

      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          "Content-Type": blob.type || "video/mp4",
        },
        body: blob,
      });

      if (!uploadResponse.ok) {
        throw new Error("Upload failed");
      }

      const { storageId } = await uploadResponse.json();

      // Create analysis
      const analysisId = await createAnalysis({
        videoStorageId: storageId,
        sport: selectedSport,
      });

      // Navigate to analysis view
      router.push(`/(main)/analysis/${analysisId}`);
    } catch (err: any) {
      setError(err.message || "Failed to upload video");
      setMode("preview");
    } finally {
      setUploading(false);
    }
  };

  if (mode === "record") {
    return (
      <VideoRecorder
        onVideoRecorded={handleVideoRecorded}
        onCancel={() => setMode("select")}
      />
    );
  }

  if (uploading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight0">
        <VStack space="md" alignItems="center">
          <Spinner size="large" />
          <Text>Uploading video...</Text>
        </VStack>
      </Box>
    );
  }

  return (
    <Box flex={1} padding="$6" bg="$backgroundLight0" safeArea>
      <VStack space="lg" flex={1}>
        <Heading size="xl">New Practice Session</Heading>

        {/* Sport Selection */}
        <VStack space="sm">
          <Text fontWeight="$medium">Select Sport</Text>
          <Select
            selectedValue={selectedSport}
            onValueChange={setSelectedSport}
          >
            <SelectTrigger>
              <SelectInput placeholder="Select sport" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                {SPORTS_LIST.map((sport) => (
                  <SelectItem
                    key={sport.id}
                    label={sport.name}
                    value={sport.id}
                  />
                ))}
              </SelectContent>
            </SelectPortal>
          </Select>
        </VStack>

        {/* Error Display */}
        {error && (
          <HStack
            space="sm"
            bg="$error100"
            padding="$3"
            borderRadius="$md"
            alignItems="center"
          >
            <Icon as={AlertCircle} color="$error500" />
            <Text color="$error700" flex={1}>
              {error}
            </Text>
          </HStack>
        )}

        {/* Video Selection */}
        {mode === "select" && (
          <VStack space="md" flex={1} justifyContent="center">
            <Button
              size="lg"
              onPress={() => setMode("record")}
              bg="$primary500"
            >
              <Icon as={Camera} color="$white" marginRight="$2" />
              <ButtonText>Record Video</ButtonText>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onPress={handlePickVideo}
            >
              <Icon as={Upload} color="$primary500" marginRight="$2" />
              <ButtonText>Upload from Gallery</ButtonText>
            </Button>
          </VStack>
        )}

        {/* Preview Mode */}
        {mode === "preview" && videoUri && (
          <VStack space="md" flex={1}>
            <Box
              flex={1}
              bg="$backgroundLight200"
              borderRadius="$lg"
              justifyContent="center"
              alignItems="center"
            >
              <Text>Video ready for analysis</Text>
            </Box>

            <Button
              size="lg"
              onPress={handleUploadAndAnalyze}
              bg="$primary500"
            >
              <ButtonText>Analyze Video</ButtonText>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onPress={() => {
                setVideoUri(null);
                setMode("select");
              }}
            >
              <ButtonText>Choose Different Video</ButtonText>
            </Button>
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
```

---

### Epic 3.6: Analysis Display

**Task 3.6.1: Analysis Detail Screen**

File: `app/(main)/analysis/[id].tsx`
```typescript
import { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery, useMutation } from "convex/react";
import { ResizeMode, Video } from "expo-av";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  Text,
  VStack,
  HStack,
  ScrollView,
  Spinner,
  Card,
  Icon,
  Badge,
  BadgeText,
} from "@gluestack-ui/themed";
import { ArrowLeft, RefreshCw, Clock, AlertCircle } from "lucide-react-native";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { ENV } from "../../../config/env";

export default function AnalysisDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const analysis = useQuery(api.analyses.getAnalysis, {
    analysisId: id as Id<"analyses">,
  });
  const retryAnalysis = useMutation(api.analyses.retryAnalysis);

  const [showProcessingNotice, setShowProcessingNotice] = useState(false);
  const [retrying, setRetrying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (analysis?.status === "processing") {
      timer = setTimeout(() => {
        setShowProcessingNotice(true);
      }, ENV.AI_PROCESSING_NOTIFICATION_MS);
    }
    return () => clearTimeout(timer);
  }, [analysis?.status]);

  const handleRetry = async () => {
    if (!id) return;
    setRetrying(true);
    try {
      await retryAnalysis({ analysisId: id as Id<"analyses"> });
    } catch (err) {
      console.error("Retry failed:", err);
    } finally {
      setRetrying(false);
    }
  };

  if (!analysis) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
      </Box>
    );
  }

  const isProcessing = analysis.status === "pending" || analysis.status === "processing";
  const isFailed = analysis.status === "failed";
  const isCompleted = analysis.status === "completed";

  return (
    <Box flex={1} bg="$backgroundLight0" safeArea>
      {/* Header */}
      <HStack padding="$4" alignItems="center" space="md">
        <Button variant="link" onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </Button>
        <VStack flex={1}>
          <Heading size="md">{analysis.sport}</Heading>
          <Text size="sm" color="$textLight500">
            Session {analysis.sessionNumber}
          </Text>
        </VStack>
        <Badge
          variant="solid"
          action={isCompleted ? "success" : isFailed ? "error" : "info"}
        >
          <BadgeText>{analysis.status}</BadgeText>
        </Badge>
      </HStack>

      <ScrollView flex={1}>
        <VStack space="lg" padding="$4">
          {/* Video Player */}
          <Box
            height={200}
            bg="$backgroundLight200"
            borderRadius="$lg"
            overflow="hidden"
          >
            <Video
              source={{ uri: analysis.videoUrl }}
              style={{ flex: 1 }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
            />
          </Box>

          {/* Processing State */}
          {isProcessing && (
            <Card padding="$4">
              <VStack space="md" alignItems="center">
                <Spinner size="large" />
                <Text fontWeight="$medium">Analyzing your video...</Text>
                {showProcessingNotice && (
                  <HStack space="sm" alignItems="center">
                    <Icon as={Clock} size="sm" color="$textLight500" />
                    <Text size="sm" color="$textLight500">
                      Still processing, please wait...
                    </Text>
                  </HStack>
                )}
              </VStack>
            </Card>
          )}

          {/* Failed State */}
          {isFailed && (
            <Card padding="$4" bg="$error50">
              <VStack space="md" alignItems="center">
                <Icon as={AlertCircle} size="xl" color="$error500" />
                <Text fontWeight="$medium" color="$error700">
                  Analysis Failed
                </Text>
                <Text size="sm" color="$error600" textAlign="center">
                  {analysis.errorMessage || "Something went wrong"}
                </Text>
                <Button
                  onPress={handleRetry}
                  isDisabled={retrying}
                  size="sm"
                >
                  <Icon as={RefreshCw} marginRight="$2" />
                  <ButtonText>{retrying ? "Retrying..." : "Retry Analysis"}</ButtonText>
                </Button>
              </VStack>
            </Card>
          )}

          {/* Completed State - Analysis Results */}
          {isCompleted && (
            <VStack space="lg">
              {/* Identified Actions */}
              {analysis.identifiedActions.map((action, index) => (
                <Card key={index} padding="$4">
                  <VStack space="md">
                    <HStack justifyContent="space-between" alignItems="center">
                      <Heading size="sm">{action.action}</Heading>
                      {action.timestamp && (
                        <Badge variant="outline">
                          <BadgeText>{action.timestamp}</BadgeText>
                        </Badge>
                      )}
                    </HStack>

                    <Text>{action.analysis}</Text>

                    <VStack space="sm">
                      <Text fontWeight="$medium" size="sm">
                        Practice Tips:
                      </Text>
                      {action.practiceTips.map((tip, tipIndex) => (
                        <HStack key={tipIndex} space="sm">
                          <Text color="$primary500">{tipIndex + 1}.</Text>
                          <Text flex={1}>{tip}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </Card>
              ))}

              {/* Overall Feedback */}
              {analysis.overallFeedback && (
                <Card padding="$4" bg="$primary50">
                  <VStack space="sm">
                    <Heading size="sm">Overall Feedback</Heading>
                    <Text>{analysis.overallFeedback}</Text>
                  </VStack>
                </Card>
              )}
            </VStack>
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
}
```

---

### Epic 3.7: History Screen

**Task 3.7.1: History Screen with Infinite Scroll**

File: `app/(main)/(tabs)/history.tsx`
```typescript
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { usePaginatedQuery } from "convex/react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Spinner,
  Pressable,
  Badge,
  BadgeText,
} from "@gluestack-ui/themed";
import { api } from "../../../convex/_generated/api";
import { formatDate } from "../../../utils/formatting";

export default function HistoryScreen() {
  const router = useRouter();
  const { results, status, loadMore } = usePaginatedQuery(
    api.analyses.getAnalysisHistory,
    {},
    { initialNumItems: 10 }
  );

  const renderItem = useCallback(
    ({ item }: { item: (typeof results)[0] }) => (
      <Pressable
        onPress={() => router.push(`/(main)/analysis/${item._id}`)}
        bg="$backgroundLight50"
        padding="$4"
        borderRadius="$lg"
        marginBottom="$3"
      >
        <VStack space="sm">
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontWeight="$bold">
              {item.sport} - Session {item.sessionNumber}
            </Text>
            <Badge
              variant="solid"
              size="sm"
              action={
                item.status === "completed"
                  ? "success"
                  : item.status === "failed"
                  ? "error"
                  : "info"
              }
            >
              <BadgeText>{item.status}</BadgeText>
            </Badge>
          </HStack>

          <Text size="sm" color="$textLight500">
            {formatDate(item.createdAt)}
          </Text>

          {item.overallFeedback && (
            <Text numberOfLines={2} color="$textLight600">
              {item.overallFeedback}
            </Text>
          )}

          {item.identifiedActions.length > 0 && (
            <HStack space="sm" flexWrap="wrap">
              {item.identifiedActions.slice(0, 3).map((action, index) => (
                <Badge key={index} variant="outline" size="sm">
                  <BadgeText>{action.action}</BadgeText>
                </Badge>
              ))}
              {item.identifiedActions.length > 3 && (
                <Text size="sm" color="$textLight500">
                  +{item.identifiedActions.length - 3} more
                </Text>
              )}
            </HStack>
          )}
        </VStack>
      </Pressable>
    ),
    [router]
  );

  const handleLoadMore = useCallback(() => {
    if (status === "CanLoadMore") {
      loadMore(10);
    }
  }, [status, loadMore]);

  if (status === "LoadingFirstPage") {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" />
      </Box>
    );
  }

  return (
    <Box flex={1} bg="$backgroundLight0" safeArea>
      <VStack flex={1} padding="$4">
        <Heading size="xl" marginBottom="$4">
          History
        </Heading>

        {results.length === 0 ? (
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text color="$textLight500">No practice sessions yet</Text>
          </Box>
        ) : (
          <FlatList
            data={results}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              status === "LoadingMore" ? (
                <Box padding="$4" alignItems="center">
                  <Spinner />
                </Box>
              ) : null
            }
          />
        )}
      </VStack>
    </Box>
  );
}
```

---

### Epic 3.8: Profile Screen

**Task 3.8.1: Profile Screen**

File: `app/(main)/profile.tsx`
```typescript
import { useRouter } from "expo-router";
import { useQuery } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import {
  Box,
  Button,
  ButtonText,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Avatar,
  AvatarFallbackText,
} from "@gluestack-ui/themed";
import { ArrowLeft, LogOut } from "lucide-react-native";
import { api } from "../../convex/_generated/api";

export default function ProfileScreen() {
  const router = useRouter();
  const { signOut } = useAuthActions();
  const user = useQuery(api.auth.getCurrentUser);

  const handleLogout = async () => {
    await signOut();
    router.replace("/(auth)/login");
  };

  if (!user) {
    return null;
  }

  return (
    <Box flex={1} bg="$backgroundLight0" safeArea>
      <HStack padding="$4" alignItems="center" space="md">
        <Button variant="link" onPress={() => router.back()}>
          <Icon as={ArrowLeft} />
        </Button>
        <Heading size="lg">Profile</Heading>
      </HStack>

      <VStack flex={1} padding="$6" space="lg">
        <VStack alignItems="center" space="md">
          <Avatar size="xl">
            <AvatarFallbackText>
              {user.email?.charAt(0).toUpperCase()}
            </AvatarFallbackText>
          </Avatar>
          <Text fontWeight="$medium">{user.email}</Text>
        </VStack>

        <Box flex={1} />

        <Button
          variant="outline"
          action="negative"
          onPress={handleLogout}
        >
          <Icon as={LogOut} marginRight="$2" color="$error500" />
          <ButtonText color="$error500">Log Out</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
}
```

---

### Epic 3.9: Utility Functions

**Task 3.9.1: Date Formatting Utilities**

File: `utils/formatting.ts`
```typescript
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function formatDateShort(timestamp: number): string {
  const date = new Date(timestamp);
  const now = new Date();
  const diffDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
}

export function generateSessionTitle(
  sport: string,
  timestamp: number,
  sessionNumber: number
): string {
  const date = new Date(timestamp);
  const dateStr = date.toISOString().split("T")[0];
  return `${sport} - ${dateStr} - Session ${sessionNumber}`;
}
```

---

## Phase 4: Testing & Quality Assurance

### Epic 4.1: Testing Setup

**Task 4.1.1: Install Testing Dependencies**
```bash
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
npm install --save-dev @types/jest
```

**Task 4.1.2: Configure Jest**

File: `jest.config.js`
```javascript
module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@gluestack-ui/.*|convex/.*)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};
```

### Epic 4.2: Unit Tests

**Task 4.2.1: Video Validation Tests**

File: `utils/__tests__/video.test.ts`
```typescript
import { isValidVideoFormat } from "../video";

describe("Video Utilities", () => {
  describe("isValidVideoFormat", () => {
    it("accepts MP4 files", () => {
      expect(isValidVideoFormat("video.mp4")).toBe(true);
      expect(isValidVideoFormat("video.MP4")).toBe(true);
    });

    it("accepts MOV files", () => {
      expect(isValidVideoFormat("video.mov")).toBe(true);
      expect(isValidVideoFormat("video.MOV")).toBe(true);
    });

    it("rejects invalid formats", () => {
      expect(isValidVideoFormat("video.avi")).toBe(false);
      expect(isValidVideoFormat("video.wmv")).toBe(false);
      expect(isValidVideoFormat("image.jpg")).toBe(false);
    });
  });
});
```

**Task 4.2.2: Sports Config Tests**

File: `config/__tests__/sports-config.test.ts`
```typescript
import { SPORTS_CONFIG, getSportById, getActionsForSport } from "../sports-config";

describe("Sports Configuration", () => {
  it("includes all expected sports", () => {
    const expectedSports = [
      "tennis",
      "volleyball",
      "pickleball",
      "badminton",
      "golf",
      "weightlifting",
      "ballet",
      "snowboarding",
    ];

    expectedSports.forEach((sport) => {
      expect(SPORTS_CONFIG[sport]).toBeDefined();
    });
  });

  it("each sport has actions defined", () => {
    Object.values(SPORTS_CONFIG).forEach((sport) => {
      expect(sport.actions.length).toBeGreaterThan(0);
    });
  });

  describe("getSportById", () => {
    it("returns sport config for valid ID", () => {
      const sport = getSportById("tennis");
      expect(sport).toBeDefined();
      expect(sport?.name).toBe("Tennis");
    });

    it("returns undefined for invalid ID", () => {
      expect(getSportById("invalid")).toBeUndefined();
    });
  });

  describe("getActionsForSport", () => {
    it("returns actions for valid sport", () => {
      const actions = getActionsForSport("tennis");
      expect(actions).toContain("Serve");
      expect(actions).toContain("Forehand");
    });

    it("returns empty array for invalid sport", () => {
      expect(getActionsForSport("invalid")).toEqual([]);
    });
  });
});
```

---

## Phase 5: Deployment & Configuration

### Epic 5.1: Convex Deployment

**Task 5.1.1: Set Environment Variables in Convex Dashboard**
```
GEMINI_API_KEY=your_gemini_api_key
```

**Task 5.1.2: Deploy Convex Functions**
```bash
npx convex deploy
```

### Epic 5.2: Expo Configuration

**Task 5.2.1: Configure app.json**

File: `app.json`
```json
{
  "expo": {
    "name": "Practice",
    "slug": "practice",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.practice.app",
      "infoPlist": {
        "NSCameraUsageDescription": "Practice needs camera access to record your practice videos.",
        "NSMicrophoneUsageDescription": "Practice needs microphone access to record audio with your practice videos.",
        "NSPhotoLibraryUsageDescription": "Practice needs photo library access to upload your existing practice videos."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.practice.app",
      "permissions": [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO",
        "android.permission.READ_EXTERNAL_STORAGE"
      ]
    },
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "Allow Practice to access your camera to record practice videos.",
          "microphonePermission": "Allow Practice to access your microphone for video audio.",
          "recordAudioAndroid": true
        }
      ],
      [
        "expo-image-picker",
        {
          "photosPermission": "Allow Practice to access your photos to upload practice videos."
        }
      ]
    ]
  }
}
```

### Epic 5.3: Build & Release

**Task 5.3.1: Development Build**
```bash
npx expo start --dev-client
```

**Task 5.3.2: Production Build (EAS)**
```bash
npm install -g eas-cli
eas build --platform all
```

---

## Implementation Order Summary

Execute phases in order, with dependencies noted:

### Phase 1: Project Setup (~1-2 days)
1. Initialize Expo project
2. Install dependencies
3. Create directory structure
4. Configure environment variables
5. Create sports configuration

### Phase 2: Backend (~2-3 days)
1. Define Convex schema
2. Implement authentication
3. Implement file storage
4. Implement analysis CRUD
5. Build AI analysis service with Gemini adapter

### Phase 3: Frontend (~3-4 days)
1. Set up navigation structure
2. Build authentication screens
3. Create onboarding flow
4. Implement home screen
5. Build video capture/upload
6. Create analysis display
7. Implement history with infinite scroll
8. Add profile screen

### Phase 4: Testing (~1 day)
1. Set up testing framework
2. Write unit tests
3. Manual QA testing

### Phase 5: Deployment (~1 day)
1. Configure Convex production
2. Set up Expo build configuration
3. Build and deploy

---

## Notes for AI Agent

### Core Workflow (Ralph Wiggum Style)

1. **One story per session**: Select the highest-priority incomplete story from `user_stories.json`
2. **Implement fully or document blockers**: Either complete all acceptance criteria OR update notes with context
3. **Run all validation checks**: Typecheck, lint, tests must pass before marking `passes: true`
4. **Always commit**: End every session with a git commit (success OR work-in-progress)
5. **Update the JSON**: Always update `user_stories.json` with current status

### Implementation Guidelines

1. **Follow the order**: Complete each task fully before moving to the next
2. **Test incrementally**: Verify each component works before building dependent features
3. **Handle errors gracefully**: Implement proper error handling at each layer
4. **Type safety**: Use TypeScript strictly throughout—no `any` types without justification
5. **Reference Figma**: The onboarding flow should match the FigmaMakePrototypes directory designs
6. **Environment variables**: Never hardcode secrets; always use environment variables
7. **Convex patterns**: Follow Convex best practices for queries, mutations, and actions
8. **Mobile considerations**: Test on both iOS and Android; handle platform differences

### Validation Commands Reference

```bash
# TypeScript check
npx tsc --noEmit

# Lint check
npx eslint . --ext .ts,.tsx

# Run tests
npm test

# Convex validation
npx convex dev --once

# Expo build check
npx expo start --no-dev --minify
```

### Git Commit Message Format

```
US-XXX: <Title>

- <Change 1>
- <Change 2>
- Typecheck: ✅/❌ Lint: ✅/❌ Tests: ✅/❌

Co-Authored-By: Claude <noreply@anthropic.com>
```

### When Stuck

1. Document the blocker in `user_stories.json` notes field
2. Include: file path, line number, error message, what was attempted
3. Commit the notes update
4. End the session—the next session will have context to continue

### Success Criteria

A user story is complete (`passes: true`) when:
- ✅ All acceptance criteria are implemented
- ✅ TypeScript compiles without errors
- ✅ ESLint passes without errors
- ✅ Relevant tests pass
- ✅ App builds successfully (for UI stories)
- ✅ Changes are committed to git
