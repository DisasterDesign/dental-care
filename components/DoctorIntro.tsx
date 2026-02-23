'use client';

import { motion } from 'framer-motion';
import SparkleIcon from './SparkleIcon';

export default function DoctorIntro() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
      <SparkleIcon position="top-left" size={24} delay={0.2} />
      <SparkleIcon position="bottom-right" size={22} delay={0.7} />
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
                הכירו את ד״ר טאלב אבו עאמר
              </h2>
            </motion.div>
          </motion.div>

          {/* Content: Side-by-side layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Side */}
            <motion.div
              className="flex-1 text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-6 text-[#6B7280] text-base sm:text-lg leading-relaxed">
                <p>
                  ד&quot;ר טאלב אבו עאמר הוא מומחה בכירורגייה המשלב ניסיון קליני עשיר עם עין אסתטית חדה.
                </p>
                <p>
                  המרפאה מצוידת בטכנולוגיה המתקדמת ביותר בעולם רפואת השיניים, המאפשרת דיוק מקסימלי ותוצאות מושלמות.
                </p>
                <p>
                  מעבר למקצועיות, ד&quot;ר טאלב ידוע ביחס אישי וחם, ליווי צמוד של המטופל והקשבה מלאה לצרכים ולחלומות שלכם, כדי שתצאו מהמרפאה לא רק עם חיוך יפה, אלא גם עם ביטחון מלא.
                </p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-auto"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/team/doctor-7.webp"
                alt="ד״ר טאלב אבו עאמר"
                loading="lazy"
                className="rounded-2xl drop-shadow-xl max-w-[350px] w-full mx-auto"
              />
              <p className="text-center text-lg font-bold text-[#1A2B3C] mt-4">
                ד״ר טאלב אבו עאמר
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
