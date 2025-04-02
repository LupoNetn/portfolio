import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Google Gemini Clone",
      image: "/gemini-project.png",
      technologies: ["React", "Gemini API"],
      link: "https://luponetn.github.io/google-gemini/",
      github: "https://github.com/LupoNetn/google-gemini"
    },
    {
      title: "Project 2",
      description: "E-commerce platform, dynamic data upload with the use of a headless cms",
      image: "/shoppy-project.png",
      technologies: ["React", "Next", "sanity", "Stripe"],
      link: "https://shoppy-orcin-iota.vercel.app/",
      github: "https://github.com/LupoNetn/shoppy"
    },
    {
      title: "Project 3",
      description: "Real-time chat application",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Socket.io", "Node.js"],
      link: "#",
      github: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center gradient-text px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="card-hover glass-effect rounded-xl overflow-hidden"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a 
                        href={project.link} 
                        className="w-full sm:w-auto text-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        className="w-full sm:w-auto text-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 md:px-3 py-1 text-xs md:text-sm text-blue-300 bg-blue-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 