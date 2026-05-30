"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { siteIdentity } from "@/data/site-identity";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";
import { CtaLink } from "@/components/ui/cta-link";

export function HeroSection() {
  const { locale } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden px-6 pt-24 pb-20 lg:px-10 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-12 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
        <div className="absolute top-24 right-8 h-72 w-72 rounded-full border border-zinc-300/60" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-9">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-zinc-600 uppercase"
          >
            {t(translations.hero.eyebrow, locale)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase"
          >
            {translations.siteName} · {t(translations.roleText, locale)}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-balance text-4xl font-semibold leading-[1.14] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl"
          >
            {t(translations.hero.headline, locale)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-pretty text-base leading-8 text-zinc-600 sm:text-lg"
          >
            {t(translations.hero.description, locale)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <CtaLink href="#contact" variant="solid">
              {t(translations.hero.ctaPrimary, locale)}
            </CtaLink>
            <CtaLink href="#projects" variant="ghost">
              {t(translations.hero.ctaSecondary, locale)}
            </CtaLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 rounded-2xl border border-zinc-200 bg-white/65 p-5 shadow-[0_30px_70px_-60px_rgba(0,0,0,0.95)] backdrop-blur sm:grid-cols-3"
          >
            {translations.stats.map((item) => (
              <div key={item.label.en}>
                <p className="text-lg font-semibold tracking-tight text-zinc-950">{t(item.label, locale)}</p>
                <p className="mt-2 text-sm text-zinc-600">{t(item.detail, locale)}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50/80 p-3 shadow-[0_40px_120px_-52px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-zinc-200 bg-zinc-100">
              <Image src={siteIdentity.avatarSrc} alt="Luo Meng portrait" fill priority className="object-cover" />
            </div>
            <div className="absolute right-5 bottom-5 rounded-xl border border-zinc-200 bg-white/92 px-4 py-3 backdrop-blur">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                {t(translations.hero.statusTitle, locale)}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-900">{t(translations.hero.statusBody, locale)}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
