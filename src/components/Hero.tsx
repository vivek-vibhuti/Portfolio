import React from "react";
import { ArrowDown } from "lucide-react";
import Background from "./Background"; // Ensure this is correct!

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-transparent"
    >
      {/* Background with pointer-events enabled */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto -z-10">
        <Background />
      </div>

      {/* Foreground Content */}
      <div className="container relative z-10 px-6 py-20 mx-auto text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-800 md:text-7xl">
          {/* Typing Animation with Iframe */}
          <iframe
            title="Typing SVG"
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=45&pause=1000&center=true&vCenter=true&width=550&height=100&lines=i+am+vivek+vibhuti;full+Stack+Devloper+"
            frameBorder="0"
            width="550"
            height="100"
            className="inline-block"
          />
        </h1>
        <p className="mb-12 text-xl text-gray-600 md:text-2xl">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-gray-600">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
