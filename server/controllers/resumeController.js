import { uploadResume } from "../services/resumeService.js";
import { logActivity } from "../services/activityService.js";

export const uploadResumeController = async (req, res) => {
  try {
    const resume = await uploadResume(
      req.file,
      req.user._id
    );

    await logActivity(
      req.user._id,
      "Resume Uploaded",
      "Uploaded a new resume"
    );

    res.status(201).json({
      success: true,
      resume,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};