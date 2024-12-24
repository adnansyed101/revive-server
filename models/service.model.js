import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
