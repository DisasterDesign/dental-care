import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'הצהרת נגישות | Dental Care',
  description: 'הצהרת נגישות של מרפאת השיניים Dental Care ברמלה',
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen py-12 px-6" dir="rtl">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#26BEFF] hover:text-[#1ea8e6] mb-8 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          חזרה לעמוד הבית
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A2B3C]">הצהרת נגישות</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed glass-card p-8">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#1A2B3C]">כללי</h2>
            <p>
              מרפאת השיניים Dental Care משקיעה משאבים רבים על מנת לספק שירות שוויוני
              לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות. אנו מאמינים שלכל אדם מגיעה
              הזכות לחיות בכבוד, בשוויון ובנוחות מרבית ועל כן פועלים רבות לצורך הנגשת
              האתר והתאמתו לכלל האוכלוסייה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#1A2B3C]">מהי נגישות אתרי אינטרנט?</h2>
            <p>
              נגישות אתרי אינטרנט מאפשרת לאנשים עם מוגבלויות להשתמש באתרים בצורה שוויונית.
              נגישות אתר כוללת התאמות לבעלי מוגבלות ראייה, שמיעה, קוגניציה ומוטוריקה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#1A2B3C]">רמת הנגישות באתר</h2>
            <p>
              אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
              לשירות), התשע״ג-2013 ובהתאם לתקן הישראלי ת״י 5568 המבוסס על הנחיות WCAG 2.0
              ברמה AA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#1A2B3C]">התאמות הנגישות באתר</h2>
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>אפשרות להגדלת טקסט</li>
              <li>שינוי ניגודיות צבעים</li>
              <li>היפוך צבעים</li>
              <li>הצגה בגווני אפור</li>
              <li>הדגשת קישורים</li>
              <li>שימוש בפונט קריא</li>
              <li>הגדלת ריווח שורות ואותיות</li>
              <li>עצירת אנימציות</li>
              <li>הגדלת סמן העכבר</li>
              <li>ניווט באמצעות מקלדת</li>
              <li>תאימות לקורא מסך</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#1A2B3C]">דרכי פנייה לבקשות והצעות</h2>
            <p className="mb-4">
              אם נתקלתם בבעיית נגישות באתר, נשמח לקבל פנייה ולטפל בה בהקדם:
            </p>
            <ul className="space-y-2 mr-4">
              <li>
                <strong>טלפון:</strong>{' '}
                <a href="tel:074-740-22-33" className="text-[#26BEFF] hover:underline">
                  074-740-22-33
                </a>
              </li>
              <li>
                <strong>וואטסאפ:</strong>{' '}
                <a
                  href="https://wa.me/972525212118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#26BEFF] hover:underline"
                >
                  052-521-2118
                </a>
              </li>
              <li>
                <strong>כתובת:</strong> רח׳ משה לוי 16, רמלה
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-[#1A2B3C]">תאריך עדכון ההצהרה</h2>
            <p>הצהרה זו עודכנה לאחרונה בתאריך: ינואר 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
