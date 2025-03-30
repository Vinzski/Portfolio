import React, { useEffect, useRef } from "react";
import "../styles/AboutSection.css";
import MatrixBackground from "./MatrixBackground";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaLaravel,
  FaPhp,
  FaJs,
} from "react-icons/fa";

import { SiMysql, SiMongodb, SiRasa } from "react-icons/si";

const AboutSection = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "RASA", icon: <SiRasa /> },
  ];

  const skillsContainerRef = useRef(null);

  // Duplicate the skills array to create a seamless loop
  const duplicatedSkills = [
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
    ...skills,
  ];

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;
    if (skillsContainer) {
      // Calculate the width of one set of skills
      const skillWidth = skillsContainer.children[0].offsetWidth;
      const totalWidth = skillWidth * skills.length;

      // Set the container width to match the total width of duplicated skills
      skillsContainer.style.width = `${totalWidth * 2}px`;
    }
  }, [skills]);

  return (
    <section id="about" className="about-section">
      <MatrixBackground />
      <div className="about-container">
        {/* Introduction */}
        <div className="intro">
          <h2 className="intro-title glitch" data-text="About Me">
            About Me
          </h2>
          <p className="intro-text">
            I’m Vince, a passionate and versatile programmer who thrives on
            solving problems and bringing ideas to life through code. From
            developing AI-powered chatbots with Rasa and Node.js to crafting
            sleek, interactive front-end experiences in React.js, I enjoy
            exploring and mastering new technologies. My projects blend
            functionality with creativity, ensuring seamless user experiences
            while pushing the boundaries of design and performance. Whether it’s
            building intelligent systems, optimizing web applications, or diving
            into ethical hacking, I’m always eager to learn, experiment, and
            innovate. Tech isn’t just a skill for me—it’s a canvas where I turn
            ideas into reality.
          </p>
          <span className="futuristic-text">Welcome to my digital realm.</span>
        </div>

        {/* Entered Contests */}
        <div className="contests-section">
          <h3 className="section-title neon-text">Career Goals</h3>
          <div className="contest-cards">
            <div className="contest-card neon-glow">
              <h4>2025 - Graduate</h4>
              <p>Just like the title shows.</p>
            </div>
            <div className="contest-card neon-glow">
              <h4>2026 - Get a Job</h4>
              <p>Land a programming job in a tech company.</p>
            </div>
            <div className="contest-card neon-glow">
              <h4>2027 - Get Rich</h4>
              <p>Who doesn't want to be rich?</p>
            </div>
          </div>
        </div>

        {/* Personal Touch Section */}
        <div className="personal-touch">
          <h3 className="section-title neon-text">Personal Touch</h3>
          <div className="fun-facts">
            <div className="fun-fact neon-glow">
              <h4>🤓 Fun Fact</h4>
              <p>I still don't know how to center a div</p>
            </div>
            <div className="fun-fact neon-glow">
              <h4>🎸 Hobbies</h4>
              <p>Coding, playing the guitar, and gaming.</p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="skills-section">
          <h3 className="section-title neon-text">Tech Stack</h3>
          <div className="skills-scroll-container">
            <div className="skills-scroll" ref={skillsContainerRef}>
              {duplicatedSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <button className="cta-button neon-glow">Let's Connect</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
