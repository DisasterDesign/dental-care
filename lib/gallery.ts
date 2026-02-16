interface GalleryImage {
  src: string;
  alt: string;
}

const serviceImageMap: Record<string, GalleryImage[]> = {
  'dental-implants': [
    { src: '/gallery/treatments/treatment-01.webp', alt: 'טיפול השתלת שיניים במרפאה' },
    { src: '/gallery/smiles/smile-02.webp', alt: 'תוצאת השתלה - חיוך מושלם' },
    { src: '/gallery/smiles/smile-03.webp', alt: 'חיוך לאחר טיפול' },
  ],
  'teeth-alignment': [
    { src: '/gallery/treatments/treatment-05.webp', alt: 'יישור שיניים - טיפול' },
    { src: '/gallery/smiles/smile-04.webp', alt: 'תוצאת יישור שיניים' },
    { src: '/gallery/smiles/smile-14.webp', alt: 'חיוך ישר ומושלם' },
  ],
  'veneers-crowns': [
    { src: '/gallery/smiles/smile-01.webp', alt: 'ציפויי חרסינה - תוצאה' },
    { src: '/gallery/treatments/treatment-15.webp', alt: 'התקנת ציפויים' },
    { src: '/gallery/smiles/smile-06.webp', alt: 'כתרים - חיוך טבעי' },
  ],
  'root-canal': [
    { src: '/gallery/treatments/treatment-18.webp', alt: 'טיפול שורש מקצועי' },
    { src: '/gallery/treatments/treatment-07.webp', alt: 'טיפול שורש במרפאה' },
    { src: '/gallery/smiles/smile-05.webp', alt: 'חיוך בריא לאחר טיפול' },
  ],
  'pediatric-dentistry': [
    { src: '/gallery/treatments/treatment-09.webp', alt: 'טיפול שיניים לילדים' },
    { src: '/gallery/smiles/smile-07.webp', alt: 'חיוך של ילד מאושר' },
    { src: '/gallery/treatments/treatment-03.webp', alt: 'טיפול ילדים במרפאה' },
  ],
  'aesthetic-treatments': [
    { src: '/gallery/smiles/smile-02.webp', alt: 'הלבנת שיניים - תוצאה' },
    { src: '/gallery/treatments/treatment-22.webp', alt: 'טיפול אסתטי' },
    { src: '/gallery/smiles/smile-14.webp', alt: 'חיוך מושלם לאחר טיפול' },
  ],
  'mouth-restoration': [
    { src: '/gallery/treatments/treatment-10.webp', alt: 'שיקום הפה' },
    { src: '/gallery/smiles/smile-01.webp', alt: 'שיקום מלא - תוצאה' },
    { src: '/gallery/treatments/treatment-13.webp', alt: 'טיפול שיקומי' },
  ],
  'ct-scanning': [
    { src: '/gallery/treatments/treatment-04.webp', alt: 'צילום CT במרפאה' },
    { src: '/gallery/treatments/treatment-06.webp', alt: 'ציוד דיגיטלי מתקדם' },
    { src: '/gallery/smiles/smile-03.webp', alt: 'אבחון מדויק ותכנון טיפול' },
  ],
};

const defaultImages: GalleryImage[] = [
  { src: '/gallery/treatments/treatment-01.webp', alt: 'טיפול שיניים מקצועי' },
  { src: '/gallery/smiles/smile-02.webp', alt: 'תוצאת טיפול - חיוך יפה' },
  { src: '/gallery/smiles/smile-14.webp', alt: 'חיוך מושלם' },
];

export function getServiceImages(slug: string): GalleryImage[] {
  return serviceImageMap[slug] || defaultImages;
}
