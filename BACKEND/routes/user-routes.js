import express from 'express'
import { register, login, logout, getMyProfile, updateProfile, forgotPassword, resetPassword, home } from '../controllers/user-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import signupSchema from "../validators/signup-validator.js"
import loginSchema from "../validators/login-validator.js"
import validate from "../middlewares/validate-middleware.js"
const router = express.Router();

// Routes for Register, Login, etc.
router.route("/").get(home)
router.route("/register").post(validate(signupSchema), register)
router.route("/login").post(validate(loginSchema), login)
router.route("/logout").post(logout)
router.route("/me").get(authMiddleware, getMyProfile);
router.route("/updateProfile").put(authMiddleware, updateProfile)
router.route("/forgotPassword").post(forgotPassword)
router.route("/resetPassword/:token").put(resetPassword)

export default router;