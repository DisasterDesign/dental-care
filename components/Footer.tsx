'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/20 backdrop-blur-md border-t border-white/40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo & About */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/30 backdrop-blur-md border border-white/40">
                <span className="text-[#26BEFF] font-bold text-lg">DC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A2B3C]">Dental Care</h3>
                <p className="text-[#6B7280] text-sm">רפואת שיניים לכל המשפחה</p>
              </div>
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              מרפאת שיניים מתקדמת ברמלה עם ניסיון של למעלה מ-20 שנה.
              מומחים בהשתלות, יישור שיניים וכל טיפולי השיניים.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <h4 className="font-bold mb-4 text-[#1A2B3C]">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#services"
                  className="text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                  whileHover={{ x: -4 }}
                >
                  הטיפולים שלנו
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#why-us"
                  className="text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                  whileHover={{ x: -4 }}
                >
                  למה אנחנו
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  className="text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                  whileHover={{ x: -4 }}
                >
                  צור קשר
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }}>
            <h4 className="font-bold mb-4 text-[#1A2B3C]">פרטי התקשרות</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:074-740-22-33"
                  className="flex items-center gap-2 text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                >
                  <Phone size={16} />
                  <span>074-740-22-33</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:052-521-2118"
                  className="flex items-center gap-2 text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                >
                  <Phone size={16} />
                  <span>052-521-2118</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dentalcare.co.il"
                  className="flex items-center gap-2 text-[#6B7280] hover:text-[#26BEFF] transition-colors"
                >
                  <Mail size={16} />
                  <span>info@dentalcare.co.il</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#6B7280]">
                <MapPin size={16} />
                <span>רח&apos; משה לוי 16, רמלה</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A2B3C]/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm">
              Dental Care &copy; 2026 | כל הזכויות שמורות
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6B7280] hover:bg-[#26BEFF] hover:text-white hover:border-[#26BEFF] transition-all bg-white/30 backdrop-blur-md border border-white/40 sparkle-hover"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6B7280] hover:bg-[#9B6AF1] hover:text-white hover:border-[#9B6AF1] transition-all bg-white/30 backdrop-blur-md border border-white/40 sparkle-hover"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
