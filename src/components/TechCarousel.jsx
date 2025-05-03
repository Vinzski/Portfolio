"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/TechCarousel.css";

const TechCarousel = () => {
  const techStack = [
    { name: "React", icon: "../public/icons/react.svg" },
    { name: "Laravel", icon: "../public/icons/laravel.svg" },
    { name: "PHP", icon: "../public/icons/php.svg" },
    { name: "HTML5", icon: "../public/icons/html5.svg" },
    { name: "CSS3", icon: "../public/icons/css3.svg" },
    { name: "JavaScript", icon: "../public/icons/javascript.svg" },
    { name: "Node.js", icon: "../public/icons/nodejs.svg" },
    { name: "Git", icon: "../public/icons/git.svg" },
    { name: "MongoDB", icon: "../public/icons/mongodb.svg" },
    { name: "MySQL", icon: "../public/icons/mysql.svg" },
  ];

  // Duplicate the tech stack for seamless looping
  const fullTechStack = [...techStack, ...techStack];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Set initial position
    carousel.scrollLeft = 0;

    let animationFrameId;
    let lastTimestamp = 0;
    const scrollSpeed = 0.5; // pixels per frame at 60fps

    const animateScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed > 16) {
        // roughly 60fps
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          // Reset to start when we've scrolled through the first set
          carousel.scrollLeft = 0;
        } else {
          // Scroll by a small amount
          carousel.scrollLeft += scrollSpeed;
        }
        lastTimestamp = timestamp;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animateScroll);

    // Pause animation when tab is not visible to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="tech-carousel-container">
      <h3>Tech Stack</h3>
      <div className="tech-carousel" ref={carouselRef}>
        <div className="tech-carousel-track">
          {fullTechStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="tech-carousel-item"
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                className="tech-icon"
                onError={(e) => {
                  e.target.src = `/placeholder.svg?height=48&width=48`;
                  e.target.alt = `${tech.name} icon (placeholder)`;
                }}
              />
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;
