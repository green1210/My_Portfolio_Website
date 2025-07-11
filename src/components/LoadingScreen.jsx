import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Sparkles, Zap, Star, Rocket } from 'lucide-react';

const icons = [Code, Brain, Sparkles, Zap, Star, Rocket];

export const LoadingScreen = React.memo(() => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-background via-surface to-background flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="text-center relative">
        {/* Optimized Background Orbs */}
        <div className="absolute inset-0 -m-32">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-10"
              style={{
                background: `linear-gradient(45deg, ${
                  i % 3 === 0 ? '#667eea' : i % 3 === 1 ? '#f093fb' : '#4facfe'
                })`,
                left: `${25 + i * 25}%`,
                top: `${25 + i * 25}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Optimized Animated Logo */}
        <motion.div
          className="relative mb-12"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center relative overflow-hidden shadow-2xl">
            {/* Main Letter */}
            <span className="text-5xl font-bold text-white relative z-10 font-display">N</span>
            
            {/* Simplified Orbiting Icons */}
            {icons.slice(0, 3).map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-white/40"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: `${30 + i * 10}px 0px`
                }}
              >
                <Icon size={10 + i * 2} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optimized Loading Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2
            className="text-4xl font-bold gradient-text mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Crafting Digital Excellence
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Initializing My Portfolio
          </motion.p>

          {/* Optimized Loading Animation */}
          <motion.div
            className="flex justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-80 h-2 bg-white/10 rounded-full mx-auto overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Optimized Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';