// AdminSidebarItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebarItems = ({ menuItems }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-200 p-4">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li key={index} className="group text-lg font-pop hover:bg-gray-800 rounded-lg">
            <Link to={item.path} className={`flex items-center p-3 ${item.class}`}>
              {/* Icon */}
              {item.icon && <item.icon className="mr-3 text-xl text-gray-400 group-hover:text-white" />}
              {/* Text */}
              <span className="text-sm group-hover:text-white">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebarItems;
