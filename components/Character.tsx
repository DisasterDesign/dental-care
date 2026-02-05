'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef, forwardRef } from 'react';

const config = {
  eyeSocketSize: 31,
  maxMove: 9,
  smoothing: 0.12,
};

interface EyeProps {
  className?: string;
  id: string;
  isBlinking: boolean;
}

const Eye = forwardRef<SVGGElement, EyeProps>(
  ({ className, id, isBlinking }, groupRef) => {
    return (
      <div
        className={`absolute pointer-events-none ${className}`}
        style={{
          transform: `scaleY(${isBlinking ? 0.1 : 1})`,
          transition: 'transform 0.1s ease-out',
          width: config.eyeSocketSize,
          height: config.eyeSocketSize,
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width={config.eyeSocketSize}
          height={config.eyeSocketSize}
          className="overflow-visible"
        >
          <defs>
            <linearGradient id={`sclera-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ECECEC" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
            <radialGradient id={`iris-${id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="49%" stopColor="#56301D" />
              <stop offset="90%" stopColor="#763C25" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
          </defs>

          {/* Fixed: Outer sclera */}
          <circle cx="100" cy="100" r="99" fill={`url(#sclera-${id})`} stroke="none" />
          {/* Fixed: Inner sclera */}
          <circle cx="100" cy="100" r="83" fill="#FFFFFF" stroke="none" />

          {/* Moving group: all inner elements x2.2 */}
          <g ref={groupRef}>
            {/* Iris */}
            <circle cx="100" cy="100" r="77" fill={`url(#iris-${id})`} stroke="#1D0E07" strokeWidth="4" />
            {/* Pupil */}
            <circle cx="100" cy="100" r="40" fill="#000000" />
            {/* Main highlight (r=13, offset -26) */}
            <circle cx="74" cy="74" r="13" fill="#E4E4E4" opacity="0.9" />
            {/* Secondary highlight (r=7, offset +26) */}
            <circle cx="126" cy="126" r="7" fill="#E4E4E4" opacity="0.5" />
          </g>
        </svg>
      </div>
    );
  }
);

Eye.displayName = 'Eye';

export default function Character() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftGroupRef = useRef<SVGGElement>(null);
  const rightGroupRef = useRef<SVGGElement>(null);
  const currentOffset = useRef({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });
  const cachedRect = useRef<DOMRect | null>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Touch detection
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Cache rect on scroll/resize
  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        cachedRect.current = containerRef.current.getBoundingClientRect();
      }
    };
    updateRect();
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect);
    return () => {
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, []);

  // Single shared animation loop - direct DOM updates, no React re-renders
  useEffect(() => {
    const scale = 200 / config.eyeSocketSize;
    let frameId: number;

    const tick = () => {
      const cur = currentOffset.current;
      const tgt = targetOffset.current;

      cur.x += (tgt.x - cur.x) * config.smoothing;
      cur.y += (tgt.y - cur.y) * config.smoothing;

      const tx = cur.x * scale;
      const ty = cur.y * scale;
      const transform = `translate(${tx}px, ${ty}px)`;

      if (leftGroupRef.current) leftGroupRef.current.style.transform = transform;
      if (rightGroupRef.current) rightGroupRef.current.style.transform = transform;

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Mobile: random autonomous movement - just updates targetOffset
  useEffect(() => {
    if (!isTouchDevice) return;

    const generateNewTarget = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 0.3 + Math.random() * 0.5;
      targetOffset.current = {
        x: Math.cos(angle) * config.maxMove * distance,
        y: Math.sin(angle) * config.maxMove * distance,
      };
    };

    const targetInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        generateNewTarget();
      } else {
        targetOffset.current = { x: 0, y: 0 };
      }
    }, 2000 + Math.random() * 2000);

    generateNewTarget();

    return () => clearInterval(targetInterval);
  }, [isTouchDevice]);

  // Desktop: mouse tracking - just updates targetOffset
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cachedRect.current;
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const angle = Math.atan2(deltaY, deltaX);

      const upwardMultiplier = deltaY < 0 ? 2 : 1;

      targetOffset.current = {
        x: Math.cos(angle) * config.maxMove * normalizedDistance,
        y: Math.sin(angle) * config.maxMove * normalizedDistance * upwardMultiplier,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  return (
    <div ref={containerRef} className="fixed bottom-[140px] right-0 z-[-1] pointer-events-none hidden lg:block">
      {/* Blue bar - animated path */}
      <svg
        className="absolute bottom-0 right-0 w-full lg:w-[600px] h-[4px] overflow-visible"
        viewBox="0 0 600 4"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M600 2 L0 2"
          stroke="#26BEFF"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{
            pathLength: [0, 1, 1, 1],
            pathOffset: [0, 0, 0, 1],
          }}
          transition={{
            duration: 4,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "easeInOut",
            times: [0, 0.15, 0.6, 1],
          }}
        />
      </svg>

      {/* Twinkling Star - Top Left of Character */}
      <motion.div
        className="absolute top-[-6px] left-[53px] w-8 h-8 z-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0.6, 1, 0],
          scale: [0.5, 1.2, 0.9, 1.1, 0.5],
          rotate: [0, 15, -10, 5, 0],
        }}
        transition={{
          duration: 3,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/star.svg"
          alt=""
          className="w-full h-full"
        />
      </motion.div>

      {/* Character standing on the bar */}
      <motion.div
        className="relative -mb-[19px]"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 1,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="relative">
          {/* Eyes behind the PNG (visible through holes) */}
          <Eye
            ref={leftGroupRef}
            id="left"
            className="top-[37px] left-[74px]"
            isBlinking={isBlinking}
          />
          <Eye
            ref={rightGroupRef}
            id="right"
            className="top-[44px] left-[133px]"
            isBlinking={isBlinking}
          />
          {/* Character PNG - on top so eyes show through transparent holes */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/character-new.png"
            alt="Dental Care Character"
            width={240}
            height={238}
            loading="lazy"
            className="mr-8 relative z-10"
          />
        </div>
      </motion.div>
    </div>
  );
}
