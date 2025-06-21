
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/50 shadow-xl hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300 group"
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={liveUrl}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={githubUrl}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="bg-gray-100/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
