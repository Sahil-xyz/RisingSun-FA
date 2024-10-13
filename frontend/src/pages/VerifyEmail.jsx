import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/user/verifyEmail', { code });
      if (data.success) {
        setMessage('Email verified successfully!');
        setTimeout(() => navigate('/login'), 2000); // Redirect after success
      } else {
        setMessage('Verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Email verification failed:', error);
      setMessage('Verification failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter verification code"
          required
        />
        <button type="submit">Verify</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;