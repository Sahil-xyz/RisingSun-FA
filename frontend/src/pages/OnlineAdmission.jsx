// OnlineAdmission.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth';
import toast from 'react-hot-toast'

const OnlineAdmission = () => {
  const { user } = useAuth();  // Get user from context
  const [loading, setLoading] = useState(false);
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
      toast.error("User is not logged in or email is missing");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/v1/payment/create-checkout-session`, {
        email: user?.email,
        amount: 100000, // ₹1000 (in paise)
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
    <div className="p-10" style={{ backgroundImage: "url('https://prolevelacademy.com/wp-content/uploads/2022/07/New-HP1.jpg')" }}>
      <div className="max-w-lg mx-auto p-20 bg-gray-400 shadow-md rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Online Admission</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your full name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Date of Birth</label>
          <input 
            type="date" 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Gender</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Role</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange} 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Striker">Striker</option>
            <option value="Defender">Defender</option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Midfielder">Midfielder</option>
          </select>
        </div>

        <button 
          onClick={handlePayment} 
          disabled={loading} 
          className={`w-full py-3 mt-6 text-white rounded-lg ${loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} focus:outline-none`}
        >
          {loading ? 'Processing...' : 'Pay ₹1000'}
        </button>
      </div>
    </div>
  );
};

export default OnlineAdmission;
