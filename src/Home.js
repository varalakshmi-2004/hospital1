import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80')",
      }}
    >
      <div className="home-overlay"></div>
      <div className="home-text-section">
        <h2 className="home-title">General Description</h2>
        <p className="home-description">
          Nutrition and diet play a vital role in maintaining overall health and
          well-being. A balanced diet provides the body with essential nutrients
          such as carbohydrates, proteins, fats, vitamins, and minerals. These
          nutrients help with growth, repair, and energy production while
          promoting long-term wellness.
        </p>
      </div>
      <div className="home-image-box">
        <img
          src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=400&q=80"
          alt="Healthy food"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}