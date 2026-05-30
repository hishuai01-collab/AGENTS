"use client";

import { motion } from "framer-motion";

import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageProjects, t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function ProjectsSection() {
  const { locale } = useLanguage();

  return (
    <section id="projects" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow={t(translations.sections.projects.eyebrow, locale)}
            title={t(translations.sections.projects.title, locale)}
            description={t(translations.sections.projects.description, locale)}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_24px_90px_-58px_rgba(0,0,0,0.78)] backdrop-blur"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-zinc-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Project {index + 1}</span>
                </div>

                <div className="mb-5 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{t(project.title, locale)}</h3>
                  <p className="text-sm leading-7 text-zinc-600">{t(project.summary, locale)}</p>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-zinc-700">
                  {project.features[locale].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-zinc-100/70 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <CtaLink href={`/projects/${project.slug}`} variant="solid">
                    {t(translations.sections.projects.liveDemo, locale)}
                  </CtaLink>
                  <CtaLink href="https://github.com/hishuai01-collab/AGENTS" external variant="ghost">
                    {t(translations.sections.projects.github, locale)}
                  </CtaLink>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
