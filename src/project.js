import React, { useState } from "react";
import SignInForm from "./signin";
import SignUp from "./signup";
import ResetForm from "./reset";

function AuthPage() {
  const [view, setView] = useState("signin"); // "signin", "signup", or "reset"

  return (
    <div>
      {view === "signin" && (
        <>
          <SignInForm />
          <p>
            Don't have an account?{" "}
            <button className="link-btn" onClick={() => setView("signup")}>Sign Up</button>
          </p>
          <p>
            Forgot password?{" "}
            <button className="link-btn" onClick={() => setView("reset")}>Reset</button>
          </p>
        </>
      )}
      {view === "signup" && (
        <>
          <SignUp />
          <p>
            Already have an account?{" "}
            <button className="link-btn" onClick={() => setView("signin")}>Sign In</button>
          </p>
        </>
      )}
      {view === "reset" && (
        <>
          <ResetForm />
          <p>
            Remembered your password?{" "}
            <button className="link-btn" onClick={() => setView("signin")}>Sign In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default AuthPage;