"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  MapPin,
  GraduationCap,
  Heart,
  Award,
  ChevronDown,
} from "lucide-react";
import TechCarousel from "./TechCarousel";
import "../styles/About.css";

const About = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const timelineRef = useRef(null);

  const openContactModal = () => {
    // Dispatch a custom event to open the contact modal
    window.dispatchEvent(new CustomEvent("openContactModal"));
  };

  const timelineItems = [
    {
      year: "2025",
      title: "Graduated",
      company: "Western Mindanao State University",
      description: "Finished my Bachelors Degree in Information Technology",
      icon: <GraduationCap size={20} />,
    },
    {
      year: "2025",
      title: "CCS Research Forum",
      company: "College of Computing Studies (WMSU)",
      description:
        "I had the opportunity to be one of the presenters for CCS Research Forum",
      icon: <Award size={20} />,
    },
    {
      year: "2024-2025",
      title: "Capstone Passer",
      company: "College of Computing Studies (WMSU)",
      description:
        "I passed my capstone project with a working intelligent chatbot system—one step closer to my goals!",
      icon: <GraduationCap size={20} />,
    },
    {
      year: "2023-2024",
      title: "Software Engineering Passer",
      company: "Chronologix",
      description:
        "Passed my Software Engineering course by working as a Backend Developer for an Environmental Engineering Portal under Chronologix, focusing on server-side development and database integration.",
      icon: <GraduationCap size={20} />,
    },
  ];

  // Check if timeline needs scroll indicator
  useEffect(() => {
    if (timelineRef.current) {
      const needsScroll =
        timelineRef.current.scrollHeight > timelineRef.current.clientHeight;
      setShowScrollIndicator(needsScroll);

      // Add scroll event listener to hide indicator when scrolled to bottom
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20;
        setShowScrollIndicator(!isAtBottom);
      };

      timelineRef.current.addEventListener("scroll", handleScroll);
      return () => {
        if (timelineRef.current) {
          timelineRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <div className="about-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="section-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get to know more about my background, experience, and what drives me as
        a developer. I'm passionate about creating intuitive and impactful
        digital experiences.
      </motion.p>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Career Goals</h3>
          <p>
            I'm Vince, a driven and hands-on developer with a passion for
            building smart, practical web applications. I’m always eager to
            learn, experiment, and refine my skills—because for me, development
            is more than just code; it's about crafting experiences that matter.
          </p>

          <h3>Personal Touch</h3>
          <p>
            When I’m not in front of a screen writing code, I’m probably lost in
            music—Queen, Air Supply, and Kolohe Kai are always on repeat.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <Calendar size={20} className="detail-icon" />
              <span>Born: September 20, 2002</span>
            </div>
            <div className="detail-item">
              <MapPin size={20} className="detail-icon" />
              <span>Location: Zamboanga City, Philippines</span>
            </div>
            <div className="detail-item">
              <Heart size={20} className="detail-icon" />
              <span>Interests: Guitars, Videogames, Coding</span>
            </div>
          </div>

          <motion.button
            className="cta-button"
            onClick={openContactModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <MessageSquare size={16} className="icon" />
          </motion.button>
        </motion.div>

        <motion.div
          className="about-timeline"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Experience Timeline</h3>
          <div className="timeline-wrapper">
            <div className="timeline" ref={timelineRef}>
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * Math.min(index, 2) + 0.5,
                  }}
                >
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4>{item.title}</h4>
                    <div className="timeline-company">{item.company}</div>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {showScrollIndicator && (
              <div className="scroll-indicator">
                <ChevronDown size={20} />
                <span>Scroll for more</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="tech-stack-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <TechCarousel />
      </motion.div>
    </div>
  );
};

export default About;
