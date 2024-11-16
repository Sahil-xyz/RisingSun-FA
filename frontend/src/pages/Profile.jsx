import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null); // User data
  const [username, setUsername] = useState(""); // Username input for updates
  const [email, setEmail] = useState(""); // Email input for updates
  const [loading, setLoading] = useState(true); // Loading indicator
  const [message, setMessage] = useState(""); // Feedback message

  // Fetch user profile
  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/user/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(data.user);
      setUsername(data.user.username);
      setEmail(data.user.email);
    } catch (error) {
      console.error("Error fetching profile:", error.response?.data || error);
      setMessage("Failed to load profile.");
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}api/v1/user/update-profile`,
        { username, email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage(data.message);
      fetchProfile();
    } catch (error) {
      console.error("Error updating profile:", error.response?.data || error);
      setMessage("Failed to update profile.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
  };

  // Load user data on component mount
  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Profile Page</h1>
        {message && (
          <div
            className={`mb-4 text-center py-2 px-4 rounded ${
              message.includes("Failed") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}
        {user && (
          <form onSubmit={updateProfile} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-800 focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Update Profile
            </button>
          </form>
        )}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
