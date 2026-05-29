"use client";

import Image from "next/image";

import { siteContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/motion/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build your next high-value digital product"
            description="Available for freelance projects, long-term product partnerships, and custom development engagements."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {siteContent.socials.map((social) => (
                  <CtaLink key={social.label} href={social.href} external variant="ghost">
                    {social.label}
                  </CtaLink>
                ))}
                <CtaLink href={`mailto:${siteContent.email}`} variant="solid">
                  Email
                </CtaLink>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">Email</p>
                <a
                  href={`mailto:${siteContent.email}`}
                  className="mt-3 inline-block text-base font-medium text-zinc-900 transition-colors hover:text-zinc-600"
                >
                  {siteContent.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="rounded-3xl border border-zinc-200 bg-white p-8">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">WeChat QR Area</p>
            <div className="relative mx-auto aspect-square max-w-[220px] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2">
              <Image src="/images/wechat-qr.svg" alt="WeChat QR Code placeholder" fill className="object-cover" />
            </div>
            <p className="mt-5 text-center text-sm text-zinc-600">{siteContent.wechatHint}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
