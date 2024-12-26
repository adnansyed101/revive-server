import { connectDB } from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import serviceRouter from "./routes/service.route.js";
import bookingRouter from "./routes/booking.route.js";
import jwtRoute from "./routes/jwt.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionalSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Services");
});

app.use("/jwt", jwtRoute);
app.use("/api/services", serviceRouter);
app.use("/api/booking", bookingRouter);

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
