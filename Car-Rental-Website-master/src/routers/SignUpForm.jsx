import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm"; // Import the LoginForm component
import "./SignUpForm.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !phoneNumber || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setSuccessMessage(`Account created successfully for ${username}!`);
  };

  const handleSwitchForm = () => {
    // Toggle between signup and login forms
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="signup-form-container">
      {showLoginForm ? (
        // Render the login form
        <LoginForm />
      ) : (
        // Render the signup form
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            <button type="submit">Submit</button>
          </form>
          <br></br>
        </>
      )}
      <div>
        {showLoginForm ? (
          // Link to switch to the signup form
          <p>
            Don't have an account?{" "}
            <Link to="#" onClick={handleSwitchForm}>
              Sign Up
            </Link>
          </p>
        ) : (
          // Link to switch to the login form
          <p>
            Have an account?{" "}
            <Link to="#" onClick={handleSwitchForm}>
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;