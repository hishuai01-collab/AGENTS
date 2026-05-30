"use client";

import Link from "next/link";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { CtaLink } from "@/components/ui/cta-link";
import { navigationLinks, t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function Header() {
  const { locale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/70 shadow-[0_14px_50px_-38px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4 lg:px-10">
        <Link href="#home" className="text-sm font-semibold tracking-[0.24em] text-zinc-900 uppercase">
          {translations.siteName}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-all duration-300 hover:text-zinc-950"
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <CtaLink href="#contact" variant="ghost">
            {t(translations.sections.contact.eyebrow, locale)}
          </CtaLink>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-200/80 px-6 py-3 md:hidden">
        <nav className="flex gap-4 overflow-x-auto">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-[11px] font-semibold tracking-[0.12em] text-zinc-600 uppercase"
            >
              {t(item.label, locale)}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
