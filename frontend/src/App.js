import React, { createContext, useReducer } from "react";
import Navbar from "./Navbar/Navbar"; // Adjusted path for Navbar
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Assuming Home is located in pages
import Login from "./pages/Login"; // Adjusted path for Login
import Register from "./pages/Register"; // Adjusted path for Register
import { Toaster } from "react-hot-toast"; // Toaster for notifications
import { initialState, reducer } from "./Navbar/reducer/UseReducer"; // Adjusted path for reducer
import VerifyEmail from "./pages/VerifyEmail"
import Footer from "./pages/Footer";
// Create UserContext
export const UserContext = createContext();

// Main App component
//import { Verify } from "crypto";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    
    <UserContext.Provider value={{ state, dispatch }}>
      <Navbar /> {/* Always show the Navbar */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register/> } />
        <Route path="/verify" element={ <VerifyEmail/> } />
      </Routes>
      <Footer/>  
      <Toaster position="bottom-right" reverseOrder={false} />
      
    </UserContext.Provider>
  );
};

export default App;
