'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/972525212118?text=שלום, אשמח לקבוע תור"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 p-[3px] rounded-full cursor-pointer shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #26BEFF 0%, #1e3a5f 100%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 400, damping: 17 }}
      whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(38, 190, 255, 0.4), 0 10px 30px rgba(30, 58, 95, 0.3)" }}
      whileTap={{ scale: 0.9 }}
      aria-label="צור קשר בוואטסאפ"
    >
      <div
        className="relative z-10 w-[54px] h-[54px] rounded-full flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #26BEFF 0%, #1e3a5f 100%)' }}
      >
        <MessageCircle size={28} className="text-white" />
      </div>

      {/* Pulse effect — CSS animation instead of Framer Motion JS loop */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #26BEFF 0%, #1e3a5f 100%)',
          animation: 'whatsapp-pulse 2s ease-out infinite',
        }}
      />
    </motion.a>
  );
}
