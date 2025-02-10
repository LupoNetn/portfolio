import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Lupo Oluwatobi Daniel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
