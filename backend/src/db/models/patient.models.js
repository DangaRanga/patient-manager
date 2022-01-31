import mongoose from "mongoose";

import { User } from "./user.models";

const PatientSchema = new mongoose.Schema({
  appointments: {
    type: [Object],
    default: [],
  },

  ip_address: {
    type: String,
    requred: true,
  },
});

// Declare discriminator for schema inheritance
const Patient = User.discriminator("Patient", PatientSchema);

export { Patient, PatientSchema };
