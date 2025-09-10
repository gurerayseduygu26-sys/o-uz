
import { GoogleGenAI, GenerateImagesResponse } from "@google/genai";

// Ensure the API key is available from environment variables
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates an image using the Gemini API.
 * @param prompt - The text prompt to generate an image from.
 * @returns A promise that resolves to a base64 encoded image string.
 */
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateImagesResponse = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
        aspectRatio: '1:1',
      },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
      throw new Error("No images were generated. The prompt may be unsafe or the API returned an empty response.");
    }

    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    return `data:image/png;base64,${base64ImageBytes}`;
  } catch (error) {
    console.error("Error generating image with Gemini API:", error);
    
    // Provide a more user-friendly error message
    if (error instanceof Error) {
        if (error.message.includes('429')) {
             throw new Error("Rate limit exceeded. Please try again later.");
        }
        if (error.message.includes('prompt was blocked')) {
            throw new Error("Your prompt was blocked for safety reasons. Please try a different prompt.");
        }
    }
    
    throw new Error("An unexpected error occurred while communicating with the AI service.");
  }
};
