interface GalleryImage {
  src: string;
  alt: string;
}

const serviceImageMap: Record<string, GalleryImage[]> = {
  'dental-implants': [
    { src: '/gallery/treatments/dental-implants-1.jpg', alt: 'השתלת שיניים - תוצאת טיפול' },
    { src: '/gallery/treatments/dental-implants-2.jpg', alt: 'השתלת שיניים - חיוך' },
  ],
  'teeth-alignment': [
    { src: '/gallery/treatments/teeth-alignment-1.webp', alt: 'יישור שיניים - תמונה מהמרפאה' },
    { src: '/gallery/treatments/teeth-alignment-2.webp', alt: 'טיפול יישור שיניים' },
    { src: '/gallery/treatments/teeth-alignment-3.webp', alt: 'תוצאת יישור שיניים' },
  ],
  'veneers-crowns': [
    { src: '/gallery/treatments/veneers-crowns-1.jpg', alt: 'ציפויים וכתרים - תוצאת טיפול' },
    { src: '/gallery/treatments/veneers-crowns-2.jpg', alt: 'ציפויי שיניים - חיוך מושלם' },
    { src: '/gallery/treatments/veneers-crowns-3.jpg', alt: 'ציפויים אסתטיים - תוצאה' },
  ],
  'root-canal': [
    { src: '/gallery/treatments/root-canal-1.webp', alt: 'טיפול שורש - תמונה מהמרפאה' },
    { src: '/gallery/treatments/root-canal-2.webp', alt: 'טיפול שורש מקצועי' },
    { src: '/gallery/treatments/root-canal-3.webp', alt: 'תוצאת טיפול שורש' },
  ],
  'pediatric-dentistry': [
    { src: '/gallery/treatments/pediatric-dentistry-1.webp', alt: 'רפואת שיניים לילדים - תמונה מהמרפאה' },
    { src: '/gallery/treatments/pediatric-dentistry-2.webp', alt: 'טיפול שיניים לילדים' },
    { src: '/gallery/treatments/pediatric-dentistry-3.webp', alt: 'טיפול ילדים באווירה נעימה' },
  ],
  'aesthetic-treatments': [
    { src: '/gallery/treatments/aesthetic-treatments-1.jpg', alt: 'טיפול אסתטי - בדיקה במרפאה' },
    { src: '/gallery/treatments/aesthetic-treatments-2.jpg', alt: 'טיפול אסתטי - תוצאה מושלמת' },
  ],
  'mouth-restoration': [
    { src: '/gallery/treatments/mouth-restoration-1.jpg', alt: 'שיקום הפה - טיפול במרפאה' },
    { src: '/gallery/treatments/mouth-restoration-2.jpg', alt: 'שיקום הפה - בדיקה' },
    { src: '/gallery/treatments/mouth-restoration-3.jpg', alt: 'שיקום הפה - תוצאה' },
  ],
  'ct-scanning': [
    { src: '/gallery/treatments/ct-scanning-1.webp', alt: 'צילום CT במרפאה' },
  ],
};

const defaultImages: GalleryImage[] = [
  { src: '/gallery/treatments/dental-implants-1.jpg', alt: 'טיפול שיניים מקצועי' },
  { src: '/gallery/treatments/aesthetic-treatments-1.jpg', alt: 'טיפול אסתטי' },
  { src: '/gallery/treatments/veneers-crowns-1.jpg', alt: 'ציפויים וכתרים' },
];

export function getServiceImages(slug: string): GalleryImage[] {
  return serviceImageMap[slug] || defaultImages;
}
