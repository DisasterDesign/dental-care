import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CustomCursor from "@/components/CustomCursor";
import { AccessibilityProvider } from "@/components/accessibility/AccessibilityProvider";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "Dental Care - רפואת שיניים לכל המשפחה | רמלה",
  description: "מרפאת שיניים מתקדמת ברמלה. ד\"ר טאלב - השתלות שיניים, יישור שיניים, טיפולי שורש, רפואת ילדים ועוד. שירות חירום 24/7. צילום CT במקום.",
  keywords: "רופא שיניים רמלה, מרפאת שיניים, השתלות שיניים, יישור שיניים, ד\"ר טאלב",
  icons: {
    icon: "/Fabicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.className} antialiased`}>
        <AccessibilityProvider>
          {/* Skip to content link for keyboard navigation */}
          <a href="#main-content" className="skip-to-content">
            דלג לתוכן הראשי
          </a>
          <BackgroundBlobs />
          <CustomCursor />
          <div id="main-content">
            {children}
          </div>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
