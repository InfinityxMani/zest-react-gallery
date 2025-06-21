
import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800/50',
      technologies: ['JavaScript', 'TypeScript', 'Java', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Frontend',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800/50',
      technologies: ['React', 'Next.js', 'Context API', 'ShadCN', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Material UI']
    },
    {
      title: 'Backend',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800/50',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase', 'ClerkAuth', 'GAPIS', 'Firebase', 'REST API']
    },
    {
      title: 'Tools & Others',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800/50',
      technologies: ['Git', 'GitHub', 'VS Code', 'Figma', 'Docker', 'AWS']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#141217] dark:via-[#0c0c0c] dark:to-[#1c1920] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I've worked with and mastered over the years
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className={`${category.bgColor} ${category.borderColor} backdrop-blur-sm rounded-2xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300`}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    className="bg-white/70 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-gray-700 cursor-pointer backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 transition-all duration-200"
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mt-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Always learning and exploring new technologies to stay at the cutting edge of web development.
        </motion.p>
      </div>
    </div>
  );
};

export default Skills;
