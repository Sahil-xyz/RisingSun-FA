import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { BsClipboardCheckFill } from 'react-icons/bs';
import { LuLayoutDashboard } from 'react-icons/lu';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'Football Academy', class: 'text-2xl font-bold mb-6 text-white' },
    { icon: FaHome, text: 'Home', path: '/' },
    { icon: LuLayoutDashboard, text: 'Dashboard', path: '/admin' },
    { icon: RiTeamLine, text: 'Teams/Players', path: '/admin/teams' },
    { icon: BsClipboardCheckFill, text: 'Admissions', path: '/admin/admission' },
    { icon: MdLogout, text: 'Logout', path: '/logout', class: 'text-red-500 hover:bg-red-700 hover:text-white' },
  ];

  return (
    <div className="h-full flex">
      {/* Toggle Button for small screens */}
      <button
        className="text-gray-200 p-4 md:hidden fixed top-4 left-4 z-20"
        onClick={toggleSidebar}
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-gray-200 p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64 transition-transform duration-300 ease-in-out z-30`}
      >
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index} className="group text-lg font-pop hover:bg-gray-800 rounded-lg">
              <Link to={item.path} className={`flex items-center p-3 ${item.class || ''}`}>
                {item.icon && (
                  <item.icon className="mr-3 text-xl text-gray-400 group-hover:text-white" />
                )}
                <span className="text-sm group-hover:text-white">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default AdminSidebar;
