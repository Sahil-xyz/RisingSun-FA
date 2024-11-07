import bcrypt from "bcryptjs"
import crypto from "crypto";
import { User } from "../models/user-model.js";
import { sendVerificationCode, sendWelcomeEmail } from "../utils/email.js";
import { generateTokenAndSetCookies } from "../utils/generateEmailcode.js";
// import { sendEmail } from '../utils/sendEmail.js';


export const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router "
      );
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
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Store user in database
    const userCreated = await User.create({
      username,
      email,
      password,
      verificationCode,
      verificationCodeExpire:Date.now() + 24 * 60 * 60 * 1000
    })

    await sendVerificationCode(email,verificationCode);
    generateTokenAndSetCookies(res, userCreated._id)

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

export const verifyEmail = async(req, res) => {
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
    user.verificationCode=undefined;
    user.verificationCodeExpire=undefined;
    await user.save();
    await sendWelcomeEmail(user.email,user.name)
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
}

// Login api
export const login = async (req, res) => {
  try {
    // Get Data from user
    const { email, password } = req.body;
    if(!email || !password ) {
      return res.status(400).json({
        message: "Please fill in all fields.",
        success: false,
      })
    }

    // Check for the email in database
    let user = await User.findOne({ email });
    if(!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      })
    }

    // Decrypt the password 
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // Check if password is correct
    if(!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      })
    } else {
      // Success message & create token
      return res.status(200).json({
        message: `User Login Successful`,
        token: await user.generateToken(),
        userId: user._id.toString(),
        username: user.username,
        isAdmin: user.isAdmin,
        success: true
      })
    }
  }
  catch(error) {
    // Error
    console.error("Login Error:", error);
    res.status(500).json({
      message: "Failed to login user.",
      success: false,
    })
  }
}

// Google oauth signup

// Logout
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token","", {maxAge: 0}).json({
      message: "Logged out successfully",
      success: true
    })
  } catch (error) {
    res.status(500).json({
      message: "Failed to logout.",
      success: false,
    })
  }
}

// Get Profile
export const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if(!user) {
      return res.status(404).json({
        message: "User not found",
        success: false
      })
    }
    res.status(200).json({
      message: "User profile retrieved successfully",
      success: true,
      user
    })
  } catch (error) {
    console.log(error);
  }
} 

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const { username } = req.body;
    if(!username) {
      return res.status(500).json({
        message: "Please fill all fields",
        success: false
      })
    }

    const user = await User.findById(req.user._id);
    if(!user) {
      return res.status(500).json({
        message: "User not found",
        success: false
      })
    }

    // Updating Data
    user.username = username;
    await user.save();

    return res.status(200).json({
      message: "Updated successfully",
      user,
      success: true
    })

  } catch (error) {
    res.status(500).json({
      message: "Failed to Update.",
      success: false,
    })
  }
}

// Forget Password
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
      res.status(500).json({
        message: "Email Not Found",
        success: false,
      })
    }
    // Generate token here...
    const resetToken = await user.getResetToken();
    await user.save();

    // Integrate with frontend URL
    const url = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;
    const message = `Click on the link to reset your password. ${url}. if you have not requested then please ignore.`

    // Send token via email
    await sendEmail(user.email, "Football Academy Reset Password", message)

    res.status(200).json({
      message: `Reset token sent to your ${user.email}`,
      success: true
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Failed to Update Password.",
      success: false,
    })
  }
}

// Reset Password
export const resetPassword = async(req, res, next) => {
  try {
    const { token } = req.params;
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordTokenExpire: { $gt: Date.now() }
    })

    if(!user) {
      console.log(resetPasswordToken)
      return res.status(400).json({
        message: "Invalid token or expired token",
        success: false
      })
    }
    // Reset password here...
    const newPassword = await bcrypt.hash(req.body.password, 10);
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save();

    res.status(200).json({
      message: "Password changed successfully",
      success: true,
      token
    }) 
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Failed to Update Password.",
      success: false,
    })
  }
}