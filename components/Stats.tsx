'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    value: '20+',
    label: 'שנות ניסיון',
  },
  {
    value: '1,000+',
    label: 'לקוחות מרוצים',
  },
  {
    value: '24/7',
    label: 'שירות חירום',
  },
  {
    value: 'CT',
    label: 'צילום במקום',
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 60, scale: 0.7 },
  animate: { opacity: 1, y: 0, scale: 1 }
};

export default function Stats() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="container-custom">
        <motion.div
          className="p-10 md:p-14 rounded-[32px] bg-white/20 backdrop-blur-md border border-white/40"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center ${index < stats.length - 1 ? 'md:border-l md:border-black/[0.08]' : ''}`}
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#26BEFF] mb-2"
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                    delay: 0.4 + index * 0.15
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-[#6B7280] text-sm md:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
