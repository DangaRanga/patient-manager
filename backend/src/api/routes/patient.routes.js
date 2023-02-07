import express from "express";
import passport from "passport";
import { PatientController } from "../controllers/patient.controllers";

const patientRouter = express.Router();

patientRouter.get("/profile", (request, response, next) => {
  response.json({
    message: "You made it to the secure route",
    user: request.user,
    token: request.query.secret_token,
  });
});

patientRouter.post("/testmail", (request, response, next) => {
  PatientController.testMail();
});

export { patientRouter };
