import express from "express";
import {
  createBooking,
  getServiceToDo,
  getUserBookings,
  updateStatus,
} from "../controllers/booking.controller.js";

const router = express.Router();

// Create a service
router.post("/add-booking", createBooking);

// Get all user bookings
router.get("/booked/user/:email", getUserBookings);

// Get all user bookings
router.get("/booked/serviceToDo/:email", getServiceToDo);

// Update booking status
router.patch("/booked/update/:id", updateStatus);

export default router;
