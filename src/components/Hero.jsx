import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="hero-content">
        <h1>Vince Bradley C. Muloc</h1>
        <p className="typing-effect">
          <span className="word">Web Developer</span> |
          <span className="word">Designer</span> |
          <span className="word">Tech Enthusiast</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
