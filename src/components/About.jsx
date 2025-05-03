"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import TechCarousel from "./TechCarousel"
import "../styles/About.css"

const About = () => {
    const openContactModal = () => {
      // Dispatch a custom event to open the contact modal
      window.dispatchEvent(new CustomEvent("openContactModal"))
    }
  
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
            a driven and hands-on developer with a passion for building smart, practical web applications. I enjoy creating systems that solve real problems—from customizable chatbots to security-focused facial recognition tools. Whether I’m working with Laravel, React, or integrating APIs, I like keeping my projects clean, functional, and user-friendly.
            </p>
  
            <h3>Personal Touch</h3>
            <p>
            When I’m not in front of a screen writing code, I’m probably lost in music—Queen, Air Supply, and Kolohe Kai are always on repeat. There’s something about timeless melodies and meaningful lyrics that help me reset.            </p>
  
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
            className="tech-stack-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TechCarousel />
          </motion.div>
        </div>
      </div>
    )
  }
  
  export default About
  