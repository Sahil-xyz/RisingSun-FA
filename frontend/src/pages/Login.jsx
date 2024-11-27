import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import toast from "react-hot-toast";
import loginImage from "../assets/loginImage-min.png";

export const USER_API_END_POINT = `${process.env.REACT_APP_BACKEND_URL}api/v1/user/login`;

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

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute mt-28 top-4 left-4 flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span className="text-lg font-semibold">&#8592; Back</span>
      </button>

      {/* Login Card */}
      <div className="flex flex-col sm:flex-row w-11/12 md:w-3/4 lg:w-2/3 bg-white bg-opacity-70 rounded-lg border-2 border-white shadow-2xl p-6 sm:p-12 backdrop-blur-sm">
        <div className="w-full sm:w-1/2 mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-red-500">
              Rising Sun Football Academy
            </h1>
          </div>
          <h2 className="text-xl font-semibold mb-6 text-[#13293D] text-center">
            Login to Football Club
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="password"
              >
                Your Password
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex justify-end mb-4">
              <Link
                to="/forget-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <button
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
          <p className="text-center mt-6 text-gray-700">
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
