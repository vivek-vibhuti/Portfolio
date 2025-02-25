import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-pink-50/30 dark:from-gray-900 dark:via-indigo-900/30 dark:to-purple-900/30 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Background />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;