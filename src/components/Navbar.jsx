import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo glitch" data-text="Vinx">Vinx</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
        </li>
        <li className="navbar-item">
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
