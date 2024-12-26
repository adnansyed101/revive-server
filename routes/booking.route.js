import express from "express";
import {
  createBooking,
  getServiceToDo,
  getUserBookings,
  updateStatus,
} from "../controllers/booking.controller.js";
import { verifyToken } from "../controllers/jwt.controller.js";

const router = express.Router();

// Create a service
router.post("/add-booking", verifyToken, createBooking);

// Get all user bookings
router.get("/booked/user/:email", verifyToken, getUserBookings);

// Get all user bookings
router.get("/booked/serviceToDo/:email", verifyToken, getServiceToDo);

// Update booking status
router.patch("/booked/update/:id", verifyToken, updateStatus);

export default router;
