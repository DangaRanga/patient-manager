// Node module import
import http from "http";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

// Model imports
import { UserModel } from "../../db/models/user.models";
import { PatientModel } from "../../db/models/patient.models";
import { DoctorModel } from "../../db/models/doctor.models";

// Helper Function imports
import { requestHandler } from "../../helpers/handlers";

const AuthController = {
  async registerUser(request, response) {
    // Destructure request body
    const { firstName, lastName, email, password, role } = request.body;

    // Validation checks

    // Check if the user already exists
    try {
      const userExists = await UserModel.findOne({ email: email });
      if (userExists) {
        return response.status(400).json({
          message: "An account with this email address already exists",
        });
      }

      // Initialize key variables
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
        ip_address: request.connection.remoteAddress,
      };

      const errorResponse = response
        .status(400)
        .json({ err: `Error saving ${role} ${err.message}` });

      const succesResponse = response
        .status(201)
        .json({ success: `${role} Successfully saved` });

      if (role == "patient") {
        // Attempt to save new patient to database
        const newPatient = new PatientModel(userDetails);
        newPatient.save((err) => {
          if (err) {
            return errorResponse;
          } else {
            return succesResponse;
          }
        });
      } else if (role === "doctor") {
        // Attempt to save new doctor to database
        const newDoctor = DoctorModel.create(userDetails);

        newDoctor.save((err) => {
          if (err) {
            return errorResponse;
          } else {
            return succesResponse;
          }
        });
      } else {
        return response.status(400).json({ err: "No User role specified" });
      }
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },

  async loginUser(request, response) {
    // Extract credentials from request
    const { email, password } = request.body;

    // Perform Validation checks

    // Check if the user exists
    try {
      const user = await UserModel.findOne({ email: email });
      if (!user) {
        return response.status(400).json({
          message: "No user exists with the email entered",
        });
      }

      // Check passwords with bcrypt
      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        return response.status(401).json({
          message: "Invalid Password",
        });
      }

      // Create the JWT
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 900,
      });

      return response.status(200).json({
        authToken: token,
        user: {
          id: user._id,
          email: user.email,
        },
      });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },

  async checkTokenValidity(request, response) {
    try {
      // Check for the token
      const token = request.header("x-access-token");
      if (!token) {
        return response.json({
          message: "Token is missing",
          isValidToken: false,
        });
      }

      // Check if the token is still valid
      const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);
      if (!verifiedUser) {
        return response.json({
          message: "Token is invalid",
          isValidToken: false,
        });
      }

      // Check if the token belongs to the user
      const user = await UserModel.findById(verifiedUser.id);

      if (!user) {
        return response.json({ isValidToken: false });
      }

      return response.status(200).json({ isValidToken: true });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  },
};

export { AuthController };
