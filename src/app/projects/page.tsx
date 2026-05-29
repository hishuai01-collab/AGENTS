import Link from "next/link";

import { projectShowcases } from "@/data/project-showcases";

export default function ProjectsIndexPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-zinc-950 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Portfolio Projects</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Commercial Case Studies</h1>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projectShowcases.map((project) => (
            <article key={project.slug} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{project.category}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{project.tagline}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white"
              >
                Open Case Study <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
