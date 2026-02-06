import React from 'react';
import { motion } from 'framer-motion';

interface PotatoProps {
  isCelebration?: boolean;
}

const Potato: React.FC<PotatoProps> = ({ isCelebration }) => {
  return (
    <motion.div 
      className="relative w-56 h-56 pointer-events-none origin-bottom"
      animate={{ 
        scale: isCelebration ? 3 : 1,
        y: isCelebration ? -100 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 1 
      }}
    >
      <svg viewBox="-15 -10 130 120" className="w-full h-full drop-shadow-2xl">
        {/* Potato Body */}
        <path 
          d="M25,50 Q25,20 50,20 Q75,20 75,50 Q75,85 50,85 Q25,85 25,50" 
          fill="#D2B48C" 
        />
        
        {/* Eyes */}
        <circle cx="40" cy="45" r="4" fill="black" />
        <circle cx="60" cy="45" r="4" fill="black" />
        
        {/* Blushed Cheeks */}
        <circle cx="35" cy="55" r="6" fill="#FFB6C1" opacity="0.8" />
        <circle cx="65" cy="55" r="6" fill="#FFB6C1" opacity="0.8" />
        
        {/* Smile */}
        <path d="M42,65 Q50,72 58,65" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Right Arm raised */}
        <motion.g
          animate={{ 
            rotate: isCelebration ? [40, 70, 40] : [10, 40, 10],
          }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
          style={{ originX: '75px', originY: '50px' }}
        >
          <line x1="75" y1="50" x2="90" y2="25" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
        </motion.g>

        {/* Left Arm raised */}
        <motion.g
          animate={{ 
            rotate: isCelebration ? [-40, -70, -40] : [-10, -40, -10],
          }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          style={{ originX: '25px', originY: '50px' }}
        >
          <line x1="25" y1="50" x2="10" y2="25" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
        </motion.g>

        {/* Legs */}
        <motion.line 
          x1="40" y1="85" x2="40" y2="98" 
          stroke="#8B4513" strokeWidth="5" strokeLinecap="round"
          animate={{ y1: [85, 80, 85], y2: [98, 93, 98] }}
          transition={{ repeat: Infinity, duration: 0.25 }}
        />
        <motion.line 
          x1="60" y1="85" x2="60" y2="98" 
          stroke="#8B4513" strokeWidth="5" strokeLinecap="round"
          animate={{ y1: [80, 85, 80], y2: [93, 98, 93] }}
          transition={{ repeat: Infinity, duration: 0.25 }}
        />
      </svg>
    </motion.div>
  );
};

export default Potato;
