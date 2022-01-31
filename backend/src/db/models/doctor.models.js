import mongoose from "mongoose";

import { User } from "./user.models";

const DoctorSchema = new mongoose.Schema({});

// Declare discriminator for schema inheritance
const Doctor = User.discriminator("Doctor", DoctorSchema);

export { Doctor, DoctorSchema };
