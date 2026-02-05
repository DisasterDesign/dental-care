'use client';

import { useEffect, useRef, useState } from 'react';
import { useAccessibility } from './accessibility/AccessibilityProvider';

export default function CustomCursor() {
  const { settings } = useAccessibility();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Touch detection — skip cursor entirely on mobile/tablet
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  // Event listeners — update refs only, no state
  useEffect(() => {
    if (isTouchDevice || settings.bigCursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hoverRef.current = !!target.closest('a, button, [role="button"]');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouchDevice, settings.bigCursor]);

  // Single rAF loop — direct DOM updates, zero React re-renders
  useEffect(() => {
    if (isTouchDevice || settings.bigCursor) return;

    let frameId: number;

    const tick = () => {
      const { x, y } = posRef.current;
      const h = hoverRef.current;
      const size = h ? 40 : 24;
      const offset = size / 2;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${x - offset}px, ${y - offset}px)`;
        outerRef.current.style.width = `${size}px`;
        outerRef.current.style.height = `${size}px`;
        outerRef.current.style.opacity = h ? '0.6' : '0.8';
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
        innerRef.current.style.opacity = h ? '0' : '1';
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isTouchDevice, settings.bigCursor]);

  if (isTouchDevice || settings.bigCursor) {
    return null;
  }

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gradient-to-br from-[#26BEFF] to-[#9B6AF1]"
        style={{
          width: 24,
          height: 24,
          opacity: 0.8,
          transition: 'width 0.15s, height 0.15s, opacity 0.15s',
          willChange: 'transform',
        }}
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          width: 8,
          height: 8,
          transition: 'opacity 0.15s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
