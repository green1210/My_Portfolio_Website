import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Star, GitBranch, Code, X, Calendar, Users, Zap, TrendingUp, Award, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Uniconnect',
    description: 'A comprehensive campus student connectivity application that bridges the gap between students, faculty, and campus resources.',
    longDescription: 'Uniconnect is a revolutionary platform designed to enhance campus life by providing seamless connectivity between students, faculty, and various campus services. The application features real-time messaging capabilities, comprehensive event management system, resource sharing platform, and academic collaboration tools. Built with modern technologies, it offers a responsive design that works across all devices, ensuring students can stay connected whether they\'re on campus or studying remotely. The platform includes features like study group formation, campus news updates, academic calendar integration, and direct communication channels with faculty members.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    repoUrl: 'https://github.com/nagamanikanta1210/uniconnect',
    liveUrl: 'https://uniconnect-demo.netlify.app',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    category: 'Full Stack',
    featured: true,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io'],
    features: ['Real-time Messaging', 'Event Management', 'Resource Sharing', 'Academic Collaboration', 'Responsive Design'],
    impact: 'Active Users',
    completion: '30%'
  },
  {
    id: 2,
    title: 'Zenlify',
    description: 'Zenlify is a modern and scalable ecommerce web application',
    longDescription: 'A comprehensive e-commerce platform built with cutting-edge technologies to provide seamless online shopping experience. The platform features advanced user authentication system, secure payment processing. The responsive design ensures optimal performance across all devices, while the admin dashboard provides comprehensive analytics and management tools. Key features include wishlist functionality, product reviews and ratings, advanced search and filtering, shopping cart persistence, and automated email notifications.',
    image: '../src/assets/zenlify.png',
    repoUrl: 'https://github.com/green1210/Zenlify/tree/main',
    liveUrl: 'https://zenlify.vercel.app/',
    tags: ['React', 'Redux', 'Vite', 'Nodejs', 'Expressjs', 'Mongodb', 'Axios', 'Tailwind CSS'],
    category: 'Full Stack',
    featured: false,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['React', 'Redux', 'Vite', 'Nodejs', 'Expressjs', 'Mongodb', 'Axios', 'Tailwind CSS'],
    features: ['Payment Integration', 'Inventory Management', 'API Products', 'Cart', 'Responsive Design'],
    impact: 'Transactions',
    completion: '95%'
  },
  {
    id: 3,
    title: 'Personal AI Assistant',
    description: 'An intelligent AI assistant powered by advanced NLP models, capable of understanding context and providing personalized responses.',
    longDescription: 'A sophisticated AI assistant that leverages cutting-edge natural language processing to provide intelligent, context-aware responses. The system incorporates advanced machine learning models including TensorFlow and OpenAI\'s GPT models to understand user intent and provide meaningful assistance. Features include voice recognition capabilities, task automation, learning from user interactions, and integration with various APIs for enhanced functionality. The assistant can help with scheduling, information retrieval, code generation, and general productivity tasks while maintaining conversation context and user preferences.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    repoUrl: 'https://github.com/nagamanikanta1210/ai-assistant',
    liveUrl: 'https://ai-assistant-demo.netlify.app',
    tags: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI', 'React'],
    category: 'AI/ML',
    featured: true,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'React.js'],
    features: ['Voice Recognition', 'Context Understanding', 'Task Automation', 'Learning Capabilities'],
    impact: '75% Accuracy Rate',
    completion: '20%'
  },
  {
    id: 4,
    title: 'Smart Chat Bot',
    description: 'An intelligent chatbot with natural language understanding and multi-platform integration capabilities.',
    longDescription: 'A versatile chatbot solution designed for multi-platform integration with advanced natural language processing capabilities. The bot utilizes NLTK for language processing, sentiment analysis for understanding user emotions, and machine learning algorithms to improve responses over time. Built with Flask for the backend and WebSocket for real-time communication, it can be deployed across various platforms including websites, mobile apps, and messaging platforms. The system includes features like conversation history, user preference learning, automated responses, and integration with external APIs for enhanced functionality.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    repoUrl: 'https://github.com/nagamanikanta1210/smart-chatbot',
    liveUrl: 'https://chatbot-demo.netlify.app',
    tags: ['Python', 'NLTK', 'Flask', 'WebSocket', 'Docker'],
    category: 'AI/ML',
    featured: false,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['Python', 'NLTK', 'Flask', 'WebSocket', 'Docker'],
    features: ['NLP Processing', 'Sentiment Analysis', 'Multi-platform', 'Learning Algorithm'],
    impact: '80% User Satisfaction',
    completion: '30%'
  },
  {
    id: 5,
    title: 'Taskflow',
    description: 'A sleek and minimal task management app to help you plan, organize, and conquer your day.',
    longDescription: 'TaskFlow is a beautifully crafted task management app built to simplify productivity. It allows users to manage their daily activities through a clean and interactive interface. Whether youre managing work, study, or personal tasks. TaskFlow helps keep everything in flowing featuring comprehensive project tracking, time management tools, and collaboration features. The platform includes real-time updates through reporting and analytics, coordination tools, and integration with popular development tool like GitHub. Key features include time tracking, milestone tracking, and customizable workflows. The responsive design ensures seamless experience across desktop and mobile devices.',
    image: '../src/assets/taskflow.png',
    repoUrl: 'https://github.com/green1210/Taskflow',
    liveUrl: 'https://taskflow-seven-rho.vercel.app/',
    tags: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'WebSocket'],
    category: 'Productivity',
    featured: false,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['React.js', 'Redux', 'Node.js', 'PostgreSQL', 'WebSocket'],
    features: ['Project Tracking', 'Mark tasks', 'Organize tasks', 'Analytics', 'Responsive Design'],
    impact: 'Daily Notes',
    completion: '100%'
  },
  {
    id: 6,
    title: 'Reeltix',
    description: 'Reeltix - AI-Powered Movie Ticket Booking web application developed without writing a single line of code entirely using AI models and prompt engineering skills.',
    longDescription: 'Reeltix is a fully functional movie ticket booking web application developed without writing a single line of code — entirely using AI models and prompt engineering skills. This project showcases how artificial intelligence can be used to build real-world applications efficiently.It uses data from TheMovieDB API to fetch movie listings, details, trailers, and more.',
    image: '../src/assets/reeltix.png',
    repoUrl: 'https://github.com/green1210/Reeltix',
    liveUrl: 'https://reeltix.vercel.app/',
    tags: ['Artificial Intelligence', 'Prompt Engineering', 'TheMovieDB API'],
    category: 'AI/ML',
    featured: true,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['Artificial Intelligence', 'Prompt Engineering', 'TheMovieDB API', 'Responsive Design'],
    features: ['Browse Movies', 'Book Tickets', 'AI-Driven Build', 'Theater & Seat Selection', 'Streaming Availability', 'User Ratings & Reviews', 'Login / Sign Up', 'Booking Confirmation', 'Responsive Design'],
    impact: 'Realtime Movies',
    completion: '100%'
  },
  {
    id: 7,
    title: 'Sentiment Analysis on Tweets',
    description: 'Sentiment analysis on tweets using the Sentiment140 dataset. Tweets are cleaned, converted to TF-IDF features, and classified using Logistic Regression.',
    longDescription: "This is a machine learning project for performing sentiment analysis on tweets using the Sentiment140 dataset. The goal is to classify tweets as Positive or Negative based on their content.Dataset Sentiment140.csv contains 1.6 million tweets labeled as:0 → Negative, 4 → Positive.",
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    repoUrl: 'https://github.com/green1210/Sentiment_Analysis_on_Tweets',
    liveUrl: 'https://analytics-demo.netlify.app',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Nltk'],
    category: 'AI/ML',
    featured: false,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Nltk'],
    features: ['TF-IDF features', 'classified', 'Logistic Regression'],
    impact: '79% Accuracy',
    completion: '100%'
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description: 'An interactive dashboard for data visualization and analytics with real-time updates and customizable widgets.',
    longDescription: 'A comprehensive analytics dashboard that transforms raw data into actionable insights through interactive visualizations and real-time data processing. Built with React and D3.js for powerful data visualization capabilities, the dashboard features customizable widgets, real-time data updates, and export capabilities for various data formats. The platform includes advanced charting options, filtering and drill-down capabilities, automated report generation, and integration with multiple data sources. Perfect for businesses looking to make data-driven decisions with beautiful, interactive visualizations.',
    image: '../src/assets/portfolio.png',
    repoUrl: 'https://github.com/nagamanikanta1210/analytics-dashboard',
    liveUrl: 'https://analytics-demo.netlify.app',
    tags: ['React', 'D3.js', 'Python', 'Pandas', 'Chart.js'],
    category: 'Full Stack',
    featured: true,
    stats: { stars: 0, forks: 0, views: 0 },
    technologies: ['React.js', 'D3.js', 'Python', 'Pandas', 'Chart.js'],
    features: ['Data Visualization', 'Real-time Updates', 'Custom Widgets', 'Export Capabilities'],
    impact: '50+ Businesses',
    completion: '96%'
  },
  {
    id: 9,
    title: 'Analytics Dashboard',
    description: 'An interactive dashboard for data visualization and analytics with real-time updates and customizable widgets.',
    longDescription: 'A comprehensive analytics dashboard that transforms raw data into actionable insights through interactive visualizations and real-time data processing. Built with React and D3.js for powerful data visualization capabilities, the dashboard features customizable widgets, real-time data updates, and export capabilities for various data formats. The platform includes advanced charting options, filtering and drill-down capabilities, automated report generation, and integration with multiple data sources. Perfect for businesses looking to make data-driven decisions with beautiful, interactive visualizations.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    repoUrl: 'https://github.com/nagamanikanta1210/analytics-dashboard',
    liveUrl: 'https://analytics-demo.netlify.app',
    tags: ['React', 'D3.js', 'Python', 'Pandas', 'Chart.js'],
    category: 'AI/ML',
    featured: false,
    stats: { stars: 134, forks: 56, views: 2800 },
    technologies: ['React.js', 'D3.js', 'Python', 'Pandas', 'Chart.js'],
    features: ['Data Visualization', 'Real-time Updates', 'Custom Widgets', 'Export Capabilities'],
    impact: '50+ Businesses',
    completion: '96%'
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Productivity'];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div 
        className="relative group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ 
          y: -8, 
          scale: 1.02,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        layout
      >
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-3 left-3 z-20 bg-gradient-to-r from-accent to-primary px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1.5"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            <Star size={10} className="animate-pulse" />
            Featured
          </motion.div>
        )}

        {/* Project Stats */}
        <motion.div
          className="absolute top-3 right-3 z-20 flex gap-1.5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1 text-white border border-white/20">
            <Star size={8} />
            {project.stats.stars}
          </div>
          <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1 text-white border border-white/20">
            <GitBranch size={8} />
            {project.stats.forks}
          </div>
        </motion.div>

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Enhanced Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 0.9 : 0.7 }}
            transition={{ duration: 0.3 }}
          />

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: parseInt(project.completion) / 100 }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
          
          {/* Action Buttons - FIXED */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Details Button - FIXED */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowDetails(true);
              }}
              className="flex items-center gap-1.5 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm hover:from-primary hover:to-accent text-white px-3 py-2 rounded-xl transition-all duration-300 shadow-lg group border border-white/20 text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={14} />
              <span className="font-medium">Details</span>
            </motion.button>
            
            {/* Repo Button */}
            <motion.a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-gradient-to-r from-gray-800/90 to-gray-700/90 backdrop-blur-sm hover:from-gray-700/90 hover:to-gray-600/90 text-white px-3 py-2 rounded-xl transition-all duration-300 border border-white/20 shadow-lg group text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={14} />
              <span className="font-medium">Code</span>
            </motion.a>
            
            {/* Live Button */}
            <motion.a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm hover:from-green-500/90 hover:to-emerald-500/90 text-white px-3 py-2 rounded-xl transition-all duration-300 shadow-lg group border border-white/20 text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} />
              <span className="font-medium">Live</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div 
          className="p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <div className="flex items-center justify-between mb-3">
            <motion.h3 
              className="text-lg font-bold group-hover:text-accent transition-colors duration-300"
              whileHover={{ x: 3 }}
            >
              {project.title}
            </motion.h3>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded-full font-medium">
                {project.category}
              </span>
            </div>
          </div>

          {/* Impact & Completion */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <TrendingUp size={10} />
              <span>{project.impact}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Award size={10} />
              <span>{project.completion} Complete</span>
            </div>
          </div>
          
          <motion.p 
            className="text-gray-300 mb-4 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-1.5"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-2 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-xs border border-white/10 hover:border-accent/30 transition-all duration-300 font-medium"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  show: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05, y: -1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(77, 181, 255, 0.08) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        />
      </motion.div>

      {/* FIXED Project Details Modal - STAYS BELOW NAVIGATION */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2147483645, // Just below navigation
              pointerEvents: 'auto'
            }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 max-w-4xl w-full max-h-[85vh] overflow-y-auto border border-white/10 shadow-2xl mt-20"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <motion.h2 
                    className="text-3xl font-bold gradient-text"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h2>
                  {project.featured && (
                    <span className="bg-gradient-to-r from-accent to-primary px-3 py-1.5 rounded-full text-sm font-bold text-white flex items-center gap-1.5">
                      <Star size={12} className="animate-pulse" />
                      Featured
                    </span>
                  )}
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm font-medium">
                    {project.completion} Complete
                  </span>
                </div>
                <motion.button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
              
              {/* Project Image */}
              <motion.div
                className="relative mb-6 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 text-white border border-white/20">
                    <Star size={14} />
                    {project.stats.stars} Stars
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 text-white border border-white/20">
                    <GitBranch size={14} />
                    {project.stats.forks} Forks
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 text-white border border-white/20">
                    <Eye size={14} />
                    {project.stats.views} Views
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 text-white border border-white/20">
                    <TrendingUp size={14} />
                    {project.impact}
                  </div>
                </div>
              </motion.div>
              
              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      <Code size={12} className="text-white" />
                    </div>
                    Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-base">
                    {project.longDescription}
                  </p>
                  
                  {/* Category & Impact */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-accent font-medium text-sm">Category:</span>
                      </div>
                      <span className="bg-primary/20 text-accent px-2 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-accent font-medium text-sm">Impact:</span>
                      </div>
                      <span className="text-gray-300 font-medium text-sm">{project.impact}</span>
                    </div>
                  </div>
                </div>
                
                {/* Technical Details */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Zap size={16} className="text-accent" />
                      Technologies Used
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg text-sm border border-white/10 text-center font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-accent" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg border border-white/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  View Repository
                </motion.a>
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  View Live Demo
                </motion.a>
                <motion.button
                  onClick={() => setShowDetails(false)}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} />
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const EnhancedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section 
      id="projects" 
      className="py-16 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.06) 0%, transparent 70%),
          #0a0a0f
        `
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full opacity-8"
            animate={{
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Code size={16} className="text-accent" />
            <span className="text-accent font-bold text-base">My Work</span>
            <Sparkles size={14} className="text-accent" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            whileHover={{ scale: 1.02 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore my latest projects showcasing innovative solutions and cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                selectedCategory === category
                  ? 'text-white shadow-lg scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl"
                  style={{ zIndex: -1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30,
                    duration: 0.6
                  }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/green1210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent hover:opacity-90 px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ExternalLink size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};