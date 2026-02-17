'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin } from 'lucide-react';
import GalleryImage from './GalleryImage';

export default function BottomSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden glass-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#26BEFF]/5 to-[#9B6AF1]/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content Side - Left (in RTL this will be on the right visually) */}
          <motion.div
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B3C] mb-6">
              מוכנים לחיוך חדש?
            </h2>
            <p className="text-lg md:text-xl text-[#6B7280] mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              צוות המומחים שלנו מחכה לכם! קבעו תור עוד היום ותתחילו את המסע לחיוך מושלם.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/972525212118"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#26BEFF] to-[#9B6AF1] text-white font-medium flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" />
                קביעת תור בוואטסאפ
              </a>
              <a
                href="tel:074-740-22-33"
                className="px-6 py-4 rounded-2xl glass-card text-[#1A2B3C] font-medium flex items-center justify-center gap-3 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5 text-[#26BEFF]" />
                074-740-22-33
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#6B7280]">
              <MapPin className="w-5 h-5 text-[#26BEFF]" />
              <span>רח&apos; משה לוי 16, רמלה</span>
            </div>

            {/* Placeholder for images */}
            <motion.div
              className="mt-10 grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {[
                { src: '/gallery/smiles/smile-02-thumb.webp', alt: 'תוצאת טיפול - חיוך מושלם' },
                { src: '/gallery/smiles/smile-14-thumb.webp', alt: 'תוצאת טיפול - שיניים יפות' },
                { src: '/gallery/smiles/smile-03-thumb.webp', alt: 'תוצאת טיפול - חיוך טבעי' },
              ].map((img, i) => (
                <GalleryImage
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  aspectRatio="square"
                  index={i}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Character Side - Right (in RTL this will be on the left visually) */}
          <motion.div
            className="relative w-full lg:w-auto flex-shrink-0 hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Speech bubble */}
              <motion.div
                className="absolute -top-16 right-1/2 translate-x-1/2 glass-card px-6 py-3 rounded-2xl z-20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-[#1A2B3C] font-medium whitespace-nowrap">
                  נתראה במרפאה! 👋
                </p>
                <div className="absolute -bottom-2 right-1/2 translate-x-1/2 w-4 h-4 bg-white/40 backdrop-blur-md rotate-45 border-r border-b border-white/60" />
              </motion.div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/team/doctor-7.webp"
                alt="ד״ר טאלב אבו עאמר - רופא שיניים"
                width={400}
                height={530}
                loading="lazy"
                className="drop-shadow-xl rounded-2xl max-w-[400px] w-full"
              />
              <p className="text-center text-lg font-bold text-[#1A2B3C] mt-4">
                ד״ר טאלב אבו עאמר
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
