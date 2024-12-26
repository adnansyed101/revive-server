import Booking from "../models/booking.model.js";
import mongoose from "mongoose";

export const createBooking = async (req, res) => {
  const service = req.body;

  if (
    !service.imgURL ||
    !service.serviceName ||
    !service.price ||
    !service.serviceArea ||
    !service.provider.imgURL ||
    !service.provider.name ||
    !service.provider.email ||
    !service.bookingDetails.serviceID ||
    !service.bookingDetails.serviceDate ||
    !service.bookingDetails.serviceStatus ||
    !service.bookingDetails.serviceAddress ||
    !service.bookingDetails.serviceInstruction ||
    !service.bookingDetails.userName ||
    !service.bookingDetails.userEmail ||
    !service.bookingDetails.imgURL
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newBooking = new Booking(service);

  try {
    await newBooking.save();
    res.status(201).json({ success: true, data: newBooking });
  } catch (err) {
    console.error("Error in creating booking: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getUserBookings = async (req, res) => {
  const { email } = req.params;
  const decodedEmail = req.user?.email;

  if (decodedEmail !== email) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  try {
    const service = await Booking.find({ "bookingDetails.userEmail": email });
    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getServiceToDo = async (req, res) => {
  const { email } = req.params;
  const decodedEmail = req.user?.email;

  if (decodedEmail !== email) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  try {
    const service = await Booking.find({ "provider.email": email });
    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updated = {
    $set: { "bookingDetails.serviceStatus": status },
  };

  try {
    const updatedService = await Booking.findByIdAndUpdate(id, updated, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedService });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
