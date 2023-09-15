import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login() {
  // Initialize state for email and password inputs
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // Initialize state for error message
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  // Destructure state and error
  const { email, password } = state;
  const { message, show } = error;

  // Initialize navigation hook
  const navigate = useNavigate();

  // Handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle login button click
  const loginHandler = () => {
    if (email === "" || password === "") {
      // Display an error message if required fields are empty
      setError({
        show: true,
        message: "Please fill all required fields!",
      });
    } else {
      // Get the users' data from localStorage or an empty array
      const users = JSON.parse(localStorage.getItem("pet-shop-users")) || [];

      // Find a user with the provided email
      const user = users.find((user) => user.email === email.trim());

      if (!user) {
        // Display an error message if the user does not exist
        setError({
          show: true,
          message: "User does not exist. Create an account.",
        });
      } else if (user.password !== password) {
        // Display an error message if the password is incorrect
        setError({
          show: true,
          message: "Incorrect password. Please try again.",
        });
      } else {
        // Clear the error message and input fields
        setError({
          show: false,
          message: "",
        });
        setState({
          email: "",
          password: "",
        });

        // Store the current user in sessionStorage and navigate to the home page
        sessionStorage.setItem("pet-shop-current-user", JSON.stringify(user));
        navigate("/panel/home");
      }
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">Log in</header>

      {/* Subheader */}
      <header className="subHeader">
        Welcome to <b>animal planet!</b> Please Enter your Details
      </header>

      {/* Email Input */}
      <div className="inputContainer">
        <label className="label" for="emailAddress">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="label-name">Email Address*</span>
        </label>
        <input
          type="email"
          className="input"
          id="emailAddress"
          placeholder="Enter your Email Address"
          value={email}
          name="email"
          onChange={handleInputChange}
        />
      </div>

      {/* Password Input */}
      <br></br>
      <div className="inputContainer">
        <label className="label" for="password">
          <FontAwesomeIcon icon={faLock} />
          <span className="label-name">Password*</span>
        </label>
        <input
          type="password"
          className="input"
          id="password"
          placeholder="Enter your Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />
      </div>

      {/* Login Button */}
      <button onClick={loginHandler} className="LoginButton">
        Login
      </button>

      {/* New User Link */}
      <div className="form-footer">
        New User ? <a href="/auth/signup">Create Your Account</a>
      </div>

      {/* Error Message */}
      {show && (
        <div className="alert">
          <span
            className="closebtn"
            onClick={() => {
              setError({
                show: false,
                message: "",
              });
            }}
          >
            &times;
          </span>
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
