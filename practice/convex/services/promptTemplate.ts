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
