'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
    slug: 'dental-implants',
  },
  {
    icon: AlignCenter,
    title: 'יישור שיניים',
    description: 'יישור שיניים לילדים ומבוגרים עם טכנולוגיות מתקדמות',
    slug: 'teeth-alignment',
  },
  {
    icon: Crown,
    title: 'ציפויים וכתרים',
    description: 'ציפויים אסתטיים וכתרים מחרסינה איכותית',
    slug: 'veneers-crowns',
  },
  {
    icon: Heart,
    title: 'טיפולי שורש',
    description: 'טיפולי שורש ללא כאב עם ציוד מתקדם',
    slug: 'root-canal',
  },
  {
    icon: Baby,
    title: 'רפואת ילדים',
    description: 'טיפול שיניים לילדים באווירה נעימה וידידותית',
    slug: 'pediatric-dentistry',
  },
  {
    icon: Sparkles,
    title: 'טיפולי אסתטיקה',
    description: 'הלבנת שיניים וטיפולים אסתטיים מתקדמים',
    slug: 'aesthetic-treatments',
  },
  {
    icon: RefreshCw,
    title: 'שיקום הפה',
    description: 'שיקום מלא של הפה כולל תותבות ושחזורים',
    slug: 'mouth-restoration',
  },
  {
    icon: Scan,
    title: 'צילום CT',
    description: 'צילום CT דיגיטלי תלת מימדי במרפאה',
    slug: 'ct-scanning',
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
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
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
            className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl mb-4 bg-white/25 backdrop-blur-md border border-white/40"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B3C]">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`}>
              <motion.div
                className="group relative p-[2px] rounded-[20px] h-full"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  transition: { duration: 0.15 }
                }}
              >
                {/* Gradient border - visible on hover */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#26BEFF] to-[#1e3a5f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Card content */}
                <div className="relative p-5 sm:p-6 md:p-7 text-center cursor-pointer rounded-[18px] bg-white/25 backdrop-blur-md border border-white/40 group-hover:border-transparent transition-all duration-300 group-hover:bg-white/35 sparkle-hover h-full group-hover:shadow-[0_30px_60px_rgba(38,190,255,0.15),0_25px_50px_rgba(155,106,241,0.12)]">
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 bg-white/30 backdrop-blur-md border border-white/40"
                  whileHover={{ scale: 1.25, rotate: 15, transition: { duration: 0.15 } }}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#26BEFF]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1A2B3C] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
