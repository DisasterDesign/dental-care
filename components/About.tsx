'use client';

import { motion } from 'framer-motion';
import SparkleIcon from './SparkleIcon';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 relative glass-section">
      <SparkleIcon position="top-right" size={24} delay={0.2} />
      <SparkleIcon position="bottom-left" size={22} delay={0.7} />
      <div className="container-custom" style={{ perspective: 1200 }}>
        <motion.div
          className="p-6 sm:p-10 md:p-14 rounded-[32px] bg-white/20 backdrop-blur-md border border-white/40"
          initial={{ opacity: 0, y: 100, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-6 sm:px-8 py-4 sm:py-5 rounded-2xl mb-4 bg-white/30 backdrop-blur-md border border-white/40"
              initial={{ scale: 0.5, opacity: 0, rotateX: 30 }}
              whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A2B3C]">
                אודות Dental Care
              </h2>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-4xl mx-auto space-y-6 text-[#6B7280] text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Dental Care היא מרפאת שיניים מתקדמת המספקת מגוון רחב של טיפולי שיניים לכל המשפחה, בהובלת דוקטור טאלב אבו עאמר, תוך שילוב טכנולוגיות חדשניות, צוות מקצועי מנוסה וחוויית טיפול נעימה ובטוחה לכל מטופל ומטופלת.
            </p>
            <p>
              במרפאה פועל צוות רופאים מיומן המתעדכן באופן שוטף בשיטות ובטכנולוגיות המובילות בעולם, ומעניק לכל מטופל תכנית טיפול מותאמת אישית, תוך הקפדה על מקצועיות, שקיפות ויחס אישי לאורך כל הדרך.
            </p>
            <p>
              המרפאה מצוידת במכשור מתקדם הכולל צילום CT במקום, המאפשר אבחון מדויק ותכנון טיפולים ברמה הגבוהה ביותר, במיוחד בתחומי ההשתלות ושיקום הפה.
            </p>
            <p>
              השירותים במרפאה כוללים טיפולי שימור ושיקום, טיפולי שורש וחניכיים, השתלות שיניים, הלבנת שיניים, ציפויי שיניים אסתטיים מתקדמים, וכן רפואת שיניים לילדים, המותאמת במיוחד למטופלים הצעירים באווירה רגועה ותומכת, במטרה ליצור חוויה חיובית וביטחון כבר מהטיפול הראשון.
            </p>
            <p>
              הערכים שמובילים אותנו הם מקצועיות, אמינות ומחויבות אמיתית לבריאות ולביטחון של המטופלים, מתוך מטרה לאפשר לכל אחד ליהנות מחיוך בריא ויפה לאורך שנים.
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-center text-xl sm:text-2xl font-bold text-[#1e3a5f] mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Dental Care - חיוך בריא מתחיל בטיפול נכון.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
