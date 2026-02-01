import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'תקנון האתר | Dental Care',
  description: 'תנאי השימוש באתר מרפאת Dental Care',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="glass-card-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-8 text-center">
              תקנון האתר
            </h1>

            <div className="prose prose-lg max-w-none text-[#1A2B3C] space-y-8">
              <p className="text-[#6B7280] text-center mb-8">
                עודכן לאחרונה: פברואר 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">1. כללי</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  ברוכים הבאים לאתר מרפאת Dental Care (&quot;האתר&quot;). השימוש באתר זה כפוף לתנאים המפורטים להלן.
                  הגלישה באתר והשימוש בו מהווים הסכמה לתנאים אלה. אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">2. אודות המרפאה והשירותים</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  מרפאת Dental Care מספקת שירותי רפואת שיניים מקיפים הכוללים:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li>השתלות שיניים</li>
                  <li>יישור שיניים</li>
                  <li>ציפויים וכתרים</li>
                  <li>טיפולי שורש</li>
                  <li>רפואת שיניים לילדים</li>
                  <li>טיפולים אסתטיים</li>
                  <li>שיקום הפה</li>
                  <li>צילום CT</li>
                </ul>
                <p className="text-[#6B7280] leading-relaxed mt-4">
                  כל הטיפולים מבוצעים על ידי רופאי שיניים מורשים בהתאם לחוקי מדינת ישראל ותקנות משרד הבריאות.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">3. קביעת תורים וביטולים</h2>
                <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">3.1 קביעת תורים</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  ניתן לקבוע תורים דרך האתר, בטלפון, או בוואטסאפ. קביעת תור מהווה התחייבות להגעה.
                </p>

                <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">3.2 מדיניות ביטולים</h3>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li>ביטול תור יש לבצע לפחות 24 שעות מראש</li>
                  <li>ביטול באיחור או אי-הגעה עלולים לגרור חיוב</li>
                  <li>במקרה של מחלה או חירום, נא ליצור קשר בהקדם האפשרי</li>
                </ul>

                <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3 mt-4">3.3 תשלום</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  התשלום עבור הטיפולים יתבצע במרפאה. אנו מכבדים כרטיסי אשראי, העברות בנקאיות ומזומן.
                  לטיפולים מסוימים ניתן לקבל הצעת מחיר מראש.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">4. אחריות רפואית</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  הטיפולים במרפאה מבוצעים על פי הסטנדרטים המקצועיים הגבוהים ביותר. יחד עם זאת:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li>תוצאות הטיפול עשויות להשתנות מאדם לאדם</li>
                  <li>חלק מהטיפולים כרוכים בסיכונים רפואיים המפורטים לפני הטיפול</li>
                  <li>על המטופל לספק מידע רפואי מלא ומדויק</li>
                  <li>יש לעקוב אחר הוראות הרופא לאחר הטיפול</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">5. קניין רוחני</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  כל התכנים באתר זה, לרבות טקסטים, תמונות, לוגו, עיצוב, גרפיקה ותוכנה, הינם קניינה הבלעדי של מרפאת Dental Care
                  או ספקיה, ומוגנים בזכויות יוצרים.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתכני האתר ללא אישור בכתב מראש.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">6. הגבלת אחריות</h2>
                <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">6.1 תוכן האתר</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  המידע באתר מסופק למטרות מידע כללי בלבד ואינו מהווה תחליף לייעוץ רפואי מקצועי.
                  יש להתייעץ עם רופא שיניים לפני קבלת החלטות טיפוליות.
                </p>

                <h3 className="text-xl font-semibold text-[#1A2B3C] mb-3">6.2 זמינות האתר</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  אנו שואפים לשמור על זמינות האתר, אך איננו מתחייבים לזמינות רציפה. המרפאה לא תישא באחריות
                  לנזקים הנובעים מתקלות טכניות או אי-זמינות האתר.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">7. נגישות</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  אנו מחויבים להנגשת האתר בהתאם לתקן הישראלי IS 5568 ולהנחיות WCAG 2.1.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  לפרטים נוספים על נגישות האתר, ראו את{' '}
                  <Link href="/accessibility" className="text-[#26BEFF] hover:underline">
                    הצהרת הנגישות
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">8. פרטיות</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  השימוש באתר כפוף גם ל
                  <Link href="/privacy" className="text-[#26BEFF] hover:underline mr-1">
                    מדיניות הפרטיות
                  </Link>
                  שלנו, המפרטת כיצד אנו אוספים ומשתמשים במידע האישי שלכם.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">9. שינויים בתקנון</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  המרפאה רשאית לעדכן תקנון זה מעת לעת. שינויים מהותיים יפורסמו באתר.
                  המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">10. סמכות שיפוט</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  על תקנון זה והשימוש באתר יחולו חוקי מדינת ישראל בלבד.
                  סמכות השיפוט הבלעדית בכל סכסוך הנובע מהשימוש באתר או מתקנון זה תהיה נתונה לבתי המשפט המוסמכים
                  במחוז המרכז בישראל.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">11. יצירת קשר</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  לשאלות בנוגע לתקנון זה, פנו אלינו:
                </p>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 space-y-2">
                  <p className="text-[#1A2B3C]"><strong>מרפאת Dental Care</strong></p>
                  <p className="text-[#6B7280]">רח&apos; משה לוי 16, רמלה</p>
                  <p className="text-[#6B7280]">טלפון: 074-740-22-33</p>
                  <p className="text-[#6B7280]">דוא&quot;ל: info@dentalcare.co.il</p>
                </div>
              </section>

              <div className="text-center pt-8 border-t border-[#26BEFF]/20">
                <Link
                  href="/"
                  className="text-[#26BEFF] hover:underline font-medium"
                >
                  חזרה לדף הבית
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
