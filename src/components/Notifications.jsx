import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export const Notifications = ({ notifications, onRemove }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-green-400" />;
      case 'error':
        return <AlertCircle size={20} className="text-red-400" />;
      default:
        return <Info size={20} className="text-blue-400" />;
    }
  };

  const getStyles = (type) => {
    switch (type) {
      case 'success':
        return 'border-green-400/30 bg-green-400/10';
      case 'error':
        return 'border-red-400/30 bg-red-400/10';
      default:
        return 'border-blue-400/30 bg-blue-400/10';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className={`p-4 rounded-lg backdrop-blur-sm border ${getStyles(notification.type)} shadow-lg max-w-sm`}
          >
            <div className="flex items-start gap-3">
              {getIcon(notification.type)}
              <div className="flex-1">
                <p className="text-white text-sm">{notification.message}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onRemove(notification.id)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};