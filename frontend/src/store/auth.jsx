// import { useState, useEffect, createContext, useContext } from 'react';
// import { jwtDecode } from 'jwt-decode'

// Create Auth Context
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const [decodedToken, setDecodedToken] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setDecodedToken(decoded);
//         setUser({
//           id: decoded._id,
//           username: decoded.username,
//           email: decoded.email,
//           isAdmin: decoded.isAdmin
//         });
//       } catch (err) {
//         console.error('Invalid token');
//         LogoutUser(); // Clear invalid token if decoding fails
//       }
//     }
//   }, [token]);

//   // Store token and update state
//   const storeTokenInLS = (token) => {
//     localStorage.setItem('token', token);
//     setToken(token);
//   };

//   // Clear token from localStorage and state
//   const LogoutUser = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem('token');
//   };

//   const isLoggedIn = Boolean(token);

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         decodedToken,
//         storeTokenInLS,
//         isLoggedIn,
//         LogoutUser,
//         user
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


import { useState, useEffect, createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create Auth Context
export const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token')); // Get the token from localStorage
  const [decodedToken, setDecodedToken] = useState(null);
  const [user, setUser] = useState(null);

  // Use effect to decode the token and set user data when token changes
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);  // Decode the JWT token
        setDecodedToken(decoded);
        
        // Set user object from the decoded token
        setUser({
          id: decoded._id,
          username: decoded.username,
          email: decoded.email,
          isAdmin: decoded.isAdmin,
        });
      } catch (err) {
        console.error('Invalid token or expired token');
        LogoutUser(); // Log out the user if token is invalid or expired
      }
    }
  }, [token]); // Re-run the effect when token changes

  // Store token in localStorage and update state
  const storeTokenInLS = (token) => {
    localStorage.setItem('token', token); // Save token to localStorage
    setToken(token); // Set token in state
  };

  // Clear token from localStorage and state
  const LogoutUser = () => {
    setToken(null); // Reset token in state
    setUser(null); // Reset user in state
    localStorage.removeItem('token'); // Remove token from localStorage
  };

  // Check if the user is logged in by checking if token exists
  const isLoggedIn = Boolean(token);

  // Token expiration check (optional)
  const checkTokenExpiration = () => {
    if (decodedToken?.exp < Date.now() / 1000) {
      LogoutUser(); // Log out if token is expired
      return false;
    }
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        decodedToken,
        storeTokenInLS,
        LogoutUser,
        isLoggedIn,
        user,
        checkTokenExpiration,  // This function can be used to check if token has expired
      }}
    >
      {children} {/* Render the child components */}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context values
export const useAuth = () => {
  return useContext(AuthContext);
};
