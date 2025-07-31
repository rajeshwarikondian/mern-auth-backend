import express from "express";
import {
    isAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  sentVerifyOtp,
  verifyEmail,
} from "../controllers/authController.js";
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", register); // --> /api/auth/register
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuthMiddleware, sentVerifyOtp);
authRouter.post("/verify-account", userAuthMiddleware, verifyEmail);
authRouter.get("/is-auth", userAuthMiddleware, isAuthenticated);
authRouter.post("/send-reset-otp", sendResetOtp );
authRouter.post("/reset-password", resetPassword );



export default authRouter;
