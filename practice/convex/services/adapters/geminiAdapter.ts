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
  // Using gemini-1.5-pro which supports video input
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  // Fetch video and convert to base64
  const videoResponse = await fetch(videoUrl);
  if (!videoResponse.ok) {
    throw new Error(`Failed to fetch video from storage: ${videoResponse.statusText}`);
  }
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

  try {
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
  } catch (error) {
    console.error("Failed to parse Gemini response:", text);
    throw new Error(`Failed to parse AI response: ${error instanceof Error ? error.message : String(error)}`);
  }
}
