// Module Imports
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();

// Initialize Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Declare constants
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5010;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfuly connected to MongoDB"))
  .catch((error) => console.log("error"));

// Register Routes

app.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
