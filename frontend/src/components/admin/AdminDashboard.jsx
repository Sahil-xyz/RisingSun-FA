import React from 'react'
import { MdGroupAdd } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    // Write the dashboard code here
    <div className='font-poppins'>
      <div className='mb-8'>
        <h1 className='text-3xl font-semibold text-gray-900 text-center mb-4'>Admin Dashboard</h1>
        <p className='text-lg font-ptsans text-center'>You can edit teams and add new users that have taken admission in the football academy.</p>
      </div>
      <div className='md:flex w-full justify-around items-center h-20'>
        <Link to="/admin/teams" className='bg-[#D8B4E2] rounded-lg w-full h-full flex items-center justify-center m-8'>
        <MdGroupAdd className='mr-2 size-8'/>
        <p className='text-center'>Create Team</p>
        </Link>
        <Link to="/admin/admission" className='bg-[#929982] rounded-lg w-full h-full flex items-center justify-center m-8'>
          <FaUserPlus className='mr-2 size-6'/>
          <p className='text-center'>Create Admission</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard