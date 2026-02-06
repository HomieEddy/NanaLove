import React from 'react';
import { motion } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onOpen}
    >
      <div className="relative w-[60vw] max-w-[450px] h-[50vw] max-h-[320px] bg-white border-4 border-pink-200 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-pink-100 border-b-4 border-pink-200 origin-top z-20"
          initial={{ rotateX: 0 }}
          whileHover={{ rotateX: -20 }}
          transition={{ duration: 0.5 }}
        />

        {/* Heart Seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl md:text-7xl"
          >
            ❤️
          </motion.div>
        </div>

        {/* Interior Card Peek */}
        <div className="absolute inset-4 bg-pink-50 rounded shadow-inner flex flex-col items-center justify-center z-10">
        </div>
      </div>

      <p className="text-center mt-6 text-pink-700 font-black text-lg md:text-2xl animate-pulse tracking-wide uppercase">
        Clique pour ouvrir
      </p>
    </motion.div>
  );
};

export default Envelope;
