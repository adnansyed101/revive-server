import mongoose from "mongoose";

export const connectDB = async () => {
  const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.juhsz.mongodb.net/servicesData?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    const conn = await mongoose.connect(URI);
    console.log(conn.connection.host);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1); // process code 1 code means exit with failure, 0 means success.
  }
};
