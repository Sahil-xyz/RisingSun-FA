import React from "react";
import { MdGroupAdd } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="font-poppins p-6 min-h-screen">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-4">
          Admin Dashboard
        </h1>
        <p className="text-lg font-ptsans text-center text-gray-700">
          You can edit teams and add new users that have taken admission in the
          football academy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/teams"
          className="bg-purple-300 rounded-lg shadow-lg w-full h-36 flex flex-col items-center justify-center hover:bg-purple-400 transition duration-300"
        >
          <MdGroupAdd className="text-4xl text-purple-800 mb-2" />
          <p className="text-lg font-medium text-gray-800">Manage Teams</p>
        </Link>
        <Link
          to="/admin/admission"
          className="bg-gray-400 rounded-lg shadow-lg w-full h-36 flex flex-col items-center justify-center hover:bg-gray-500 transition duration-300"
        >
          <FaUserPlus className="text-4xl text-gray-900 mb-2" />
          <p className="text-lg font-medium text-gray-800">Manage Admissions</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
