"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { CtaLink } from "@/components/ui/cta-link";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";
import type { ProjectShowcase } from "@/types/project-showcase";

type ProjectShowcasePageProps = {
  project: ProjectShowcase;
};

export function ProjectShowcasePage({ project }: ProjectShowcasePageProps) {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4 lg:px-10">
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-900">
            {translations.siteName}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <CtaLink href="/" variant="ghost">
              {t(translations.sections.contact.eyebrow, locale)}
            </CtaLink>
            <CtaLink href="#modules" variant="solid">
              {t(translations.sections.projects.liveDemo, locale)}
            </CtaLink>
          </div>
        </div>
      </header>

      <main className="px-6 pb-20 lg:px-10 lg:pb-28">
        <section className="mx-auto w-full max-w-6xl pt-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-8 shadow-[0_30px_110px_-72px_rgba(0,0,0,0.85)] backdrop-blur lg:p-12"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{t(project.category, locale)}</p>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              {t(project.title, locale)}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-zinc-700">{t(project.tagline, locale)}</p>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-zinc-600">{t(project.overview, locale)}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {t(translations.sections.projects.audienceLabel, locale)}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-700">{t(project.audience, locale)}</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {t(translations.sections.projects.timelineLabel, locale)}
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-700">{t(project.timeline, locale)}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-12 grid w-full max-w-6xl gap-5 md:grid-cols-3">
          {project.metrics.map((metric, idx) => (
            <motion.article
              key={metric.label.en + metric.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{t(metric.label, locale)}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{t(metric.detail, locale)}</p>
            </motion.article>
          ))}
        </section>

        <section id="modules" className="mx-auto mt-16 w-full max-w-6xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              {t(translations.sections.projects.coreModules, locale)}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {t(translations.sections.projects.coreModulesTitle, locale)}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {project.modules.map((module, idx) => (
              <motion.article
                key={module.name.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{t(module.name, locale)}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{t(module.description, locale)}</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  {module.bullets[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 grid w-full max-w-6xl gap-8 rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              {t(translations.sections.projects.outcomesLabel, locale)}
            </p>
            <h3 className="mt-3 text-balance text-3xl font-semibold tracking-tight">
              {t(translations.sections.projects.outcomesTitle, locale)}
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-300">
              {project.outcomes[locale].map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-200" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              {t(translations.sections.projects.techStackLabel, locale)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-zinc-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href={project.githubUrl} external variant="ghost" className="border-white/30 bg-white/10 text-white hover:bg-white/15">
                GitHub
              </CtaLink>
              <CtaLink href="/#contact" variant="solid" className="bg-white text-zinc-950 hover:bg-zinc-200">
                {t(translations.sections.conversion.ctaPrimary, locale)}
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
