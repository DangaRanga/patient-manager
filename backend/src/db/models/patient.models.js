import mongoose from "mongoose";

import { UserModel } from "./user.models";

const PatientSchema = new mongoose.Schema({
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
});

// Declare discriminator for schema inheritance
const PatientModel = UserModel.discriminator("Patient", PatientSchema);

export { PatientModel, PatientSchema };
