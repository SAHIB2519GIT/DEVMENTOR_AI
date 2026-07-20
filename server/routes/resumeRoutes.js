import express from "express";

import upload from "../config/multer.js";
import protect from "../middleware/authMiddleware.js";

import { uploadResumeController } from "../controllers/resumeController.js";

const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResumeController
);

export default router;