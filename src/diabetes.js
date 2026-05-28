import React from "react";
import "./department.css";

function Diabetes() {
  return (
    <div className="general-container">
      <h1 className="general-title">DIABETES</h1>
      <p className="general-description">
        Diabetes is a chronic condition that affects how your body turns food
        into energy. It results in high blood sugar levels due to problems with
        insulin production or function.
      </p>

      <h2 className="general-title">Normal & Abnormal Values</h2>
      <ul className="general-list">
        <li>Normal Fasting Blood Sugar: 70–100 mg/dL</li>
        <li>Prediabetes: 100–125 mg/dL</li>
        <li>Diabetes: 126 mg/dL or higher</li>
      </ul>

      <div className="temp-section">
        <h2>Common Symptoms</h2>
        <p>
          People with diabetes may experience the following symptoms. If you
          notice these, consult a doctor for early diagnosis and management.
        </p>
        <ul className="general-list">
          <li>Frequent urination</li>
          <li>Increased thirst and hunger</li>
          <li>Unexplained weight loss</li>
          <li>Fatigue</li>
          <li>Blurred vision</li>
          <li>Slow-healing wounds</li>
        </ul>
      </div>

      <a href="/appointment" className="appointment-link">
        Book an Appointment
      </a>
    </div>
  );
}

export default Diabetes;

