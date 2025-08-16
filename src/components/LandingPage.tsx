import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center justify-center mb-6"
        >
          <Building2 className="w-16 h-16 text-white mr-4" />
        </motion.div>
        
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          S.K PUF Panel
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl text-blue-200 font-light"
        >
          Excellence in Engineering Solutions
        </motion.p>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-32 h-1 bg-white mx-auto mt-8 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;