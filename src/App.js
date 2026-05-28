import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Departments from './Departments';
import Contact from './Contact';
import SignInForm from './SignInForm';
import ResetForm from './ResetForm';
import SignUp from './SignUp';
import General from "./general";
import Diabetes from "./diabetes";
import Hypertension from "./hypertension";
import BloodScreening from "./bloodscreening";
import './app.css';

function App() {
  const location = useLocation();

  return (
    <div>
      <div>
        <h1>
          <span className="medical-plus">+</span>
          Medical
        </h1>
      </div>
      <div>
        <nav>
          <Link to="/home">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/departments">DEPARTMENTS</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/signin">SIGNIN / SIGNUP</Link>   
        </nav>
      </div>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/general" element={<General />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/hypertension" element={<Hypertension />} />
        <Route path="/bloodscreening" element={<BloodScreening />} />
        <Route path="/contact" element={<Contact />} />     
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/ResetForm" element={<ResetForm />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;