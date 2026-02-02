/// <reference types="vitest/globals" />
import { describe, test, expect, vi, beforeEach } from "vitest";
import { analyzeWithGemini } from "./geminiAdapter";

// Hoist mocks so they can be used in the factory
const { generateContentMock, getGenerativeModelMock } = vi.hoisted(() => {
  const generateContent = vi.fn();
  const getGenerativeModel = vi.fn();
  return { 
    generateContentMock: generateContent,
    getGenerativeModelMock: getGenerativeModel
  };
});

// Mock the GoogleGenerativeAI SDK using a class to support 'new'
vi.mock("@google/generative-ai", () => {
  return {
    GoogleGenerativeAI: class {
      constructor(apiKey: string) {}
      getGenerativeModel = getGenerativeModelMock;
    }
  };
});

// Mock fetch for video downloading
global.fetch = vi.fn() as any;

describe("Gemini Adapter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.GEMINI_API_KEY = "test-key";
    
    // Default mock response setup
    getGenerativeModelMock.mockReturnValue({
      generateContent: generateContentMock
    });

    generateContentMock.mockResolvedValue({
      response: {
        text: () => JSON.stringify({
          identified_actions: [
            {
              action: "Serve",
              timestamp: "0:01",
              analysis: "Good form",
              practice_tips: ["Keep it up"]
            }
          ],
          overall_feedback: "Great job"
        })
      }
    });
  });

  test("analyzeWithGemini parses valid JSON response correctly", async () => {
    (global.fetch as any).mockResolvedValue({
      ok: true,
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(8))
    });

    const result = await analyzeWithGemini("Analyze this", "https://example.com/video.mp4");

    expect(result.overall_feedback).toBe("Great job");
    expect(result.identified_actions[0].action).toBe("Serve");
    
    expect(getGenerativeModelMock).toHaveBeenCalledWith({ model: "gemini-1.5-pro" });
  });

  test("analyzeWithGemini handles markdown code blocks in response", async () => {
    generateContentMock.mockResolvedValue({
      response: {
        text: () => "```json\n" + JSON.stringify({
          identified_actions: [
            {
              action: "Serve",
              timestamp: "0:01",
              analysis: "Good form",
              practice_tips: ["Keep it up"]
            }
          ],
          overall_feedback: "Clean JSON"
        }) + "\n```"
      }
    });

    (global.fetch as any).mockResolvedValue({
      ok: true,
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(8))
    });

    const result = await analyzeWithGemini("Analyze this", "https://example.com/video.mp4");
    expect(result.overall_feedback).toBe("Clean JSON");
  });

  test("analyzeWithGemini throws if API key is missing", async () => {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;
    await expect(analyzeWithGemini("prompt", "url")).rejects.toThrow("GEMINI_API_KEY not configured");
    process.env.GEMINI_API_KEY = originalKey;
  });
});
