import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | Dental Care',
  description: 'מדיניות הפרטיות של מרפאת Dental Care - הגנה על המידע האישי שלכם',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="glass-card-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B3C] mb-8 text-center">
              מדיניות פרטיות
            </h1>

            <div className="prose prose-lg max-w-none text-[#1A2B3C] space-y-8">
              <p className="text-[#6B7280] text-center mb-8">
                עודכן לאחרונה: פברואר 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">1. מבוא</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  מרפאת Dental Care (&quot;אנחנו&quot;, &quot;המרפאה&quot;) מכבדת את פרטיותכם ומחויבת להגן על המידע האישי שלכם.
                  מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ושומרים על המידע שלכם בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981
                  ותיקון 13 שנכנס לתוקף באוגוסט 2025.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">2. המידע שאנו אוספים</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">אנו אוספים את סוגי המידע הבאים:</p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li><strong>פרטים אישיים:</strong> שם מלא, מספר טלפון, כתובת דוא&quot;ל, כתובת מגורים</li>
                  <li><strong>מידע רפואי:</strong> היסטוריה רפואית, טיפולים קודמים, רגישויות ואלרגיות, צילומי רנטגן ו-CT</li>
                  <li><strong>מידע טכני:</strong> כתובת IP, סוג הדפדפן, זמני גישה לאתר</li>
                  <li><strong>מידע מטופס יצירת קשר:</strong> פרטי הפנייה והתכתובות</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">3. מטרות השימוש במידע</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">אנו משתמשים במידע שלכם למטרות הבאות:</p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li>קביעת תורים וניהול לוח זמנים</li>
                  <li>מתן שירותי רפואת שיניים ומעקב טיפולי</li>
                  <li>יצירת קשר לתזכורות ועדכונים</li>
                  <li>שיפור השירותים והאתר שלנו</li>
                  <li>עמידה בדרישות חוקיות ורגולטוריות</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">4. שיתוף מידע עם צדדים שלישיים</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  אנו לא מוכרים או משתפים את המידע האישי שלכם עם צדדים שלישיים למטרות שיווקיות.
                  המידע עשוי להיות משותף עם:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li><strong>צוות המרפאה:</strong> רופאים, סייעות ומנהלים לצורך מתן הטיפול</li>
                  <li><strong>ספקי שירות:</strong> חברות אחסון ענן, מעבדות שיניים (במידת הצורך)</li>
                  <li><strong>רשויות:</strong> במקרים הנדרשים על פי חוק</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">5. תקופת שמירת המידע</h2>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li><strong>רשומות רפואיות:</strong> נשמרות למשך 7 שנים לפחות בהתאם לתקנות בריאות העם</li>
                  <li><strong>מידע שיווקי:</strong> נשמר עד לביטול ההסכמה על ידכם</li>
                  <li><strong>נתוני גלישה:</strong> נשמרים למשך שנה אחת</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">6. זכויותיכם</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  בהתאם לחוק הגנת הפרטיות ותיקון 13, עומדות לכם הזכויות הבאות:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li><strong>זכות עיון:</strong> לקבל העתק של המידע האישי שלכם</li>
                  <li><strong>זכות תיקון:</strong> לתקן מידע שגוי או לא מדויק</li>
                  <li><strong>זכות מחיקה:</strong> לבקש מחיקת מידע (בכפוף למגבלות חוקיות)</li>
                  <li><strong>זכות התנגדות:</strong> להתנגד לעיבוד מידע למטרות שיווקיות</li>
                  <li><strong>זכות לניידות:</strong> לקבל את המידע בפורמט מובנה</li>
                </ul>
                <p className="text-[#6B7280] leading-relaxed mt-4">
                  למימוש זכויותיכם, פנו אלינו בפרטי הקשר המופיעים בסוף מסמך זה.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">7. אבטחת מידע</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  אנו נוקטים באמצעי אבטחה מתקדמים להגנה על המידע שלכם:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li>הצפנת מידע בהעברה ובאחסון</li>
                  <li>הגבלת גישה למורשים בלבד</li>
                  <li>גיבויים שוטפים</li>
                  <li>ניטור ובקרת אבטחה</li>
                  <li>הדרכת צוות בנושאי פרטיות ואבטחה</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">8. עוגיות (Cookies)</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  האתר שלנו משתמש בעוגיות לשיפור חווית הגלישה:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-2 mr-4">
                  <li><strong>עוגיות הכרחיות:</strong> לתפעול בסיסי של האתר</li>
                  <li><strong>עוגיות אנליטיות:</strong> להבנת דפוסי שימוש ושיפור האתר</li>
                </ul>
                <p className="text-[#6B7280] leading-relaxed mt-4">
                  ניתן לנהל את העדפות העוגיות דרך הגדרות הדפדפן שלכם.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">9. שינויים במדיניות</h2>
                <p className="text-[#6B7280] leading-relaxed">
                  אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר ותישלח הודעה למטופלים רשומים.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#1A2B3C] mb-4">10. יצירת קשר</h2>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  לשאלות או בקשות בנושא פרטיות, פנו אלינו:
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
