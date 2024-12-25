import express from "express";
import { getServices } from "../controllers/service.controller.js";

const router = express.Router();

// Get All Services
router.get("/all-services", getServices);

export default router;
