
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GeminiResponse } from '../types';

export const generateCodeResponse = async (prompt: string, code: string): Promise<GeminiResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const fullPrompt = `You are a highly skilled software engineer AI. Analyze the following code snippet and perform the requested action. Provide only the code or the direct answer, no conversational text before or after.

Request: ${prompt}
Code:
\`\`\`
${code}
\`\`\`
`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-pro', // Using gemini-2.5-pro for complex coding tasks
      contents: fullPrompt,
      config: {
        maxOutputTokens: 2048, // Adjusted token limit for code generation
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        // Disable thinking budget for faster responses if not critical for extreme complexity
        thinkingConfig: { thinkingBudget: 0 }
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('No text response from Gemini API.');
    }

    return { text: text.trim() };
  } catch (error) {
    console.error("Error generating code response from Gemini:", error);
    // Basic retry mechanism (simplified for example)
    if (error instanceof Error && error.message.includes("Requested entity was not found.")) {
      console.warn("API key might be invalid or model not found. Please ensure API_KEY is correctly set.");
    }
    throw new Error(`Failed to get code response: ${error instanceof Error ? error.message : String(error)}`);
  }
};
