import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const paymentId = new URLSearchParams(location.search).get('paymentId');

  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        await axios.post('http://localhost:8000/api/payments/confirm', {
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
    <div>
      <h2>Payment Successful!</h2>
    </div>
  );
};

export default SuccessPage;
