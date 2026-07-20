import OpenAI from "openai";
import Interview from "../models/Interview.js";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const generateInterview = async (role, skills, userId) => {
  const prompt = `
Generate exactly 15 interview questions.

Role:
${role}

Skills:
${skills.join(", ")}

Return ONLY a JSON object in this format:

{
  "questions": [
    "...",
    "..."
  ]
}
`;

  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  const result = JSON.parse(response.choices[0].message.content);

  return await Interview.create({
    user: userId,
    role,
    questions: result.questions,
  });
};