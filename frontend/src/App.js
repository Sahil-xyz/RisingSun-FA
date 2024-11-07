import React from "react";
import Navbar from "./Navbar/Navbar"; // Adjusted path for Navbar
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming Home is located in pages
import Login from "./pages/Login"; // Adjusted path for Login
import Logout from './pages/Logout'
import Register from "./pages/Register"; // Adjusted path for Register
import { Toaster } from "react-hot-toast"; // Toaster for notifications
import VerifyEmail from "./pages/VerifyEmail"
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";

// Main App component
//import { Verify } from "crypto";

const App = () => {
  return (
    <>
      <Navbar /> {/* Always show the Navbar */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register/> } />
        <Route path="/verify" element={ <VerifyEmail/> } />
        <Route path="/logout" element={ <Logout/> } />
        <Route path="/profile" element={ <Profile/> } />
      </Routes>
      <Footer/>  
      <Toaster position="bottom-right" reverseOrder={false} />
      </>
  );
};

export default App;
