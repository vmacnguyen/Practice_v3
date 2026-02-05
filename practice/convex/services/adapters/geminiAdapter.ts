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

  // 1. Upload Video to Gemini File API via simple fetch
  // This avoids loading the entire file into memory as Base64
  console.log("[GeminiAdapter] Fetching video for upload...");
  const videoResponse = await fetch(videoUrl);
  if (!videoResponse.ok) throw new Error("Failed to fetch video");
  
  const videoBlob = await videoResponse.blob();
  const numBytes = videoBlob.size;
  console.log(`[GeminiAdapter] Video size: ${numBytes} bytes`);

  // Initial Resumable Upload Request
  console.log("[GeminiAdapter] Starting upload to Gemini...");
  const uploadUrl = `https://generativelanguage.googleapis.com/upload/v1beta/files?key=${apiKey}`;
  
  // Create the initial metadata request
  const metadata = {
    file: {
      display_name: "practice_session_video",
    }
  };

  // Perform a multipart upload (simplest for < 200MB usually)
  // But standard fetch with body=Blob is best for memory
  
  // We will use the 'media' upload type which is simpler for this context if supported, 
  // but the standard /upload endpoint supports raw binary with appropriate headers.
  
  const uploadResponse = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      "X-Goog-Upload-Protocol": "raw",
      "X-Goog-Upload-Command": "start, upload, finalize",
      "X-Goog-Upload-Header-Content-Length": numBytes.toString(),
      "X-Goog-Upload-Header-Content-Type": "video/mp4",
      "Content-Type": "video/mp4",
    },
    body: videoBlob,
  });

  if (!uploadResponse.ok) {
    const errText = await uploadResponse.text();
    throw new Error(`Gemini Upload Failed: ${uploadResponse.status} - ${errText}`);
  }

  const uploadResult = await uploadResponse.json();
  const fileUri = uploadResult.file.uri;
  const fileName = uploadResult.file.name; // resource name
  console.log(`[GeminiAdapter] Upload successful. URI: ${fileUri}`);

  // 2. Poll for processing completion
  console.log("[GeminiAdapter] Waiting for video processing...");
  let state = "PROCESSING";
  while (state === "PROCESSING") {
    await new Promise(r => setTimeout(r, 2000));
    const getFileUrl = `https://generativelanguage.googleapis.com/v1beta/${fileName}?key=${apiKey}`;
    const fileCheck = await fetch(getFileUrl);
    const fileData = await fileCheck.json();
    state = fileData.state;
    if (state === "FAILED") {
      throw new Error("Video processing failed on Gemini servers.");
    }
  }
  console.log("[GeminiAdapter] Video processing complete.");

  // 3. Generate Content using the File URI
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  const contentParts = [
    {
      fileData: {
        mimeType: "video/mp4",
        fileUri: fileUri,
      },
    },
    { text: prompt },
  ];

  console.log("[GeminiAdapter] Sending analysis request...");
  
  try {
    const result = await model.generateContent(contentParts);
    console.log("[GeminiAdapter] Request successful. Processing response...");
    
    const response = result.response;
    const text = response.text();
    
    // Extract JSON from response
    let jsonString = text;
    const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonString = jsonMatch[1].trim();
    }

    const parsed = JSON.parse(jsonString) as AnalysisResult;
    return parsed;

  } catch (apiError: any) {
    console.error("[GeminiAdapter] Analysis Error:", apiError);
    throw apiError;
  }
}
