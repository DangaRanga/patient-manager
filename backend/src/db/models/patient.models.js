import mongoose from "mongoose";

import { UserModel } from "./user.models";

const PatientSchema = new mongoose.Schema({
  appointments: {
    type: [Object],
    default: [],
  },
});

// Declare discriminator for schema inheritance
const PatientModel = UserModel.discriminator("Patient", PatientSchema);

export { PatientModel, PatientSchema };
