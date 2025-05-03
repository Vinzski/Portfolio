"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import "../styles/Hero.css"

const Hero = () => {
    const scrollToProjects = () => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
    }
  
    return (
      <div className="hero-container">
        <div className="hero-background">
          <div className="animated-gradient"></div>
        </div>
  
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-name"
          >
            Vince Brdley C. Muloc
          </motion.h1>
  
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            Backend Developer
          </motion.h2>
  
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-tagline"
          >
            Behind every seamless app is a rock-solid backend holding it all together.
          </motion.p>
  
          <motion.div className="cta-container">
            <motion.button
              className="cta-button"
              onClick={scrollToProjects}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDown size={16} className="arrow-icon" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }
  
  export default Hero