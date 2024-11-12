import React from "react";
import Navbar from "./components/Navbar/Navbar"; // Adjusted path for Navbar
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming Home is located in pages
import Login from "./pages/Login"; // Adjusted path for Login
import Logout from './pages/Logout'
import Register from "./pages/Register"; // Adjusted path for Register
import { Toaster } from "react-hot-toast"; // Toaster for notifications
import VerifyEmail from "./pages/VerifyEmail"
import Profile from "./pages/Profile";
import Girls from "./pages/Girls";
import Footer from "./pages/Footer";
import Boys from "./pages/Boys";
import History from "./pages/History";
import Coaches from "./pages/Coaches";
import Achievement from "./pages/Achievment";
import Vision from "./pages/Vision";
import Location from "./pages/Location";
import Support from "./pages/Support";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import ResetPasswordForm from "./pages/ResetPasswordForm";
import DonatePage from "./pages/DonatePage";
import TeamList from "./pages/TeamList";

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
        <Route path="/forget-password" element={<ForgotPasswordForm/>} />
        <Route path="/reset-password/:token" element={<ResetPasswordForm/>} />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/Boys" element={ <Boys/> } />
        <Route path="/Girls" element={ <Girls/> } />
        <Route path="/Coaches" element={ <Coaches/> } />
        <Route path="/History" element={ <History/> } />
        <Route path="/Achievement" element={ <Achievement/> } />
        <Route path="/Vision" element={ <Vision/> } />
        <Route path="/Location" element={ <Location/> } />
        <Route path="/Support" element={ <Support/> } />
        <Route path="/donate" element={ <DonatePage/> } />
        <Route path="/team-list" element={<TeamList/> } />
      </Routes>
      <Footer/>  
      <Toaster position="bottom-right" reverseOrder={false} />
      
      </>
  );
};

export default App;
