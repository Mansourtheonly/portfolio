import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center section-fade-in">
          <img 
            src="https://mansourtheonly.github.io/Mehdi_Mansour/images/profile.jpg"
            alt="Mehdi Mansour"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-blue-500 hover-scale"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-500">Mehdi Mansour</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors hover-scale"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              className="border-2 border-blue-600 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-900/20 transition-colors hover-scale"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-blue-500" size={32} />
      </div>
    </section>
  );
};

export default Hero