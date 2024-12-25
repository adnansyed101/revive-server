import express from "express";
import {
  createService,
  getServices,
} from "../controllers/service.controller.js";

const router = express.Router();

// Get All Services
router.get("/all-services", getServices);

// Create a service
router.post("/add-service", createService);

export default router;
