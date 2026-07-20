import mongoose from "mongoose";

const userActivitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      enum: [
        "Resume Uploaded",
        "Interview Generated",
        "Roadmap Generated",
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "UserActivity",
  userActivitySchema
);