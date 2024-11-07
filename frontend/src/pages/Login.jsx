import React from 'react'
import { useState } from 'react';// import Footer from './Footer';
const Login=()=>{  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    // GOgle login
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('https://sesafootballacademy.in/wp-content/themes/sfa-home/images/bag.jpg')] bg-cover bg-center">
  <div className="flex flex-col items-center sm:flex-row w-full max-w-4xl bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8 sm:p-12 justify-center">
    
    <div className="w-full sm:w-1/2">
      <div className="flex justify-center items-center mb-8">
        <div className="text-3xl font-bold text-red-500">Rising Sun Football Academy</div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Login to Football Club</h2>
      <p className="text-gray-500 mb-6">Please login or sign up to continue</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Your Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div className="flex justify-center mb-4">
          <button
            className="flex items-center justify-center w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleGoogleLogin}
            type="button"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path fill="#EA4335" d="M24 9.5c3.6 0 6.7 1.2 9.3 3.4l7-7C35.5 2 30.2 0 24 0 14.8 0 6.9 5.4 3 13.3l7.8 6.1C12.6 13.5 17.8 9.5 24 9.5z" />
              <path fill="#34A853" d="M46.5 24c0-1.6-.2-3.2-.5-4.7H24v9.1h12.6c-.6 3.2-2.4 5.9-5 7.8l7.8 6C44 37 46.5 31 46.5 24z" />
              <path fill="#4A90E2" d="M11.5 28.6c-2.2-.6-4.2-1.7-5.9-3.1L-1 33c3.9 7.9 11.8 13.3 21 13.3 5.8 0 11.1-2 15.2-5.2l-7.8-6c-2.2 1.5-5 2.4-7.9 2.4-6.1 0-11.3-4.1-13.2-9.8z" />
              <path fill="#FBBC05" d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-7.8-6c-2.5 1.7-5.7 2.8-8.8 2.8-7.2 0-13.3-4.9-15.4-11.5L3 33.5C7.1 42.6 14.7 48 24 48z" />
            </svg>
            Google
          </button>
        </div>
        <p className="text-center text-black">
          Already have an account?{' '}
          <a href="/Register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  </div>
</div>

   
  
  );
}

export default Login;