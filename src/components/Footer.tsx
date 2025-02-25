import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Vivek Vibhuti</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/vivek-vibhuti" className="transition-colors hover:text-indigo-400">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vivek-vibhuti-6a3119322/" className="transition-colors hover:text-indigo-400">
              <Linkedin size={24} />
            </a>
            <a href="vivekvibhuti47@gmail.com" className="transition-colors hover:text-indigo-400">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Vivek Vibhuti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;