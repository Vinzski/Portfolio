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
              I'm passionate about creating intuitive and performant web applications that solve real-world problems. My
              goal is to work with innovative teams on challenging projects that push the boundaries of web technology.
            </p>
  
            <h3>Personal Touch</h3>
            <p>
              When I'm not coding, you'll find me hiking in nature, experimenting with new cooking recipes, or attending
              local tech meetups. I believe in continuous learning and giving back to the community.
            </p>
  
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
  