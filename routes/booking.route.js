import express from "express";
import {
  createBooking,
  getServiceToDo,
  getUserBookings,
} from "../controllers/booking.controller.js";

const router = express.Router();

// Create a service
router.post("/add-booking", createBooking);

// Get all user bookings
router.get("/booked/user/:email", getUserBookings);

// Get all user bookings
router.get("/booked/serviceToDo/:email", getServiceToDo);

export default router;
