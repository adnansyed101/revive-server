import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import serviceRouter from "./routes/service.route.js";
import bookingRouter from "./routes/booking.route.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Services");
});

app.use("/api/services", serviceRouter);
app.use("/api/booking", bookingRouter);

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
