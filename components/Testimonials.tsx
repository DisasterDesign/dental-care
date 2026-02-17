'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SparkleIcon from './SparkleIcon';

const testimonials = [
  {
    name: 'דוד כ.',
    city: 'ראשון לציון',
    text: 'הגעתי עם פחד גדול מרופא שיניים, אבל הצוות של ד"ר טאלב גרם לי להרגיש בנוח מהרגע הראשון. הטיפול היה מקצועי ובלי כאבים. ממליץ בחום.',
  },
  {
    name: 'מיכל א.',
    city: 'רחובות',
    text: 'עשיתי ציפויים אסתטיים והתוצאה מדהימה. לא האמנתי שהחיוך שלי יכול להיראות ככה. תודה לכל הצוות!',
  },
  {
    name: 'יוסי ד.',
    city: 'ראשון לציון',
    text: 'המרפאה מצוידת ברמה הגבוהה ביותר. עשיתי CT במקום, התכנון היה מדויק, וההשתלה עברה בצורה מושלמת. מקצוענים אמיתיים.',
  },
  {
    name: 'שירה מ.',
    city: 'רחובות',
    text: 'לקחתי את הילדים לטיפול ופחדתי שיבכו. הם יצאו מחייכים ומבקשים לחזור! ד"ר טאלב יודע בדיוק איך לגשת לילדים.',
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 60, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
      <SparkleIcon position="top-left" size={24} delay={0.1} />
      <SparkleIcon position="bottom-right" size={20} delay={0.6} />
      <div className="container-custom" style={{ perspective: 1200 }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl mb-4 bg-white/30 backdrop-blur-md border border-white/40"
            initial={{ scale: 0.5, opacity: 0, rotateX: 30 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B3C]">
              המטופלים שלנו ממליצים
            </h2>
          </motion.div>
          <motion.p
            className="text-[#1A2B3C]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            הדבר הכי חשוב עבורנו הוא שביעות הרצון של המטופלים שלנו
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.15 } }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#9B6AF1]/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-[#1A2B3C] leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name & City */}
              <div className="border-t border-white/40 pt-4">
                <p className="font-bold text-[#1A2B3C]">{testimonial.name}</p>
                <p className="text-sm text-[#6B7280]">{testimonial.city}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
