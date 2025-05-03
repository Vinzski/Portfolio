"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Server, GitBranch } from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Backend Developer",
    "Logical Thinker",
    "AI Enjoyer",
    "Web Developer"
  ];

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRoleIndex];
    const speed = isDeleting ? 30 : 100;
    
    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(isDeleting 
        ? role.substring(0, displayText.length - 1)
        : role.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isDeleting]);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="grid-lines"></div>
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="shape" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="intro-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="name">
            <span className="first-name">Vince</span>
            <span className="last-name">Bradley Muloc</span>
          </h1>
          <div className="role-container">
            <span className="role">{displayText}</span>
          </div>
        </motion.div>

        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building <span className="highlight">scalable</span>,{' '}
          <span className="highlight">efficient</span> systems that power{' '}
          <span className="highlight">exceptional</span> digital experiences
        </motion.p>

        <div className="expertise">
          {[
            { icon: <Server size={20} />, label: "Server-Side" },
            { icon: <Cpu size={20} />, label: "Optimization" },
            { icon: <GitBranch size={20} />, label: "Version Control" },
            { icon: <Code size={20} />, label: "Clean Code" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="expertise-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {item.icon}
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-container"
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button className="cta-primary">
            View My Projects
            <div className="arrow"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;