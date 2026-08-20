import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export const analyzeResume = async (
  resumeText,
  jobDescription = ""
) => {
  const prompt = `
You are an expert AI Job Readiness Analyzer.

Your task is to analyze a candidate's resume against a target job description.

The goal is NOT just to review the resume.

You must determine:
1. What skills the candidate already demonstrates.
2. What skills the target job requires.
3. Which requirements are matched.
4. Which requirements are missing or weak.
5. Whether the resume contains actual evidence for claimed skills.
6. How ready the candidate is for this specific job.

Return ONLY valid JSON.

Use exactly this structure:

{
  "atsScore": 0,
  "readinessScore": 0,

  "strengths": [],

  "weaknesses": [],

  "matchedSkills": [],

  "missingSkills": [],

  "skillGaps": [],

  "evidence": [
    {
      "skill": "",
      "status": "",
      "evidence": ""
    }
  ],

  "suggestions": [],

  "priorityActions": []
}

Rules:

- atsScore should represent general resume quality and ATS compatibility from 0 to 100.
- readinessScore should represent how prepared the candidate is for the specific target job from 0 to 100.
- matchedSkills should contain skills clearly demonstrated by the resume and relevant to the job description.
- missingSkills should contain important job requirements that are absent from the resume.
- skillGaps should contain skills that exist but appear weak, incomplete, or insufficiently demonstrated.
- evidence must explain WHY a skill is considered strong, weak, or missing.
- Do not assume a skill is strong merely because it appears in a skills list.
- Prefer project, internship, work experience, certification, or achievement evidence.
- priorityActions should contain the most important actions the candidate should take next.
- Keep recommendations practical and specific.
- Do not invent experience that is not present in the resume.
- If no job description is provided, perform a general career-readiness analysis and clearly make reasonable assumptions.

RESUME:

${resumeText}

TARGET JOB DESCRIPTION:

${jobDescription || "No specific job description provided."}
`;

const completion = await client.chat.completions.create({
  model: "openai/gpt-oss-120b",

  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],

  temperature: 0.2,

  response_format: {
    type: "json_object",
  },
});

  const content = completion.choices[0].message.content;

  return JSON.parse(content);
};