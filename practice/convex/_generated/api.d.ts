/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as analyses from "../analyses.js";
import type * as auth from "../auth.js";
import type * as services_adapters_geminiAdapter from "../services/adapters/geminiAdapter.js";
import type * as services_analysisService from "../services/analysisService.js";
import type * as services_promptTemplate from "../services/promptTemplate.js";
import type * as storage from "../storage.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  analyses: typeof analyses;
  auth: typeof auth;
  "services/adapters/geminiAdapter": typeof services_adapters_geminiAdapter;
  "services/analysisService": typeof services_analysisService;
  "services/promptTemplate": typeof services_promptTemplate;
  storage: typeof storage;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
