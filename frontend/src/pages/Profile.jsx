import React from "react";
import { useAuth } from "../store/auth"; // Assuming you have an auth context or store
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth(); 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Profile Information</h2>
        
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Username</label>
          <p className="bg-gray-200 text-gray-800 p-3 rounded-lg shadow-md">{user?.username || "N/A"}</p>
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





