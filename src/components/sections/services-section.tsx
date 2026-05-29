"use client";

import { motion } from "framer-motion";

import { siteContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-zinc-50 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Built for founders, teams, and growth-focused companies"
            description="From branding websites to complex internal systems, every engagement is guided by speed, clarity, and long-term maintainability."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {siteContent.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-2xl border border-zinc-200 bg-white p-5"
              >
                <h3 className="mb-3 text-base font-semibold text-zinc-950">{service.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{service.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
