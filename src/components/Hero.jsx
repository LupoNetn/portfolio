import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/myimg.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-flow opacity-30 sm:opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-blue-900/20"></div>
      
      {/* Floating elements - Only show on larger screens */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center mb-6 sm:mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Available for work
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 px-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Lupo Oluwatobi</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2"
          >
            {['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'].map((text, index) => (
              <motion.span
                key={index}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gray-800/50 rounded-full text-gray-300 backdrop-blur-sm text-sm sm:text-base"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              >
                {text}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            I create beautiful, responsive websites that engage users and drive results. 
            Let's build something amazing together.
            <br />
            <a 
              href="mailto:daniellupo30@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block"
            >
              daniellupo30@gmail.com
            </a>
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
          >
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6 mt-8 sm:mt-12"
          >
            {[
              { icon: 'github', link: 'https://luponetn.github.io' },
              { icon: 'linkedin', link: '#' },
              { icon: 'twitter', link: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2"
                whileHover={{ y: -3 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${social.icon} text-xl sm:text-2xl`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Hide on small screens */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-blue-500 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 