import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md text-white p-4 shadow-lg z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Oluwatobi</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-5 relative"
            >
              <motion.span
                className="absolute w-full h-0.5 bg-white rounded-full"
                animate={{
                  top: isOpen ? "50%" : "0%",
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? "-50%" : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-white rounded-full top-1/2 -translate-y-1/2"
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-white rounded-full"
                animate={{
                  bottom: isOpen ? "50%" : "0%",
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? "50%" : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden mt-4"
            >
              <motion.ul 
                className="flex flex-col space-y-4 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  { href: "#home", text: "Home" },
                  { href: "#about", text: "About" },
                  { href: "#projects", text: "Projects" },
                  { href: "#contact", text: "Contact" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      closed: { x: -20, opacity: 0 },
                      open: { x: 0, opacity: 1 }
                    }}
                  >
                    <a
                      href={item.href}
                      className="block w-full px-4 py-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
