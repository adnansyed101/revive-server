import Service from "../models/service.model.js";
import mongoose from "mongoose";

// Create a single Service
export const createService = async (req, res) => {
  const service = req.body;

  if (
    !service.imgURL ||
    !service.serviceName ||
    !service.price ||
    !service.serviceArea ||
    !service.description ||
    !service.provider.imgURL ||
    !service.provider.name ||
    !service.provider.email
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newService = new Service(service);

  try {
    await newService.save();
    res.status(201).json({ success: true, data: newService });
  } catch (err) {
    console.error("Error in creating Service: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get All services
export const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json({ success: true, data: services });
  } catch (err) {
    console.error("Error in fetching movie" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get single service
export const getSingleService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Service Id" });
  }

  try {
    const service = await Service.findById(id);
    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get services according to user
export const getUserCreatedServices = async (req, res) => {
  const { email } = req.params;

  try {
    const service = await Service.find({ "provider.email": email });
    res.status(200).json({ success: true, data: service });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a service
export const updateService = async (req, res) => {
  const { id } = req.params;
  const service = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Service Id" });
  }

  try {
    const updatedService = await Service.findByIdAndUpdate(id, service, {
      new: true,
    });

    res.status(200).json({ success: true, data: updatedService });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete Service
export const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(500)
      .json({ success: false, message: "Invalid Service Id" });
  }

  try {
    await Service.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Service Deleted" });
  } catch (err) {
    console.error("Error in Deleting movies" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
