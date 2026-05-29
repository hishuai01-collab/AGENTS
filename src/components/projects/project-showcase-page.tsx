"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { CtaLink } from "@/components/ui/cta-link";
import type { ProjectShowcase } from "@/types/project-showcase";

type ProjectShowcasePageProps = {
  project: ProjectShowcase;
};

export function ProjectShowcasePage({ project }: ProjectShowcasePageProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-900">
            Shuai Shuai
          </Link>
          <div className="flex items-center gap-3">
            <CtaLink href="/" variant="ghost">
              Back Home
            </CtaLink>
            <CtaLink href="#modules" variant="solid">
              Explore Modules
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
            className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 lg:p-12"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {project.category}
            </p>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-zinc-700">{project.tagline}</p>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-zinc-600">{project.overview}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Audience</p>
                <p className="mt-2 text-sm leading-7 text-zinc-700">{project.audience}</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Delivery Window</p>
                <p className="mt-2 text-sm leading-7 text-zinc-700">{project.timeline}</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto mt-12 grid w-full max-w-6xl gap-5 md:grid-cols-3">
          {project.metrics.map((metric, idx) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{metric.label}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{metric.detail}</p>
            </motion.article>
          ))}
        </section>

        <section id="modules" className="mx-auto mt-16 w-full max-w-6xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">Core Modules</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Built as a commercial-ready product foundation
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {project.modules.map((module, idx) => (
              <motion.article
                key={module.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{module.name}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{module.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  {module.bullets.map((item) => (
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Business Outcomes</p>
            <h3 className="mt-3 text-balance text-3xl font-semibold tracking-tight">
              Production-focused results, not just attractive interfaces
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-300">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-200" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">Tech Stack</p>
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
                Start Similar Project
              </CtaLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
