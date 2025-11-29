import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini
// Note: API Key must be set in process.env.API_KEY
const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateEnhancedBio = async (name: string, role: string, inputSkills: string): Promise<{ bio: string; tagline: string; suggestedSkills: string[] }> => {
  const ai = getAiClient();
  if (!ai) {
    // Fallback if no API key is present
    return {
      bio: `${role} passionate about building the future of web3.`,
      tagline: "Building on Base, one block at a time.",
      suggestedSkills: inputSkills.split(',').map(s => s.trim()).filter(Boolean)
    };
  }

  const prompt = `
    User Name: ${name}
    Role: ${role}
    Raw Skills Input: ${inputSkills}

    Task:
    1. Create a professional, catchy "tagline" (max 10 words) for a Web3 business card.
    2. Write a concise "bio" (max 25 words) highlighting their potential.
    3. Extract and normalize the skills into a clean list of strings (max 5 top skills).

    Context: This is for "BaseCard", an onchain professional identity platform.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING },
            bio: { type: Type.STRING },
            suggestedSkills: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini generation error:", error);
    return {
      bio: `${role} ready to build.`,
      tagline: "Right people. Right time.",
      suggestedSkills: ["Web3", "Base", "Building"]
    };
  }
};