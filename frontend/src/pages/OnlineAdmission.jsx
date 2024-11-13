import React, { useState } from 'react';
import axios from 'axios';

const OnlineAdmission = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    try {
      const userId = 'USER_ID'; // Replace with actual user ID from context or state
      const response = await axios.post('http://localhost:8000/api/v1/payment/create-checkout-session', {
        userId,
        amount: amount * 100, // Amount in cents for Stripe
      });

      if (response.data.id) {
        window.location.href = `https://checkout.stripe.com/pay/${response.data.id}`;
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
    }
  };

  return (
    <div>
      <h2>Enter Payment Amount</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in INR"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default OnlineAdmission;
