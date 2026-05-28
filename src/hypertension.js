import React from "react";
import "./department.css";

function Hypertension() {
  return (
    <div className="general-container">
      <h1 className="general-title">HYPERTENSION</h1>
      <p className="general-description">
        Hypertension, or high blood pressure, is a condition where the force of
        the blood against artery walls is consistently too high. If untreated,
        it may lead to heart disease, stroke, or kidney problems.
      </p>

      <h2 className="general-title">Normal & Abnormal Values</h2>
      <ul className="general-list">
        <li>Normal: Less than 120/80 mmHg</li>
        <li>Elevated: 120–129 / less than 80 mmHg</li>
        <li>Stage 1 Hypertension: 130–139 / 80–89 mmHg</li>
        <li>Stage 2 Hypertension: 140+ / 90+ mmHg</li>
      </ul>

      <div className="temp-section">
        <h2>Common Symptoms</h2>
        <p>
          Hypertension is often called the “silent killer” because it usually
          has no symptoms. Severe or prolonged hypertension may cause:
        </p>
        <ul className="general-list">
          <li>Morning headaches</li>
          <li>Dizziness</li>
          <li>Shortness of breath</li>
          <li>Chest pain</li>
          <li>Nosebleeds (in rare cases)</li>
        </ul>
      </div>

      <a href="/appointment" className="appointment-link">
        Book an Appointment
      </a>
    </div>
  );
}

export default Hypertension;
