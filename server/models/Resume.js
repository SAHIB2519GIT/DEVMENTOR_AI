import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    storedFileName: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    extractedText: {
      type: String,
      default: "",
    },

    // General resume quality
    atsScore: {
      type: Number,
      default: 0,
    },

    // Job-specific readiness
    readinessScore: {
      type: Number,
      default: 0,
    },

    // Skills clearly matching the target job
    matchedSkills: {
      type: [String],
      default: [],
    },

    // Important requirements missing from the resume
    missingSkills: {
      type: [String],
      default: [],
    },

    // Skills present but weakly demonstrated
    skillGaps: {
      type: [String],
      default: [],
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    // Evidence showing why a skill is strong/weak/missing
    evidence: [
      {
        skill: {
          type: String,
          default: "",
        },

        status: {
          type: String,
          default: "",
        },

        evidence: {
          type: String,
          default: "",
        },
      },
    ],

    suggestions: {
      type: [String],
      default: [],
    },

    // Most important next steps
    priorityActions: {
      type: [String],
      default: [],
    },

    // Optional target job information
    targetRole: {
      type: String,
      default: "",
    },

    jobDescription: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Resume", resumeSchema);