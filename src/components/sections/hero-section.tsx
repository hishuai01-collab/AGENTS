"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { siteContent } from "@/data/site-content";
import { CtaLink } from "@/components/ui/cta-link";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-24 pb-20 lg:px-10 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
        <div className="absolute top-56 -left-24 h-64 w-64 rounded-full border border-zinc-200" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div className="space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium tracking-[0.16em] text-zinc-600 uppercase"
          >
            Independent Developer Brand Site
          </motion.p>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-pretty text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
            >
              {siteContent.hero.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-pretty text-xl leading-relaxed font-medium text-zinc-700 sm:text-2xl"
            >
              {siteContent.hero.roles}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-pretty text-base leading-8 text-zinc-600 sm:text-lg"
            >
              {siteContent.hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <CtaLink href="#contact" variant="solid">
              Contact Me
            </CtaLink>
            <CtaLink href="#projects" variant="ghost">
              View Projects
            </CtaLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-3 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
              <Image
                src={siteContent.hero.avatarSrc}
                alt="Professional female workplace portrait"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
