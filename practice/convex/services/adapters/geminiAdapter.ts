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
  console.log(`[GeminiAdapter] Starting analysis for: ${videoUrl}`);
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  // Using gemini-2.5-pro as requested
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  // Fetch video
  console.log("[GeminiAdapter] Fetching video...");
  const videoResponse = await fetch(videoUrl);
  if (!videoResponse.ok) {
    throw new Error(`Failed to fetch video from storage: ${videoResponse.statusText}`);
  }
  const videoBuffer = await videoResponse.arrayBuffer();
  console.log(`[GeminiAdapter] Fetched video: ${videoBuffer.byteLength} bytes`);
  
  if (videoBuffer.byteLength > 20 * 1024 * 1024) {
    console.warn("[GeminiAdapter] Video exceeds 20MB inline limit!");
  }

  // Efficiently convert ArrayBuffer to Base64
  let binary = '';
  const bytes = new Uint8Array(videoBuffer);
  const len = bytes.byteLength;
  const chunkSize = 32768; 
  
  for (let i = 0; i < len; i += chunkSize) {
    const chunk = bytes.subarray(i, Math.min(i + chunkSize, len));
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }
  
  const videoBase64 = btoa(binary);
  console.log(`[GeminiAdapter] Base64 generated. Prefix: ${videoBase64.substring(0, 50)}...`);

  // Force mp4 to ensure compatibility with inline data
  const mimeType = "video/mp4";
  console.log(`[GeminiAdapter] Using MIME type: ${mimeType}`);

  const contentParts = [
    {
      inlineData: {
        mimeType,
        data: videoBase64,
      },
    },
    { text: prompt },
  ];

  console.log("[GeminiAdapter] Sending request to Gemini...");
  
  try {
    const result = await model.generateContent(contentParts);
    console.log("[GeminiAdapter] Request successful. Processing response...");
    
    const response = result.response;
    const text = response.text();
    // ... rest of the parsing logic
    
    // Extract JSON from response (handle markdown code blocks)
    let jsonString = text;
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonString = jsonMatch[1].trim();
    }

    try {
      const parsed = JSON.parse(jsonString) as AnalysisResult;
      // ... validations ...
      if (!parsed.identified_actions || !Array.isArray(parsed.identified_actions)) {
        throw new Error("Invalid response: missing identified_actions array");
      }
      return parsed;
    } catch (parseError) {
      console.error("[GeminiAdapter] Parse Error. Raw Text:", text);
      throw parseError;
    }

  } catch (apiError: any) {
    console.error("[GeminiAdapter] API Error Details:", {
      status: apiError.status,
      statusText: apiError.statusText,
      message: apiError.message,
      // Log headers or other details if available
    });
    throw apiError;
  }
}
