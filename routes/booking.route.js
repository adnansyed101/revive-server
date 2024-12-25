import express from "express";
import {
  createBooking,
  getUserBookings,
} from "../controllers/booking.controller.js";

const router = express.Router();

// Create a service
router.post("/add-booking", createBooking);

// Get all user bookings
router.get("/booked/:email", getUserBookings);

export default router;
