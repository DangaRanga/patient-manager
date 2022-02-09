import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  doctor: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  patient: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  date: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    lowercase: true,
    enum: ["completed", "confirmed", "pending"],
  },
});

const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);

export { AppointmentModel, AppointmentSchema };
