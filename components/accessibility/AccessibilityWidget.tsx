'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AccessibilityPanel from './AccessibilityPanel';

// Accessibility icon (person in circle - universal accessibility symbol)
const AccessibilityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
  </svg>
);

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 w-14 h-14 rounded-full
                   bg-[#26BEFF] text-white shadow-lg
                   flex items-center justify-center
                   hover:bg-[#1ea8e6] transition-colors
                   focus:outline-none focus:ring-4 focus:ring-[#26BEFF]/50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 17 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="פתח תפריט נגישות"
        title="נגישות"
      >
        <AccessibilityIcon />
      </motion.button>

      {/* Panel with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55]"
              aria-hidden="true"
            />

            {/* Panel */}
            <AccessibilityPanel onClose={() => setIsOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
