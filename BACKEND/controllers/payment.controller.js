// // controllers/paymentController.js
// import mongoose from 'mongoose';
// import  Payment  from '../models/payment.model.js';
// import Stripe from 'stripe';
// const stripe = new Stripe('sk_test_51Q56EjEP7o2kKraf8gTwRw783T0JFIjQYkdhrcAKLKsIzaThjqfua8a5zA5tp2kYvatnn0hNFcMOsAV2yTqox23J00qsVsumFu');

// export async function createCheckoutSession(req, res, next) {
//   try {
//     const { userId, amount } = req.body;

//     if (!userId || !amount) {
//       return res.status(400).json({
//         message: 'userId and amount are required',
//       });
//     }

//     const paymentRecord = await Payment.create({
//       userId : new mongoose.Types.ObjectId(userId),
//       amount :req.body.amount,
//       status: 'pending',
//     });

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'inr',
//             product_data: { name: 'Football Academy Membership' },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.FRONTEND_URL}/success?paymentId=${paymentRecord._id}`,
//       cancel_url: `${process.env.FRONTEND_URL}/failure`,
//     });

//     paymentRecord.transactionId = session.id;
//     await paymentRecord.save();

//     res.json({ id: session.id });
//   } catch (error) {
//     next(error);
//   }
// }

// export async function confirmPayment(req, res, next) {
//   const { paymentId, status } = req.body;
//   try {
//     const payment = await Payment.findById(paymentId);

//     if (!payment) {
//       return res.status(404).json({ error: 'Payment not found' });
//     }

//     payment.status = status;
//     await payment.save();

//     res.json({ message: 'Payment status updated' });
//   } catch (error) {
//     next(error);
//   }
// }


import mongoose from 'mongoose';
import  Payment from '../models/payment.model.js';
import {User } from '../models/user-model.js'; // Assuming you have a User model
import Stripe from 'stripe';
import { Admission } from '../models/admission-model.js'

const stripe = new Stripe('sk_test_51Q56EjEP7o2kKraf8gTwRw783T0JFIjQYkdhrcAKLKsIzaThjqfua8a5zA5tp2kYvatnn0hNFcMOsAV2yTqox23J00qsVsumFu'); // Use environment variable for Stripe secret key

// export async function createCheckoutSession(req, res, next) {
//   try {
//     const { email, amount } = req.body;

//     if (!email || !amount) {
//       return res.status(400).json({
//         message: 'Email and amount are required',
//       });
//     }

//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         message: 'User not found',
//       });
//     }

//     // Create payment record
//     const paymentRecord = await Payment.create({
//       userId: user._id,  // Save the userId as ObjectId
//       email: email,       // Save email as string
//       amount: amount,
//       status: 'pending',
//     });

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'inr',
//             product_data: { name: 'Football Academy Membership' },
//             unit_amount: amount,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${process.env.FRONTEND_URL}/success?paymentId=${paymentRecord._id}`,
//       cancel_url: `${process.env.FRONTEND_URL}/failure`,
//     });

//     paymentRecord.transactionId = session.id;
//     await paymentRecord.save();

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error('Error in createCheckoutSession:', error);
//     next(error);  // Pass the error to the error-handling middleware
//   }
// }

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
        payment: payment._id,
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


// export async function confirmPayment(req, res, next) {
//   const { paymentId, status } = req.body;
//   try {
//     const payment = await Payment.findById(paymentId);

//     if (!payment) {
//       return res.status(404).json({ error: 'Payment not found' });
//     }

//     payment.status = status;
//     await payment.save();

//     res.json({ message: 'Payment status updated' });
//   } catch (error) {
//     next(error);
//   }
// }


// export async function createDonationSession(req, res) {
//   const { email, amount } = req.body;

//   // Validate inputs
//   if (!email || !amount) {
//     return res.status(400).json({ message: 'Email and amount are required' });
//   }

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Create a new payment record in your database (optional)
//     const paymentRecord = await Payment.create({
//       userId: user._id,
//       email,
//       amount,
//       status: 'pending',
//     });

//     // Create a Stripe payment session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'], // Only accepting card payments
//       line_items: [
//         {
//           price_data: {
//             currency: 'inr', // Currency for the donation
//             product_data: { name: 'Football Academy Donation' }, // Name of the product (donation)
//             unit_amount: amount, // Amount in the smallest unit (i.e., paisa in INR)
//           },
//           quantity: 1, // Only one donation in this transaction
//         },
//       ],
//       mode: 'payment', // Payment mode
//       success_url: `${process.env.FRONTEND_URL}/success?paymentId=${paymentRecord._id}`, // Redirect after success
//       cancel_url: `${process.env.FRONTEND_URL}/failure`, // Redirect after cancellation
//     });

//     // Save the Stripe session ID in the payment record (optional)
//     paymentRecord.transactionId = session.id;
//     await paymentRecord.save();

//     // Send the session ID to the frontend
//     res.status(200).json({ id: session.id });

//   } catch (error) {
//     console.error('Error creating donation session:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


// export async function confirmDonatePayment(req, res, next) {
//   const { paymentId, status } = req.body;

//   if (!paymentId || !status) {
//     return res.status(400).json({ message: 'Payment ID and status are required' });
//   }

//   try {
//     const paymentRecord = await Payment.findById(paymentId);
//     if (!paymentRecord) {
//       return res.status(404).json({ message: 'Payment not found' });
//     }

//     paymentRecord.status = status;
//     await paymentRecord.save();

//     res.json({ message: 'Payment status updated successfully' });
//   } catch (error) {
//     console.error('Error updating payment status:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
