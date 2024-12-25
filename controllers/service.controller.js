import Service from "../models/service.model.js";

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

export const getServices = async (req, res) => {
  try {
    const services = await Service.find({});
    res.status(200).json({ success: true, data: services });
  } catch (err) {
    console.error("Error in fetching movie" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
