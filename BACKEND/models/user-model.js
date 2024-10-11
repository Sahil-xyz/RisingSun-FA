import mongoose, { Schema } from "mongoose";
import crypto from "crypto"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordTokenExpire: {
        type: Date,
    },
})

// Encrypt Data using pre method
userSchema.pre('save', async function (next) {
    const user = this;
    if(!user.isModified("password")) {
      next();
    } 
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    } catch (error) {
      next(error);
    }
})

// Generate Token
userSchema.methods.generateToken = async function() {
    try {
      return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      })
    } catch (error) {
      console.log(error)
    }
  }

userSchema.methods.getResetToken = async function() {
    const resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash("sha256").update(resetPasswordToken).digest("hex");
    this.resetPasswordTokenExpire = Date.now() + 10 * 60 * 1000;
    return resetPasswordToken;
}

export const User = mongoose.model('User', userSchema);