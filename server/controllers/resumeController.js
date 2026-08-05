import { uploadResume } from "../services/resumeService.js";
import { logActivity } from "../services/activityService.js";

export const uploadResumeController = async (req, res) => {
  try {
    const { targetRole, jobDescription } = req.body;

    const resume = await uploadResume(
      req.file,
      req.user._id,
      targetRole,
      jobDescription
    );

    await logActivity(
      req.user._id,
      "Resume Uploaded",
      `Resume analyzed for ${targetRole || "general career readiness"}`
    );

    res.status(201).json({
      success: true,
      resume,
    });

  } catch (error) {
    console.error("Resume Controller Error:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};