import mongoose from "mongoose";

import { UserModel } from "./user.models";

const DoctorSchema = new mongoose.Schema({});

// Declare discriminator for schema inheritance
const DoctorModel = UserModel.discriminator("Doctor", DoctorSchema);

export { DoctorModel, DoctorSchema };
