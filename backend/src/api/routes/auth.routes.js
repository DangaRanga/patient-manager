import express from "express";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

authRouter.post("/login", async (request, response, next) => {});

authRouter.post("/register", async (request, response, next) => {});

authRouter.post("/checkToken", async (request, response, next) => {});

export { authRouter };
