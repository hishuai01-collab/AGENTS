"use client";

import { siteContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading eyebrow="About" title="Professional developer with a product and business mindset" />
        </Reveal>

        <Reveal delay={0.1} className="space-y-8 rounded-3xl border border-zinc-200 bg-white p-8">
          <p className="text-pretty text-base leading-8 text-zinc-700">{siteContent.about}</p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold tracking-tight text-zinc-950">60+</p>
              <p className="mt-2 text-sm text-zinc-600">Business workflows optimized</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight text-zinc-950">20+</p>
              <p className="mt-2 text-sm text-zinc-600">Production-grade systems delivered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold tracking-tight text-zinc-950">99%</p>
              <p className="mt-2 text-sm text-zinc-600">Client satisfaction target</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
