import React from "react";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingMedical,
  faPaw,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

function Topbar() {
  // Retrieve user data from session storage
  const user = JSON.parse(sessionStorage.getItem("pet-shop-current-user"));
  const navigate = useNavigate();

  // Function to handle user logout
  const logoutHandler = () => {
    // Remove user data from session storage
    sessionStorage.removeItem("pet-shop-current-user");

    // Navigate to the login page
    navigate("/auth/login");
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        {/* Link to the home page */}
        <Link to={"/panel/home"}>
          <img style={{ width: "60%" }} src={logo} alt="logo" />
        </Link>
        {/* Link to the Pets page */}
        <Link className="topbar-link" to={"/panel/pets"}>
          <FontAwesomeIcon icon={faPaw} /> Pets
        </Link>
        {/* Link to the Services page */}
        <Link className="topbar-link" to={"/panel/services"}>
          <FontAwesomeIcon icon={faHandHoldingMedical} /> Services
        </Link>
      </div>
      <div className="topbar-right">
        {/* Display user's name */}
        <p>
          Welcome, <FontAwesomeIcon icon={faUser} />&nbsp; {user?.name}
        </p>
        {/* Button to logout */}
        <button onClick={logoutHandler} className="topbar-link logout-btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          &nbsp;Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;
