import fs from "fs/promises";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

import Resume from "../models/Resume.js";
import { analyzeResume } from "./aiService.js";

async function extractText(filePath) {
  const data = await fs.readFile(filePath);

  const pdf = await pdfjsLib.getDocument({
    data: new Uint8Array(data),
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    text +=
      content.items.map((item) => item.str).join(" ") + "\n";
  }

  return text;
}

export const uploadResume = async (file, userId) => {
  if (!file) {
    throw new Error("Resume file is required.");
  }

  const extractedText = await extractText(file.path);

  const ai = await analyzeResume(extractedText);

  const resume = await Resume.create({
    user: userId,

    originalName: file.originalname,

    storedFileName: file.filename,

    fileSize: file.size,

    mimeType: file.mimetype,

    extractedText,

    atsScore: ai.atsScore,

    strengths: ai.strengths,

    weaknesses: ai.weaknesses,

    missingSkills: ai.missingSkills,

    suggestions: ai.suggestions,
  });

  return resume;
};