// import React, { useState } from 'react';
// import { useAuth } from '../store/auth';
// import axios from 'axios';

// const OnlineAdmission = () => {
//   const { user } = useAuth();  // Get user from context
//   const [loading, setLoading] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState(null);
//   const user_email = user?.email; // Get the user ID from the user object

//   const handlePayment = async () => {

//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8000/api/v1/payment/create-checkout-session', {
//         email: user_email, // Pass the actual user ID
//         amount: 10000, // ₹1000
//       });

//       const sessionId = response.data.id;
//       const stripe = window.Stripe('pk_test_51Q56EjEP7o2kKrafWnt7eZnbAvY2hx1dyG97UlD8dcLoMUjOcHRx8JGSiReNZIaa9WwSvD6HuvgpCa9SOSJQLgPr00THRW3Bnb');
//       await stripe.redirectToCheckout({ sessionId });
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className='mt-20'>
//       <button onClick={handlePayment} disabled={loading}>
//         {loading ? 'Processing...' : 'Pay ₹1000'}
//       </button>

//       {paymentStatus && <p>{paymentStatus}</p>}
//     </div>
//   );
// };

// export default OnlineAdmission;


import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth';

const OnlineAdmission = () => {
  const { user } = useAuth();  // Get user from context
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: 'Male',
    role: 'Striker',
    mode: 'Online',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {
    if (!user?.email) {
      console.error("User is not logged in or email is missing");
      return;
    }

    setLoading(true);

    try {
      // Send user and admission details before initiating the payment
      const response = await axios.post('http://localhost:8000/api/v1/payment/create-checkout-session', {
        email: user?.email,  // Send email as part of payment details
        amount: 10000, // ₹1000 (in paise)
        admissionDetails: formData,  // Send admission details as part of request
      });

      const sessionId = response.data.id;
      const stripe = window.Stripe('pk_test_51Q56EjEP7o2kKrafWnt7eZnbAvY2hx1dyG97UlD8dcLoMUjOcHRx8JGSiReNZIaa9WwSvD6HuvgpCa9SOSJQLgPr00THRW3Bnb');
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error('Error initiating payment:', error);
    }

    setLoading(false);
  };

  return (
    <div className="mt-20">
      <input 
        type="text" 
        name="name" 
        placeholder="Full Name" 
        value={formData.name} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded"
      />
      <input 
        type="date" 
        name="dateOfBirth" 
        value={formData.dateOfBirth} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded"
      />
      <select 
        name="gender" 
        value={formData.gender} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select 
        name="role" 
        value={formData.role} 
        onChange={handleChange} 
        className="mb-4 p-2 border rounded"
      >
        <option value="Striker">Striker</option>
        <option value="Defender">Defender</option>
        <option value="Striker">Goalkeeper</option>
        <option value="Midfielder">MidFielder</option>
      </select>


      <button 
        onClick={handlePayment} 
        disabled={loading} 
        className="py-2 px-4 bg-green-600 text-white rounded"
      >
        {loading ? 'Processing...' : 'Pay ₹1000'}
      </button>

      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
};

export default OnlineAdmission;
