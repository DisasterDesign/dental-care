'use client';

import { motion } from 'framer-motion';
import { Bot, Clock, Building2, Users } from 'lucide-react';
import SparkleIcon from './SparkleIcon';

const benefits = [
  {
    icon: Bot,
    title: 'השתלות בניווט רובוטי',
    description: 'הטכנולוגיה המתקדמת ביותר להשתלות שיניים עם דיוק מקסימלי',
  },
  {
    icon: Clock,
    title: 'שירות חירום 24/7',
    description: 'זמינים עבורכם בכל שעה - כולל שבתות וחגים',
  },
  {
    icon: Building2,
    title: 'הכל תחת קורת גג אחת',
    description: 'צילום CT, מעבדה ומגוון טיפולים במקום אחד',
  },
  {
    icon: Users,
    title: 'התמחות בכל הגילאים',
    description: 'מילדים קטנים ועד מבוגרים - מומחיות לכל שלב בחיים',
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 80, scale: 0.7, rotateY: -20 },
  animate: { opacity: 1, y: 0, scale: 1, rotateY: 0 }
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-20 px-4 md:px-6 relative">
      <SparkleIcon position="top-right" size={24} delay={0.2} />
      <SparkleIcon position="bottom-left" size={22} delay={0.7} />
      <div className="container-custom" style={{ perspective: 1200 }}>
        <motion.div
          className="p-10 md:p-14 rounded-[32px] bg-white/20 backdrop-blur-md border border-white/40"
          initial={{ opacity: 0, y: 100, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-8 py-5 rounded-2xl mb-4 bg-white/30 backdrop-blur-md border border-white/40"
              initial={{ scale: 0.5, opacity: 0, rotateX: 30 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B3C]">
                למה לבחור ב-Dental Care?
              </h2>
            </motion.div>
            <motion.p
              className="text-[#1A2B3C]/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              מחויבים למצוינות ברפואת שיניים עם ניסיון של למעלה מ-20 שנה
            </motion.p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-white/30 backdrop-blur-md border border-white/40"
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    delay: 0.5 + index * 0.15
                  }}
                  whileHover={{ scale: 1.3, rotate: 15, transition: { duration: 0.15 } }}
                >
                  <benefit.icon size={32} className="text-[#26BEFF]" />
                </motion.div>
                <h3 className="text-lg font-bold text-[#1A2B3C] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
