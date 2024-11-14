import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const paymentId = new URLSearchParams(location.search).get('paymentId');

  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        await axios.post('http://localhost:8000/api/v1/payment/confirm-payment', {
          paymentId,
          status: 'completed',
        });
      } catch (error) {
        console.error('Error updating payment status:', error);
      }
    };
    if (paymentId) {
      updatePaymentStatus();
    }
  }, [paymentId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 text-lg mb-6">Your payment has been successfully processed. Thank you for your purchase!</p>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
