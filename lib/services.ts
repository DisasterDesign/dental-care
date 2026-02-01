import {
  Sparkles,
  AlignCenter,
  Crown,
  Heart,
  Baby,
  Sparkle,
  RefreshCw,
  Scan,
  LucideIcon
} from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
  ctaText: string;
}

export const services: Service[] = [
  {
    slug: 'dental-implants',
    title: 'השתלות שיניים',
    shortDescription: 'השתלות מונחות רובוט עם טכנולוגיית Alphabio המתקדמת',
    fullDescription: 'במרפאת Dental Care אנו מציעים את הטכנולוגיה המתקדמת ביותר בתחום השתלות השיניים. השתלות מונחות רובוט מאפשרות דיוק מירבי, זמן החלמה קצר יותר ותוצאות אסתטיות מושלמות.',
    icon: Sparkles,
    features: [
      'השתלות מונחות רובוט',
      'טכנולוגיית Alphabio',
      'זמן החלמה מהיר',
      'תוצאות אסתטיות',
      'אחריות מורחבת'
    ],
    ctaText: 'לקביעת ייעוץ השתלות'
  },
  {
    slug: 'teeth-alignment',
    title: 'יישור שיניים',
    shortDescription: 'יישור שיניים לילדים ומבוגרים עם פתרונות מתקדמים',
    fullDescription: 'אנו מציעים מגוון פתרונות ליישור שיניים המתאימים לכל גיל. מגשיות שקופות, קשתיות קרמיות ופתרונות מותאמים אישית לחיוך מושלם.',
    icon: AlignCenter,
    features: [
      'מגשיות שקופות (Invisalign)',
      'קשתיות קרמיות',
      'יישור לילדים ומבוגרים',
      'תכנון דיגיטלי',
      'מעקב צמוד'
    ],
    ctaText: 'לבדיקת יישור שיניים'
  },
  {
    slug: 'veneers-crowns',
    title: 'ציפויים וכתרים',
    shortDescription: 'ציפויי קרמיקה אסתטיים לחיוך מושלם',
    fullDescription: 'ציפויים וכתרים מקרמיקה איכותית לשיפור המראה והתפקוד של השיניים. התאמה מושלמת לצבע ולצורה הטבעית.',
    icon: Crown,
    features: [
      'קרמיקה איכותית',
      'התאמת צבע מושלמת',
      'עמידות לאורך שנים',
      'מראה טבעי',
      'שיקום תפקודי ואסתטי'
    ],
    ctaText: 'לייעוץ ציפויים וכתרים'
  },
  {
    slug: 'root-canal',
    title: 'טיפולי שורש',
    shortDescription: 'טיפולי שורש ללא כאב עם ציוד מתקדם',
    fullDescription: 'טיפולי שורש מקצועיים עם הרדמה מתקדמת וציוד חדשני. חווית טיפול נעימה ויעילה להצלת השן.',
    icon: Heart,
    features: [
      'טיפול ללא כאב',
      'הרדמה מתקדמת',
      'ציוד חדשני',
      'הצלחה גבוהה',
      'מעקב לאחר טיפול'
    ],
    ctaText: 'לקביעת תור לטיפול שורש'
  },
  {
    slug: 'pediatric-dentistry',
    title: 'רפואת ילדים',
    shortDescription: 'טיפולי שיניים לילדים באווירה ידידותית ומרגיעה',
    fullDescription: 'מרפאתנו מתמחה בטיפול בילדים מגיל צעיר. אווירה ידידותית, צוות מקצועי וסבלני, וחוויה חיובית לילד ולהורים.',
    icon: Baby,
    features: [
      'אווירה ידידותית לילדים',
      'צוות מתמחה בילדים',
      'טיפולים מותאמים לגיל',
      'הרגלי היגיינה נכונים',
      'מניעה וטיפול מוקדם'
    ],
    ctaText: 'לקביעת תור לילד'
  },
  {
    slug: 'aesthetic-treatments',
    title: 'טיפולי אסתטיקה',
    shortDescription: 'הלבנת שיניים וטיפולים אסתטיים מתקדמים',
    fullDescription: 'מגוון טיפולים אסתטיים להשגת חיוך מושלם: הלבנה מקצועית, עיצוב חניכיים, ותיקוני צבע וצורה.',
    icon: Sparkle,
    features: [
      'הלבנת שיניים מקצועית',
      'עיצוב חניכיים',
      'סגירת רווחים',
      'תיקוני צבע',
      'עיצוב חיוך'
    ],
    ctaText: 'לייעוץ אסתטי'
  },
  {
    slug: 'mouth-restoration',
    title: 'שיקום הפה',
    shortDescription: 'שיקום מלא של הפה עם תותבות ופתרונות מתקדמים',
    fullDescription: 'שיקום מקיף של הפה לשיפור התפקוד והמראה. תותבות, גשרים, והתאמה אישית לכל מטופל.',
    icon: RefreshCw,
    features: [
      'שיקום פה מלא',
      'תותבות נשלפות וקבועות',
      'גשרים על השתלות',
      'התאמה אישית',
      'שיפור תפקודי'
    ],
    ctaText: 'לייעוץ שיקום פה'
  },
  {
    slug: 'ct-scanning',
    title: 'צילום CT',
    shortDescription: 'הדמיה דיגיטלית תלת-ממדית במקום',
    fullDescription: 'מכשיר CT מתקדם במרפאה לצילום תלת-ממדי מדויק. אבחון מהיר ומדויק לתכנון טיפול מיטבי.',
    icon: Scan,
    features: [
      'צילום תלת-ממדי',
      'אבחון מדויק',
      'תכנון טיפול מתקדם',
      'תוצאות מיידיות',
      'קרינה מינימלית'
    ],
    ctaText: 'לקביעת צילום CT'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}
