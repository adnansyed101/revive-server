import express from "express";
import { clearCookie, createJWT } from "../controllers/jwt.controller.js";

const router = express.Router();

// Generate Token
router.post("/", createJWT);

// Clear cookie on logout
router.get('/logout', clearCookie)

export default router;
