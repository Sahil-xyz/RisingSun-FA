import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminSidebar from "./AdminSidebar";
// import AdminTeams from "./AdminTeams";
import AdminDashboard from "./AdminDashboard";
// import ErrorPage from "../../pages/ErrorPage";
// import { useAuth } from "../../store/auth";
import AdmissionPage from "../../pages/AdmissionPage";
import CreateTeam from "./CreateTeam";
import EditTeam from "./EditTeam";
import DisplayTeams from "./DisplayTeams";

const Admin = () => {
  // Checks if the user is Admin or not.
  // const { user } = useAuth();
  // const isAdmin = user?.isAdmin;
  return (
  // return isAdmin ? (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen bg-gray-800">
        <AdminSidebar />
      </div>
      {/* Main content */}
      <div className="md:ml-64 p-8">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/teams" element={<CreateTeam />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/teams/:id" element={<EditTeam/>} />
          <Route path="/teams/display" element={<DisplayTeams/>} />
        </Routes>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
    
  // ) : (
  //   <ErrorPage />
  // );
  )
};

export default Admin;
