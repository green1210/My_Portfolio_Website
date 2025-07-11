import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Rocket, School, Briefcase, Globe, Code, FileText, Brain, Sparkles, Sprout, BrainCog, Star, Zap, Download, ArrowRight, Play, MapPin, Calendar, Award, Users, TrendingUp, Target, Coffee, Lightbulb } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile.png';

export const EnhancedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleViewCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 40, y: 20, color: '#4facfe' },
    { Icon: Brain, delay: 0.5, x: -30, y: 40, color: '#f093fb' },
    { Icon: Sparkles, delay: 1, x: 50, y: -30, color: '#43e97b' },
  ];

 const stats = [
    { number: '10+', label: 'Projects', icon: Rocket, description: 'Completed' },
    { number: '1+', label: 'Years Exp', icon: Briefcase, description: 'Experience' },
    { number: '15+', label: 'Technologies', icon: Code, description: 'Mastered' },
    { number: '100%', label: 'Satisfaction', icon: Star, description: 'Client Rating' },
  ];

    const expertiseCards = [
    {
      icon: Code,
      title: 'FullStack Development',
      description: 'MERN Stack specialist with modern web technologies',
      color: '#4facfe',
      gradient: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      projects: '7+'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Designing smart solutions - blending logic, learning, and real-world impact',
      color: '#f093fb',
      gradient: 'from-purple-500 to-pink-500',
      skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'NLP'],
      projects: '5+'
    },
    {
      icon: BrainCog,
      title: 'Machine Learning',
      description: 'Building intelligent systems with deep learning',
      color: '#43e97b',
      gradient: 'from-green-500 to-emerald-500',
      skills: ['Scikit-learn', 'Pandas', 'NumPy'],
      projects: '3+'
    },
    {
      icon: Sparkles,
      title: 'Prompt Engineering',
      description: 'Crafting effective prompts for AI models',
      color: '#667eea',
      gradient: 'from-indigo-500 to-purple-500',
      skills: ['GPT-4', 'Claude', 'Gemini', 'LangChain'],
      projects: '1+'
    }
  ];

 
  // Achievement Highlights
  const achievements = [
    { icon: TrendingUp, text: ' Growing daily — Green, Bold & Intelligent', color: '#f093fb' },
    { icon: Target, text: '95% Project Success Rate', color: '#43e97b' },
    { icon: Users, text: 'Led 2+ Development Teams', color: '#4facfe' },
    { icon: Lightbulb, text: '2+ AI Innovation Projects', color: '#667eea' }
  ];


  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-8 flex items-center relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(240, 147, 251, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.08) 0%, transparent 70%),
          #0a0a0f
        `
      }}
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Premium Geometric Shapes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 && <div className="w-2 h-2 bg-primary rounded-full" />}
            {i % 2 === 1 && <div className="w-1 h-4 bg-accent rounded-full" />}
          </motion.div>
        ))}

        {/* Elegant Grid */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(102, 126, 234, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(102, 126, 234, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Perfect Balanced Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[85vh] max-w-7xl mx-auto">
          
          {/* Left Content - Optimized Width */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl text-center lg:text-left relative lg:pr-8"
          >
            {/* Minimal Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
              <motion.div
                key={index}
                className="absolute opacity-8 hidden lg:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.08, 0.2, 0.08],
                  scale: [1, 1.05, 1],
                  x: [0, x * 0.1, 0],
                  y: [0, y * 0.1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                style={{ 
                  left: `${20 + x}px`, 
                  top: `${20 + y}px`,
                  color: color,
                }}
              >
                <Icon size={16} />
              </motion.div>
            ))}

            {/* Elegant Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block border border-primary/20 px-4 py-2 rounded-full mb-6 relative overflow-hidden backdrop-blur-sm bg-white/5"
            >
              <span className="text-white relative z-10 flex items-center gap-2 text-sm font-medium">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={14} className="text-accent" />
                </motion.div>
                Welcome to my Digital Universe
              </span>
            </motion.div>
            
            {/* Typography Hierarchy */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi! I'm{' '}
              <motion.span 
                className="gradient-text inline-block font-display"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 15px rgba(77, 181, 255, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Nagamanikanta
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-300 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Nallaganchu
              </motion.span>
            </motion.h1>
            
            {/* Refined Animated Subtitle */}
            <motion.h2 
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 h-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'AI & Machine Learning Expert',
                  2500,
                  'Full Stack Developer',
                  2500,
                  'Prompt Engineering Specialist',
                  2500,
                  'Data Analyst Enthusiast',
                  2500,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent"
              />
            </motion.h2>
            
            {/* Concise Description */}
            <motion.p 
              className="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              A passionate technologist pursuing B.Tech in Computer Science & Engineering (AI/ML) at Parul University. 
              I specialize in creating intelligent solutions that bridge artificial intelligence with exceptional user experiences.
            </motion.p>
            
            {/* Essential Info Only */}
            <motion.div 
              className="mb-6 space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { Icon: School, text: "Parul University, Vadodara (2026)", color: "#4facfe" },
                { Icon: MapPin, text: "Vadodara, Gujarat, India", color: "#f093fb" },
                { Icon: Award, text: "AI/ML Engineer • Full Stack Developer • Data Analyst", color: "#43e97b" },
              ].map(({ Icon, text, color }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-sm lg:justify-start justify-center group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="p-1.5 rounded-lg bg-white/5"
                  >
                    <Icon size={14} style={{ color }} />
                  </motion.div>
                  <span className="group-hover:text-accent transition-colors duration-300">{text}</span>
                </motion.div>
              ))}
            </motion.div>
            {/* Achievement Highlights */}
            <motion.div
              className="mb-8 grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {achievements.map(({ icon: Icon, text, color }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <Icon size={14} style={{ color }} />
                  <span className="text-xs font-medium text-gray-300">{text}</span>
                </motion.div>
              ))}
            </motion.div>
           
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 lg:justify-start justify-center mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <motion.a 
                href="#contact" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-white relative z-10 flex items-center gap-2 font-semibold">
                  <Coffee size={16} />
                  Let's Connect
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              
              <motion.button 
                onClick={handleViewResume}
                className="group flex items-center gap-2 bg-white/8 backdrop-blur-sm hover:bg-white/15 border border-white/15 hover:border-primary/40 px-8 py-4 rounded-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                <span className="text-white font-medium">Resume</span>
              </motion.button>
              
              <motion.button 
                onClick={handleViewCV}
                className="group flex items-center gap-2 bg-gradient-to-r from-secondary to-tertiary hover:from-tertiary hover:to-secondary px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={16} />
                <span className="text-white font-medium">View CV</span>
              </motion.button>
            </motion.div>

             {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {stats.map(({ number, label, icon: Icon, description }, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={20} className="text-accent mx-auto mb-2" />
                  </motion.div>
                  <div className="text-xl font-bold gradient-text">{number}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
           {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 flex justify-center items-center lg:w-1/3"
          >
            <div className="relative">
              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: `${80 + i * 20}px 0px`,
                  }}
                />
              ))}
              
             {/* Profile Container */}
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 relative z-10 group"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-10 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                 {/* Professional Profile Image */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-primary via-accent to-secondary shadow-2xl"
                  whileHover={{
                    boxShadow: "0 0 60px rgba(77, 181, 255, 0.4)",
                  }}
                >
                  <img 
                    src={profileImage}
                    alt="Nagamanikanta Nallaganchu" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
                </motion.div>
                {/* Floating Tech Icons */}
                {[
                  { Icon: Code, angle: 0, radius: 160, color: '#4facfe' },
                  { Icon: Brain, angle: 120, radius: 170, color: '#f093fb' },
                  { Icon: Zap, angle: 240, radius: 165, color: '#43e97b' },
                ].map(({ Icon, angle, radius, color }, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: `0 ${radius}px`,
                      transform: `rotate(${angle}deg)`,
                    }}
                  >
                    <motion.div
                      className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon size={16} style={{ color }} />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
              
             {/* Background Accents */}
              <motion.div 
                className="absolute -top-8 right-0 w-20 h-20 rounded-full bg-accent/10 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 10, 0],
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute bottom-8 left-0 w-24 h-24 rounded-full bg-primary/10 blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, -8, 0],
                  y: [0, 8, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>


        {/* Expertise Cards Section */}
        <motion.div
          className="mt-20 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border border-primary/30 backdrop-blur-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles size={20} className="text-accent" />
              <span className="text-accent font-bold text-lg">Core Expertise</span>
              <Star size={16} className="text-accent" />
            </motion.div>
            
            <motion.h3 
              className="text-4xl md:text-5xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >

              What I Do Best
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
            >
              Transforming ideas into reality through cutting-edge technology and innovative solutions
            </motion.p>
          </motion.div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 p-8"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 2.0 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Enhanced Card Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
                />


                 {/* Projects Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                >
                  {card.projects}
                </motion.div>
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <card.icon size={24} className="text-white" />
                  </div>
                </motion.div>
                
                {/* Content */}
                 <div className="relative z-10">
                  <motion.h4 
                    className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {card.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-6"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {card.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300 hover:bg-white/20 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 2.3 + index * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Hover Effect */}
                    <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, ${card.color}15 50%, transparent 70%)`,
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
                    style={{ backgroundColor: card.color }}
                    animate={{
                      x: [0, Math.random() * 40 - 20],
                      y: [0, Math.random() * 40 - 20],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
