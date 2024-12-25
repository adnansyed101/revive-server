import Booking from "../models/booking.model.js";

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
    !service.bookingDetails.userEmail
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
