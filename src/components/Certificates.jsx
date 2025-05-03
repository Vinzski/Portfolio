"use client";

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/Certificates.css"

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef(null)

  const certificates = [
    {
      id: 1,
      title: "Generative AI for Beginners",
      issuer: "SimpliLearn SkillUp",
      date: "April 2025",
      image: "/certificates/cert1.png",
    },
    {
      id: 2,
      title: "Introduction to Data Science",
      issuer: "SimpliLearn SkillUp",
      date: "April 2025",
      image: "/certificates/cert2.png",
    },
    {
      id: 3,
      title: "Artifical Intelligence Foundations: Machine Learning",
      issuer: "LinkedIn",
      date: "April 25",
      image: "/certificates/cert3.png",
    },
    {
      id: 4,
      title: "Ethics in the Age of Generative AI",
      issuer: "LinkedIn",
      date: "April 2025",
      image: "/certificates/cert6.png",
    },
    {
      id: 5,
      title: "The Cybersecurity Threat Landscape ",
      issuer: "LinkedIn",
      date: "April 2025",
      image: "/certificates/cert7.png",
    },
    {
      id: 6,
      title: "Learning Data Analytics: 1 Foundations",
      issuer: "LinkedIn",
      date: "April 2025",
      image: "/certificates/cert8.png",
    },
    {
      id: 7,
      title: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn",
      date: "April 2025",
      image: "/certificates/cert9.png",
    },
    {
      id: 8,
      title: "Introduction to Artifical Intelligence",
      issuer: "LinkedIn",
      date: "April 2025",
      image: "/certificates/cert10.png",
    },
    {
      id: 9,
      title: "Deep Learning with Python: Optimizing Deep Learning Models",
      issuer: "LinkedIn",
      date: "April 2025",
      image: "/certificates/cert11.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedCertificate(null)
    document.body.style.overflow = "auto"
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1))
  }

  return (
    <div className="certificates-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certificates & Participation
      </motion.h2>

      <motion.p
        className="section-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A collection of professional certifications and courses I've completed to enhance my skills and stay current
        with industry standards.
      </motion.p>

      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
              onClick={() => index === currentIndex && openModal(certificate)}
            >
              <div className="certificate-card">
                <div className="certificate-image-container">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="certificate-image"
                    onError={(e) => {
                      e.target.src = `/placeholder.svg?height=400&width=600`
                      e.target.alt = `${certificate.title} (placeholder)`
                    }}
                  />
                </div>
                <div className="certificate-info">
                  <h3>{certificate.title}</h3>
                  <p>
                    {certificate.issuer} • {certificate.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous certificate">
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-arrow next" onClick={handleNext} aria-label="Next certificate">
          <ChevronRight size={24} />
        </button>

        <div className="carousel-pagination">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              <img
                src={selectedCertificate.image || "/placeholder.svg"}
                alt={selectedCertificate.title}
                className="modal-image"
                onError={(e) => {
                  e.target.src = `/placeholder.svg?height=600&width=800`
                  e.target.alt = `${selectedCertificate.title} (placeholder)`
                }}
              />
              <div className="modal-info">
                <h3>{selectedCertificate.title}</h3>
                <p>
                  {selectedCertificate.issuer} • {selectedCertificate.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Certificates
