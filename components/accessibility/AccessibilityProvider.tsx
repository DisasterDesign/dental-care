'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface AccessibilitySettings {
  fontSize: number;           // 100 = רגיל, 125 = גדול, 150 = גדול מאוד
  highContrast: boolean;      // ניגודיות גבוהה
  invertColors: boolean;      // היפוך צבעים
  grayscale: boolean;         // גווני אפור
  highlightLinks: boolean;    // הדגשת קישורים
  readableFont: boolean;      // פונט קריא (sans-serif)
  lineHeight: number;         // 1.5 = רגיל, 2 = מרווח, 2.5 = מרווח מאוד
  letterSpacing: number;      // 0 = רגיל, 2 = מרווח, 4 = מרווח מאוד
  pauseAnimations: boolean;   // עצירת אנימציות
  bigCursor: boolean;         // סמן גדול
  focusHighlight: boolean;    // הדגשת פוקוס
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  invertColors: false,
  grayscale: false,
  highlightLinks: false,
  readableFont: false,
  lineHeight: 1.5,
  letterSpacing: 0,
  pauseAnimations: false,
  bigCursor: false,
  focusHighlight: false,
};

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSetting: <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => void;
  resetSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(saved) });
      } catch (e) {
        console.error('Failed to parse accessibility settings');
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage + apply to DOM
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings, isLoaded]);

  const applySettings = (s: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Font size on root
    root.style.fontSize = `${s.fontSize}%`;

    // Classes on body
    body.classList.toggle('high-contrast', s.highContrast);
    body.classList.toggle('invert-colors', s.invertColors);
    body.classList.toggle('grayscale', s.grayscale);
    body.classList.toggle('highlight-links', s.highlightLinks);
    body.classList.toggle('readable-font', s.readableFont);
    body.classList.toggle('pause-animations', s.pauseAnimations);
    body.classList.toggle('big-cursor', s.bigCursor);
    body.classList.toggle('focus-highlight', s.focusHighlight);

    // CSS custom properties
    root.style.setProperty('--a11y-line-height', String(s.lineHeight));
    root.style.setProperty('--a11y-letter-spacing', `${s.letterSpacing}px`);
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
