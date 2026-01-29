'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAccessibility } from './accessibility/AccessibilityProvider';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { settings } = useAccessibility();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide custom cursor when big cursor accessibility option is enabled
  if (settings.bigCursor) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle - behind elements for blur effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[5] rounded-full bg-gradient-to-br from-[#26BEFF] to-[#9B6AF1]"
        animate={{
          x: mousePosition.x - (isHovering ? 20 : 12),
          y: mousePosition.y - (isHovering ? 20 : 12),
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          opacity: isHovering ? 0.6 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[5] rounded-full bg-white"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 28,
        }}
        style={{ width: 8, height: 8 }}
      />
    </>
  );
}
