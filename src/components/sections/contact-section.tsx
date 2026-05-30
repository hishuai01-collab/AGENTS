"use client";

import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteIdentity } from "@/data/site-identity";
import { t, translations } from "@/i18n/translations";
import { useLanguage } from "@/i18n/language-context";

export function ContactSection() {
  const { locale } = useLanguage();

  return (
    <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow={t(translations.sections.contact.eyebrow, locale)}
            title={t(translations.sections.contact.title, locale)}
            description={t(translations.sections.contact.description, locale)}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-8 backdrop-blur">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <CtaLink href={siteIdentity.socials.linkedin} external variant="ghost">
                  {translations.socialLabels.linkedin}
                </CtaLink>
                <CtaLink href={siteIdentity.socials.github} external variant="ghost">
                  {translations.socialLabels.github}
                </CtaLink>
                <CtaLink href={siteIdentity.socials.telegram} external variant="ghost">
                  {translations.socialLabels.telegram}
                </CtaLink>
                <CtaLink href={`mailto:${siteIdentity.email}`} variant="solid">
                  {t(translations.sections.contact.emailLabel, locale)}
                </CtaLink>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                  {t(translations.sections.contact.emailLabel, locale)}
                </p>
                <a
                  href={`mailto:${siteIdentity.email}`}
                  className="mt-3 inline-block text-base font-medium text-zinc-900 transition-colors hover:text-zinc-600"
                >
                  {siteIdentity.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-[0_20px_90px_-62px_rgba(0,0,0,0.82)] backdrop-blur">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              {t(translations.sections.contact.wechatArea, locale)}
            </p>
            <div className="relative mx-auto aspect-square max-w-[220px] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2">
              <Image src="/images/wechat-qr.jpg" alt="WeChat QR Code" fill className="object-cover" />
            </div>
            <p className="mt-5 text-center text-sm text-zinc-600">{t(translations.sections.contact.wechatHint, locale)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
