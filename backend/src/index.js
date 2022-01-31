// Module Imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport, { session } from "passport";
import "dotenv/config";

// Route Imports
import { patientRouter } from "./api/routes/patient.routes";
import { authRouter } from "./api/routes/auth.routes";

const app = express();

// Initialize Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Declare constants
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch((error) => console.log("Unable to connect to mongodb"));

// Register Routes
app.use("/api/auth", authRouter);
app.use("/api/patient", patientRouter);

app.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
