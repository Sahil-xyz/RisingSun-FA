import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// Backend registration route
export const USER_API_END_POINT = "http://localhost:8000/api/v1/user/register";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Update the component's state when user gives data
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Registration function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(USER_API_END_POINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await res.json();
      if (res.ok) {
        setUser({ username: "", email: "", password: "" });
        toast.success(res_data.message);
        navigate("/verify");
      } else {
        toast.error(res_data.extraDetails || res_data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
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
                type="text"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
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
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
            <p className="text-center text-black">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
