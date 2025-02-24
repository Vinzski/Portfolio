import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import MatrixBackground from "./components/MatrixBackground";

const App = () => {
  return (
    <div className="app-container">
      <MatrixBackground /> {/* Apply globally */}
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default App;
