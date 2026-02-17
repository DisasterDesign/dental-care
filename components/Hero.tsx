'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Phone } from 'lucide-react';
import AnimatedTooth from './AnimatedTooth';

const cardReveal = {
  initial: { opacity: 0, y: 60, rotateY: -10 },
  animate: { opacity: 1, y: 0, rotateY: 0 }
};

// Twinkling star component for button hover - positioned relative to wrapper
function HoverStar({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute -top-4 -right-4 w-10 h-10 pointer-events-none z-50"
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{
            opacity: [0, 1, 0.7, 1],
            scale: [0.3, 1.3, 0.95, 1.1],
            rotate: [-30, 20, -5, 10],
          }}
          exit={{ opacity: 0, scale: 0, rotate: 30 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/star.svg"
            alt=""
            className="w-full h-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Scroll-based animation
  const { scrollY } = useScroll();

  // Tooth fades out from 400-600px scroll (1 -> 0)
  const toothOpacity = useTransform(scrollY, [400, 600], [1, 0]);

  return (
    <section className="relative min-h-[60vh] flex items-end pb-16">
      {/* Animated SVG Tooth - Left Side, Massive & Extends Beyond Section - Hidden on mobile */}
      <motion.div
        className="fixed -left-[400px] md:-left-[350px] lg:-left-[300px] top-[65%] -translate-y-1/2 w-[700px] md:w-[900px] lg:w-[1100px] h-auto z-0 pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{ opacity: toothOpacity }}
      >
        <AnimatedTooth />
      </motion.div>

      {/* Content Container */}
      <div className="container-custom relative z-10 w-full">
        {/* Quick Actions - Centered */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 relative"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
          }}
        >
          {/* Button 1 - Address - Opens Waze */}
          <motion.div
            className="relative"
            variants={cardReveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHoveredButton('address')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <HoverStar isVisible={hoveredButton === 'address'} />
            <motion.a
              href="https://waze.com/ul?q=%D7%9E%D7%A9%D7%94%20%D7%9C%D7%95%D7%99%2016%20%D7%A8%D7%9E%D7%9C%D7%94&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-center cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center gap-3 sm:gap-4 md:gap-5 sparkle-hover"
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 30px 60px rgba(38, 190, 255, 0.2), 0 20px 40px rgba(30, 58, 95, 0.15)", transition: { duration: 0.15 } }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/60 border border-white/80 flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
              >
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#26BEFF]" />
              </motion.div>
              <span className="text-base sm:text-lg md:text-xl font-medium text-[#1A2B3C]">רח&apos; משה לוי 16, רמלה</span>
            </motion.a>
          </motion.div>

          {/* Button 2 - WhatsApp */}
          <motion.div
            className="relative"
            variants={cardReveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHoveredButton('whatsapp')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <HoverStar isVisible={hoveredButton === 'whatsapp'} />
            <motion.a
              href="https://wa.me/972525212118"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-center cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center gap-3 sm:gap-4 md:gap-5 sparkle-hover"
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 30px 60px rgba(38, 190, 255, 0.2), 0 20px 40px rgba(30, 58, 95, 0.15)", transition: { duration: 0.15 } }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/60 border border-white/80 flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
              >
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#26BEFF]" />
              </motion.div>
              <span className="text-base sm:text-lg md:text-xl font-medium text-[#1A2B3C]">קביעת תור בוואטסאפ</span>
            </motion.a>
          </motion.div>

          {/* Button 3 - Phone */}
          <motion.div
            className="relative"
            variants={cardReveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHoveredButton('phone')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <HoverStar isVisible={hoveredButton === 'phone'} />
            <motion.a
              href="tel:052-521-2118"
              className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-center cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center gap-3 sm:gap-4 md:gap-5 sparkle-hover"
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 30px 60px rgba(38, 190, 255, 0.2), 0 20px 40px rgba(30, 58, 95, 0.15)", transition: { duration: 0.15 } }}
            >
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/60 border border-white/80 flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
              >
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#26BEFF]" />
              </motion.div>
              <span className="text-base sm:text-lg md:text-xl font-medium text-[#1A2B3C]">שירות 24/7</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
