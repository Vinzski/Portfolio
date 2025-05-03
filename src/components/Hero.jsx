"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Briefcase, Award, User } from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const textArray = [
    "Backend Developer",
    "Web Developer",
    "Technical Builder",
    "System Innovator",
  ];

  useEffect(() => {
    const text = textArray[currentTextIndex];
    const shouldDelete = isDeleting;
    const delay = shouldDelete ? 50 : typingSpeed;

    if (!shouldDelete && displayText === text) {
      // Pause at full word
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    } else if (shouldDelete && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        shouldDelete
          ? text.substring(0, displayText.length - 1)
          : text.substring(0, displayText.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, currentTextIndex, isDeleting, textArray, typingSpeed]);

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="animated-gradient"></div>
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-name"
        >
          Vince Bradley Muloc
        </motion.h1>

        <motion.div
          className="hero-title-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="hero-title-prefix">I'm a </span>
          <span className="hero-title-dynamic">{displayText}</span>
          <span className="cursor"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hero-tagline"
        >
          Behind every seamless app is a rock-solid backend holding it all
          together.
        </motion.p>

        <motion.div className="hero-icons">
          <motion.div
            className="hero-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <Code size={24} />
            <span>Clean Code</span>
          </motion.div>
          <motion.div
            className="hero-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Briefcase size={24} />
            <span>Professional</span>
          </motion.div>
          <motion.div
            className="hero-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Award size={24} />
            <span>Certified</span>
          </motion.div>
          <motion.div
            className="hero-icon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <User size={24} />
            <span>User-Focused</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <motion.button
            className="cta-button"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowDown size={16} className="arrow-icon" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
