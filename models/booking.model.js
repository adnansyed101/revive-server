import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  imgURL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const bookingDetailsSchema = new mongoose.Schema({
  serviceID: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  serviceDate: {
    type: Date,
    required: true,
  },
  serviceStatus: {
    type: String,
    required: true,
  },
  serviceAddress: {
    type: String,
    required: true,
  },
  serviceInstruction: {
    type: String,
    required: true,
  },
});

const bookingSchema = new mongoose.Schema({
  imgURL: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  serviceArea: {
    type: String,
    required: true,
  },
  provider: providerSchema,
  bookingDetails: bookingDetailsSchema,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
