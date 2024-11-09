import React from 'react';
import { FaUsers, FaStar, FaTrophy, FaSignInAlt, FaInfoCircle } from 'react-icons/fa';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

const navbarConfig = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Our Team',
    icon: null,
    dropdown: [
      {
        label: 'Current Teams',
        icon: <FaUsers />,
        href: '/current-teams',
      },
      {
        label: 'Top Players of Academy',
        icon: <FaStar />,
        href: '/top-players',
      },
      {
        label: 'Achievements',
        icon: <FaTrophy />,
        href: 'achievements',
      },
    ],
  },
  {
    label: 'Join Us',
    icon: <FaSignInAlt />,
    dropdown: [
      {
        label: 'Join Form',
        icon: <FaUsers />,
        href: '/join-form',
      },
      {
        label: 'Become Coach',
        icon: <FaStar />,
        href: '/become-coach',
      },
      {
        label: 'Donate',
        icon: <FaTrophy />,
        href: '/donate',
      },
    ],
  },
  {
    label: 'About Us',
    icon: <FaInfoCircle />,
    dropdown: [
      {
        label: 'History',
        icon: <FaUsers />,
        href: '/history',
      },
      {
        label: 'Gallery',
        icon: <FaStar />,
        href: '/gallery',
      },
      {
        label: 'Location',
        icon: <FaTrophy />,
        href: '/location',
      },
    ],
  },
];

const Navbar = () => {

  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-transparent px-4 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo/Title */}
        <h1 className="text-xl font-bold">Rising Sun FA</h1>

        {/* Center - Navbar Links */}
        <ul className="flex space-x-8">
          {navbarConfig.map((item, index) => (
            <li key={index} className="relative group font-semibold">
              {/* Check if item has dropdown */}
              {item.dropdown ? (
                <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
                  <span>{item.label}</span>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className="flex items-center space-x-2 hover:text-yellow-400"
                >
                  {item.icon} <span>{item.label}</span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="absolute top-full mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  <div className="absolute top-0 left-10 w-4 h-4 bg-gray-800 rotate-45 -mt-2"></div>
                  <ul className="py-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.href}
                          className="flex items-center px-4 py-2 hover:bg-gray-700"
                        >
                          {subItem.icon && <span className="mr-3">{subItem.icon}</span>}
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        {
          isLoggedIn ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
