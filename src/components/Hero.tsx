import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => 
  {
    return (
      <div className="relative h-screen flex items-center justify-center bg-gray-900 
      overflow-hidden">
      <div className="absolute inset-0">
        <div className="background-lines"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
        </div>
      
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1,y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 className="text-7xl font-bold text-white mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          UNIVOICE
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300"initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "Top students, Your mentors"
          </motion.p>
      </motion.div>
    </div>
  );
}

export default Hero;