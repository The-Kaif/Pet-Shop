import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  // Initialize state for name, email, and password inputs
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Initialize state for error message
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  // Destructure state and error
  const { name, email, password } = state;
  const { message, show } = error;

  const navigate = useNavigate()

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Handle input changes and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle account creation button click
  const createAccountHandler = () => {
    if (name === "" || email === "" || password === "") {
      // Display an error message if required fields are empty
      setError({
        show: true,
        message: "Please fill all required fields!",
      });
    } else if (emailRegex.test(email) === false) {
      // Display an error message if the email is not valid
      setError({
        show: true,
        message: "Please enter a valid email address!",
      });
    } else if (password.length < 5) {
      // Display an error message if the password is too short
      setError({
        show: true,
        message: "Password must be at least 5 characters!",
      });
    } else {
      // Clear the error message
      setError({
        show: false,
        message: "",
      });

      // Get existing users from localStorage or create an empty array
      const existingUsers =
        JSON.parse(localStorage.getItem("pet-shop-users")) || [];

      // Check if the email already exists
      const userExists = existingUsers.some((user) => user.email === email);

      if (userExists) {
        // Display an error message if the email already exists
        setError({
          show: true,
          message: "Email already exists. Use a different email.",
        });
      } else {
        // Create a new user object
        const newUser = {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        };

        // Push the new user to the existing array
        existingUsers.push(newUser);

        // Update localStorage with the updated user data
        localStorage.setItem("pet-shop-users", JSON.stringify(existingUsers));

        // Optionally, you can also reset the input fields
        setState({
          name: "",
          email: "",
          password: "",
        });
        navigate("/auth/login")
      }
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">Signup</header>

      {/* Subheader */}
      <header className="subHeader">
        Welcome to <b>animal planet!</b> Please Enter your Details
      </header>

      {/* Name Input */}
      <div className="inputContainer">
        <label className="label" for="name">
          <FontAwesomeIcon icon={faUser} />
          <span className="label-name">Full Name*</span>
        </label>
        <input
          type="text"
          className="input"
          id="name"
          placeholder="Enter your Full Name"
          name="name"
          onChange={handleInputChange}
          value={name}
        />
      </div>

      {/* Email Input */}
      <br></br>
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
          name="email"
          onChange={handleInputChange}
          value={email}
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

      {/* Create Account Button */}
      <button onClick={createAccountHandler} className="LoginButton">
        Create Your Account
      </button>

      {/* Existing User Link */}
      <div className="form-footer">
        Already have an account ? <a href="/auth/login">Login</a>
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

export default Signup;
