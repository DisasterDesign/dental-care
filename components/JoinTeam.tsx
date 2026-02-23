'use client';

import { motion } from 'framer-motion';
import { Users, Phone, MessageCircle } from 'lucide-react';
import SparkleIcon from './SparkleIcon';

export default function JoinTeam() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
      <SparkleIcon position="top-right" size={24} delay={0.2} />
      <SparkleIcon position="bottom-left" size={22} delay={0.7} />
      <div className="container-custom" style={{ perspective: 1200 }}>
        <motion.div
          className="p-6 sm:p-10 md:p-14 rounded-[32px] bg-white/20 backdrop-blur-md border border-white/40"
          initial={{ opacity: 0, y: 100, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl mb-4 bg-white/30 backdrop-blur-md border border-white/40"
              initial={{ scale: 0.5, opacity: 0, rotateX: 30 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B3C]">
                הצטרפו לצוות Dental Care
              </h2>
            </motion.div>
            <motion.p
              className="text-[#1A2B3C]/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              את/ה מתחום הרפואה? בואו להשתלב בצוות המקצועי שלנו
            </motion.p>
          </motion.div>

          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-white/30 backdrop-blur-md border border-white/40"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.4 }}
            >
              <Users className="w-8 h-8 text-[#9B6AF1]" />
            </motion.div>

            {/* Body Text */}
            <motion.div
              className="space-y-4 text-[#6B7280] text-base sm:text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                מרפאת Dental Care בהובלת ד״ר טאלב אבו עאמר מחפשת אנשי מקצוע מתחום רפואת השיניים להשתלב בצוות המוביל שלנו. אם את/ה מחפש/ת מקום עבודה מקצועי, חדשני ומשפחתי — נשמח לשמוע ממך!
              </p>
              <p>
                אנחנו מציעים סביבת עבודה מתקדמת, צוות מקצועי ותומך, ואפשרויות צמיחה והתפתחות מקצועית.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://wa.me/972525212118?text=שלום, אני מעוניין/ת להצטרף לצוות"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#26BEFF] to-[#9B6AF1] text-white font-medium flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                שלחו קורות חיים בוואטסאפ
              </a>
              <a
                href="tel:074-740-22-33"
                className="px-8 py-4 rounded-2xl glass-card text-[#1A2B3C] font-medium flex items-center justify-center gap-3 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5 text-[#26BEFF]" />
                074-740-22-33
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
