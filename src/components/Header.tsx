import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text">
            VivekVibhuti
          </a>
          
          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex ">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Theme Toggle and Social Links */}
          <div className="items-center hidden space-x-4 md:flex">
            <ThemeToggle />
            <div className="flex ml-4 space-x-4">
              <a href="https://github.com" className="text-gray-600 transition-colors dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 transition-colors dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:your@email.com" className="text-gray-600 transition-colors dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button 
              className="text-gray-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 shadow-lg bg-border-t md:hidden top-full dark:bg-gray-900 dark:border-gray-800">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#home" className="nav-link-mobile">Home</a>
              <a href="#about" className="nav-link-mobile">About</a>
              <a href="#projects" className="nav-link-mobile">Projects</a>
              <a href="#skills" className="nav-link-mobile">Skills</a>
              <a href="#contact" className="nav-link-mobile">Contact</a>
              <div className="flex pt-4 space-x-4 border-t dark:border-gray-800">
                <a href="https://github.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:your@email.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;