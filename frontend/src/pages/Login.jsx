import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import toast from "react-hot-toast";
import { MdExitToApp } from "react-icons/md";
// import { useGoogleLogin } from "@react-oauth/google";

export const USER_API_END_POINT = "http://localhost:8000/api/v1/user/login";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(USER_API_END_POINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const res_data = await res.json();

      if (res.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error(res_data.message);
      }
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  // const handleGoogleLogin = useGoogleLogin({
    // onSuccess: async (tokenResponse) => {
    //   try {
    //     const res = await fetch("http://localhost:8000/api/v1/user/google-login", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ token: tokenResponse.access_token }),
    //     });
    //     const res_data = await res.json();

    //     if (res.ok) {
    //       storeTokenInLS(res_data.token);
    //       toast.success("Google login successful");
    //       navigate("/");
    //     } else {
    //       toast.error(res_data.message);
    //     }
    //   } catch (error) {
    //     toast.error("Google login failed");
    //   }
    // },
    // onError: () => toast.error("Google login failed"),
  // });
  const handleGoogleLogin = () => {
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('https://sesafootballacademy.in/wp-content/themes/sfa-home/images/bag.jpg')] bg-cover bg-center">
      <div className="flex flex-col items-center sm:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 sm:p-12 bg-[rgba(255,255,255,0.20)] backdrop-blur-lg justify-center">
        
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
                name="email"
                type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Your Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-4">
              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <div className="flex justify-center mb-4">
            <button
              className="flex items-center justify-center w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleGoogleLogin}
              type="button"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.6 0 6.7 1.2 9.3 3.4l7-7C35.5 2 30.2 0 24 0 14.8 0 6.9 5.4 3 13.3l7.8 6.1C12.6 13.5 17.8 9.5 24 9.5z" />
                <path fill="#34A853" d="M46.5 24c0-1.6-.2-3.2-.5-4.7H24v9.1h12.6c-.6 3.2-2.4 5.9-5 7.8l7.8 6C44 37 46.5 31 46.5 24z" />
                <path fill="#4A90E2" d="M11.5 28.6c-2.2-.6-4.2-1.7-5.9-3.1L-1 33c3.9 7.9 11.8 13.3 21 13.3 5.8 0 11.1-2 15.2-5.2l-7.8-6c-2.2 1.5-5 2.4-7.9 2.4-6.1 0-11.3-4.1-13.2-9.8z" />
                <path fill="#FBBC05" d="M24 48c6.5 0 11.9-2.1 15.8-5.7l-7.8-6c-2.5 1.7-5.7 2.8-8.8 2.8-7.2 0-13.3-4.9-15.4-11.5L3 33.5C7.1 42.6 14.7 48 24 48z" />
              </svg>
              Google
            </button>
          </div>
          <p className="text-center text-black">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
