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

const Provider = mongoose.model("Provider", providerSchema);

export default Provider;
