import React from 'react';
import { motion } from 'framer-motion';

export const CursorFollower = ({ mousePosition }) => {
  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-accent/30 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Trailing Cursor */}
      <motion.div
        className="fixed w-12 h-12 border border-accent/20 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="fixed w-20 h-20 bg-primary/10 rounded-full pointer-events-none z-30 blur-xl"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
        }}
      />
    </>
  );
};