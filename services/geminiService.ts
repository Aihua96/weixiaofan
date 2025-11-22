import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors, 
// though we handle the check inside functions.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Generates a profile image using the Gemini 2.5 Flash Image model (Nano Banana).
 */
export const generateProfileImage = async (): Promise<string | null> => {
  if (!ai) {
    console.error("API Key not found");
    return null;
  }

  try {
    const prompt = "A professional, high-quality close-up portrait of a young Asian female product manager. She has a friendly, intelligent expression, wearing smart casual business attire (a simple black t-shirt or blouse). The background is a clean, bright, very light grey or white studio backdrop. The lighting is soft and flattering. Photorealistic style.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    // Parse the response to find the image data
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const base64Data = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64Data}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating profile image:", error);
    return null;
  }
};
