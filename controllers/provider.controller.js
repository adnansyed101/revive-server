import Provider from "../models/provider.model.js";

// Create a provider and save to database.
export const saveProvider = async (req, res) => {
  const { imgURL, name, email } = req.body;
  try {
    // Check if the user already exists
    const existingProvider = await Provider.findOne({ email });
    if (existingProvider) {
      return res.status(200).json({ message: "User already exists." });
    }
    // Save new user
    const newProvider = new Provider({ name, email, imgURL });
    await newProvider.save();

    res
      .status(201)
      .json({ message: "User saved successfully.", provider: newProvider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving user.", error });
  }
};
