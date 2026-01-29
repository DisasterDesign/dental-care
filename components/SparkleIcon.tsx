'use client';

import { motion } from 'framer-motion';

interface SparkleIconProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: number;
  delay?: number;
}

export default function SparkleIcon({
  position = 'top-right',
  size = 24,
  delay = 0
}: SparkleIconProps) {
  const positionClasses = {
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} pointer-events-none z-10`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 15, 0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          delay: delay,
          ease: "easeInOut",
        }}
      >
        {/* 4-point star sparkle */}
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill="white"
          fillOpacity="0.9"
        />
        {/* Inner glow */}
        <path
          d="M12 6L13 10L17 12L13 14L12 18L11 14L7 12L11 10L12 6Z"
          fill="white"
        />
      </motion.svg>
    </motion.div>
  );
}
