import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import interviewRoutes from "./routes/interviewRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://devmentor-ai-three.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevMentor AI Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Error middleware must be last
app.use(errorMiddleware);

export default app;