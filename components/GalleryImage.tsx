'use client';

import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  className?: string;
  index?: number;
}

export default function GalleryImage({
  src,
  alt,
  aspectRatio = 'auto',
  className = '',
  index = 0,
}: GalleryImageProps) {
  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: '',
  }[aspectRatio];

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/40 ${aspectClass} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
