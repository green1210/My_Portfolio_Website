import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Home, User, Code, Briefcase, Mail, Sparkles, Star } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'details', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 50);
  }, []);

  // Throttled scroll event listener
  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Memoized navigation styles
  const navStyles = useMemo(() => ({
    base: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    scrolled: scrolled 
      ? 'bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
      : 'bg-transparent',
    zIndex: { zIndex: 9998 }
  }), [scrolled]);

  // Optimized animation variants
  const navVariants = useMemo(() => ({
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" }
  }), []);

  const logoVariants = useMemo(() => ({
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  }), []);

  const menuVariants = useMemo(() => ({
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
    transition: { duration: 0.25, ease: "easeInOut" }
  }), []);

  return (
    <>
      <motion.nav
        {...navVariants}
        className={`${navStyles.base} ${navStyles.scrolled}`}
        style={navStyles.zIndex}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Optimized Logo */}
            <motion.div
              {...logoVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="home"
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg relative overflow-hidden">
                      <span className="text-xl font-bold text-white relative z-10">N</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold gradient-text hidden sm:block">
                    Nagamanikanta
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Optimized Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-xl p-2 border border-white/10"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    onSetActive={() => setActiveSection(item.id)}
                    className={`nav-link cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium relative overflow-hidden ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                        : 'hover:bg-white/10 hover:text-primary text-text-secondary'
                    }`}
                  >
                    <item.icon size={16} />
                    <span className="font-medium">{item.label}</span>
                    
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Optimized CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="hidden md:block"
            >
              <motion.div
                className="relative group overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  <div className="relative bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                      <Star size={14} />
                      Let's Connect
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Optimized Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-xl glass-effect hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Optimized Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />
            
            <motion.div
              {...menuVariants}
              className="fixed top-0 right-0 h-full w-80 bg-surface/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
                
                <div className="flex items-center justify-between p-6 border-b border-white/10 relative z-10">
                  <motion.span 
                    className="text-xl font-bold gradient-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    Menu
                  </motion.span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeMenu}
                    className="p-2 rounded-xl glass-effect hover:bg-white/20 transition-all duration-300"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                <div className="flex-1 py-6 relative z-10">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        to={item.id}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        spy={true}
                        onSetActive={() => setActiveSection(item.id)}
                        onClick={closeMenu}
                        className={`cursor-pointer flex items-center gap-3 px-6 py-4 mx-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                          activeSection === item.id
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                            : 'hover:bg-white/10 hover:text-primary text-text-secondary'
                        }`}
                      >
                        <item.icon size={20} />
                        <span className="text-lg font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.2 }}
                  className="p-6 border-t border-white/10 relative z-10"
                >
                  <motion.div
                    className="relative group w-full text-center block overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={closeMenu}
                      className="block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                      
                      <div className="relative bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-xl border border-white/20 backdrop-blur-sm">
                        <span className="relative z-10 flex items-center justify-center gap-2 text-white font-semibold">
                          <Star size={16} />
                          Get In Touch
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

Navigation.displayName = 'Navigation';