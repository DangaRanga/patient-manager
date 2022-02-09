import mongoose from "mongoose";

import { UserModel } from "./user.models";

const DoctorSchema = new mongoose.Schema({
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
});

// Declare discriminator for schema inheritance
const DoctorModel = UserModel.discriminator("Doctor", DoctorSchema);

export { DoctorModel, DoctorSchema };
