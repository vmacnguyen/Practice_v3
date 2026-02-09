# Environment Variables

This document explains how environment variables work in this project and how to configure them properly.

## Architecture Overview

This project uses **two separate environment variable systems**:

1. **Frontend (React/Expo)** - Variables accessible in the app UI
2. **Backend (Convex)** - Variables accessible in server functions

## Frontend Environment Variables

### Source Files

- **`.env.local`** - Local development environment variables (git-ignored)
- **`config/env.ts`** - TypeScript interface that provides type-safe access to environment variables

### How It Works

```
.env.local → Expo loads → process.env.EXPO_PUBLIC_* → config/env.ts → Your code
```

### Naming Convention

Frontend variables **must** use the `EXPO_PUBLIC_` prefix for Expo to load them:

```bash
# .env.local
EXPO_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
EXPO_PUBLIC_DEV_BYPASS_AUTH=true
```

### Accessing Variables

**✅ CORRECT** - Use the ENV config:
```typescript
import { ENV } from '../config/env';

const url = ENV.CONVEX_URL;
const bypass = ENV.DEV_BYPASS_AUTH;
```

**❌ WRONG** - Don't use process.env directly:
```typescript
// This bypasses type safety and can cause build issues
const url = process.env.EXPO_PUBLIC_CONVEX_URL;
```

### Available Frontend Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `EXPO_PUBLIC_CONVEX_URL` | Convex deployment URL | (required) |
| `EXPO_PUBLIC_CONVEX_SITE_URL` | Convex site URL for HTTP actions | (required) |
| `EXPO_PUBLIC_DEV_BYPASS_AUTH` | Enable auth bypass for development | `false` |
| `EXPO_PUBLIC_MAX_VIDEO_DURATION_SECONDS` | Max video recording duration | `60` |
| `EXPO_PUBLIC_MAX_VIDEO_FILE_SIZE_MB` | Max video file size | `150` |
| `EXPO_PUBLIC_AI_ANALYSIS_TIMEOUT_MS` | AI analysis timeout | `60000` |
| `EXPO_PUBLIC_AI_PROCESSING_NOTIFICATION_MS` | AI notification timeout | `15000` |

### Web Deployment

For web deployment using `npx expo export --platform web`:

1. Environment variables are **baked into the build at build time**
2. Changing environment variables requires a **rebuild**
3. `.env.local` is loaded automatically by Expo
4. You can also set variables inline: `VAR=value npx expo export --platform web`

**Common Issues:**

- **Stale environment variables**: Clear caches and rebuild
  ```bash
  rm -rf dist .expo node_modules/.cache
  npx expo export --platform web
  ```

- **Browser caching**: Hard refresh (`Ctrl+Shift+R`) or clear localStorage

- **Environment variable not loading**: Ensure variables start with `EXPO_PUBLIC_`

## Backend Environment Variables (Convex)

### Where to Configure

Backend variables are set in the **Convex Dashboard**, not in `.env.local`:

1. Go to your Convex deployment in the dashboard
2. Navigate to Settings → Environment Variables
3. Add the required variables

### Available Backend Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `CONVEX_SITE_URL` | Convex site URL for auth callbacks | `https://your-deployment.convex.site` |
| `DEV_BYPASS_AUTH` | Enable auth bypass on server | `true` |
| `GEMINI_API_KEY` | Google Gemini API key for AI analysis | `your-api-key` |

### Backend Access Pattern

```typescript
// convex/auth.ts, http.ts, etc.
const siteUrl = process.env.CONVEX_SITE_URL;
const bypassEnabled = process.env.DEV_BYPASS_AUTH === 'true';
```

## Dev Bypass Feature

The dev bypass allows skipping authentication during development. It requires **both** frontend and backend configuration:

### Frontend (`.env.local`)
```bash
EXPO_PUBLIC_DEV_BYPASS_AUTH=true
```

### Backend (Convex Dashboard)
```
DEV_BYPASS_AUTH=true
```

### Implementation Details

**Frontend** (`hooks/useAuth.ts`):
```typescript
const isBypassEnabled = ENV.DEV_BYPASS_AUTH;
const isAuthenticated = isBypassEnabled || realIsAuthenticated;
```

**Backend** (`convex/auth.ts`):
```typescript
if (bypassEnv === "true") {
  // Return dev user instead of requiring authentication
  const devUser = await ctx.db
    .query("users")
    .withIndex("by_email", (q) => q.eq("email", "vivien14@test.com"))
    .first();
  return devUser?._id ?? null;
}
```

## EAS Build (iOS/Android)

This project previously used `eas.json`, but it has been removed because:

1. You're using `npx expo export --platform web` locally
2. EAS is not needed for web deployments
3. Hardcoding environment variables in `eas.json` creates confusion

If you need iOS/Android builds in the future, you can:

1. Recreate `eas.json` without hardcoded values
2. Set environment variables in the EAS Dashboard (web UI)
3. Run: `npx eas build --platform ios` or `npx eas build --platform android`

## Troubleshooting

### Issue: Environment variables not loading

**Symptoms:** App uses default values or old configuration

**Solution:**
1. Check `.env.local` exists in `practice/` directory
2. Verify variables use `EXPO_PUBLIC_` prefix
3. Clear caches and rebuild:
   ```bash
   rm -rf dist .expo node_modules/.cache
   npx expo export --platform web
   ```

### Issue: Web deployment has old configuration

**Symptoms:** Browser shows old Convex URLs or incorrect settings

**Solution:**
1. Clear browser localStorage:
   ```javascript
   localStorage.clear()
   ```
2. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check build was fresh (rebuild with `npx expo export --platform web`)

### Issue: Dev bypass not working

**Symptoms:** Still required to sign in despite setting `EXPO_PUBLIC_DEV_BYPASS_AUTH=true`

**Solution:**
1. Check **both** frontend and backend are configured:
   - Frontend: `EXPO_PUBLIC_DEV_BYPASS_AUTH=true` in `.env.local`
   - Backend: `DEV_BYPASS_AUTH=true` in Convex Dashboard
2. Verify frontend uses `ENV.DEV_BYPASS_AUTH` (not `process.env`)
3. Clear browser cache and localStorage

### Issue: Mixed environment variables

**Symptoms:** Some env vars work, others don't

**Common cause:** Using `process.env.EXPO_PUBLIC_*` directly in code

**Solution:** Always access via `ENV` config:
```typescript
// ❌ Wrong
const url = process.env.EXPO_PUBLIC_CONVEX_URL;

// ✅ Correct
import { ENV } from '../config/env';
const url = ENV.CONVEX_URL;
```

## File Structure

```
practice/
├── .env.local                    # Frontend env vars (git-ignored)
├── .env.local.example            # Template for required env vars
├── config/
│   └── env.ts                   # Type-safe env var interface
├── convex/
│   ├── auth.ts                   # Backend auth (uses process.env)
│   ├── http.ts                   # Backend HTTP routes (uses process.env)
│   └── services/
│       └── adapters/
│           └── geminiAdapter.ts  # AI service (uses process.env.GEMINI_API_KEY)
```

## Security Notes

- **Never commit** `.env.local` files with real API keys
- **Backend-only variables** (like `GEMINI_API_KEY`) should be in Convex Dashboard, not `.env.local`
- `EXPO_PUBLIC_` variables are **visible in the browser**, never store secrets there
- Use **Convex functions** as a secure layer for sensitive operations
