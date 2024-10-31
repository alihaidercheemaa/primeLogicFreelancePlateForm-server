import { Router } from "express";

import authController from "../../controllers/authController/authController";
import { validateDataMiddleware } from "../../middlewares/validationMiddleware";
import { userLoginSchema, userRegistrationSchema, verifyUserSchema } from "../../validation/zod";
import rateLimiterMiddleware from "../../middlewares/rateLimiterMiddleware";
export const authRouter = Router();

// Routes**
authRouter.route("/register").post(validateDataMiddleware(userRegistrationSchema), authController.registerUser);
authRouter.route("/login").post(validateDataMiddleware(userLoginSchema), (req, res, next) => rateLimiterMiddleware(req, res, next, 2), authController.loginUser);
authRouter.route("/verifyEmail").post(validateDataMiddleware(verifyUserSchema), (req, res, next) => rateLimiterMiddleware(req, res, next, 5), authController.verifyUser);

