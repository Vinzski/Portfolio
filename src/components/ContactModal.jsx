"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle, AlertCircle } from "lucide-react"
import "../styles/ContactModal.css"

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    })
  
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'
  
    // Prevent body scroll when modal is open
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
  
      return () => {
        document.body.style.overflow = ""
      }
    }, [isOpen])
  
    const validateForm = () => {
      const newErrors = {}
  
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
      }
  
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email is invalid"
      }
  
      if (!formData.message.trim()) {
        newErrors.message = "Message is required"
      }
  
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
  
      // Clear error when user types
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: "",
        })
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      if (!validateForm()) {
        return
      }
  
      setIsSubmitting(true)
  
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
  
        // In a real app, you would send the form data to your backend or a service like EmailJS
        // const response = await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
  
        // Close modal after success
        setTimeout(() => {
          onClose()
          // Reset form state after modal is closed
          setTimeout(() => {
            setSubmitStatus(null)
          }, 300)
        }, 2000)
      } catch (error) {
        console.error("Error sending email:", error)
        setSubmitStatus("error")
  
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } finally {
        setIsSubmitting(false)
      }
    }
  
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="modal-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Get In Touch</h2>
                <button className="close-button" onClick={onClose}>
                  <X size={24} />
                </button>
              </div>
  
              <div className="modal-content">
                <div className="contact-info">
                  <p>
                    Have a project in mind or just want to say hello? Fill out the form and I'll get back to you as soon
                    as possible.
                  </p>
                  <p>
                    You can also reach me directly at:
                    <br />
                    <a href="vinzmuloc@gmail.com" className="contact-email">
                    vinzmuloc@gmail.com
                    </a>
                  </p>
                </div>
  
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
  
                  <motion.button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={16} className="icon" />}
                  </motion.button>
  
                  {submitStatus === "success" && (
                    <motion.div
                      className="form-status success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <CheckCircle size={18} />
                      <span>Message sent successfully!</span>
                    </motion.div>
                  )}
  
                  {submitStatus === "error" && (
                    <motion.div
                      className="form-status error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <AlertCircle size={18} />
                      <span>Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
  
  export default ContactModal
  