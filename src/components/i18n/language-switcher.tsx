"use client";

import { localeNames } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";
import type { Locale } from "@/i18n/types";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-zinc-300/80 bg-white/70 p-1 backdrop-blur-xl">
      {(Object.keys(localeNames) as Locale[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all ${
            locale === item
              ? "bg-zinc-950 text-white shadow-[0_8px_22px_-16px_rgba(0,0,0,0.75)]"
              : "text-zinc-600 hover:text-zinc-900"
          }`}
        >
          {localeNames[item]}
        </button>
      ))}
    </div>
  );
}
