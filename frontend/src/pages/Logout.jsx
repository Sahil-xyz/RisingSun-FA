import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  // access LogoutUser function which is declared in useAuth 
  const { LogoutUser } = useAuth();

  // useEffect() ensures the logout function is performed when called
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  // Navigate to login page after successful logout
  return <Navigate to="/login" />;
};

export default Logout;