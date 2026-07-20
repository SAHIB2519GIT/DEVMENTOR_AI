import OpenAI from "openai";
import Roadmap from "../models/Roadmap.js";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const generateRoadmap = async (
  role,
  experience,
  userId
) => {

  const prompt = `
You are an expert career mentor.

Create a learning roadmap.

Role:
${role}

Experience:
${experience}

Return ONLY valid JSON.

{
 "roadmap":[
   {
     "title":"",
     "description":"",
     "duration":""
   }
 ]
}
`;

  const completion =
    await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.3,

      response_format: {
        type: "json_object",
      },
    });

  const result = JSON.parse(
    completion.choices[0].message.content
  );

  return await Roadmap.create({
    user: userId,
    role,
    experience,
    roadmap: result.roadmap,
  });
};