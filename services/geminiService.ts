import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing in environment variables");
    // In a real app we might handle this gracefully, for now we assume it exists as per instructions
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

const SYSTEM_INSTRUCTION = `
You are the "Everyday AI Coach". 
Your goal is to help non-technical professionals (sales, teachers, parents, business owners) understand and use AI.
1. ALWAYS use simple, 8th-grade level language. No jargon.
2. Be friendly, encouraging, and non-judgmental.
3. If asked to improve a prompt, explain WHY the improvement is better using the "Role, Task, Context" framework.
4. Keep answers concise and readable on mobile devices.
5. If the user asks for templates, provide 3 distinct variations.
`;

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, // Balanced creativity
    },
  });
};

export const sendMessageStream = async (
  chat: Chat, 
  message: string, 
  onChunk: (text: string) => void
): Promise<string> => {
  let fullText = '';
  try {
    const responseStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of responseStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        fullText += c.text;
        onChunk(fullText);
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
  return fullText;
};
