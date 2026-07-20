import OpenAI from "openai";

const client = new OpenAI({

    apiKey:process.env.GROQ_API_KEY,

    baseURL:"https://api.groq.com/openai/v1"

});

export const analyzeResume = async(resumeText)=>{

const prompt=`

You are an expert ATS Resume Analyzer.

Analyze the following resume.

Return ONLY JSON.

{
"atsScore":0,
"strengths":[],
"weaknesses":[],
"missingSkills":[],
"suggestions":[]
}

Resume

${resumeText}

`;

const completion =
await client.chat.completions.create({

model:"llama-3.3-70b-versatile",

messages:[
{
role:"user",
content:prompt
}
],

temperature:0.2,

response_format:{
type:"json_object"
}

});

return JSON.parse(
completion.choices[0].message.content
);

};