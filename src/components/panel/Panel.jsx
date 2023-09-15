import React, { useEffect } from "react";
import "./Panel.css";
import Topbar from "./pages/Topbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Pets from "./pages/Pets";
import Services from "./pages/Services";
import Breadcrumb from "./pages/Breadcrumb";
import Footer from "./pages/Footer";

function Panel() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated; if not, redirect to the login page
    if (JSON.parse(sessionStorage.getItem("pet-shop-current-user")) === null) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <div>
      {/* Render the Topbar component */}
      <Topbar />

      {/* Render the Breadcrumb component */}
      <Breadcrumb />

      {/* Define routes for different pages within the Panel */}
      <Routes>
        {/* Route for the Home page */}
        <Route path="home" element={<Home />} />

        {/* Route for the Pets page */}
        <Route path="pets" element={<Pets />} />

        {/* Route for the Services page */}
        <Route path="services" element={<Services />} />
      </Routes>

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default Panel;
