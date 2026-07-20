import Resume from "../models/Resume.js";
import Interview from "../models/Interview.js";
import Roadmap from "../models/Roadmap.js";
import UserActivity from "../models/UserActivity.js";

export const getDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalResumes = await Resume.countDocuments({
      user: userId,
    });

    const totalInterviews =
      await Interview.countDocuments({
        user: userId,
      });

    const totalRoadmaps =
      await Roadmap.countDocuments({
        user: userId,
      });

    const latestResume = await Resume.findOne({
      user: userId,
    }).sort({ createdAt: -1 });

    const activities =
      await UserActivity.find({
        user: userId,
      })
        .sort({ createdAt: -1 })
        .limit(10);

    res.json({
      success: true,

      statistics: {
        totalResumes,
        totalInterviews,
        totalRoadmaps,
      },

      latestResume,

      activities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};