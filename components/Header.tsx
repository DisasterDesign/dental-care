'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, Menu, X, Calendar, MessageSquare, Mail, Accessibility, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AccessibilityPanel from './accessibility/AccessibilityPanel';
import { services } from '@/lib/services';

interface IconButtonProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  delay?: number;
  onClick?: () => void;
}

function IconButton({ icon: Icon, label, href, delay = 0, onClick }: IconButtonProps) {
  const Component = onClick ? motion.button : motion.a;

  return (
    <Component
      href={onClick ? undefined : (href || '#')}
      onClick={onClick}
      className="flex flex-col items-center gap-2 group"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <motion.div
        className="p-[2px] rounded-full transition-all group-hover:shadow-[0_0_20px_rgba(155,106,241,0.3)] sparkle-hover"
        style={{ background: 'linear-gradient(135deg, #26BEFF 0%, #7F1799 100%)' }}
        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.15 } }}
      >
        <div className="w-14 h-14 rounded-full bg-transparent backdrop-blur-md flex items-center justify-center transition-all group-hover:bg-white/20">
          <Icon size={24} className="text-white" />
        </div>
      </motion.div>
      <span className="text-xs text-[#1A2B3C] font-medium">{label}</span>
    </Component>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#about', label: 'אודות' },
    { href: '#why-us', label: 'למה אנחנו' },
    { href: '#contact', label: 'צור קשר' },
  ];

  return (
    <>
    <motion.header
      className="sticky top-0 z-50 bg-white/25 backdrop-blur-md border-b border-white/40"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top Row */}
      <div className="py-4 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Right - Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.div
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 150 }}
            >
              <Image
                src="/logoheader.svg"
                alt="Dental Care Logo"
                width={96}
                height={96}
                className="object-contain w-full h-full"
              />
            </motion.div>
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-[1.35rem] sm:text-3xl md:text-4xl font-bold bg-gradient-to-l from-[#26BEFF] to-[#7F1799] bg-clip-text text-transparent">Dental Care</h1>
              <p className="text-sm sm:text-base md:text-lg text-[#6B7280]">רפואת שיניים לכל המשפחה</p>
            </motion.div>
          </motion.a>

          {/* Left - Icon Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-20">
            <IconButton icon={Calendar} label="תיאום תור" href="https://wa.me/972525212118" delay={0} />
            <IconButton icon={MessageSquare} label="פניות" delay={0.1} />
            <IconButton icon={Mail} label="צור קשר" href="#contact" delay={0.2} />
            <IconButton icon={Accessibility} label="נגישות" delay={0.3} onClick={() => setIsAccessibilityOpen(true)} />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#1A2B3C]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.85 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="py-3 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Right - Navigation Menu */}
          <nav className="hidden md:flex items-center gap-14 ms-[20px]">
            {/* Home - rightmost in RTL */}
            <motion.a
              href="/"
              className="text-[1.35rem] text-[#173A99] hover:text-[#26BEFF] transition-colors font-bold relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -3 }}
            >
              בית
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#26BEFF] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Services Dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <motion.button
                className="flex items-center gap-2 text-[1.35rem] text-[#173A99] hover:text-[#26BEFF] transition-colors font-bold relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -3 }}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                שירותים
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#26BEFF] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isServicesOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-white/40 overflow-hidden z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="py-2">
                      {/* Link to services section */}
                      <a
                        href="#services"
                        className="block px-4 py-2 text-[#1A2B3C] hover:bg-[#26BEFF]/10 transition-colors font-semibold border-b border-gray-100"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        כל השירותים
                      </a>
                      {/* Individual service links */}
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-4 py-2.5 text-[#1A2B3C] hover:bg-[#26BEFF]/10 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <Icon size={18} className="text-[#26BEFF]" />
                            <span>{service.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[1.35rem] text-[#173A99] hover:text-[#26BEFF] transition-colors font-bold relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#26BEFF] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile - Show nav links */}
          <nav className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center gap-1 text-[#1A2B3C] hover:text-[#26BEFF] transition-colors font-medium text-sm"
            >
              שירותים
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1A2B3C] hover:text-[#26BEFF] transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Left - Contact Info */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="tel:074-740-22-33"
              className="flex items-center gap-2 text-[#26BEFF] font-medium hover:text-[#2A7B88] transition-colors"
              whileHover={{ scale: 1.08, x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone size={16} />
              <span>074-740-22-33</span>
            </motion.a>
            <div className="flex items-center gap-2 text-[#6B7280]">
              <Clock size={16} />
              <span>א&apos;-ה&apos; 8:00-20:00</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Services Dropdown */}
      <AnimatePresence>
        {isMobileServicesOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-white/40 px-4 py-3 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#services"
                className="col-span-2 px-3 py-2 text-center text-[#1A2B3C] font-semibold border-b border-gray-100 mb-1"
                onClick={() => setIsMobileServicesOpen(false)}
              >
                כל השירותים
              </a>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 px-3 py-2 text-[#1A2B3C] text-sm hover:bg-[#26BEFF]/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileServicesOpen(false)}
                  >
                    <Icon size={16} className="text-[#26BEFF]" />
                    <span>{service.title}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/25 backdrop-blur-md border-b border-white/40 px-6 py-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-4">
              {/* Icon Buttons Grid */}
              <motion.div
                className="grid grid-cols-4 gap-4 pb-4 border-b border-white/40"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <a href="https://wa.me/972525212118" className="flex flex-col items-center gap-2">
                  <div className="p-[2px] rounded-full" style={{ background: 'linear-gradient(135deg, #26BEFF 0%, #7F1799 100%)' }}>
                    <div className="w-12 h-12 rounded-full bg-transparent backdrop-blur-md flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] text-[#1A2B3C] font-medium">תיאום תור</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2">
                  <div className="p-[2px] rounded-full" style={{ background: 'linear-gradient(135deg, #26BEFF 0%, #7F1799 100%)' }}>
                    <div className="w-12 h-12 rounded-full bg-transparent backdrop-blur-md flex items-center justify-center">
                      <MessageSquare size={20} className="text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] text-[#1A2B3C] font-medium">פניות</span>
                </a>
                <a href="#contact" className="flex flex-col items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="p-[2px] rounded-full" style={{ background: 'linear-gradient(135deg, #26BEFF 0%, #7F1799 100%)' }}>
                    <div className="w-12 h-12 rounded-full bg-transparent backdrop-blur-md flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] text-[#1A2B3C] font-medium">צור קשר</span>
                </a>
                <button
                  onClick={() => {
                    setIsAccessibilityOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-[2px] rounded-full" style={{ background: 'linear-gradient(135deg, #26BEFF 0%, #7F1799 100%)' }}>
                    <div className="w-12 h-12 rounded-full bg-transparent backdrop-blur-md flex items-center justify-center">
                      <Accessibility size={20} className="text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] text-[#1A2B3C] font-medium">נגישות</span>
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <a
                  href="tel:074-740-22-33"
                  className="flex items-center gap-2 text-[#26BEFF] font-medium"
                >
                  <Phone size={16} />
                  <span>074-740-22-33</span>
                </a>
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <Clock size={16} />
                  <span>א&apos;-ה&apos; 8:00-20:00</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    {/* Accessibility Panel - Outside header to avoid clipping */}
    <AnimatePresence>
      {isAccessibilityOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAccessibilityOpen(false)}
            className="fixed inset-0 bg-black/50 z-[55]"
            aria-hidden="true"
          />
          {/* Panel */}
          <AccessibilityPanel onClose={() => setIsAccessibilityOpen(false)} />
        </>
      )}
    </AnimatePresence>
    </>
  );
}
