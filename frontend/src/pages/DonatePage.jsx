import React, { useState } from 'react';
import { IoIosFootball } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory

// Importing the donation page background image
import donatePageImage from '../assets/donatePageImage.jpg';

const DonatePage = () => {
  const [amount, setAmount] = useState('');  // State for the donation amount
  const [isLoading, setIsLoading] = useState(false); // Loading state for donation
  const navigate = useNavigate(); // For handling redirection to success/failure page

  const handleDonate = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    try {
      setIsLoading(true); // Start loading

      // Making an API request to the backend to create a Stripe checkout session
      const { data } = await axios.post('http://localhost:8000/api/v1/payment/donate', {
        email: 'user@example.com', // Ideally, replace with logged-in user’s email
        amount: amount,  // The amount entered by the user
      });

      // Redirect the user to the Stripe checkout page
      const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
      const { error } = await stripe.redirectToCheckout({ sessionId: data.id });

      if (error) {
        console.error('Stripe checkout error:', error);
        alert("There was an error with the payment. Please try again.");
      }
    } catch (error) {
      console.error('Error creating donation session:', error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className='font-poppins'>
      <div className='relative w-full flex flex-col items-center' style={{ backgroundImage: `url(${donatePageImage})` }}>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-6xl font-bold mt-20 mb-4'>Fuel Our Passion for <span className='text-red-700'>Football</span></h1>
          <p className='text-lg mb-8 font-medium font-ptsans'>Every donation goes towards providing quality training and equipment for our players.</p>
          
          {/* Donation Amount Input */}
          <input
            type="number"
            placeholder="Enter amount to donate"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 rounded-lg mb-4"
            min="1"
          />
          
          {/* Donate Button */}
          <button
            className='bg-slate-950 text-white rounded-lg py-2 px-4 mb-20 hover:bg-slate-800'
            onClick={handleDonate}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Donate Now'}
          </button>
        </div>
        <div className='absolute -bottom-12'>
          <IoIosFootball size={80} className='bg-white rounded-full w-16 h-16 md:w-24 md:h-24 animate-spin-slow' />
        </div>
      </div>
      <div className='relative h-screen w-full flex items-center justify-center'>
        <h1 className='absolute top-2/4 text-4xl font-semibold h-full'>Yet to build...</h1>
      </div>
    </div>
  );
}

export default DonatePage;
