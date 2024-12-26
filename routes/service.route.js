import express from "express";
import {
  createService,
  deleteService,
  getPopularServices,
  getServices,
  getSingleService,
  getUserCreatedServices,
  updateService,
} from "../controllers/service.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Get All Services
router.get("/all-services", getServices);

// Create a service
router.post("/add-service", verifyToken, createService);

// Get a single Service
router.get("/service/:id", getSingleService);

// Get a User specific Services
router.get("/created/:email", verifyToken, getUserCreatedServices);

// Update a Service
router.put("/update/:id", verifyToken, updateService);

// Delete a Service
router.delete("/delete/:id", verifyToken, deleteService);

// Get Popular Services
router.get("/popular/", getPopularServices);

export default router;
