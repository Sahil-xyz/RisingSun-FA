import React from "react";
import { useAuth } from "../store/auth"; // Assuming you have an auth context or store
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth(); // Assuming `user` object contains email and username
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Username</label>
          <p className="bg-gray-200 p-2 rounded-md">{user?.username || "N/A"}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <p className="bg-gray-200 p-2 rounded-md">{user?.email || "N/A"}</p>
        </div>
        
        <div>
          <Link to="/logout" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-
          2 px-4 rounded">Logout</Link>
          </div>
      </div>
    </div>
  );
};

export default Profile;
