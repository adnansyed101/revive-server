import express from "express";
import { saveProvider } from "../controllers/provider.controller.js";

const router = express.Router();

// Create a Provider
router.post("/save-provider", saveProvider);

export default router;
