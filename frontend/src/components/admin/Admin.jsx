import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminTeams from './AdminTeams';
import AdminDashboard from './AdminDashboard';
import AdminAdmission from './AdminAdmission';

const Admin = () => {
  return (
    <div className="flex">
      {/* Sidebar - Fixed position */}
      <div className="w-64 h-screen fixed bg-gray-800">
        <AdminSidebar />
      </div>
      
      {/* Content Area - Adding margin to avoid overlap with the fixed sidebar */}
      <div className="ml-64 flex-1 p-8">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/teams" element={<AdminTeams/>} />
          <Route path='/admission' element={<AdminAdmission/> } />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
