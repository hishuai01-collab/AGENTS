"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function AboutSection() {
  const { locale } = useLanguage();

  return (
    <section id="about" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow={t(translations.sections.about.eyebrow, locale)}
            title={t(translations.sections.about.title, locale)}
          />
        </Reveal>

        <Reveal delay={0.1} className="space-y-8 rounded-3xl border border-zinc-200 bg-white/70 p-8 shadow-[0_20px_90px_-62px_rgba(0,0,0,0.82)] backdrop-blur">
          <p className="text-pretty text-base leading-8 text-zinc-700">{t(translations.sections.about.body, locale)}</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {translations.sections.about.metrics.map((metric) => (
              <div key={metric.value + metric.text.en}>
                <p className="text-3xl font-semibold tracking-tight text-zinc-950">{metric.value}</p>
                <p className="mt-2 text-sm text-zinc-600">{t(metric.text, locale)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
