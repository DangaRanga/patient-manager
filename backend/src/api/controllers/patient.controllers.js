import { response } from "express";
import { PatientModel } from "../../db/models/patient.models";
import { transporter } from "../../mail/mail";

const PatientController = {
  async appointmentMail(recipient) {
    const mailOptions = {
      from: "Pulse Appointments <no-reply@pulseappointments.com>",
      to: recipient,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };
    try {
      const mailDetails = await transporter
        .sendMail(mailOptions)
        .then((data) => {
          throw Error;
        });
      return response.json(mailDetails);
    } catch (error) {
      return response.json({ error: "An Error happened" });
    }
  },
};

export { PatientController };
