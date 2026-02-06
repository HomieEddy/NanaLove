import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '../hooks/useSound';

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
  "Patate Russet !",
  "Tu me brises le cœur ;(",
];

const ValentineCard: React.FC<ValentineCardProps> = ({ onYes }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [noSize, setNoSize] = useState(1);

  const { play: playNoSound } = useSound('/audio/no-sound.mp3');
  const { play: playYesSound } = useSound('/audio/yes-sound.mp3');

  const handleNoClick = () => {
    playNoSound();
    setNoCount(prev => prev + 1);
    if (noCount >= 5) {
      setYesSize(prev => prev * 1.2);
      setNoSize(prev => prev * 0.8);
    }
  };

  const handleYesClick = () => {
    playYesSound();
    onYes();
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-4 border-pink-200 w-[80vw] max-w-[450px] min-h-[280px] rounded-xl shadow-2xl flex flex-col items-center justify-center p-4 md:p-6 text-center relative overflow-hidden"
    >
      <div className="absolute inset-4 bg-pink-50 rounded shadow-inner -z-10" />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl md:text-6xl mb-2 md:mb-4"
      >
        💝
      </motion.div>
      <h1 className="text-xl md:text-3xl font-bold text-pink-600 mb-4 md:mb-8 leading-tight">
        Veux-tu être ma Valentine ?
      </h1>

      <div className="flex flex-col items-center gap-4 w-full h-auto md:h-40 justify-center">
        <div className="flex justify-center items-center gap-4 md:gap-12 w-full h-full">
          <div className="w-24 md:w-32 flex items-center justify-center">
            <motion.button
              style={{ scale: yesSize }}
              className="bg-valentine-red hover:opacity-90 text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded-full shadow-lg transition-colors z-50 whitespace-nowrap text-sm md:text-base"
              onClick={handleYesClick}
              whileHover={{ scale: yesSize * 1.1 }}
              whileTap={{ scale: yesSize * 0.9 }}
            >
              Oui
            </motion.button>
          </div>

          <div className="w-24 md:w-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {noSize > 0.1 && (
                <motion.button
                  key={noCount}
                  style={{ scale: noSize }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 md:py-3 px-4 md:px-8 rounded-full shadow-md transition-colors whitespace-nowrap text-sm md:text-base"
                  onClick={handleNoClick}
                >
                  {NO_MESSAGES[Math.min(noCount, NO_MESSAGES.length - 1)]}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="h-8 md:h-12 w-full">
          {noCount > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-pink-500 text-base md:text-xl font-medium px-2 truncate"
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
