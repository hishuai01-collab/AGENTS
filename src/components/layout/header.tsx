import Link from "next/link";

import { siteContent } from "@/data/site-content";
import { CtaLink } from "@/components/ui/cta-link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#home" className="text-sm font-semibold tracking-[0.22em] text-zinc-900 uppercase">
          Shuai Shuai
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <CtaLink href="#contact" variant="ghost">
            Contact
          </CtaLink>
        </div>
      </div>

      <nav className="flex gap-5 overflow-x-auto border-t border-zinc-200/70 px-6 py-3 md:hidden">
        {siteContent.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 text-xs font-medium tracking-[0.08em] text-zinc-600 uppercase"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
