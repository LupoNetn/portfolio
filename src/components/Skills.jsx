import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "html5", color: "#E34F26" },
        { name: "CSS3",  icon: "css3", color: "#1572B6" },
        { name: "JavaScript",  icon: "javascript", color: "#F7DF1E" },
        { name: "React",  icon: "react", color: "#61DAFB" },
        { name: "Next.js",  icon: "nextjs", color: "#ffffff" },
        { name: "jQuery",  icon: "jquery", color: "#0769AD" },
      ]
    },
    // {
    //   category: "Backend",
    //   items: [
    //     { name: "Node.js", level: 88, icon: "nodejs", color: "#339933" },
    //     { name: "Express.js", level: 85, icon: "express", color: "#ffffff" },
    //     { name: "MongoDB", level: 85, icon: "mongodb", color: "#47A248" },
    //   ]
    // },
    {
      category: "CSS Frameworks",
      items: [
        { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
        { name: "Tailwind CSS",  icon: "tailwindcss", color: "#38B2AC" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-flow opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <i className={`devicon-${skill.icon}-plain colored text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300`}></i>
                        <span className="text-gray-300 text-sm sm:text-base font-medium">{skill.name}</span>
                      </div>
                    </div>
                    {/* <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating orbs - visible only on larger screens */}
        <div className="hidden lg:block">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 