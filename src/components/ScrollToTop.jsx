import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Rocket } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          className="fixed bottom-8 right-8 z-50 group"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: scrollProgress / 100 }}
              transition={{ duration: 0.3 }}
              style={{
                strokeDasharray: "175.929",
                strokeDashoffset: 175.929 * (1 - scrollProgress / 100),
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#667eea" />
                <stop offset="50%" stopColor="#f093fb" />
                <stop offset="100%" stopColor="#4facfe" />
              </linearGradient>
            </defs>
          </svg>

          {/* Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary text-white shadow-2xl transition-all duration-500 overflow-hidden group"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            {/* Sparkle Effects */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full opacity-40" />
            </motion.div>
            
            {/* Icon */}
            <motion.div
              className="relative z-10 flex items-center justify-center h-full"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp size={24} className="drop-shadow-lg" />
              </motion.div>
            </motion.div>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
          
          {/* Enhanced Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            whileHover={{ opacity: 1, x: 0, scale: 1 }}
            className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <div className="bg-black/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap border border-white/10 shadow-xl">
              <div className="flex items-center gap-2">
                <Rocket size={14} />
                Back to top
              </div>
              {/* Arrow */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};