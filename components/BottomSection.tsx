'use client';

import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, MessageCircle } from 'lucide-react';

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
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/972548916234"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#26BEFF] to-[#9B6AF1] text-white font-medium flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all"
              >
                <Calendar className="w-5 h-5" />
                קביעת תור בוואטסאפ
              </a>
              <a
                href="whatsapp://send?phone=972548916234&text=%D7%93%D7%A0%D7%98%D7%9C%20%D7%A7%D7%99%D7%99%D7%A8%20%D7%A9%D7%9C%D7%95%D7%9D%2C%20%0A%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%99%D7%99%D7%A2%D7%95%D7%A5%20%D7%91%D7%9E%D7%A8%D7%A4%D7%90%D7%AA%D7%9B%D7%9D."
                className="px-6 py-4 rounded-2xl bg-[#25D366] text-white font-medium flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                ייעוץ מהיר בוואטסאפ
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
                src="/character/clipboard.png"
                alt="דנטי - הדמות של Dental Care"
                width={400}
                height={400}
                loading="lazy"
                className="drop-shadow-xl max-w-[350px] w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
