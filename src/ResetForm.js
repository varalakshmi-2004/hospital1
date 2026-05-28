import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

function ResetForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and new password.");
      return;
    }
    console.log("Username:", username);
    console.log("New Password:", password);
    alert("Password reset successfully!");

    setUsername("");
    setPassword("");
  };

  return (
    <div className="form-container" style={{ marginTop: "115px" }}>
      <h2>Reset Username / Password</h2>
      <form onSubmit={handleReset}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-primary">
          Reset
        </button>
      </form>

      <p>
        Remembered your details?{" "}
        <button
          type="button"
          className="link-btn"
          style={{ background: "none", border: "none", color: "#007bff", textDecoration: "underline", cursor: "pointer", padding: 0 }}
          onClick={() => navigate("/signin")}
        >
          Back to Sign In
        </button>
      </p>
    </div>
  );
}

export default ResetForm;