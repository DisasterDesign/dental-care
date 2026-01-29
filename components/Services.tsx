'use client';

import { motion } from 'framer-motion';
import {
  Smile,
  AlignCenter,
  Crown,
  Heart,
  Baby,
  Sparkles,
  RefreshCw,
  Scan
} from 'lucide-react';
import SparkleIcon from './SparkleIcon';

const services = [
  {
    icon: Smile,
    title: 'השתלות שיניים',
    description: 'השתלות מתקדמות בניווט רובוטי עם טכנולוגיית Alphabio',
  },
  {
    icon: AlignCenter,
    title: 'יישור שיניים',
    description: 'יישור שיניים לילדים ומבוגרים עם טכנולוגיות מתקדמות',
  },
  {
    icon: Crown,
    title: 'ציפויים וכתרים',
    description: 'ציפויים אסתטיים וכתרים מחרסינה איכותית',
  },
  {
    icon: Heart,
    title: 'טיפולי שורש',
    description: 'טיפולי שורש ללא כאב עם ציוד מתקדם',
  },
  {
    icon: Baby,
    title: 'רפואת ילדים',
    description: 'טיפול שיניים לילדים באווירה נעימה וידידותית',
  },
  {
    icon: Sparkles,
    title: 'טיפולי אסתטיקה',
    description: 'הלבנת שיניים וטיפולים אסתטיים מתקדמים',
  },
  {
    icon: RefreshCw,
    title: 'שיקום הפה',
    description: 'שיקום מלא של הפה כולל תותבות ושחזורים',
  },
  {
    icon: Scan,
    title: 'צילום CT',
    description: 'צילום CT דיגיטלי תלת מימדי במרפאה',
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 80, scale: 0.8, rotateX: 20 },
  animate: { opacity: 1, y: 0, scale: 1, rotateX: 0 }
};

const headerVariants = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 }
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 relative">
      <SparkleIcon position="top-left" size={28} delay={0} />
      <SparkleIcon position="top-right" size={20} delay={0.5} />
      <div className="container-custom" style={{ perspective: 1200 }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block px-8 py-5 rounded-2xl mb-4 bg-white/25 backdrop-blur-md border border-white/40"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">
              הטיפולים שלנו
            </h2>
          </motion.div>
          <motion.p
            className="text-[#1A2B3C]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            מגוון רחב של טיפולי שיניים מתקדמים לכל המשפחה
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-7 text-center cursor-pointer rounded-[20px] bg-white/25 backdrop-blur-md border border-white/40 transition-colors duration-300 hover:bg-white/35 sparkle-hover"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -15,
                scale: 1.05,
                boxShadow: "0 30px 60px rgba(38, 190, 255, 0.15), 0 25px 50px rgba(155, 106, 241, 0.12)",
                rotateY: 5,
                transition: { duration: 0.15 }
              }}
            >
              <motion.div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 bg-white/30 backdrop-blur-md border border-white/40"
                whileHover={{ scale: 1.25, rotate: 15, transition: { duration: 0.15 } }}
              >
                <service.icon size={32} className="text-[#26BEFF]" />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#1A2B3C] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
