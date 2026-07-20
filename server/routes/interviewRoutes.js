import express from "express";
import { createInterview } from "../controllers/interviewController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createInterview);

export default router;