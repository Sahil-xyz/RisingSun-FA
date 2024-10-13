import React from 'react'
import { logout } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(logout());
  return <Navigate to="/login" />
}

export default Logout