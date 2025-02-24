import React from 'react';
import TypingAnimation from './TypingAnimation';
import MatrixBackground from './MatrixBackground';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <MatrixBackground />
      <h1 className="hero-name">Vince Bradley C. Muloc</h1>
      <TypingAnimation />
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default HeroSection;