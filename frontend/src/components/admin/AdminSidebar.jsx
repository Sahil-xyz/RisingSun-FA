// AdminSidebar.jsx
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { BsClipboardCheckFill } from 'react-icons/bs';
import { LuLayoutDashboard } from "react-icons/lu";
import AdminSidebarItems from './AdminSidebarItems';

const menuItems = [
  {
    text: 'Football Academy',
    class: 'text-2xl font-bold mb-6 text-white',
  },
  {
    icon: FaHome, // Icon component
    text: 'Home', // Display text
    path: '/', // Path for the Link
  },
  {
    icon: LuLayoutDashboard, // Icon component
    text: 'Dashboard', // Display text
    path: '/admin', // Path for the Link
  },
  {
    icon: RiTeamLine, // Icon component
    text: 'Teams/Players', // Display text
    path: '/admin/teams', // Path for the Link
  },
  {
    icon: BsClipboardCheckFill, // Icon component
    text: 'Admissions', // Display text
    path: '/admin/admission', // Path for the Link
  },
  {
    icon: MdLogout, // Icon component
    text: 'Logout', // Display text
    path: '/logout', // Path for the Link
    class: 'text-red-500 hover:bg-red-700 hover:text-white',
  },
];

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-900 h-screen p-4">
      <AdminSidebarItems menuItems={menuItems} />
    </div>
  );
};

export default AdminSidebar;
