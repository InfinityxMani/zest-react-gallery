
import React from 'react';
import { Trophy, Award, Star, Target, Users, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'SIH 2024 Winner',
      description: 'Won the Smart India Hackathon 2024 with an innovative solution for digital governance',
      year: '2024',
      category: 'Competition'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Best Developer Award',
      description: 'Recognized as the best developer in the annual tech competition',
      year: '2023',
      category: 'Recognition'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '50+ Projects Completed',
      description: 'Successfully delivered over 50 web and mobile applications',
      year: '2024',
      category: 'Milestone'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Open Source Contributor',
      description: 'Active contributor to major open source projects with 1000+ contributions',
      year: '2023-24',
      category: 'Community'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tech Lead',
      description: 'Led a team of 10+ developers in building enterprise-level applications',
      year: '2023',
      category: 'Leadership'
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Full Stack Certification',
      description: 'Certified in modern full-stack development technologies and practices',
      year: '2022',
      category: 'Certification'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0c0c0c] via-[#1b181e] to-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Milestones and recognition that showcase my journey in technology and development.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:bg-gray-800/50 transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 p-3 rounded-lg border border-yellow-500/30 group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.icon}
                </motion.div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">{achievement.year}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
