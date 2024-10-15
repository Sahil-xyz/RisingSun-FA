import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminTeams from './AdminTeams';
import AdminDashboard from './AdminDashboard';
import Admission from '../../pages/Admission'
import { useSelector } from 'react-redux';
import ErrorPage from '../../pages/ErrorPage';

const Admin = () => {

  // Checks if the user is Admin or not.
  const {isAdmin}  = useSelector((state) => state.auth);

  if(isAdmin) {
    return (
      <div className="flex">
        {/* For Sidebar */}
        <div className="w-64 h-screen fixed bg-gray-800">
          <AdminSidebar />
        </div>
        {/* For main content */}
        <div className="ml-64 flex-1 p-8">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/teams" element={<AdminTeams/>} />
            <Route path='/admission' element={<Admission/> } />
          </Routes>
        </div>
      </div>
    );
  } else {
    return <ErrorPage/>
  }


}

export default Admin;
