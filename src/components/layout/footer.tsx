"use client";

import { siteIdentity } from "@/data/site-identity";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-zinc-200/80 px-6 py-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {translations.siteName}. {t(translations.footer.rights, locale)}
        </p>
        <a href={`mailto:${siteIdentity.email}`} className="transition-colors hover:text-zinc-900">
          {siteIdentity.email}
        </a>
      </div>
    </footer>
  );
}
