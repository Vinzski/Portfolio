"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight, Github, Linkedin } from "lucide-react"
import "../styles/CallToAction.css"

const CallToAction = () => {
  const openContactModal = () => {
    window.dispatchEvent(new CustomEvent("openContactModal"))
  }

  return (
    <section className="cta-section">
      <div className="cta-background">
        <div className="cta-gradient"></div>
      </div>

      <div className="cta-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Build Something Amazing Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently available for freelance work and exciting opportunities. Whether you have a project in mind or
          just want to connect, I'd love to hear from you.
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            className="cta-button primary"
            onClick={openContactModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <Mail size={18} />
          </motion.button>

          {/* <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
            <ArrowRight size={18} />
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
