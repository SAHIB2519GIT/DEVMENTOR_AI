import { generateRoadmap } from "../services/roadmapService.js";
import { logActivity } from "../services/activityService.js";

export const createRoadmap = async (req, res) => {
  try {

    const { role, experience } = req.body;

    const roadmap = await generateRoadmap(
      role,
      experience,
      req.user._id
    );

    await logActivity(
      req.user._id,
      "Roadmap Generated",
      `Generated roadmap for ${role}`
    );

    res.status(201).json({
      success: true,
      roadmap,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};