import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";
import History from "./pages/History";
import Coaches from "./pages/Coaches";
import Achievement from "./pages/Achievment";
import Vision from "./pages/Vision";
import Location from "./pages/Location";
import Support from "./pages/Support";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import ResetPasswordForm from "./pages/ResetPasswordForm";
import DonatePage from "./pages/DonatePage";
import BoysTeamList from "./pages/BoysTeamList";
import GirlsTeamList from "./pages/GirlsTeamList";
import Gallery from "./pages/Gallery";
import OnlineAdmission from "./pages/OnlineAdmission";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";

const App = () => {
  const location = useLocation();
  const showFooter = !['/login', '/register', '/verifyemail','/forget-password','/profile',''].includes(location.pathname);
 // Hide footer on login page

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forget-password" element={<ForgotPasswordForm />} />
          <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/history" element={<History />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/location" element={<Location />} />
          <Route path="/support" element={<Support />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/boys" element={<BoysTeamList />} />
          <Route path="/girls" element={<GirlsTeamList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/online-admission" element={<OnlineAdmission />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
      </div>
      {showFooter && <Footer />} {/* Conditionally render the footer */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
