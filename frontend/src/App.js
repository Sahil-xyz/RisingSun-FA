import React from "react";
import Home from "./pages/Home";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Admission from "./pages/Admission"
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import VerifyEmail from "./pages/VerifyEmail";
import { Verify } from "crypto";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register/> } />
        <Route path="/verify" element={ <VerifyEmail/> } />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default App;
