import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    role: {
      type: String,
      required: true,
    },

    questions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Interview", interviewSchema);