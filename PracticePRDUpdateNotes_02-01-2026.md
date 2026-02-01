# Practice PRD Update Notes

### Product Requirements Document: Practice

### 1. Introduction & Vision

- Mobile app acting as personal sports coach
- Leveraging AI to provide actionable feedback on physical techniques
- Key change: MVP will support multiple sports
  - Users select sport but not specific action type
  - AI coach identifies actions performed in video and analyzes accordingly
  - Simplifies user experience

### 2. Target Audience

- No changes from original PRD
- Working professionals, college students, casual beginners remain target segments

### 3. Features & Functionality (MVP)

#### 3.1. Core Features (MVP)

- Video Capture
  - In-app recorder automatically stops at 1 minute (not 30 seconds)
  - Configurable environment variable for easy code changes
  - Simple recording interface with start/stop button and timer
  - Video quality remains same as original spec
- Video Upload
  - App rejects videos longer than 1 minute
  - In-app trimming remains out of scope
  - All other upload requirements unchanged
- AI Analysis
  - User selects sport from predefined list (Section 3.3)
  - No specific action type selection required
  - Prompt changes to list all possible action types
  - AI determines relevant action analysis based on video content
  - Video can contain multiple skills per sport (e.g., volleyball set and serve)
  - Prompt should identify action with timestamp if possible
  - Clear button remains present
  - All other AI analysis features unchanged
- Feedback Display
  - Two sections as described in Section 3.2 UX
  - Maintains existing structure
- User Accounts
  - Backend switching from Supabase to Convex
  - Authentication using Convex Auth (not Better Auth)
    - Email and password for MVP
    - OAuth planned for later iterations
  - Decision rationale: avoid managing too many integrations
- Analysis History
  - Endless scrolling list (not paginated)
  - Progressive loading as user scrolls
  - Design aligned with Figma specifications
  - Title auto-generated from sport + date/time + session number
  - Tapping history item shows detailed view with full analysis

#### 3.2. User Interface & Experience (UX)

- New Home Page added as core feature
  - Default screen when logging into app
  - Shows practice session stats and minutes logged
  - Big CTA button for next practice
  - Most recent practice session displayed below CTA
  - Sport picker at top, defaulting to user’s onboarding choice
- Global Navigation Bar
  - Sticky bottom navigation across all screens
  - Three sections: Home (left), Practice (center, big colorful CTA), History (right)
- Onboarding Flow
  - Reference Figma prototype files (to be uploaded)
  - Flow: Home screen → Sport selection → Account creation → Two-screen tutorial → Empty state page
  - Tutorial covers video upload and AI analysis
  - Empty state shows “record your first practice video” CTA
  - No global navbar on initial empty state
  - Camera and gallery permission prompts included

#### 3.3. Supported Sports & Actions

- Adding snowboarding to sport list
- Action types still listed but not user-selectable
- Action types referenced in AI prompts for analysis
- Configuration structure maintained for code mapping
- No general action option

### 4. Technical Requirements

- Platform: Expo React Native with Gluestack UI
  - Using Gluestack for battle-tested mobile development considerations
  - Adapting Figma design system styles to Gluestack components
  - Cross-platform compatibility (web and mobile)
- Backend-as-a-Service: Convex (replacing Supabase)
  - Convex Auth for authentication
  - Convex edge functions
  - All Convex built-in services
- Authentication: Convex Auth with email/password, OAuth later
- Analytics: Removed PostHog for MVP to reduce integrations
- Localization: English only
- Development Tooling: Local development instead of Bolt.new
  - Using Gemini CLI or similar for AI-assisted coding
  - Focus on Expo and Convex stack expertise
- AI Analysis Service
  - Configurable prompt template based on sport
  - Prompt includes all actions but not action-specific
  - Stored in config file for easy modifications
  - Using Gemini 2.0 Pro for hackathon
  - Model adapter architecture maintained

#### 4.1. Database Schema

- Convex database (not Supabase PostgreSQL)
- Key change: removing action type field
- AI to modify schema based on discussed changes
- Focus on sport-based analysis without pre-selected actions

### 5. Implementation Plan (Revised)

- AI-generated implementation plan to follow
- Based on all modifications discussed in session

### 6. MVP Scope Decisions

- Multiple sports support confirmed for MVP
- User selects sport only, AI determines actions
- Structured AI response format maintained
- Video storage and retry functionality preserved

### 7. Future Considerations

#### 7.1. Monetization

- Preserved from original PRD for future planning

#### 7.2. User Video Storage & Progress Tracking

- Maintained indefinite storage strategy
- Supports retry feature and future development

#### 7.3. Social & Sharing Features

- Out of scope for MVP, preserved for post-MVP roadmap

#### 7.4. Expanding the Coaching & Practice Ecosystem

- Long-term vision maintained for holistic training platform

### Key URLs Referenced

- Gluestack UI: [https://gluestack.io](https://gluestack.io)
- PostHog: [https://posthog.com](https://posthog.com)
- Bolt.new: [https://bolt.new](https://bolt.new)
- Implementation Guide: [https://guide.md](https://guide.md)

---

Chat with meeting transcript: [https://notes.granola.ai/t/3fa056d7-5b6c-4a24-83de-bfb39e8e7a57-00demib2](https://notes.granola.ai/t/3fa056d7-5b6c-4a24-83de-bfb39e8e7a57-00demib2)