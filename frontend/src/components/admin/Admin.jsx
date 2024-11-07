import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTeams from "./AdminTeams";
import AdminDashboard from "./AdminDashboard";
// import ErrorPage from "../../pages/ErrorPage";
// import { useAuth } from "../../store/auth";
import AdmissionsPage from "../../pages/AdmissionPage";

const Admin = () => {
  // Checks if the user is Admin or not.
  // const { user } = useAuth();
  // const isAdmin = user?.isAdmin;
  return (
  // return isAdmin ? (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed bg-gray-800">
        <AdminSidebar />
      </div>
      {/* Main content */}
      <div className="ml-64 flex-1 p-8">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/teams" element={<AdminTeams />} />
          <Route path="/admission" element={<AdmissionsPage />} />
        </Routes>
      </div>
    </div>
  // ) : (
  //   <ErrorPage />
  // );
  )
};

export default Admin;
