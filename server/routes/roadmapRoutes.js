import express from "express";

import protect from "../middleware/authMiddleware.js";

import { createRoadmap } from "../controllers/roadmapController.js";

const router = express.Router();

router.post("/", protect, createRoadmap);

export default router;