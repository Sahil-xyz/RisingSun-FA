// controllers/paymentController.js
import mongoose from 'mongoose';
import  Payment  from '../models/payment.model.js';
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51Q56EjEP7o2kKraf8gTwRw783T0JFIjQYkdhrcAKLKsIzaThjqfua8a5zA5tp2kYvatnn0hNFcMOsAV2yTqox23J00qsVsumFu');

export async function createCheckoutSession(req, res, next) {
  try {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).json({
        message: 'userId and amount are required',
      });
    }

    const paymentRecord = await Payment.create({
      userId : new mongoose.Types.ObjectId(userId),
      amount :req.body.amount,
      status: 'pending',
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: { name: 'Football Academy Membership' },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?paymentId=${paymentRecord._id}`,
      cancel_url: `${process.env.FRONTEND_URL}/failure`,
    });

    paymentRecord.transactionId = session.id;
    await paymentRecord.save();

    res.json({ id: session.id });
  } catch (error) {
    next(error);
  }
}

export async function confirmPayment(req, res, next) {
  const { paymentId, status } = req.body;
  try {
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    payment.status = status;
    await payment.save();

    res.json({ message: 'Payment status updated' });
  } catch (error) {
    next(error);
  }
}
