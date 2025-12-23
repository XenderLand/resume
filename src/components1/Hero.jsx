// components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Crafting
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Digital Excellence
              </span>
              Through Code
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Passionate software engineer with 2+ years of experience in
              full-stack development, specializing in modern web technologies
              and scalable solutions.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">2+</div>
                <div className="text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-gray-400">Skills</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              View My Work
            </button>
          </div>

          {/* Hero Image/Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Code illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">👨‍💻</div>
                  <h3 className="text-2xl font-bold mb-2">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-400">
                    React • Node.js • Python • Java • Cloud
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-xl -rotate-12 animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </header>
  );
};

export default Hero;
