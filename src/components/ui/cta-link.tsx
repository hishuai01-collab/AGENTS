import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
};

export function CtaLink({ href, children, variant = "solid", external = false }: CtaLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const variants = {
    solid:
      "bg-zinc-950 text-white hover:-translate-y-0.5 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
    ghost:
      "border border-zinc-300 bg-white/75 text-zinc-900 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
