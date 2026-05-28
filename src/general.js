import React from "react";
import "./department.css";

function General() {
  return (
    <div className="general-container">
      <h1 className="general-title">GENERAL DEPARTMENT</h1>
      <p className="general-description">
        We handle common health issues such as:
      </p>

      <div className="general-content">
        {/* Left Side: List */}
        <div className="general-left">
          <ul className="general-list">
            <li>Fever</li>
            <li>Cold</li>
            <li>Cough</li>
            <li>Headache</li>
            <li>Body Pain</li>
            <li>General Checkups</li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className="general-right">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/659/469/non_2x/doctor-checking-a-patient-in-hospital-room-background-illustration-medical-treatment-with-patients-for-healthcare-consultation-and-examination-health-vector.jpg"
            alt="Doctor checking patient"
          />
        </div>
      </div>

      {/* Fever Section */}
      <div className="temp-section">
        <h2>Fever</h2>
        <p>
          Normal body temperature is around <strong>98.6°F (37°C)</strong>.
          If it rises above <strong>100.4°F (38°C)</strong>, it may be
          considered a fever.
        </p>
        <p><strong>Common Symptoms:</strong></p>
        <ul className="general-list">
          <li>High body temperature</li>
          <li>Chills and sweating</li>
          <li>Weakness or fatigue</li>
          <li>Loss of appetite</li>
          <li>Dehydration</li>
        </ul>
      </div>

      {/* Cold Section */}
      <div className="temp-section">
        <h2>Cold</h2>
        <p><strong>Common Symptoms:</strong></p>
        <ul className="general-list">
          <li>Runny or stuffy nose</li>
          <li>Sneezing</li>
          <li>Sore throat</li>
          <li>Mild headache</li>
          <li>Fatigue</li>
        </ul>
      </div>

      {/* Cough Section */}
      <div className="temp-section">
        <h2>Cough</h2>
        <p><strong>Common Symptoms:</strong></p>
        <ul className="general-list">
          <li>Persistent throat irritation</li>
          <li>Shortness of breath (sometimes)</li>
        </ul>
      </div>

      {/* Headache Section */}
      <div className="temp-section">
        <h2>Headache</h2>
        <p><strong>Common Symptoms:</strong></p>
        <ul className="general-list">
          <li>Pain in forehead</li>
          <li>Sensitivity to light and sound</li>
          <li>Nausea (in severe cases)</li>
        </ul>
      </div>

      <a href="/appointment" className="appointment-link">
        Book an Appointment
      </a>
    </div>
  );
}

export default General;

