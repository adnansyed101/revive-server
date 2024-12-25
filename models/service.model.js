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
  provider: providerSchema,
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
