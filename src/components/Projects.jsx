"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bizbot",
      description:
        "BizBot: Customizable Intelligent Chatbot for Business Support and Information Retrieval",
      image: "/projects/bizbot.png",
      technologies: [
        "Node.js",
        "MongoDB",
        "Rasa",
        "Cohere",
        "Machine Learning",
        "AI",
      ],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/Bizbot",
    },
    {
      id: 2,
      title: "Certificate Time Tracker",
      description:
        "A Website Where You Can Track Time Spent, Remaining, and Overall for Certificates",
      image: "/projects/certificatetracker.png",
      technologies: ["React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/certficate-time-tracker",
    },
    {
      id: 3,
      title: "PokePlay",
      description:
        "A Pokemon Website Where You Can Create Your Own Pokemon Team And Battle",
      image: "/projects/pokeplay.png",
      technologies: ["PokeAPI", "React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/pokeplay",
    },
    {
      id: 4,
      title: "Baccarat Predictor",
      description:
        "A Python Built Website Which Tries To Predict The Next Hand Win in Baccarat",
      image: "/projects/baccarat.png",
      technologies: ["Python", "Machine Learning"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/baccarat-predictor",
    },
    {
      id: 5,
      title: "Crimson Things",
      description: "A Website Made by WMSU Students for WMSU Students",
      image: "/projects/crimsonthings.png",
      technologies: ["PHP", "MySQL"],
      demoLink: "",
      codeLink: "",
    },
    {
      id: 6,
      title: "Scientific Calculator",
      description:
        "An online tool for performing basic and advanced math functions like trig, logs, and exponents.",
      image: "/projects/scical.png",
      technologies: ["React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/react-scientific-calculator",
    },
    {
      id: 7,
      title: "PowerHouse",
      description:
        "An E-commerce website for gym owners which their users can use for to get gym membership and equipment rental and selling",
      image: "/projects/powerhouse.jpg",
      technologies: ["PHP", "MySQL"],
      demoLink: "",
      codeLink: "",
    },
    {
      id: 8,
      title: "Educational Tour Blog",
      description:
        "Our 7 day WMSU CCS Education Tour to Manila and Baguio City",
      image: "/projects/blog.png",
      technologies: ["React"],
      demoLink: "",
      codeLink: "https://github.com/Vinzski/blog",
    },
    {
      id: 8,
      title: "DentalCare",
      description:
        "A comprehensive dental appointment system designed to serve administrators, dentists, secretaries, and patients alike.",
      image: "/projects/dentalcare.png",
      technologies: ["Laravel", "MySQL"],
      demoLink: "",
      codeLink: "https://github.com/JzHamid/dentalcare",
    },
  ];

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

      <motion.p
        className="section-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore my latest work and personal projects. Each project represents
        different skills and technologies I've mastered throughout my journey.
      </motion.p>

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
                  e.target.src = `/placeholder.svg?height=200&width=300`;
                  e.target.alt = `${project.title} (placeholder)`;
                }}
              />
              <div className="project-overlay">
                <div className="project-buttons">
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
  );
};

export default Projects;
