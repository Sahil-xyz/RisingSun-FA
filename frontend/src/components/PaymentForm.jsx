import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setPaymentError(null);

    // Request the client secret from your backend
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { clientSecret } = await response.json();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setPaymentError(error.message);
      toast.error(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      toast.success('Payment successful!');
      alert('Payment successful! You have successfully joined the academy.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center text-white mb-6">Complete Your Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CardElement />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full p-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition duration-300 ease-in-out"
        >
          {loading ? 'Processing...' : 'Pay ₹1000'}
        </button>
      </form>
      {paymentError && <div className="text-red-500 mt-4">{paymentError}</div>}
    </div>
  );
};

export default PaymentForm;
