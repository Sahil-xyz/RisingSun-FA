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
import Payment from '../models/payment.model.js';
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
    return res.status(400).json({ error: 'PaymentId, status, and admissionDetails are required.' });
  }

  try {
    // Find the payment record
    const payment = await Payment.findById(paymentId);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found.' });
    }

    // Update the payment status
    payment.status = status;
    await payment.save();

    // If payment is successful, create the admission record
    if (status === 'completed') {
      const newAdmission = new Admission({
        ...admissionDetails,
        // Associate the payment with the admission (optional)
        payment: payment._id,
        dateOfAdmission: new Date(),
      });
      await newAdmission.save();
    }

    res.status(200).json({ message: 'Payment status updated and admission created successfully.' });
  } catch (error) {
    console.error('Error confirming payment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
