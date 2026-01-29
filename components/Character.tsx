'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

// Configuration for 3D eye effect
const config = {
  // Eye socket size (clipping boundary)
  eyeSocketSize: 32,   // Size of the eye socket area in pixels (increased for more movement)
  // Ring movement within eye socket
  ringMaxMove: 5,      // Ring moves within eye socket (increased)
  // Pupil movement within ring
  pupilMaxMove: 4,     // Max distance from ring center to edge
  // Animation
  smoothing: 0.12,     // Smoothing factor (0-1, lower = smoother)
};

// Pupil offset within the ring
interface PupilOffset {
  x: number;
  y: number;
}

// Ring position within eye socket
interface RingOffset {
  x: number;
  y: number;
}

interface EyeProps {
  className?: string;
  ringOffset: RingOffset;
  pupilOffset: PupilOffset;
  isBlinking: boolean;
}

function Eye({ className, ringOffset, pupilOffset, isBlinking }: EyeProps) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        transform: `scaleY(${isBlinking ? 0.1 : 1})`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Eye socket */}
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-full"
        style={{
          width: config.eyeSocketSize,
          height: config.eyeSocketSize,
        }}
      >
        {/* Ring (טבעת) - moves within eye socket */}
        <div
          className="absolute top-1/2 left-1/2 w-[22px] h-[22px] rounded-full border border-[#9B6AF1] flex items-center justify-center"
          style={{
            transform: `translate(calc(-50% + ${ringOffset.x}px), calc(-50% + ${ringOffset.y}px))`,
            transition: 'transform 0.05s ease-out',
          }}
        >
          {/* Pupil (אישון) - moves within ring based on distance */}
          <div
            className="w-[12px] h-[12px] rounded-full bg-[#26BEFF] relative"
            style={{
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
              transition: 'transform 0.05s ease-out',
            }}
          >
            {/* Highlight reflection */}
            <div
              className="absolute rounded-full bg-white"
              style={{
                width: '30%',
                height: '30%',
                top: '15%',
                right: '15%',
                opacity: 0.9,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Character() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ringOffset, setRingOffset] = useState<RingOffset>({ x: 0, y: 0 });
  const [pupilOffset, setPupilOffset] = useState<PupilOffset>({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device
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

  // Blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Random eye movement for mobile/touch devices
  useEffect(() => {
    if (!isTouchDevice) return;

    let animationFrame: number;
    let currentRing = { x: 0, y: 0 };
    let currentPupil = { x: 0, y: 0 };
    let targetRing = { x: 0, y: 0 };
    let targetPupil = { x: 0, y: 0 };

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    // Generate new random target
    const generateNewTarget = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 0.3 + Math.random() * 0.5; // 30-80% of max movement

      targetRing = {
        x: Math.cos(angle) * config.ringMaxMove * distance * 0.6,
        y: Math.sin(angle) * config.ringMaxMove * distance * 0.6,
      };
      targetPupil = {
        x: Math.cos(angle) * config.pupilMaxMove * distance,
        y: Math.sin(angle) * config.pupilMaxMove * distance,
      };
    };

    // Animation loop
    const animate = () => {
      currentRing = {
        x: lerp(currentRing.x, targetRing.x, 0.03), // Slower, gentler movement
        y: lerp(currentRing.y, targetRing.y, 0.03),
      };
      currentPupil = {
        x: lerp(currentPupil.x, targetPupil.x, 0.03),
        y: lerp(currentPupil.y, targetPupil.y, 0.03),
      };

      setRingOffset({ ...currentRing });
      setPupilOffset({ ...currentPupil });

      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrame = requestAnimationFrame(animate);

    // Change target periodically
    const targetInterval = setInterval(() => {
      // Sometimes look center, sometimes look around
      if (Math.random() > 0.3) {
        generateNewTarget();
      } else {
        // Return to center-ish
        targetRing = { x: 0, y: 0 };
        targetPupil = { x: 0, y: 0 };
      }
    }, 2000 + Math.random() * 2000); // Change every 2-4 seconds

    // Initial target
    generateNewTarget();

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(targetInterval);
    };
  }, [isTouchDevice]);

  // Eye tracking with separate ring and pupil movement (desktop only)
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrame: number;
    let currentRing = { x: 0, y: 0 };
    let currentPupil = { x: 0, y: 0 };

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Vector from center to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Distance and angle
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(window.innerWidth, window.innerHeight) / 2;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const angle = Math.atan2(deltaY, deltaX);

      // Multiplier for upward movement (deltaY < 0 = mouse above)
      const upwardMultiplier = deltaY < 0 ? 4 : 1;

      // Ring movement (subtle, within eye socket)
      const targetRing = {
        x: Math.cos(angle) * config.ringMaxMove * normalizedDistance,
        y: Math.sin(angle) * config.ringMaxMove * normalizedDistance * upwardMultiplier,
      };

      // Pupil movement within ring
      const targetPupil = {
        x: Math.cos(angle) * config.pupilMaxMove * normalizedDistance,
        y: Math.sin(angle) * config.pupilMaxMove * normalizedDistance * upwardMultiplier,
      };

      const animate = () => {
        currentRing = {
          x: lerp(currentRing.x, targetRing.x, config.smoothing),
          y: lerp(currentRing.y, targetRing.y, config.smoothing),
        };
        currentPupil = {
          x: lerp(currentPupil.x, targetPupil.x, config.smoothing),
          y: lerp(currentPupil.y, targetPupil.y, config.smoothing),
        };

        setRingOffset({ ...currentRing });
        setPupilOffset({ ...currentPupil });

        const threshold = 0.01;
        const needsUpdate =
          Math.abs(currentRing.x - targetRing.x) > threshold ||
          Math.abs(currentRing.y - targetRing.y) > threshold ||
          Math.abs(currentPupil.x - targetPupil.x) > threshold ||
          Math.abs(currentPupil.y - targetPupil.y) > threshold;

        if (needsUpdate) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [isTouchDevice]);

  return (
    <div ref={containerRef} className="fixed bottom-[140px] right-0 z-20 pointer-events-none hidden lg:block">
      {/* Blue bar - 1 pixel */}
      <div className="absolute bottom-0 right-0 w-full lg:w-[600px] h-px bg-[#26BEFF]" />

      {/* Twinkling Star - Top Left of Character */}
      <motion.div
        className="absolute -top-4 left-12 w-8 h-8 z-30"
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
        <Image
          src="/כוכב.svg"
          alt=""
          width={32}
          height={32}
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
          <Image
            src="/דמות.svg"
            alt="Dental Care Character"
            width={288}
            height={288}
            className="mr-8"
          />
          {/* Left eye (character's left) - adjust position */}
          <Eye
            className="top-[64px] left-[93px]"
            ringOffset={ringOffset}
            pupilOffset={pupilOffset}
            isBlinking={isBlinking}
          />
          {/* Right eye */}
          <Eye
            className="top-[69px] left-[153px]"
            ringOffset={ringOffset}
            pupilOffset={pupilOffset}
            isBlinking={isBlinking}
          />
        </div>
      </motion.div>
    </div>
  );
}
