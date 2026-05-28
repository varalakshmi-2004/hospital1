import React from "react";
import { Link } from "react-router-dom";
import "./department.css";
function Departments() {
const services = [
  { name: "General", path: "/general" },
  { name: "Diabetes", path: "/diabetes" },
  { name: "HyperTension", path: "/hypertension" },
  { name: "Blood Screening", path: "/bloodscreening" },
];
  return (
    <div className="departments-page">
      {/* Header */}
      <div className="departments-header">
        <h1>DEPARTMENTS</h1>
      </div>

      {/* Medical Services */}
      <div className="departments-section">
        <p className="sub-heading">Our Departments</p>
        <h2>Our Medical Services</h2>

        <div className="departments-grid">
          {services.map((service, index) => (
            <Link key={index} to={service.path} className="department-card">
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;
