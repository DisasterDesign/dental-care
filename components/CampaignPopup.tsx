'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
export default function CampaignPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('campaign-popup-closed')) return;
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('campaign-popup-closed', '1');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Card */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors cursor-pointer"
              aria-label="סגור"
            >
              <X size={18} />
            </button>

            {/* Campaign Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/campaign.jpeg"
              alt="מבצע חג מיוחד - 20 ציפויי שיניים ב-1,000 שח לחודש בפריסה ל-36 חודשים"
              className="w-full h-auto"
            />

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/972548916234?text=היי, אשמח לשמוע על מבצע ציפויי השיניים"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-[#25D366] text-white text-center text-lg font-bold hover:bg-[#1fb855] transition-colors"
            >
              שלחו הודעה בוואטסאפ עכשיו!
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
