import { generateInterview } from "../services/interviewService.js";
import { logActivity } from "../services/activityService.js";

export const createInterview = async (req, res) => {
  try {

    const { role, skills } = req.body;

    const interview = await generateInterview(
      role,
      skills,
      req.user._id
    );

    await logActivity(
      req.user._id,
      "Interview Generated",
      `Generated interview for ${role}`
    );

    res.status(201).json({
      success: true,
      interview,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};