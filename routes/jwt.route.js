import express from "express";
import { createJWT } from "../controllers/jwt.controller.js";

const router = express.Router();

// Generate Token
router.post("/", createJWT);

export default router;
