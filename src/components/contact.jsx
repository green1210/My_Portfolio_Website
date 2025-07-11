import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Linkedin, Instagram, Github, ExternalLink, Sparkles, Heart, BookUser, Zap, Star, CheckCircle, Clock, Globe, Coffee, Rocket, AlertCircle } from 'lucide-react';
import { SiHackerrank, SiLeetcode,  SiLinktree, SiDiscord } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // EmailJS Configuration
  const serviceId = 'service_s2w0jal';
  const templateId = 'template_d5myea5';
  const userId = 'RmRif_lmKgLWXi1m1';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(userId);
  }, [userId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_name: 'Nagamani Kanta',
        reply_to: formData.email,
      };

      // Debug log to check what's being sent
      console.log('Template Parameters:', templateParams);
      console.log('Form Data:', formData);

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log('Email sent successfully:', result);
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for reaching out! I\'ll get back to you within 24 hours.');
      
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Show notification if available
      if (window.addNotification) {
        window.addNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      }

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Set appropriate error message based on error type
      if (error.status === 400) {
        setSubmitMessage('Please check your form data and try again.');
      } else if (error.status === 403) {
        setSubmitMessage('Service temporarily unavailable. Please try again later.');
      } else {
        setSubmitMessage('Failed to send message. Please try again or contact me directly via email.');
      }

      // Show notification if available
      if (window.addNotification) {
        window.addNotification('Failed to send message. Please try again.', 'error');
      }

      // Clear error status after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 8000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nagamanikanta1210@gmail.com',
      link: 'mailto:nagamanikanta1210@gmail.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9392409591',
      link: 'tel:+919392409591',
      color: 'from-green-500 to-emerald-500',
      description: 'Available 9 AM - 6 PM IST'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Vadodara, Gujarat',
      link: 'https://maps.google.com/?q=Vadodara,Gujarat,India',
      color: 'from-purple-500 to-pink-500',
      description: 'Open to remote work'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/green1210/',
      color: 'from-blue-600 to-blue-700',
      followers: ' '
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/green1210',
      color: 'from-gray-700 to-gray-800',
      followers: ' '
    },
    {
      icon: SiLeetcode,
      name: 'LeetCode',
      url: 'https://leetcode.com/nagamanikanta1210',
      color: 'from-orange-500 to-yellow-500',
      followers: ' '
    },
    {
      icon: SiHackerrank,
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/green1210',
      color: 'from-green-600 to-green-700',
      followers: ' '
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/_green_1210/',
      color: 'from-pink-500 to-rose-600',
      followers: ' '
    },
    {
      icon: SiLinktree,
      name: 'LinkTree',
      url: 'https://linktr.ee/green_1210',
      color: 'from-green-600 to-green-700',
      followers: ' '
    },
    {
      icon: FaXTwitter,
      name: 'X',
      url: 'https://x.com/green_1210',
      color: 'from-black-700 to-black-800',
      followers: ' '
    },
    {
      icon: SiDiscord,
      name: 'Discord',
      url: 'https://discordapp.com/users/1377321495788916749',
      color: 'from-gray-700 to-gray-800',
      followers: ' '
    },
  ];

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
      id="contact" 
      className="py-16 relative overflow-hidden"
      ref={sectionRef}
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(240, 147, 251, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.04) 0%, transparent 70%),
          #0a0a0f
        `
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Enhanced Floating Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.05, 0.15, 0.05],
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
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-purple-400 font-bold text-base">Let's Connect</span>
            <Coffee size={14} className="text-purple-400" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
            I'm always excited to work on innovative projects and meet like-minded people.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Heart size={16} className="text-white" />
                </div>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Information</span>
              </h3>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block group"
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                    <div className="flex items-center gap-4 relative z-10">
                      <motion.div 
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <info.icon size={20} className="text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-200 group-hover:text-white transition-colors duration-300 text-base font-medium mb-0.5">
                          {info.value}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                      <motion.div
                        className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 ml-2"
                        whileHover={{ scale: 1.2, x: 3 }}
                      >
                        <ExternalLink size={18} />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Star size={12} className="text-white" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect With Me</span>
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className={`rounded-lg p-4 border border-white/10 bg-gradient-to-r ${social.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 relative overflow-hidden`}>
                      <div className="flex flex-col items-center gap-2 text-center relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-2 rounded-lg bg-white/10"
                        >
                          <social.icon size={18} className="text-white" />
                        </motion.div>
                        <div>
                          <p className="font-bold text-white text-sm">{social.name}</p>
                          <p className="text-xs text-gray-300">{social.followers}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-xl relative overflow-hidden"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10"
                variants={itemVariants}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Send Message</span>
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Fields */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={itemVariants}
                >
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300 z-10" size={18} />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full h-14 pl-14 pr-4 text-base font-medium bg-white/5 border border-white/10 rounded-xl focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 text-white placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300 z-10" size={18} />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full h-14 pl-14 pr-4 text-base font-medium bg-white/5 border border-white/10 rounded-xl focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 text-white placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </motion.div>

                {/* Email and Phone */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={itemVariants}
                >
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300 z-10" size={18} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full h-14 pl-14 pr-4 text-base font-medium bg-white/5 border border-white/10 rounded-xl focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 text-white placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300 z-10" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full h-14 pl-14 pr-4 text-base font-medium bg-white/5 border border-white/10 rounded-xl focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 text-white placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants} className="relative group">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 group-focus-within:text-purple-400 transition-colors duration-300 z-10" size={18} />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full pl-14 pr-4 pt-4 pb-4 resize-none text-base font-medium leading-relaxed bg-white/5 border border-white/10 rounded-xl focus:border-purple-400/50 focus:bg-white/8 transition-all duration-300 text-white placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group h-16 font-bold text-lg rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 py-1 text-white">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Zap size={20} />
                          </motion.div>
                          <span>Sending Your Message...</span>
                        </>
                      ) : (
                        <>
                          <Rocket size={20} />
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>

                {/* Status Message */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className={`text-center p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/15 text-green-400 border border-green-500/20' 
                          : 'bg-red-500/15 text-red-400 border border-red-500/20'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {submitStatus === 'success' ? (
                          <CheckCircle size={20} />
                        ) : (
                          <AlertCircle size={20} />
                        )}
                        <span className="font-bold text-lg">
                          {submitStatus === 'success' 
                            ? 'Message Sent Successfully!' 
                            : 'Something went wrong'
                          }
                        </span>
                      </div>
                      <p className="text-sm opacity-90">
                        {submitMessage || (submitStatus === 'success' 
                          ? 'Thank you for reaching out! I\'ll get back to you within 24 hours.' 
                          : 'Please try again or contact me directly via email or phone.'
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};