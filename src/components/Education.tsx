
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'XYZ University',
      location: 'Mumbai, India',
      period: '2020 - 2024',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in Software Engineering and Web Development. Active member of coding club and hackathon participant.'
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'ABC School',
      location: 'Mumbai, India', 
      period: '2018 - 2020',
      grade: '92.5%',
      description: 'Physics, Chemistry, Mathematics, and Computer Science. School topper in Computer Science.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#1c1920] dark:via-[#141217] dark:to-[#0c0c0c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My academic journey and the foundation that shaped my technical skills.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:bg-white/80 dark:hover:bg-gray-800/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 p-3 rounded-lg mr-4 border border-blue-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-200 dark:border-green-800/50">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
