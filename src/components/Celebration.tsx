import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useSound } from '../hooks/useSound';

const Celebration: React.FC = () => {
  const { play: playYesSound } = useSound('/audio/yes-sound.mp3');
  const { play: playMusic } = useSound('/audio/background-music.mp3', { loop: true, volume: 0.5 });

  useEffect(() => {
        playYesSound();
        
        // Wait 3 seconds before starting the background music
        setTimeout(() => {
          playMusic();
        }, 3000);
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center bg-white/90 backdrop-blur-md p-4 md:p-10 rounded-3xl shadow-2xl border-4 border-pink-300 max-w-[80vw] md:max-w-lg -translate-y-12 md:translate-y-0"
    >
      <motion.div
        animate={{
          rotate: [0, 10, -10, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="text-5xl md:text-8xl mb-3 md:mb-6"
      >
        🎉❤️🥰
      </motion.div>

      <h1 className="text-xl md:text-4xl font-bold text-pink-600 mb-2 md:mb-4">
        Yaay ! Je savais que tu dirais OUI !
      </h1>

      <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6">
        J'ai hâte de passer la Saint-Valentin avec toi mon amour 🥺
        Je t'aime plus que tout au monde.
      </p>

      <div className="flex justify-center gap-2 md:gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.2
            }}
            className="text-2xl md:text-3xl"
          >
            💖
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Celebration;
