"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Mail } from "lucide-react"
import "../styles/Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear()
  
    const socialLinks = [
      { icon: <Github size={20} />, url: "https://github.com/Vinzski", name: "GitHub" },
      { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/vince-muloc-966920327/", name: "LinkedIn" },
      { icon: <Facebook size={20} />, url: "https://www.facebook.com/vince.muloc.1/", name: "Facebook" },
    ]
  
    const openContactModal = () => {
      window.dispatchEvent(new CustomEvent("openContactModal"))
    }
  
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
            <motion.button
              className="contact-button social-icon"
              onClick={openContactModal}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Contact Me"
            >
              <Mail size={20} />
            </motion.button>
          </div>
  
          <div className="footer-copyright">
            <p>&copy; {currentYear} Vince Bradley C. Muloc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer