import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css"; // Import your CSS

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !formData.confirmPassword) {
      setMessage("❌ Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    setMessage("✅ Account created successfully!");
    setTimeout(() => {
      navigate("/"); // Navigate to main (App.js) page after sign up
    }, 1000); // Optional: delay to show success message
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>

      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
          value={formData.username}
          className="signup-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={formData.password}
          className="signup-input"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
          value={formData.confirmPassword}
          className="signup-input"
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      {message && <p className="signup-message">{message}</p>}
    </div>
  );
}

export default SignUp;