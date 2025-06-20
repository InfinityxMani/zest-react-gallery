
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Status Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                <div className="flex items-center bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for hire
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                  🏆 SIH 2024 Winner
                </div>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">Hello, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">John</span> Doe
                </h1>
                <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 h-12 flex items-start">
                  <span className="font-light">
                    {text}
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-blue-600 dark:text-blue-400`}>|</span>
                  </span>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                I create beautiful, responsive web applications with modern technologies. 
                Passionate about clean code, user experience, and bringing ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                View My Work
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse delay-500 shadow-lg"></div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
