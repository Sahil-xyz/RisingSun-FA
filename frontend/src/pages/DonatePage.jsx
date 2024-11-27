import React, { useState } from 'react';
import { IoIosFootball } from "react-icons/io";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory

// Importing the donation page background image
// import donateBgImage from '../assets/soccer-stadium-full-people.jpg'
// style={{ backgroundImage: `url(${homeImage})` }}
import donatePageImage from '../assets/donatePageImage.jpg'
import qr from '../assets/qr.jpg'

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
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/v1/payment/donate`, {
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
            <h1 className='text-6xl font-bold mt-20 mb-4 text-center'>Fuel Our Passion for <span className='text-red-700'>Football</span></h1>
            <p className='text-lg mb-8 font-medium font-ptsans text-center'>Every donation goes towards providing quality training and equipment for our players.</p>
            <h1 className=' text-black rounded-lg py-2 px-4 mb-20 text-4xl font-bold'>Donate Now</h1>
          </div>
          <div className='absolute  -bottom-12'>
            <IoIosFootball size={80} className='bg-white rounded-full w-16 h-16 md:w-24 md:h-24 animate-spin-slow'/>
          </div>
          
        </div>
        <div className="flex justify-center items-center mt-8">
  <div className="bg-gray-100 p-6 rounded-lg shadow-xl border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl mt-20">
    <img 
      src={qr}
      alt="QR Code for Payment" 
      className="w-80 h-100 object-contain "
    />
  </div>
</div>
 <h1> <h1 className="mt-4 text-xl font-semibold text-gray-800 tracking-wide text-center">
    Scan to Pay
  </h1></h1>
        <div className='relative h-72 w-full flex items-center justify-center'>
          
          <h1 className='absolute top-2/4 text-4xl font-semibold h-full text-center'>Thanks For Donation.</h1>
        </div>
    </div>
  );
}

export default DonatePage;
