import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ValentineCardProps {
  onYes: () => void;
}

const NO_MESSAGES = [
  "Non",
  "Tu es sûre ?",
  "Ey !! Réfléchis encore",
  "Conforme toi loh !",
  "Dernière chance !",
  "Ey la ! Ca va faire !",
  "Arrete moi ca !",
  "Je vais plus cuire de steak !",
  "Je vais plus cuire de crevettes !",
  "Fini les food adventures !",
  "Je vais laisser les aliens te prendre",
  "Patate Yukon !",
  "Tu me brises le cœur ;(",
];

const ValentineCard: React.FC<ValentineCardProps> = ({ onYes }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
    if (noCount >= 5) {
      setYesSize(prev => prev * 1.2);
      setNoSize(prev => prev * 0.8);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-4 border-pink-200 w-[450px] h-[320px] rounded-xl shadow-2xl flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
    >
      <div className="absolute inset-4 bg-pink-50 rounded shadow-inner -z-10" />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl mb-4"
      >
        💝
      </motion.div>
      <h1 className="text-3xl font-bold text-pink-600 mb-8 leading-tight">
        Veux-tu être ma Valentine ?
      </h1>

      <div className="flex flex-col items-center gap-4 w-full h-40 justify-center">
        <div className="flex justify-center items-center gap-12 w-full h-full">
          <div className="w-32 flex items-center justify-center">
            <motion.button
              style={{ scale: yesSize }}
              className="bg-valentine-red hover:opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors z-50 whitespace-nowrap"
              onClick={onYes}
              whileHover={{ scale: yesSize * 1.1 }}
              whileTap={{ scale: yesSize * 0.9 }}
            >
              Oui
            </motion.button>
          </div>

          <div className="w-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {noSize > 0.1 && (
                <motion.button
                  key={noCount}
                  style={{ scale: noSize }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full shadow-md transition-colors whitespace-nowrap"
                  onClick={handleNoClick}
                >
                  {NO_MESSAGES[Math.min(noCount, NO_MESSAGES.length - 1)]}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="h-8">
          {noCount > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pink-500 text-xl font-medium"
            >
              {noCount > 5 ? "La résistance est futile ! ❤️" : "S'il te plaît ? 🥺"}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ValentineCard;
