import bcrypt from "bcryptjs";
import crypto from "crypto";
import { User } from "../models/user-model.js";
import { Team } from "../models/team-model.js"
import {
  sendVerificationCode,
  sendWelcomeEmail,
  sendForgotPasswordEmail,
} from "../utils/email.js";
import { generateTokenAndSetCookies } from "../utils/generateEmailcode.js";
import jwt from "jsonwebtoken";

export const home = async (req, res) => {
  try {
    res.status(200).send("Welcome");
  } catch (error) {
    console.log(error);
  }
};

// Registration api
export const register = async (req, res) => {
  try {
    // Get Data from user
    const { username, email, password } = req.body;

    // Check if all fields are complete
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please fill in all fields.",
        success: false,
      });
    }

    // Ensure that email provided by user is unique
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists.",
        success: false,
      });
    }

    // Cretating verificationCode
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Store user in database
    const userCreated = await User.create({
      username,
      email,
      password,
      verificationCode,
      verificationCodeExpire: Date.now() + 24 * 60 * 60 * 1000,
    });

    await sendVerificationCode(email, verificationCode);
    generateTokenAndSetCookies(res, userCreated._id);

    // Success message & create token
    res.status(201).json({
      message: "User registered successfully.",
      token: userCreated._id.toString(),
      userId: userCreated._id.toString(),
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create user.",
      success: false,
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findOne({
      verificationCode: code,
    });
    if (!user) {
      return res.status(400).json({
        message: "Invalid verification code.",
        success: false,
      });
    }
    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpire = undefined;
    await user.save();
    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      message: "Email verified successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to verify email.",
      success: false,
    });
  }
};

// Login api
export const login = async (req, res) => {
  try {
    // Get Data from user
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill in all fields.",
        success: false,
      });
    }

    // Check for the email in database
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    // Decrypt the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // Check if password is correct
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    } else {
      // Success message & create token
      return res.status(200).json({
        message: `User Login Successful`,
        token: await user.generateToken(),
        userId: user._id.toString(),
        username: user.username,
        isAdmin: user.isAdmin,
        success: true,
      });
    }
  } catch (error) {
    // Error
    console.error("Login Error:", error);
    res.status(500).json({
      message: "Failed to login user.",
      success: false,
    });
  }
};

// Google oauth signup

// Logout
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to logout.",
      success: false,
    });
  }
};

// Get Profile
export const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "User profile retrieved successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(500).json({
        message: "Please fill all fields",
        success: false,
      });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(500).json({
        message: "User not found",
        success: false,
      });
    }

    // Updating Data
    user.username = username;
    await user.save();

    return res.status(200).json({
      message: "Updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Update.",
      success: false,
    });
  }
};

// Forgot Password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a JWT token for password reset
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Create a password reset link
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    // Send email
    await sendForgotPasswordEmail(email, resetLink);

    res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    res.status(500).json({ message: "Error sending reset link" });
    console.log(error);
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.userId;

    // Find the user and update password
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};

// Get Teams on frontend
// export const getTeams = async (req, res) => {
//   try {
//     const displayedTeams = await Team.find({ display: true });
//     res.status(200).json({
//       success: true,
//       data: displayedTeams,
//     });
//   } catch (error) {
//     console.error("Error fetching displayed teams:", error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to fetch displayed teams',
//       error: error.message,
//     });
//   }
// };

// controllers/teamController.js


// Fetch all teams
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('players'); // Assuming each team has a list of players
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch a team by ID
export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('players');
    if (!team) return res.status(404).json({ success: false, message: 'Team not found' });
    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
