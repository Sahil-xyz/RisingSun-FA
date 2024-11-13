import express from 'express';
import { 
  register, 
  login, 
  logout, 
  getMyProfile, 
  updateProfile, 
  forgotPassword, 
  resetPassword, 
  home, 
  verifyEmail, 
  getTeams,
  getTeamById,
  getBoysTeams,
  getGirlsTeams
} from '../controllers/user-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import signupSchema from "../validators/signup-validator.js";
import loginSchema from "../validators/login-validator.js";
import validate from "../middlewares/validate-middleware.js";


const router = express.Router();

// Routes for Register, Login, etc.
router.route("/").get(home); // Home route
router.route("/register").post(validate(signupSchema), register); // User registration
router.route("/verifyEmail").post(verifyEmail); // Email verification
router.route("/login").post(validate(loginSchema), login); // User login
router.route("/logout").post(logout); // Logout user
router.route("/me").get(authMiddleware, getMyProfile); // Get logged-in user's profile
router.route("/update-profile").put(authMiddleware, updateProfile); // Update user's profile
router.route("/forgot-password").post(forgotPassword); // Forgot password
router.route("/reset-password/:token").put(resetPassword); // Reset password with token
router.route("/team").get(getTeams);
router.route("/team/:id").get(getTeamById)

router.route("/teams/boys").get( getBoysTeams);

router.route("/teams/girls").get( getGirlsTeams);

export default router;
