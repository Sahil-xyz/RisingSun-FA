import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "risingsunfa18@gmail.com",
    pass: "wbxn jlpo ewcx eazg",
  },
});