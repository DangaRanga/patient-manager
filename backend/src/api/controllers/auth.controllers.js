// Node module import
import http from "http";

// Model imports
import { UserModel } from "../../db/models/user.models";
import { PatientModel } from "../../db/models/patient.models";
import { DoctorModel } from "../../db/models/doctor.models";

const AuthController = {
  async registerUser(request, response) {
    // Destructure request body
    const { firstName, lastName, email, password, type } = request.body;

    // Validation checks

    // Check if the user already exists
    const userExists = await UserModel.findOne({ email: email });
    if (userExists) {
      return response.status(400).json({
        message: "An account with this email address already exists",
      });
    }

    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      type: type,
      ip_address: request.ip,
    };

    let newUser = UserModel;

    if (type == "patient") {
      newUser = PatientModel.create(userDetails);
    } else if (type === "doctor") {
      newUser = DoctorModel.create(userDetails);
    }

    newUser.save((err) => {
      if (err) {
        return response
          .status(400)
          .json({ err: `Error saving ${type} ${err.message}` });
      } else {
        return response
          .status(201)
          .json({ success: `${type} Successfully saved` });
      }
    });
  },
};
