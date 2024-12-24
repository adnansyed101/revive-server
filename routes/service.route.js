import express from "express";
import { createService } from "../controllers/service.controller.js";

const router = express.Router();

// Create a Provider
router.post("/add-service", createService);

export default router;
