import express from "express";
import jwt from "jsonwebtoken";

import { AuthController } from "../controllers/auth.controllers";

const authRouter = express.Router();

authRouter.post("/login", async (request, response, next) => {
  AuthController.loginUser(request, response);
});

authRouter.post("/register", async (request, response, next) => {
  AuthController.registerUser(request, response);
});

authRouter.post("/checkToken", async (request, response, next) => {
  AuthController.checkTokenValidity(request, response);
});

export { authRouter };
