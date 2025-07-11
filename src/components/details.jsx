import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  ScrollText, 
  User, 
  ExternalLink, 
  School, 
  Backpack,
  MapPin,
  Calendar,
  Languages,
  Heart,
  Trophy,
  Star,
  Sparkles,
  Globe,
  TrendingUp,
  Target,
  Coffee,
  Lightbulb
} from 'lucide-react';
import profileImage from '../assets/profile.png';

function Tab({ id, label, icon, isActive, onClick }) {
  return (
    <button
      id={id}
      className={`tab flex items-center justify-center gap-2 py-3 px-6 relative z-10 rounded-xl transition-all duration-300 font-semibold text-sm ${
        isActive 
          ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg scale-105' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <span className="hidden sm:inline font-semibold">{label}</span>
    </button>
  );
}

export function Details() {
  const [activeTab, setActiveTab] = useState('personal-Info');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="details" 
      className="py-16 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.05) 0%, transparent 70%),
          #0a0a0f
        `
      }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            animate={{
              x: [0, Math.random() * 60 - 30],
              y: [0, Math.random() * 60 - 30],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-accent font-bold text-base">My Journey</span>
            <Star size={14} className="text-accent" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Professional Background
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive overview of my educational and professional journey, 
            showcasing growth, achievements, and continuous learning
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* COMPACT Tab Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Tab
              id="personal-tab"
              label="Personal Info"
              icon={<User size={16} />}
              isActive={activeTab === 'personal-Info'}
              onClick={() => handleTabClick('personal-Info')}
            />
            <Tab
              id="education-tab"
              label="Education"
              icon={<GraduationCap size={16} />}
              isActive={activeTab === 'education'}
              onClick={() => handleTabClick('education')}
            />
            <Tab
              id="experience-tab"
              label="Experience"
              icon={<Briefcase size={16} />}
              isActive={activeTab === 'experience'}
              onClick={() => handleTabClick('experience')}
            />
            <Tab
              id="certifications-tab"
              label="Certifications"
              icon={<Award size={16} />}
              isActive={activeTab === 'certifications'}
              onClick={() => handleTabClick('certifications')}
            />
            <Tab
              id="trainings-tab"
              label="Trainings"
              icon={<ScrollText size={16} />}
              isActive={activeTab === 'trainings'}
              onClick={() => handleTabClick('trainings')}
            />
          </motion.div>

          <motion.div 
            className="tab-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeTab === 'personal-Info' && (
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="glass-card rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* COMPACT Profile Section - NO ROTATION */}
                    <motion.div 
                      className="flex-shrink-0 relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        {/* Gradient Border Container - NO ROTATION */}
                        <motion.div
                          className="w-64 h-64 rounded-2xl p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                        >
                          {/* Inner Container */}
                          <div className="w-full h-full rounded-2xl bg-background p-1">
                            {/* SMALLER Profile Image */}
                            <div className="w-full h-full rounded-2xl overflow-hidden">
                              <img 
                                src={profileImage}
                                alt="Nagamanikanta Nallaganchu"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* COMPACT Status Badge */}
                        <motion.div
                          className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          <span className="font-semibold text-sm">Available</span>
                        </motion.div>
                        
                        {/* SMALLER Decorative Elements */}
                        <motion.div
                          className="absolute -top-4 -left-4 text-accent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Star size={20} />
                        </motion.div>
                        <motion.div
                          className="absolute -top-4 -right-4 text-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <Sparkles size={18} />
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    {/* COMPACT Details Grid */}
                    <div className="flex-1 w-full">
                      <motion.h3 
                        className="text-3xl font-bold mb-8 gradient-text"
                        whileHover={{ scale: 1.02 }}
                      >
                        Personal Details
                      </motion.h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* COMPACT About Me Section */}
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                        >
                          <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                              <User size={16} className="text-white" />
                            </div>
                            About Me
                          </h4>
                          
                          <div className="space-y-4">
                            {[
                              { icon: User, label: 'Name', value: 'Nagamanikanta Nallagancu' },
                              { icon: Calendar, label: 'Date of Birth', value: 'October 12, 2003' },
                              { icon: Languages, label: 'Languages', value: 'Telugu, English, Hindi' },
                              { icon: MapPin, label: 'Location', value: 'Vadodara, Gujarat' },
                              { icon: Star, label: 'Other Name', value: 'Green' },
                              { icon: Heart, label: 'Hobbies', value: 'Cooking, Music, Travelling' },
                              { icon: Trophy, label: 'Sports', value: 'Kabaddi, Running' },
                              { icon: Sparkles, label: 'Fun Fact', value: 'Self Motivated & Positively Driven' },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <div className="w-6 h-6 text-accent mt-0.5 flex-shrink-0 p-1 rounded-md bg-white/10">
                                  <item.icon size={16} />
                                </div>
                                <div>
                                  <span className="text-accent font-semibold text-base">{item.label}:</span>
                                  <span className="text-gray-300 ml-2 text-base">{item.value}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* COMPACT Interests Section */}
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                        >
                          <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent to-secondary flex items-center justify-center">
                              <Heart size={16} className="text-white" />
                            </div>
                            Interests & Passions
                          </h4>
                          
                          <div className="grid gap-3">
                            {[
                              { text: 'Full Stack Development', icon: Globe },
                              { text: 'Artificial Intelligence', icon: Lightbulb },
                              { text: 'Machine Learning', icon: TrendingUp },
                              { text: 'Prompt Engineering', icon: Target },
                              { text: 'Data Analyst', icon: Star },
                              { text: 'Open Source Contributing', icon: Coffee }
                              
                            ].map((interest, index) => (
                              <motion.div
                                key={index}
                                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-accent/30 transition-all duration-300"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-md flex items-center justify-center">
                                  <interest.icon size={12} className="text-white" />
                                </div>
                                <span className="text-gray-200 font-medium text-base">{interest.text}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                variants={containerVariants}
                className="space-y-6"
              >
                {[
                  {
                    icon: GraduationCap,
                    title: 'Bachelor of Technology in Computer Science',
                    institution: 'Parul University',
                    period: '2022 - 2026',
                    details: [
                      'Current CGPA: 8.0/10',
                      'Specialization in Artificial Intelligence & Data Science',
                      'Member of University Coding club',
                      'Team Leader, Project'
                    ],
                    color: 'from-blue-500 to-purple-600'
                  },
                  {
                    icon: Backpack,
                    title: 'College',
                    institution: 'Pavitra Junior College',
                    period: '2020 - 2022',
                    details: [
                      'Mathematics, Physics, Chemistry - MPC',
                      'Location: Machilipatnam, Krishna District, Andhrapradesh'
                    ],
                    color: 'from-green-500 to-teal-600'
                  },
                  {
                    icon: School,
                    title: 'High School',
                    institution: 'Bhashyam English Medium High School',
                    period: '2016 - 2020',
                    details: [
                      'CGPA: 10/10',
                      'Subjects: Telugu, English, Hindi, Science, Social, Mathematics',
                      'Sports: Kabaddi, Running',
                      'Team Captain, Kabaddi',
                      'Location: Machilipatnam, Krishna District, Andhrapradesh'
                    ],
                    color: 'from-orange-500 to-red-600'
                  },
                  {
                    icon: School,
                    title: 'Primary School',
                    institution: 'ST.Palloti English Medium School',
                    period: '2011 - 2016',
                    details: [
                      'From Lower Kindergarten to XI Standard',
                      'Location: Pedana, Machilipatnam, Krishna District, Andhrapradesh'
                    ],
                    color: 'from-pink-500 to-rose-600'
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                  >
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <edu.icon size={28} className="text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          {edu.title}
                        </motion.h3>
                        <p className="text-accent mb-1 font-bold text-lg">{edu.institution}</p>
                        <p className="text-gray-400 mb-4 flex items-center gap-2 text-base">
                          <Calendar size={16} />
                          {edu.period}
                        </p>
                        
                        <motion.ul 
                          className="space-y-2"
                          variants={containerVariants}
                        >
                          {edu.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              className="flex items-start gap-3 text-gray-300 text-base"
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                variants={containerVariants}
                className="space-y-6"
              >
                <motion.div
                  className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Briefcase size={28} className="text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        Fullstack Developer Intern
                      </motion.h3>
                      <p className="text-accent mb-1 font-bold text-lg">Tech Solutions Inc.</p>
                      <p className="text-gray-400 mb-4 flex items-center gap-2 text-base">
                        <Calendar size={16} />
                        Summer 2025
                      </p>
                      
                      <motion.ul 
                        className="space-y-2 mb-6"
                        variants={containerVariants}
                      >
                        {[
                          'Developed Responsive website',
                          'Implemented MERN Stack',
                          'Collaborated with cross-functional teams'
                        ].map((achievement, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3 text-gray-300 text-base"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                      
                      <motion.a
                        href="https://www.linkedin.com/in/your-profile/experience"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-base"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} />
                        View on LinkedIn
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: 'Infosys Database & SQL',
                    description: 'Completed an in-depth course on database management and SQL querying. Gained hands-on experience with designing, creating, and managing relational databases.',
                    issuer: 'Infosys Springboard',
                    year: '2023',
                    link: 'https://www.linkedin.com/posts/nagamanikanta1210_db-sql-infosys-certificate-activity-7213898163332538371-OJm5',
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'Infosys Python',
                    description: 'Completed the comprehensive Python programming course offered by Infosys Springboard. The course covered foundational to advanced Python concepts including data structures, object-oriented programming, data science libraries, and introductory machine learning.',
                    issuer: 'Infosys Springboard',
                    year: '2023',
                    link: 'https://www.linkedin.com/posts/nagamanikanta1210_basic-of-python-infosys-certificate-activity-7213895396610248704-OWvx',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'NPTEL Computer Networks & Internet Protocols',
                    description: 'Completed the rigorous online course offered by IIT Kharagpur through NPTEL, covering core concepts of computer networks, protocols, architecture, and Internet communication principles.',
                    issuer: 'NPTEL - IIT Kharagpur',
                    year: '2024',
                    link: 'https://www.linkedin.com/posts/nagamanikanta1210_nptl-computer-network-internet-protocol-activity-7213900797921677312-asws',
                    color: 'from-red-500 to-pink-500'
                  }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                  >
                    <div className={`w-full h-2 bg-gradient-to-r ${cert.color} rounded-full mb-6`} />
                    
                    <motion.h3 
                      className="text-xl font-bold mb-4 text-accent group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      {cert.title}
                    </motion.h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-base">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-gray-400 flex items-center gap-2 text-sm">
                        <Award size={16} />
                        Issued by {cert.issuer} • {cert.year}
                      </p>
                    </div>
                    
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-base"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={16} />
                      View on LinkedIn
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'trainings' && (
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: 'Data Structures & Algorithms Bootcamp',
                    description: 'Successfully completed an intensive 60-day bootcamp organized by the Training & Placement Cell, CSE Department, Parul University.',
                    organizer: 'Training & Placement Cell, Parul University',
                    year: '2024',
                    link: 'https://www.linkedin.com/posts/nagamanikanta1210_datastructureandalgorithms-bootcamp-codingclub-activity-7277310530556432385-CwVH',
                    color: 'from-indigo-500 to-purple-600'
                  },
                  {
                    title: 'C Programming Language Bootcamp',
                    description: 'Completed an intensive 45-day crash course organized by the Coding Club and Training & Placement Cell, CSE Department, Parul University.',
                    organizer: 'Training & Placement Cell, Parul University',
                    year: '2023',
                    link: 'https://www.linkedin.com/posts/nagamanikanta1210_cabrlanguage-codingclub-45dayscrashcourse-activity-7277307944751222784-5U1C',
                    color: 'from-green-500 to-teal-600'
                  },
                  {
                    title: 'Python Bootcamp',
                    description: 'Python Bootcamp organized by LetsUpgrade, in collaboration with NSDC, ITM Edutech, and GDG MAD — held from 21st to 23rd May 2025.',
                    organizer: 'LetsUpgrade, NSDC, ITM Edutech and GDG MAD',
                    year: '2025',
                    link: 'https://www.linkedin.com/posts/nagamanikanta1210_python-bootcamp-activity-7332265409267630080-TtWQ',
                    color: 'from-yellow-500 to-orange-600'
                  },
                  {
                    title: 'Excel Bootcamp',
                    description: 'I honed essential Excel skills — from mastering formulas and functions to crafting clear, data-driven visualizations.',
                    organizer: 'LetsUpgrade, NSDC, ITM Edutech and GDG MAD',
                    year: '2025',
                    link: 'https://www.linkedin.com/in/your-profile/certifications',
                    color: 'from-emerald-500 to-green-600'
                  }
                ].map((training, index) => (
                  <motion.div
                    key={index}
                    className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                  >
                    <div className={`w-full h-2 bg-gradient-to-r ${training.color} rounded-full mb-6`} />
                    
                    <motion.h3 
                      className="text-xl font-bold mb-4 text-accent group-hover:text-white transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      {training.title}
                    </motion.h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-base">
                      {training.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <p className="text-gray-400 flex items-center gap-2 text-sm">
                        <ScrollText size={16} />
                        {training.organizer} • {training.year}
                      </p>
                    </div>
                    
                    <motion.a
                      href={training.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-base"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={16} />
                      View on LinkedIn
                    </motion.a>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}