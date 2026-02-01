# **Product Requirements Document: Practice**

## **1\. Introduction & Vision**

This document outlines the revised requirements for the "Practice" mobile application. The original PRD was scoped for a hackathon; this revision refocuses the project on an independent, simpler MVP designed to rapidly test the core value proposition.

**Vision:** To create a mobile application that acts as a personal sports coach, leveraging AI to provide actionable feedback on physical techniques across multiple sports and physical activities. Users can capture or upload short video clips of their practice sessions and receive expert-level coaching to help them improve.

**Problem:** Many amateur athletes and sports enthusiasts practice without access to immediate, high-quality feedback, slowing their improvement. Key barriers include:

* Private lessons or classes are expensive in both time and money.
* Scheduling lessons can be difficult for busy professionals.
* Existing feedback loops are slow, or feedback is biased.
* Athletes may feel self-conscious or lack awareness of their own form, preventing them from seeking help.

**Solution:** This app will provide users with instant, AI-driven analysis of their form and technique. The core value proposition is to provide **faster**, **cheaper**, and **more flexible** feedback that is "directionally correct" (similar to a Duolingo model) and available on-demand, rather than replacing a human coach. The MVP will support **multiple sports and physical activities**, allowing users to select their sport while the **AI automatically identifies and analyzes the specific actions performed** in the video.

## **2\. Target Audience**

The MVP will be tested with the following user segments, ordered by priority:

1. **Working professionals:** Individuals who participate in recreational sports or physical activities and take their practice seriously. They are at an intermediate skill level and are motivated by improvement, competition, and receiving validation from peers.
2. **College students:** Students playing in intramural leagues or practicing individual sports/activities with similar motivations to the primary segment.
3. **Casual beginners:** Young adults who are new to a sport or physical activity and want to learn proper fundamentals and technique.

## **3\. Features & Functionality (MVP)**

### **3.1. Core Features (MVP)**

* **Video Capture:**
  * An in-app recorder that automatically stops recording at the **1-minute** mark (configurable via environment variable `MAX_VIDEO_DURATION_SECONDS`).
  * A simple recording interface with a start/stop button and a timer.
  * Video will be recorded at a default of **720p at 30fps** to balance quality and file size.
* **Video Upload:**
  * Users can upload existing video clips from their phone's gallery.
  * The app will **reject** videos longer than 1 minute. In-app trimming is out of scope for the MVP.
  * The app will **reject** videos larger than **150MB** in file size.
  * The app will support common video formats (e.g., MP4, MOV).
* **AI Analysis:**
  * Before analysis, the user will select their **sport** from a predefined list (see Section 3.3 for supported sports).
  * **No action type selection is required** — the AI will automatically identify the specific actions performed in the video and provide targeted analysis for each.
  * Videos may contain **multiple skills per sport** (e.g., a volleyball video with both sets and serves). The AI will identify each action with its timestamp when possible.
  * A clear "Analyze" button will be present after a video is captured or selected and sport is chosen.
  * The app will display a loading/processing state while the analysis is running.
  * The app will display a "Still processing..." notification after **15 seconds** of analysis time.
  * The analysis will be performed by the backend "AI Analysis Service".
  * **Error Handling:** If the AI response fails to parse as valid JSON or doesn't match the expected schema, the backend will **automatically retry once** before returning an error. If the retry also fails, the app will notify the user with a generic "Analysis failed" message and provide a **"Retry" button** to re-run the analysis on the already-uploaded video.
* **Feedback Display:**
  * The AI-generated coaching feedback will be displayed in a clear, easy-to-read format.
  * The feedback should be presented alongside the video for easy reference.
* **User Accounts:**
  * Users will sign up and sign in using **email and password**, managed by Convex Auth.
  * A simple profile screen that provides the ability to log out.
  * Password management (e.g., "Forgot Password") and account deletion are out of scope for the MVP.
  * OAuth authentication is planned for later iterations.
* **Analysis History:**
  * Users can view an **endless scrolling list** of their past analyses with progressive loading as the user scrolls.
  * Each item in the history will be text-only, showing a title/date and a snippet of the feedback.
  * The title for each history item will be automatically generated based on the selected sport, date/time, and session number (e.g., "Tennis \- 2025-09-15 \- Session 1").
  * Tapping on a history item will take the user to a detailed view showing the full analysis text.

### **3.2. User Interface & Experience (UX)**

* **Home Page:**
  * The default screen when logging into the app.
  * Displays practice session stats and minutes logged.
  * Features a prominent CTA button for starting the next practice session.
  * Shows the most recent practice session below the CTA.
  * Includes a sport picker at the top, defaulting to the user's onboarding choice.
* **Global Navigation Bar:**
  * A sticky bottom navigation bar present across all screens.
  * Three sections: **Home** (left), **Practice** (center, prominent colorful CTA), **History** (right).
* **Onboarding Flow:**
  * Reference Figma Make prototype files in the **FigmaMakePrototypes** repository (TODO: Add link when available).
  * Flow: Home screen → Sport selection → Account creation → Two-screen tutorial → Empty state page.
  * Tutorial covers video upload and AI analysis features.
  * Empty state shows "Record your first practice video" CTA.
  * Global navbar is hidden on the initial empty state.
  * Camera and gallery permission prompts are included in the flow.
* **Analysis View:** A split-screen or tabbed view showing the user's video on one side and the structured AI feedback on the other.
* **Analysis Setup:** Before a user can press the final 'Analyze' button, they will be prompted to select their sport from a dropdown menu. The AI will automatically identify and analyze the specific actions performed in the video.
* **Permission Prompts:** The app will use expo-permissions (or equivalent) to request camera and gallery access, providing clear, custom rationale messages as per iOS/Android guidelines.

### **3.3. Supported Sports & Actions**

The MVP will support the following sports, each with a predefined set of action types that the AI can identify and analyze. **Users select only the sport** — the AI automatically identifies which actions are performed in the video. This configuration is hard-coded in the application but structured to allow easy extension in future versions.

| Sport | Action Types (AI-Identified) |
|-------|------------------------------|
| **Tennis** | Serve, Forehand, Backhand, Volley, Overhead |
| **Volleyball** | Serve, Set, Spike/Hit, Pass/Bump, Block |
| **Pickleball** | Serve, Dink, Drive, Volley, Third Shot Drop |
| **Badminton** | Serve, Clear, Smash, Drop Shot, Net Play |
| **Golf** | Drive, Iron Shot, Chip, Putt, Bunker Shot |
| **Weightlifting** | Squat, Deadlift, Bench Press, Overhead Press, Clean & Jerk |
| **Ballet** | Pirouette, Grand Jeté, Arabesque, Plié, Fouetté |
| **Snowboarding** | Carving Turns, Ollies, 180s/360s, Rails/Boxes, Jumps, Butters |

**Configuration Structure:** The sports and actions will be defined in a configuration file (e.g., `sports-config.ts`) that exports a structured object mapping each sport to its available actions. This enables:
* Easy addition of new sports or actions without modifying core logic
* Type-safe access to sport/action combinations throughout the app
* Centralized management of sport-specific prompt customizations
* Providing the AI with the full list of possible actions for each sport to enable accurate identification

## **4\. Technical Requirements**

* **Platform:** Expo React Native.
* **UI Framework:** [Gluestack UI](https://gluestack.io/) for the component library to ensure a consistent and accessible design system. Gluestack provides battle-tested mobile development considerations and cross-platform compatibility (web and mobile). The Figma design system styles will be adapted to Gluestack components.
* **Backend-as-a-Service (BaaS):** Convex. This will handle the database, file storage, server-side functions (Convex edge functions), and Authentication (Convex Auth).
* **Authentication:** Convex Auth, configured for **email and password** authentication for the MVP. OAuth authentication is planned for later iterations.
* **Analytics:** Analytics integration is **out of scope for the MVP** to reduce the number of integrations. This will be revisited post-MVP.
* **Localization:** The MVP will be **English-only** with hardcoded strings. Localization infrastructure is out of scope.
* **Development Tooling:** Local development using AI-assisted coding tools (e.g., Gemini CLI) with focus on Expo and Convex stack expertise.  
* **AI Analysis Service:**
  * **Architecture:** The backend will feature a modular "Analysis Service" acting as an abstraction layer. The primary Convex edge function will not call a specific model API directly. Instead, it will pass the request to this service.
  * **Standardized I/O:** This service will operate on a standardized JSON contract for output that includes identified actions with timestamps and corresponding analysis.
  * **Configurable Prompt Template:** The service will use a sport-aware prompt template that accepts `{sport}` and `{action_types}` (the full list of possible actions for that sport) as parameters. The AI is responsible for identifying which actions are performed in the video and providing analysis for each. A sample prompt template:

    ```
    You are an expert {sport} coach. Analyze the provided video clip of a user practicing {sport}.

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
    }
    ```

  * **Prompt Configuration:** The prompt template will be stored in a configuration file or environment variable (`AI_PROMPT_TEMPLATE`) to allow easy modification without code changes. Sport-specific prompt variations can be added in future versions if needed.
  * **Timeout Handling:** The Convex edge function must have a **60-second** execution timeout. These timers (15s notification, 60s timeout) should be easily configurable as environment variables.
  * **Model Adapters:** The service will route requests to specific "Model Adapters." Each adapter is responsible for communicating with a specific AI model API (e.g., Gemini, OpenAI Vision, a custom computer vision pipeline) and conforming its response to the standardized output format.
  * **Initial Implementation:** The MVP will be built with a single Model Adapter for **Gemini 3 Pro**. The architecture ensures new adapters can be added without changing the core application logic.

### **4.1. Database Schema**

The Convex database will use the following schema for storing analyses:

**Table: `analyses`**

| Field | Type | Description |
|-------|------|-------------|
| `_id` | `Id<"analyses">` | Primary key (auto-generated by Convex) |
| `userId` | `Id<"users">` | Reference to Convex Auth users |
| `videoUrl` | `string` | URL to the video in Convex Storage |
| `sport` | `string` | Selected sport (e.g., "Tennis", "Golf") |
| `identifiedActions` | `array` | Array of AI-identified actions with their analyses (see structure below) |
| `overallFeedback` | `string` | General observations about the session |
| `rawResponse` | `object` | Complete raw AI response for debugging/reprocessing |
| `status` | `string` | Analysis status: "pending", "completed", "failed" |
| `sessionNumber` | `number` | Session number for the day (for title generation) |
| `createdAt` | `number` | Timestamp of creation |
| `updatedAt` | `number` | Timestamp of last update |

**`identifiedActions` Array Structure:**
```typescript
{
  action: string;        // Name of the identified action (e.g., "Serve", "Forehand")
  timestamp: string | null;  // Approximate timestamp or null
  analysis: string;      // Analysis of form for this action
  practiceTips: string[]; // Array of actionable tips
}
```

**Indexes:**
- `by_user` on `userId` (for filtering by user)
- `by_user_and_created` on `[userId, createdAt]` (for efficient history queries with sorting)

**Authorization:** Convex functions will enforce that users can only read/write their own analyses.

## **5\. Implementation Plan (Revised)**

This project will be developed using an AI coding agent. For a detailed, machine-readable breakdown of epics, user stories, and technical tasks, please refer to the companion document: **AI\_Implementation\_Guide.md**. That guide contains the specific instructions for file creation, code implementation, and service configuration.

## **6\. MVP Scope Decisions**

This section clarifies key decisions for this MVP.

* **Specificity of AI Prompts:**
  * **\[DECISION\]** The app will support multiple sports (Tennis, Volleyball, Pickleball, Badminton, Golf, Weightlifting, Ballet, Snowboarding) for the MVP. The user will select their sport only — **the AI will automatically identify and analyze the specific actions performed in the video**. This simplifies the user experience while still providing clear context for the AI prompt.
* **User Data & Privacy:**
  * **\[DECISION\]** The app will store analysis history (the text feedback) and **all user-uploaded videos indefinitely**. This is to enable the "Retry Analysis" feature in case of failure and to build the foundation for post-MVP features like progress tracking. This policy must be made clear to the user in the terms of service.
* **Scope of Feedback:**
  * **\[DECISION\]** The AI model will be prompted to return a JSON object with:
    * `identified_actions`: An array of objects, each containing the action name, timestamp, analysis, and practice tips for that specific action.
    * `overall_feedback`: A string containing general observations about the session.
  * This structured format allows the AI to analyze multiple actions in a single video and present them clearly in the UI.
* **Video Constraints:**
  * **\[DECISION\]** The maximum video length for analysis is **1 minute** (configurable via `MAX_VIDEO_DURATION_SECONDS` environment variable).
    * The in-app camera will be limited to a 1-minute recording.
    * The app will **reject** videos longer than 1 minute. In-app video trimming is out of scope for the MVP.
    * This duration accommodates activities like ballet sequences, weightlifting sets, or multi-skill practice sessions that may require more time to capture.
* **Offline Mode:**
  * **\[DECISION\]** Offline support (e.g., queueing uploads) is **out of scope for the MVP**. The app requires an active internet connection to upload and analyze videos.

## **7\. Future Considerations**

### **7.1. Monetization**

Monetization is out of scope for the initial MVP to focus on testing the core value prop. The following strategies are preserved here for future planning.

* **Paywall & Subscriptions:**  
  * **Free Tier:** New users receive 5 free analysis credits.  
  * **Subscription:** After the free credits are used, users will be prompted to subscribe. The initial plan will be $5/month for 25 analysis credits.  
* **Tiered Subscriptions:**  
  * **Hobbyist Tier:** The initial $5/month for 25 analyses.  
  * **Pro/Coach Tier:** A higher-priced plan (e.g., $15/month) for more serious users, offering a larger number of credits (e.g., 100/month).  
* **Pay-As-You-Go (PAYG):**  
  * Offer non-expiring credit packs for one-time purchase.  
* **Flexible Crediting Strategies:**  
  * **Rollover Credits:** Allow subscribers to roll over a certain number of unused credits.  
  * **Top-Up Credits:** Allow active subscribers who run out of credits to purchase additional credits.  
  * **Referral Bonuses:** Offer free credits to users who successfully refer new subscribers.

### **7.2. User Video Storage & Progress Tracking**

The decision to store user videos long-term involves significant trade-offs between user-facing features, cost, and complexity.

* **MVP Stance:** For the MVP, videos will be **stored indefinitely** to support the retry feature and future development.  
* **Post-MVP Vision:** The *active use* of this stored video data is a high-priority feature for the post-MVP roadmap. This storage unlocks:  
  * **Visual Progress Tracking:** Allowing users to compare old and new videos side-by-side to see their improvement.  
  * **Re-Analysis with New Models:** Offering users the ability to re-run analysis on old videos as the AI models improve.  
  * **Data for Custom Models:** Building a proprietary dataset is a significant long-term strategic asset for training custom, more accurate, and cost-effective analysis models.

### **7.3. Social & Sharing Features**

Building on the foundation of user accounts and video storage, social features can transform the app from a solo-training tool into a community platform, driving engagement and organic growth.

* **MVP Stance:** No social features will be included in the MVP.  
* **Post-MVP Vision:**  
  * **Social Logins:** Introduce one-click sign-in options (Google, Apple, etc.) to reduce friction for new users.  
  * **Share Analysis:** Allow users to share a specific analysis (video \+ AI feedback) via a unique link.  
  * **Team/Group Functionality:** Enable users to create or join private groups for their teams to share analyses for peer feedback and encouragement.  
  * **Peer Feedback:** Allow users within a group to leave comments and reactions on shared analyses.  
  * **Highlight Reels:** Give users the ability to select their best clips and compile them into a shareable highlight reel.

### **7.4. Expanding the Coaching & Practice Ecosystem**

Beyond analysis and social features, the long-term vision is to transform the app into a holistic training platform that actively connects users and guides their development.

* **MVP Stance:** The MVP is focused solely on automated AI feedback.  
* **Post-MVP Vision:**  
  * **Coach Marketplace:** Introduce a feature to connect users with vetted human coaches for personalized sessions. The app can use analysis data to suggest coaches who specialize in a player's specific areas of weakness.  
  * **Peer-to-Peer Practice Matching:** Develop a system for users to find and connect with other local players of a similar skill level who are looking to practice specific drills.  
  * **AI-Generated Practice Plans:** Move from reactive feedback to proactive guidance. The AI will generate personalized weekly practice plans based on analysis history. This could include specific drills, workout routines, and scheduling assistance through integrations with calendars, fitness apps, and other lifestyle tools.  
  * **Affiliate E-commerce & Gear Recommendations:** Develop a recommendation engine that suggests relevant gear, apparel, or training aids from partner brands based on the AI analysis. For example, if a user's passing form is consistently low, the app could recommend a specific type of practice ball. This provides a new revenue stream through affiliate links and sponsorships while offering genuine value to the user.  
  * 