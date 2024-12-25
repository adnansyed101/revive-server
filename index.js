import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import serviceRouter from "./routes/service.route.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/service", serviceRouter);

app.listen(PORT, () => {
  connectDB();
  console.log("Server running at port " + PORT);
});
