"use client";

import { motion } from "framer-motion";

import { siteContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="High-impact digital products engineered for business outcomes"
            description="Each project combines conversion-focused UX, maintainable architecture, and polished interaction details suitable for client delivery."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.7)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-zinc-900/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">Project {index + 1}</span>
                </div>

                <div className="mb-5 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{project.title}</h3>
                  <p className="text-sm leading-7 text-zinc-600">{project.summary}</p>
                </div>

                <ul className="mb-6 space-y-2 text-sm text-zinc-700">
                  {project.features.map((feature) => (
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
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  <CtaLink href={project.liveDemoUrl} external variant="solid">
                    Live Demo
                  </CtaLink>
                  <CtaLink href={project.githubUrl} external variant="ghost">
                    GitHub
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
