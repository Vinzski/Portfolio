"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Certificates from "./components/Certificates"
import Projects from "./components/Projects"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"
import ContactModal from "./components/ContactModal"
import "./App.css"

function App() {
  const [theme, setTheme] = useState("light")
  const [activeSection, setActiveSection] = useState("home")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  useEffect(() => {
    // Check for saved theme preference or respect OS preference
    const savedTheme =
      localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    setTheme(savedTheme)
    document.documentElement.setAttribute("data-theme", savedTheme)

    // Set up intersection observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    // Listen for custom event to open contact modal
    const handleOpenContactModal = () => {
      setIsContactModalOpen(true)
    }

    window.addEventListener("openContactModal", handleOpenContactModal)

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section)
      })
      window.removeEventListener("openContactModal", handleOpenContactModal)
    }
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <CallToAction />
      </motion.main>

      <Footer />

      {/* Contact Modal instead of Contact section */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}

export default App
