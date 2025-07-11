import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code, Database, Brain, Palette, Server, Globe, Sparkles, Star, Zap, Award, TrendingUp, ExternalLink, BookOpen, Target, Coffee } from 'lucide-react';

const skills = [
  { 
    name: 'Python', 
    percentage: 85, 
    icon: Code, 
    color: '#3776AB',
    gradient: 'from-blue-500 to-indigo-600',
    category: 'Programming',
    description: 'Data science and automation',
    projects: '10+',
    experience: '2+ years'
  },
  { 
    name: 'Java', 
    percentage: 82, 
    icon: Code, 
    color: '#ED8B00',
    gradient: 'from-orange-500 to-red-500',
    category: 'Programming',
    description: 'Object-oriented programming expert',
    projects: '8+',
    experience: '2+ years'
  },
  { 
    name: 'Artificial Intelligence', 
    percentage: 80, 
    icon: Brain, 
    color: '#FF6B6B',
    gradient: 'from-pink-500 to-rose-600',
    category: 'AI/ML',
    description: 'Machine learning and neural networks',
    projects: '4+',
    experience: '2+ years'
  },
  { 
    name: 'Machine Learning', 
    percentage: 75, 
    icon: Brain, 
    color: '#339933',
    gradient: 'from-green-500 to-emerald-600',
    category: 'AI/ML',
    description: 'Predictive modeling and algorithms',
    projects: '12+',
    experience: '1+ years'
  },
  { 
    name: 'Prompt Engineering', 
    percentage: 80, 
    icon: Globe, 
    color: '#4DB5FF',
    gradient: 'from-blue-400 to-cyan-500',
    category: 'Development',
    description: 'End-to-end web application development',
    projects: '2+',
    experience: '1+ years'
  },
  { 
    name: 'React', 
    percentage: 82, 
    icon: Code, 
    color: '#ED8B00',
    gradient: 'from-orange-500 to-red-500',
    category: 'Frontend',
    description: 'Modern React with hooks and context',
    projects: '20+',
    experience: '2+ years'
  },
  { 
    name: 'SQL', 
    percentage: 85, 
    icon: Database, 
    color: '#FF6B6B',
    gradient: 'from-pink-500 to-rose-600',
    category: 'Database',
    description: 'Complex queries and optimization',
    projects: '15+',
    experience: '2+ years'
  },
  { 
    name: 'MongoDB', 
    percentage: 89, 
    icon: Code, 
    color: '#F7DF1E',
    gradient: 'from-yellow-400 to-orange-500',
    category: 'Programming',
    description: 'Modern ES6+ and frameworks',
    projects: '10+',
    experience: '2+ years'
  },
  
  { 
    name: 'Node.js', 
    percentage: 87, 
    icon: Server, 
    color: '#339933',
    gradient: 'from-green-500 to-emerald-600',
    category: 'Backend',
    description: 'Scalable server-side applications',
    projects: '7+',
    experience: '2+ years'
  },
  { 
    name: 'Express.js', 
    percentage: 85, 
    icon: Palette, 
    color: '#FF69B4',
    gradient: 'from-pink-400 to-purple-500',
    category: 'Frontend',
    description: 'User-centered design principles',
    projects: '7+',
    experience: '2+ years'
  },
   { 
    name: 'HTML', 
    percentage: 90, 
    icon: Palette, 
    color: '#ED8B00',
    gradient: 'from-orange-500 to-red-500',
    category: 'Frontend',
    description: 'User-centered design principles',
    projects: '7+',
    experience: '2+ years'
  },
   { 
    name: 'CSS', 
    percentage: 89, 
    icon: Palette, 
    color: '#4ECDC4',
    gradient: 'from-teal-400 to-cyan-500',
    category: 'Frontend',
    description: 'User-centered design principles',
    projects: '7+',
    experience: '2+ years'
  },
  { 
    name: 'JavaScript', 
    percentage: 79, 
    icon: Code, 
    color: '#F7DF1E',
    gradient: 'from-yellow-400 to-orange-500',
    category: 'Programming',
    description: 'Modern ES6+ and frameworks',
    projects: '7+',
    experience: '1+ years'
  },
  { 
    name: 'TailwindCSS', 
    percentage: 70, 
    icon: Palette, 
    color: '#3776AB',
    gradient: 'from-blue-500 to-indigo-600',
    category: 'Frontend',
    description: 'User-centered design principles',
    projects: '3+',
    experience: '1+ years'
  },
  
];

const ProgressRing = ({ name, percentage, isInView, icon: Icon, color, delay }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radius = 60;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setCurrentPercentage(0);
    }
  }, [isInView, percentage, delay]);

  return (
    <motion.div 
      className="flex flex-col items-center gap-4 group"
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ scale: 1.1, y: -10 }}
    >
      <div className="progress-ring-container relative">
        {/* Glowing Background */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-20"
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <svg className="progress-ring" width="140" height="140">
          {/* Background Circle */}
          <circle
            className="progress-ring-circle-bg"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="70"
            cy="70"
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
          />
          
          {/* Progress Circle */}
          <motion.circle
            className="progress-ring-circle"
            stroke={color}
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="70"
            cy="70"
            fill="transparent"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ 
              duration: 2, 
              ease: "easeOut",
              delay: delay / 1000,
            }}
            style={{
              filter: `drop-shadow(0 0 10px ${color}40)`,
            }}
          />
          
          {/* Animated Dots */}
          <motion.circle
            cx="70"
            cy={70 - normalizedRadius}
            r="4"
            fill={color}
            animate={{
              rotate: (currentPercentage / 100) * 360,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: delay / 1000,
            }}
            style={{
              transformOrigin: "70px 70px",
              filter: `drop-shadow(0 0 8px ${color})`,
            }}
          />
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <Icon size={28} style={{ color }} />
          </motion.div>
          <motion.div 
            className="text-2xl font-bold"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: (delay / 1000) + 0.5 }}
            style={{ color }}
          >
            {Math.round(currentPercentage)}%
          </motion.div>
        </div>
        
        {/* Particle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ backgroundColor: color }}
            animate={{
              x: [0, Math.cos(i * 60 * Math.PI / 180) * 80],
              y: [0, Math.sin(i * 60 * Math.PI / 180) * 80],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </div>
      
      <motion.h3 
        className="text-lg font-medium text-center group-hover:text-accent transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (delay / 1000) + 0.3 }}
      >
        {name}
      </motion.h3>
    </motion.div>
  );
};

const SkillCard = ({ skill, index, isInView }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500 p-6"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
      />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <skill.icon size={24} className="text-white" />
        </motion.div>
        
        <div className="text-right">
          <motion.div 
            className="text-2xl font-bold"
            style={{ color: skill.color }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {skill.percentage}%
          </motion.div>
          <span className="text-xs text-gray-400 font-medium">{skill.category}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          {skill.name}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 text-sm leading-relaxed mb-4"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {skill.description}
        </motion.p>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Target size={14} className="text-accent" />
            <span className="text-xs text-gray-400">{skill.projects} Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-accent" />
            <span className="text-xs text-gray-400">{skill.experience}</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${skill.percentage}%` : 0 }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          />
        </div>
        
        {/* Level Badge */}
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 bg-gradient-to-r ${skill.gradient} bg-opacity-20 rounded-full text-xs font-medium border border-white/10`}>
            {skill.percentage >= 90 ? 'Expert' : skill.percentage >= 75 ? 'Advanced' : 'Intermediate'}
          </span>
          <motion.div
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-accent transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink size={12} />
            <span>View Projects</span>
          </motion.div>
        </div>
      </div>
      
      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${skill.color}15 50%, transparent 70%)`,
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
          style={{ backgroundColor: skill.color }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            opacity: [0, 0.6, 0],
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
  );
};

export const EnhancedSkills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, skills.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-10"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-accent font-bold text-base">My Expertise</span>
            <Star size={14} className="text-accent" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            whileHover={{ scale: 1.02 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mastering cutting-edge technologies to build innovative solutions that shape the future
          </motion.p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <motion.button
              onClick={() => setShowCards(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                !showCards
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Zap size={16} />
                Progress Circles
              </div>
            </motion.button>
            <motion.button
              onClick={() => setShowCards(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                showCards
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                <Award size={16} />
                Skill Cards
              </div>
            </motion.button>
          </div>
        </motion.div>

        {!showCards ? (
          // Progress Circles View - FIXED FOR MOBILE
          <div className="relative">
            {/* Navigation Buttons - HIDDEN ON MOBILE */}
            <motion.button
              onClick={prevSlide}
              className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-accent p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden md:block"
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-accent to-primary p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hidden md:block"
              disabled={currentIndex === maxIndex}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ChevronRight size={24} />
            </motion.button>
            
            {/* Skills Container - RESPONSIVE LAYOUT */}
            <div className="overflow-hidden md:mx-16 mx-4">
              <motion.div
                className="flex gap-8 justify-center md:justify-start"
                animate={{ 
                  x: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : -currentIndex * (itemsPerPage === 1 ? 300 : 320)
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`${
                      typeof window !== 'undefined' && window.innerWidth < 768 
                        ? 'w-full flex justify-center' 
                        : 'min-w-[280px] flex justify-center'
                    }`}
                  >
                    <ProgressRing 
                      name={skill.name} 
                      percentage={skill.percentage} 
                      isInView={isInView}
                      icon={skill.icon}
                      color={skill.color}
                      delay={300 + index * 100}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Progress Indicators - HIDDEN ON MOBILE */}
            <motion.div 
              className="flex justify-center mt-8 gap-2 hidden md:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-accent shadow-lg' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </motion.div>
          </div>
        ) : (
          // Skills Cards View
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <SkillCard 
                key={index} 
                skill={skill} 
                index={index} 
                isInView={isInView}
              />
            ))}
          </motion.div>
        )}
        
        {/* Enhanced Skill Categories */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "Frontend Development",
              skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js"],
              icon: Code,
              color: "#61DAFB",
              gradient: "from-cyan-400 to-blue-500",
              count: "5+ Technologies"
            },
            {
              title: "Backend Development", 
              skills: ["Node.js", "Python", "Java", "SQL", "MongoDB"],
              icon: Server,
              color: "#339933",
              gradient: "from-green-500 to-emerald-600",
              count: "5+ Technologies"
            },
            {
              title: "AI & Machine Learning",
              skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Pandas", "Prompt Engineering"],
              icon: Brain,
              color: "#FF6B6B",
              gradient: "from-pink-500 to-rose-600",
              count: "5+ Technologies"
            },
            {
              title: "Data Analysis",
              skills: ["Numpy", "Matplotlib", "Scikit-learn", "Seaborn", "Pandas", "Power BI"],
              icon: Database,
              color: '#ED8B00',
              gradient: 'from-orange-500 to-red-500',
              count: "5+ Technologies"
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="glass-effect p-8 rounded-3xl group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Header */}
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                  >
                    <category.icon 
                      size={24}
                      className="text-white"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {category.count}
                    </p>
                  </div>
                </motion.div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative group/skill"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1 * skillIndex,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        />
                        <span className="relative z-10 text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Stats */}
                <motion.div
                  className="mt-6 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-accent" />
                    <span className="text-sm text-gray-400">Growing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-accent" />
                    <span className="text-sm text-gray-400">Professional</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};