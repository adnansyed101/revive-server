import express from "express";
import {
  createService,
  getServices,
  getSingleService,
  getUserCreatedServices,
} from "../controllers/service.controller.js";

const router = express.Router();

// Get All Services
router.get("/all-services", getServices);

// Create a service
router.post("/add-service", createService);

// Get a single Service
router.get("/service/:id", getSingleService);

// Get a User specific Services
router.get("/created/:email", getUserCreatedServices);

export default router;
