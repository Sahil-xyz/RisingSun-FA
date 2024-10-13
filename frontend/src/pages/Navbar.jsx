// Navbar.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const { isLoggedIn, username } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <nav>
      <ul className='flex'>
        <li>
          <a href="/">Home</a>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <span>Welcome, {username}!</span> {/* Display username */}
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
