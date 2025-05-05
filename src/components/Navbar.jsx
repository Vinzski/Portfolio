"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code } from "lucide-react"
import "../styles/Navbar.css"

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    }
  
    return (
      <motion.nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("home")}
          >
            <Code size={28} />
            <span className="logo-text">Vinx</span>
          </motion.div>
  
          <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
  
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            {["home", "about", "certificates", "projects"].map((section) => (
              <motion.li
                key={section}
                className={activeSection === section ? "active" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
                {activeSection === section && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  window.dispatchEvent(new CustomEvent("openContactModal"))
                }}
              >
                Contact
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a href="https://vinx-blog.netlify.app/">Blog</a>
            </motion.li>
          </ul>
        </div>
      </motion.nav>
    )
  }
  
  export default Navbar
  