import { useState, useEffect, createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode'

// Create Auth Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [decodedToken, setDecodedToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        setUser({
          id: decoded._id,
          username: decoded.username,
          email: decoded.email,
          isAdmin: decoded.isAdmin
        });
      } catch (err) {
        console.error('Invalid token');
        LogoutUser(); // Clear invalid token if decoding fails
      }
    }
  }, [token]);

  // Store token and update state
  const storeTokenInLS = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  // Clear token from localStorage and state
  const LogoutUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const isLoggedIn = Boolean(token);

  return (
    <AuthContext.Provider
      value={{
        token,
        decodedToken,
        storeTokenInLS,
        isLoggedIn,
        LogoutUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};