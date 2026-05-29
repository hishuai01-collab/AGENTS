import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
  className?: string;
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: CtaLinkProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const variants = {
    solid:
      "bg-zinc-950 text-white hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_16px_30px_-18px_rgba(0,0,0,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
    ghost:
      "border border-zinc-300 bg-white/75 text-zinc-900 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
        →
      </span>
    </Link>
  );
}
