import React, { createContext, useReducer } from "react";
import Navbar from "./Navbar/Navbar"; // Adjusted path for Navbar
import { Routes, Route } from "react-router-dom";
import AboutContent from "./Navbar/About/AboutContent"; // Adjusted path for AboutContent
import AchievementsPage from "./Navbar/About/Achievement"; // Added path for Achievement
import HistoryPage from "./Navbar/About/History"; // Adjusted path for History
import MissionPage from "./Navbar/About/Mission"; // Added path for Mission
import Contact from "./Navbar/Contact/Contact"; // Adjusted path for Contact
import ContactContent from "./Navbar/Contact/ContactContent"; // Adjusted path for ContactContent
import Home from "./pages/Home"; // Assuming Home is located in pages
import Login from "./pages/Login"; // Adjusted path for Login
import Register from "./pages/Register"; // Adjusted path for Register
import Admission from "./pages/Admission"; // Adjusted path for Admission
import { Toaster } from "react-hot-toast"; // Toaster for notifications
import { initialState, reducer } from "./Navbar/reducer/UseReducer"; // Adjusted path for reducer

// Create UserContext
export const UserContext = createContext();

// Main App component
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Navbar /> {/* Always show the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/home" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<AboutContent />} />
        <Route path="/achievement" element={<AchievementsPage />} /> {/* Achievement route */}
        <Route path="/history" element={<HistoryPage />} /> {/* History route */}
        <Route path="/mission" element={<MissionPage />} /> {/* Mission route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
        <Route path="/contact-content" element={<ContactContent />} /> {/* Contact Content route */}
        <Route path="/register" element={<Register />} /> {/* Registration page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/admission" element={<Admission />} /> {/* Admission page */}
        {/* Add other routes as needed */}
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} /> {/* Toast notifications */}
    </UserContext.Provider>
  );
};

export default App;
