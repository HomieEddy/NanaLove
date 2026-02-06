import React, { useState } from 'react';
import Envelope from './components/Envelope';
import ValentineCard from './components/ValentineCard';
import Celebration from './components/Celebration';
import Potato from './components/Potato';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'envelope' | 'card' | 'celebration';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('envelope');

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#FFD1DC] overflow-hidden relative p-4">
      {/* Background Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.2,
              opacity: 0.15
            }}
            animate={{ 
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{ 
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -20
            }}
            className="absolute text-pink-300 text-4xl"
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 'envelope' && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 2, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="z-10 flex items-center justify-center"
          >
            <Envelope onOpen={() => setStep('card')} />
          </motion.div>
        )}

        {step === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <ValentineCard onYes={() => setStep('celebration')} />
          </motion.div>
        )}

        {step === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <Celebration />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="absolute bottom-4 left-0 w-full flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ 
            x: ["-55vw", "55vw"] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear",
            repeatType: "mirror"
          }}
          className="flex flex-col items-center"
        >
          <Potato isCelebration={step === 'celebration'} />
          <p className="text-pink-400 font-medium text-sm mt-[-10px]">
            Fait avec ❤️ pour toi
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
