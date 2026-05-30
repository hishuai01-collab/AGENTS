"use client";

import { motion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function ServicesSection() {
  const { locale } = useLanguage();

  return (
    <section id="services" className="bg-zinc-50/80 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow={t(translations.sections.services.eyebrow, locale)}
            title={t(translations.sections.services.title, locale)}
            description={t(translations.sections.services.description, locale)}
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {translations.services.map((service, index) => (
            <Reveal key={service.title.en} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-[0_20px_80px_-62px_rgba(0,0,0,0.85)] backdrop-blur"
              >
                <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                  0{index + 1}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-zinc-950">{t(service.title, locale)}</h3>
                <p className="text-sm leading-6 text-zinc-600">{t(service.description, locale)}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
