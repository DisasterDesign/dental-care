'use client';

import { motion } from 'framer-motion';
import { useAccessibility } from './AccessibilityProvider';
import {
  X,
  Type,
  Sun,
  Moon,
  Palette,
  Link2,
  BookOpen,
  AlignJustify,
  Space,
  Pause,
  MousePointer,
  Target,
  RotateCcw,
} from 'lucide-react';
import Link from 'next/link';

interface Props {
  onClose: () => void;
}

export default function AccessibilityPanel({ onClose }: Props) {
  const { settings, updateSetting, resetSettings } = useAccessibility();

  // Toggle Button Component
  const ToggleButton = ({
    active,
    onClick,
    icon: Icon,
    label,
  }: {
    active: boolean;
    onClick: () => void;
    icon: React.ElementType;
    label: string;
  }) => (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center p-4 rounded-xl
        border-2 transition-all
        ${
          active
            ? 'border-[#26BEFF] bg-[#26BEFF]/10 text-[#26BEFF]'
            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
        }
      `}
      aria-pressed={active}
    >
      <Icon className="w-6 h-6 mb-2" />
      <span className="text-sm font-medium text-center leading-tight">{label}</span>
    </button>
  );

  // Size Button Component
  const SizeButton = ({
    value,
    current,
    onClick,
    label,
  }: {
    value: number;
    current: number;
    onClick: () => void;
    label: string;
  }) => (
    <button
      onClick={onClick}
      className={`
        flex-1 px-4 py-3 rounded-xl font-medium transition-all
        ${
          current === value
            ? 'bg-[#26BEFF] text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
      `}
      aria-pressed={current === value}
    >
      {label}
    </button>
  );

  return (
    <motion.div
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed top-0 left-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="הגדרות נגישות"
      dir="rtl"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
        <h2 className="text-xl font-bold text-gray-900">הגדרות נגישות</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="סגור תפריט נגישות"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 space-y-8">
        {/* Font Size */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <Type className="w-5 h-5" />
            גודל טקסט
          </h3>
          <div className="flex gap-2">
            <SizeButton
              value={100}
              current={settings.fontSize}
              onClick={() => updateSetting('fontSize', 100)}
              label="רגיל"
            />
            <SizeButton
              value={125}
              current={settings.fontSize}
              onClick={() => updateSetting('fontSize', 125)}
              label="גדול"
            />
            <SizeButton
              value={150}
              current={settings.fontSize}
              onClick={() => updateSetting('fontSize', 150)}
              label="גדול מאוד"
            />
          </div>
        </section>

        {/* Line Height */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <AlignJustify className="w-5 h-5" />
            ריווח שורות
          </h3>
          <div className="flex gap-2">
            <SizeButton
              value={1.5}
              current={settings.lineHeight}
              onClick={() => updateSetting('lineHeight', 1.5)}
              label="רגיל"
            />
            <SizeButton
              value={2}
              current={settings.lineHeight}
              onClick={() => updateSetting('lineHeight', 2)}
              label="מרווח"
            />
            <SizeButton
              value={2.5}
              current={settings.lineHeight}
              onClick={() => updateSetting('lineHeight', 2.5)}
              label="מרווח מאוד"
            />
          </div>
        </section>

        {/* Letter Spacing */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
            <Space className="w-5 h-5" />
            ריווח אותיות
          </h3>
          <div className="flex gap-2">
            <SizeButton
              value={0}
              current={settings.letterSpacing}
              onClick={() => updateSetting('letterSpacing', 0)}
              label="רגיל"
            />
            <SizeButton
              value={2}
              current={settings.letterSpacing}
              onClick={() => updateSetting('letterSpacing', 2)}
              label="מרווח"
            />
            <SizeButton
              value={4}
              current={settings.letterSpacing}
              onClick={() => updateSetting('letterSpacing', 4)}
              label="מרווח מאוד"
            />
          </div>
        </section>

        {/* Display Adjustments */}
        <section>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">התאמות תצוגה</h3>
          <div className="grid grid-cols-2 gap-3">
            <ToggleButton
              active={settings.highContrast}
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              icon={Sun}
              label="ניגודיות גבוהה"
            />
            <ToggleButton
              active={settings.invertColors}
              onClick={() => updateSetting('invertColors', !settings.invertColors)}
              icon={Moon}
              label="היפוך צבעים"
            />
            <ToggleButton
              active={settings.grayscale}
              onClick={() => updateSetting('grayscale', !settings.grayscale)}
              icon={Palette}
              label="גווני אפור"
            />
            <ToggleButton
              active={settings.highlightLinks}
              onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
              icon={Link2}
              label="הדגשת קישורים"
            />
            <ToggleButton
              active={settings.readableFont}
              onClick={() => updateSetting('readableFont', !settings.readableFont)}
              icon={BookOpen}
              label="פונט קריא"
            />
            <ToggleButton
              active={settings.pauseAnimations}
              onClick={() => updateSetting('pauseAnimations', !settings.pauseAnimations)}
              icon={Pause}
              label="עצירת אנימציות"
            />
            <ToggleButton
              active={settings.bigCursor}
              onClick={() => updateSetting('bigCursor', !settings.bigCursor)}
              icon={MousePointer}
              label="סמן גדול"
            />
            <ToggleButton
              active={settings.focusHighlight}
              onClick={() => updateSetting('focusHighlight', !settings.focusHighlight)}
              icon={Target}
              label="הדגשת פוקוס"
            />
          </div>
        </section>

        {/* Reset Button */}
        <button
          onClick={resetSettings}
          className="w-full py-3 rounded-xl border-2 border-red-200 text-red-600
                     font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          איפוס כל ההגדרות
        </button>

        {/* Link to Accessibility Statement */}
        <Link
          href="/accessibility"
          className="block text-center text-[#26BEFF] underline hover:no-underline py-2"
          onClick={onClose}
        >
          הצהרת נגישות
        </Link>
      </div>
    </motion.div>
  );
}
