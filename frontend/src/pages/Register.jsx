import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register=()=>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/v1/user/register', {username, email, password})
      toast.success("Registration successful , Please verify your email.")
      navigate('/verify')
    } catch (error) {
  console.error("Error response:", error.response);  // Log full response to inspect
  const errorMessage = error.response?.data?.message || error.message || "An error occurred";
  toast.error(errorMessage);

    }
  };
  return(
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('https://sesafootballacademy.in/wp-content/themes/sfa-home/images/bag.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 sm:p-12 bg-[rgba(255,255,255,0.20)] backdrop-blur-lg justify-center">
        <div className="w-full sm:w-1/2">
          <div className="flex justify-center items-center mb-8">
            <div className="text-3xl font-bold text-red-500">Rising Sun Football Academy</div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Register for Football Club</h2>
          <p className="text-gray-500 mb-6">Please fill in the details to create your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
                Register
              </button>
            </div>
            <p className="text-center text-black">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register;