import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { EnhancedHero } from './components/header';
import { EnhancedSkills } from './components/skills';
import { EnhancedProjects } from './components/projects';
import { Details } from './components/details';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { ParticlesBackground } from './components/ParticlesBackground';
import { ScrollToTop } from './components/ScrollToTop';
import { Notifications } from './components/Notifications';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Optimized loading with realistic timing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Global notification system
    window.addNotification = (message, type = 'info') => {
      const id = Date.now();
      setNotifications(prev => [...prev, { id, message, type }]);
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
      }, 5000);
    };

    return () => {
      delete window.addNotification;
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Enhanced loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background text-white relative overflow-x-hidden">
      {/* Simple Purple Border */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        {/* Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
        
        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
        
        {/* Left Border */}
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-purple-500" />
        
        {/* Right Border */}
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-purple-500" />
      </div>

      {/* Optimized Particles Background */}
      <ParticlesBackground />
      
      {/* Optimized Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Dynamic Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Navigation - Positioned normally, unaffected by border */}
      <Navigation />

      {/* Main Content with Optimized Animations */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hero-bg relative"
        >
          <EnhancedHero />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <EnhancedSkills />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mesh-bg"
        >
          <EnhancedProjects />
        </motion.section>

        {/* Details Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="gradient-bg relative"
        >
          <Details />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-bg relative"
        >
          <Contact />
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Footer />
        </motion.footer>
      </motion.main>

      {/* UI Elements */}
      <ScrollToTop />
      <Notifications notifications={notifications} onRemove={removeNotification} />
    </div>
  );
}

export default App;