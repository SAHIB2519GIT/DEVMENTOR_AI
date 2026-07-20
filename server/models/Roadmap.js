import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    roadmap: [
      {
        title: String,
        description: String,
        duration: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Roadmap", roadmapSchema);