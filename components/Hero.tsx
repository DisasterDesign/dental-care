'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Phone } from 'lucide-react';
import AnimatedTooth from './AnimatedTooth';

const cardReveal = {
  initial: { opacity: 0, y: 60, rotateY: -10 },
  animate: { opacity: 1, y: 0, rotateY: 0 }
};

export default function Hero() {
  // Scroll-based animation
  const { scrollY } = useScroll();

  // Tooth fades out from 400-600px scroll (1 -> 0)
  const toothOpacity = useTransform(scrollY, [400, 600], [1, 0]);

  return (
    <section className="relative min-h-[60vh] flex items-end pb-16">
      {/* Animated SVG Tooth - Left Side, Massive & Extends Beyond Section */}
      <motion.div
        className="fixed -left-[400px] md:-left-[350px] lg:-left-[300px] top-[65%] -translate-y-1/2 w-[700px] md:w-[900px] lg:w-[1100px] h-auto z-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: toothOpacity }}
      >
        <AnimatedTooth />
      </motion.div>

      {/* Content Container */}
      <div className="container-custom relative z-10 w-full">
        {/* Quick Actions - Centered */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
          }}
        >
          <motion.a
            href="#contact"
            className="px-10 py-6 text-center cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center gap-5 sparkle-hover"
            variants={cardReveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.03, boxShadow: "0 30px 60px rgba(38, 190, 255, 0.2), 0 20px 40px rgba(155, 106, 241, 0.15)", transition: { duration: 0.15 } }}
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center bg-white/60 border border-white/80"
              whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
            >
              <MapPin size={32} className="text-[#26BEFF]" />
            </motion.div>
            <span className="text-xl font-medium text-[#1A2B3C]">רח&apos; משה לוי 16, רמלה</span>
          </motion.a>

          <motion.a
            href="https://wa.me/972525212118"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-6 text-center cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center gap-5 sparkle-hover"
            variants={cardReveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.03, boxShadow: "0 30px 60px rgba(38, 190, 255, 0.2), 0 20px 40px rgba(155, 106, 241, 0.15)", transition: { duration: 0.15 } }}
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center bg-white/60 border border-white/80"
              whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
            >
              <Calendar size={32} className="text-[#26BEFF]" />
            </motion.div>
            <span className="text-xl font-medium text-[#1A2B3C]">קביעת תור בוואטסאפ</span>
          </motion.a>

          <motion.a
            href="tel:052-521-2118"
            className="px-10 py-6 text-center cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 flex items-center gap-5 sparkle-hover"
            variants={cardReveal}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, scale: 1.03, boxShadow: "0 30px 60px rgba(38, 190, 255, 0.2), 0 20px 40px rgba(155, 106, 241, 0.15)", transition: { duration: 0.15 } }}
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center bg-white/60 border border-white/80"
              whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
            >
              <Phone size={32} className="text-[#26BEFF]" />
            </motion.div>
            <span className="text-xl font-medium text-[#1A2B3C]">שירות 24/7</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
