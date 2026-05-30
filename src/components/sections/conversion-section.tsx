"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function ConversionSection() {
  const { locale } = useLanguage();

  return (
    <section className="px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-zinc-300 bg-zinc-950 p-8 text-white shadow-[0_40px_120px_-52px_rgba(0,0,0,0.75)] md:p-10"
          >
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full border border-white/20" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300 uppercase">
                  {t(translations.sections.conversion.eyebrow, locale)}
                </p>
                <h3 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t(translations.sections.conversion.title, locale)}
                </h3>
                <p className="max-w-2xl text-zinc-300">{t(translations.sections.conversion.description, locale)}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
                <CtaLink href="#contact" variant="solid" className="bg-white text-zinc-950 hover:bg-zinc-200">
                  {t(translations.sections.conversion.ctaPrimary, locale)}
                </CtaLink>
                <CtaLink href="#projects" variant="ghost" className="border-white/40 bg-white/5 text-white hover:bg-white/10">
                  {t(translations.sections.conversion.ctaSecondary, locale)}
                </CtaLink>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
