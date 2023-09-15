import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./forms/Login";
import Signup from "./forms/Signup";
import "./Auth.css"

function Auth() {
  return (
    <div>
      {/* Auth Wrapper */}
      <div className="auth-wrapper">
        {/* Left Side (Image) */}
        <div className="auth-left-side">
          <img style={{ maxHeight: "450px" }} src="https://i.imgur.com/MYZd7of.png" alt="login image" />
        </div>
        
        {/* Right Side (Login/Signup Forms) */}
        <div className="auth-right-side">
          <Routes>
            {/* Route for Login */}
            <Route path="login" element={<Login />} />

            {/* Route for Signup */}
            <Route path="signup" element={<Signup />} />

            {/* Default Route (Redirect to Login) */}
            <Route path="*" element={<Navigate to={"/auth/login"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Auth;
