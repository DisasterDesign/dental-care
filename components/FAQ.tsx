'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SparkleIcon from './SparkleIcon';

const faqs = [
  {
    question: 'האם המרפאה מתאימה גם לילדים?',
    answer: 'בהחלט. המרפאה מציעה טיפולי שיניים לילדים באווירה רגועה ותומכת, עם צוות שמתמחה בגישה למטופלים צעירים, כדי שהחוויה תהיה חיובית מהטיפול הראשון.',
  },
  {
    question: 'האם יש צילום CT במרפאה?',
    answer: 'כן, המרפאה מצוידת במכשיר CT מתקדם המאפשר אבחון וצילום במקום, ללא צורך בהפניה למכון חיצוני. זה מאפשר תכנון מדויק של טיפולים כמו השתלות ושיקום פה.',
  },
  {
    question: 'כמה זמן לוקח טיפול השתלת שיניים?',
    answer: 'תהליך ההשתלה משתנה ממטופל למטופל. בפגישת הייעוץ הראשונה ד"ר טאלב יבנה תוכנית טיפול אישית ויסביר את לוחות הזמנים המדויקים.',
  },
  {
    question: 'האם אפשר לקבוע תור אונליין?',
    answer: 'כן, ניתן לקבוע תור דרך האתר או ליצור קשר ישירות דרך וואטסאפ. אנחנו חוזרים תוך מספר שעות.',
  },
  {
    question: 'מה כוללים ציפויי שיניים אסתטיים?',
    answer: 'ציפויים אסתטיים הם שכבות דקות המודבקות על פני השיניים לשיפור המראה - צבע, צורה ויישור. התהליך כולל ייעוץ, תכנון, הכנת השיניים והדבקת הציפויים, עם תוצאה טבעית ויפה.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="rounded-2xl bg-white/25 backdrop-blur-md border border-white/40 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-right"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-[#1A2B3C] flex-1">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mr-4"
        >
          <ChevronDown className="w-5 h-5 text-[#1e3a5f]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-white/30">
              <p className="text-[#6B7280] leading-relaxed pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
      <SparkleIcon position="top-right" size={22} delay={0.3} />
      <SparkleIcon position="bottom-left" size={26} delay={0.8} />
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl mb-4 bg-white/30 backdrop-blur-md border border-white/40"
            initial={{ scale: 0.5, opacity: 0, rotateX: 30 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B3C]">
              שאלות נפוצות
            </h2>
          </motion.div>
          <motion.p
            className="text-[#1A2B3C]/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            מצאו תשובות לשאלות הנפוצות ביותר שלנו
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
