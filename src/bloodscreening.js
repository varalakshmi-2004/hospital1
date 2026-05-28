import React from "react";
import "./department.css";

function BloodScreening() {
  return (
    <div className="general-container">
      <h1 className="general-title">Blood Screening Department</h1>
      <p className="general-description">
        We provide detailed blood screening to detect and monitor health issues early.
      </p>

      <div className="general-left">
        <ul className="general-list">
          <li>Complete Blood Count (CBC)</li>
          <li>Blood Sugar (Fasting & Postprandial)</li>
          <li>Lipid Profile</li>
          <li>Liver Function Test (LFT)</li>
          <li>Kidney Function Test (KFT)</li>
          <li>Thyroid Profile</li>
        </ul>

        <div className="temp-section">
          <h2>Precautions Before Blood Test</h2>
          <p>To ensure accurate results, follow these precautions:</p>
          <ul className="general-list">
            <li>Fast for at least 8–12 hours if required.</li>
            <li>Avoid alcohol and smoking 24 hours before test.</li>
            <li>Drink enough water to stay hydrated.</li>
            <li>Inform doctor about medications you are taking.</li>
            <li>Stay relaxed and avoid stress before the test.</li>
          </ul>
        </div>

        <a href="/appointment" className="appointment-link">
          Book an Appointment
        </a>
      </div>
    </div>
  );
}

export default BloodScreening;
