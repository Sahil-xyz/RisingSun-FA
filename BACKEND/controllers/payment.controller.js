import mongoose from 'mongoose';
import  Payment from '../models/payment.model.js';
import {User } from '../models/user-model.js'; // Assuming you have a User model
import Stripe from 'stripe';
import { Admission } from '../models/admission-model.js'

const stripe = new Stripe('sk_test_51Q56EjEP7o2kKraf8gTwRw783T0JFIjQYkdhrcAKLKsIzaThjqfua8a5zA5tp2kYvatnn0hNFcMOsAV2yTqox23J00qsVsumFu'); // Use environment variable for Stripe secret key



export async function createCheckoutSession(req, res, next) {
  try {
    const { email, amount } = req.body;

    // Validate incoming data
    if (!email || !amount || amount <= 0) {
      return res.status(400).json({
        message: 'Valid email and amount are required',
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    // Create payment record
    const paymentRecord = await Payment.create({
      userId: user._id,
      email: email,
      amount: amount,
      status: 'pending',  // Payment initially marked as pending
    });

    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Football Academy Membership',  // You can customize the name as needed
            },
            unit_amount: amount,  // Amount should be in the smallest currency unit (e.g., paise for INR)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?paymentId=${paymentRecord._id}`,
      cancel_url: `${process.env.FRONTEND_URL}/failure`,
    });

    // Save the Stripe transaction ID in the payment record
    paymentRecord.transactionId = session.id;
    await paymentRecord.save();

    // Respond with the Stripe session ID to complete the checkout process
    res.json({ id: session.id });
  } catch (error) {
    console.error('Error in createCheckoutSession:', error);
    next(error);  // Forward the error to the error-handling middleware
  }
}





export async function confirmPayment(req, res) {
  const { paymentId, status, admissionDetails } = req.body;

  if (!paymentId || !status || !admissionDetails) {
    console.error("Missing required fields in request body.");
    return res.status(400).json({ error: 'PaymentId, status, and admissionDetails are required.' });
  }

  try {
    console.log("Attempting to find payment with ID:", paymentId);
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      console.error("Payment not found for ID:", paymentId);
      return res.status(404).json({ error: 'Payment not found.' });
    }

    console.log("Updating payment status to:", status);
    payment.status = status;
    await payment.save();

    if (status === 'completed') {
      console.log("Creating admission record with details:", admissionDetails);
      const newAdmission = new Admission({
        ...admissionDetails,
        dateOfAdmission: new Date(),
      });
      await newAdmission.save();
    }

    res.status(200).json({ message: 'Payment status updated and admission created successfully.' });
  } catch (error) {
    console.error("Error confirming payment:", error.message);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
