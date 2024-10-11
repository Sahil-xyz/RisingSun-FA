import { Verification_Email_Template, Welcome_Email_Template } from './emailTemplate.js';
import { transporter } from './sendEmail.js'

export const sendVerificationCode = async(email, verificationCode) => {
    try {
        console.log("Email:", email); // Log to check email value
    console.log("Verification Code:", verificationCode); // Log to check verification code
        const response = await transporter.sendMail({
            from: '"Rising-Sun Football Academy 👻" <risingsunfa18@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify your email", // Subject line
            text: "Verify your email", // plain text body
            html: Verification_Email_Template.replace("{{verificationCode}}",verificationCode), // html body
        });
        console.log("Email send successfully", response)
    } catch (error) {
        console.log(error);
    }
}

export const sendWelcomeEmail=async(email,name)=>{
    try {
     const response=   await transporter.sendMail({
            from: '"Rising-Sun Football Academy" <risingsun18@gmail.com>',

            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{{name}}",name)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
}