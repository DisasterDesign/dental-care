'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import SparkleIcon from './SparkleIcon';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, x: -60, scale: 0.9 },
  animate: { opacity: 1, x: 0, scale: 1 }
};

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
      <SparkleIcon position="top-left" size={22} delay={0.3} />
      <SparkleIcon position="bottom-right" size={26} delay={0.8} />
      <div className="container-custom" style={{ perspective: 1200 }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl mb-4 bg-white/25 backdrop-blur-md border border-white/40"
            initial={{ scale: 0.5, opacity: 0, rotateY: 20 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B3C]">
              צרו קשר
            </h2>
          </motion.div>
          <motion.p
            className="text-[#1A2B3C]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            אנחנו כאן בשבילכם - בואו לבקר אותנו או התקשרו לקביעת תור
          </motion.p>
        </motion.div>

        <motion.div
          className="p-6 sm:p-10 md:p-14 rounded-[32px] bg-white/20 backdrop-blur-md border border-white/40"
          initial={{ opacity: 0, y: 100, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-xl sm:text-2xl font-bold text-[#1A2B3C] mb-6 sm:mb-8"
                variants={itemVariants}
                transition={{ duration: 0.7 }}
              >
                פרטי התקשרות
              </motion.h3>

              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/30 backdrop-blur-md border border-white/40"
                    whileHover={{ scale: 1.25, rotate: 15, transition: { duration: 0.15 } }}
                  >
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#26BEFF]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[#1A2B3C] mb-1">כתובת</h4>
                    <p className="text-[#6B7280]">רח&apos; משה לוי 16, רמלה</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/30 backdrop-blur-md border border-white/40"
                    whileHover={{ scale: 1.25, rotate: 15, transition: { duration: 0.15 } }}
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#26BEFF]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[#1A2B3C] mb-1">טלפון</h4>
                    <div className="space-y-1">
                      <a
                        href="tel:074-740-22-33"
                        className="block text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                      >
                        074-740-22-33
                      </a>
                      <a
                        href="tel:052-521-2118"
                        className="block text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                      >
                        052-521-2118
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.7 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/30 backdrop-blur-md border border-white/40"
                    whileHover={{ scale: 1.25, rotate: 15, transition: { duration: 0.15 } }}
                  >
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#26BEFF]" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-[#1A2B3C] mb-1">שעות פעילות</h4>
                    <p className="text-[#6B7280]">א&apos;-ה&apos; 8:00-20:00</p>
                    <p className="text-[#26BEFF] text-sm mt-1">שירות חירום 24/7</p>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/972525212118?text=שלום, אשמח לקבוע תור"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 w-full text-[#25D366] py-3 sm:py-4 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-3 font-semibold text-base sm:text-lg bg-white/30 backdrop-blur-md border border-white/40 sparkle-hover"
                variants={itemVariants}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px rgba(37, 211, 102, 0.25)", transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={24} />
                שלחו הודעה בוואטסאפ
              </motion.a>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="rounded-2xl min-h-[250px] sm:min-h-[350px] overflow-hidden bg-white/25 backdrop-blur-md border border-white/40"
              initial={{ opacity: 0, x: 80, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8!2d34.8706!3d31.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU1JzQwLjQiTiAzNMKwNTInMTQuMiJF!5e0!3m2!1siw!2sil!4v1706000000000!5m2!1siw!2sil&q=%D7%9E%D7%A9%D7%94+%D7%9C%D7%95%D7%99+16+%D7%A8%D7%9E%D7%9C%D7%94"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מיקום מרפאת Dental Care"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
