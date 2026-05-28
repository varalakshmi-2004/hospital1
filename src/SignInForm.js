import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("❌ Please enter both Username and Password");
      return;
    }
    setSignedIn(true);
    setTimeout(() => {
      navigate("/");
    }, 1000); // Show success for 1 second, then navigate
  };

  if (signedIn) {
    return <div className="form-container"><h2>✅ Sign In Successful!</h2></div>;
  }

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p>
        Forgot <Link to="/ResetForm">Username / Password?</Link>
      </p>

      <button className="btn-primary" onClick={handleSignIn}>
        SIGN IN
      </button>

      <h3>or</h3>
      <p>
        Don’t have an account? <Link to="/SignUp">SIGN UP NOW</Link>
      </p>
    </div>
  );
}

export default SignInForm;