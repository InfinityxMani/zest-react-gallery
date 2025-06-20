
import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
    },
    {
      category: 'Tools',
      icon: <Code className="w-6 h-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma']
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital experiences that make a difference. I love turning complex problems 
            into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Started as a curious student who loved solving puzzles with code. Over the years, 
                I've worked with startups and established companies, helping them build scalable 
                web applications and mobile solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  Full-stack web application development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  Mobile app development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  UI/UX design and prototyping
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  Technical consulting and mentoring
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Skills & Technologies</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg mr-3">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
