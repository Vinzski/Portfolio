"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import "../styles/Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "BizBot: Customizable Intelligent Chatbot for Business Support and Information Retrieval",
      image: "/public/projects/bizbot.png",
      technologies: ["Node.js", "MongoDB", "Rasa", "Cohere", "Machine Learning", "AI"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/Bizbot",
    },
    {
      id: 2,
      title: "Certificate Time Tracker",
      description: "A Website Where You Can Track Time Spent, Remaining, and Overall for Certificates",
      image: "/public/projects/certificatetracker.png",
      technologies: ["React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/certficate-time-tracker",
    },
    {
      id: 3,
      title: "PokePlay",
      description: "A Pokemon Website Where You Can Create Your Own Pokemon Team And Battle",
      image: "/public/projects/pokeplay.png",
      technologies: ["PokeAPI", "React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/pokeplay",
    },
    {
      id: 4,
      title: "Baccarat Predictor",
      description: "A Python Built Website Which Tries To Predict The Next Hand Win in Baccarat",
      image: "/public/projects/baccarat.png",
      technologies: ["Python", "Machine Learning"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/baccarat-predictor",
    },
    {
      id: 5,
      title: "Crimson Things",
      description: "A Website Made by WMSU Students for WMSU Students",
      image: "/public/projects/crimsonthings.png",
      technologies: ["PHP", "PHPMyAdmin"],
      demoLink: "",
      codeLink: "",
    },
    {
      id: 6,
      title: "Scientific Calculator",
      description: "An online tool for performing basic and advanced math functions like trig, logs, and exponents.",
      image: "/public/projects/scical.png",
      technologies: ["React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/react-scientific-calculator",
    },
  ]

  return (
    <div className="projects-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
          >
            <div className="project-image-container">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.src = `/placeholder.svg?height=200&width=300`
                  e.target.alt = `${project.title} (placeholder)`
                }}
              />
              <div className="project-overlay">
                <div className="project-buttons">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button demo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button code"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
