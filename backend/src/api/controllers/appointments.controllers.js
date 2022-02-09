import { AppointmentModel } from "../../db/models/appointment.models";

import { transporter } from "../../mail/mail";

// Create Controller Object for association
const AppointmentController = {
  /**
   * Retrieves all appointments assigned to a user
   * @param {*} request
   * @param {Response} response The HTTP Response to be made to the client
   */
  async getAppointments(request, response) {
    await AppointmentModel.find((err, appointments) => {
      if (err) {
        return response.json(
          {
            error: `Failed to retrieve appointments: ${err}`,
          },
          400
        );
      } else {
        response.json(appointments);
      }
    });
  },

  /**
   * Handles the requesting of appointments
   * Sends an email to the user and doctor that an appointment has been requested
   * @param {*} request
   * @param {*} response
   */
  async requestAppointment(request, response) {},

  /**
   * Handles the confirmation an appointment
   * @param {*} request
   * @param {*} response
   */
  async confirmAppointment(request, response) {
    const mailOptions = {
      from: '"Pulse Appointments" <from@pulseappointments.com>',
      to: "jasonblue1626@gmail.com",
      subject: "Appointment Confirmation",
      text: "Hey, <user> this is confirming your appointment at <time>",
    };
  },

  async updateAppointment(request, response) {},

  async cancelAppointment(request, response) {},
};
