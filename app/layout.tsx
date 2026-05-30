import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { AccessibilityProvider } from "@/components/accessibility/AccessibilityProvider";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "Dental Care | מרפאת שיניים מתקדמת - ד״ר טאלב אבו עאמר",
  description: "מרפאת שיניים מתקדמת המספקת טיפולי שיניים לכל המשפחה: השתלות שיניים, ציפויים אסתטיים, טיפולי שורש, רפואת שיניים לילדים, צילום CT במקום. בהובלת ד״ר טאלב אבו עאמר.",
  keywords: "מרפאת שיניים, רופא שיניים, השתלות שיניים, ציפויי שיניים אסתטיים, רפואת שיניים לילדים, צילום CT, טיפול שורש, הלבנת שיניים, ד״ר טאלב אבו עאמר, dental care, רופא שיניים רמלה",
  icons: {
    icon: "/Fabicon.svg",
  },
  metadataBase: new URL("https://dental-care-d5g.pages.dev"),
  openGraph: {
    title: "Dental Care | מרפאת שיניים מתקדמת - ד״ר טאלב אבו עאמר",
    description: "מרפאת שיניים מתקדמת לכל המשפחה - השתלות, ציפויים אסתטיים, CT במקום. בהובלת ד״ר טאלב אבו עאמר.",
    url: "https://dental-care-d5g.pages.dev",
    siteName: "Dental Care",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Dental Care - מרפאת שיניים מתקדמת בהובלת ד״ר טאלב אבו עאמר",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Care | מרפאת שיניים מתקדמת - ד״ר טאלב אבו עאמר",
    description: "מרפאת שיניים מתקדמת לכל המשפחה - השתלות שיניים, ציפויים אסתטיים, טיפולי שורש, צילום CT במקום.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXBKSG7X');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '756505940818141');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className={`${assistant.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXBKSG7X"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=756505940818141&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <AccessibilityProvider>
          {/* Skip to content link for keyboard navigation */}
          <a href="#main-content" className="skip-to-content">
            דלג לתוכן הראשי
          </a>
          <BackgroundBlobs />
          <div id="main-content">
            {children}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Dentist",
                "name": "Dental Care - ד״ר טאלב אבו עאמר",
                "description": "מרפאת שיניים מתקדמת לכל המשפחה",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "רח' משה לוי 16",
                  "addressLocality": "רמלה",
                  "addressCountry": "IL"
                },
                "telephone": "074-740-22-33",
                "openingHours": "Su-Th 08:00-20:00",
                "medicalSpecialty": "Dentistry",
                "availableService": [
                  "השתלות שיניים",
                  "ציפויי שיניים אסתטיים",
                  "טיפולי שורש",
                  "רפואת שיניים לילדים",
                  "צילום CT",
                  "הלבנת שיניים",
                  "טיפולי חניכיים",
                  "יישור שיניים",
                  "שיקום הפה"
                ]
              })
            }}
          />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
