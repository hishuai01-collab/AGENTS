type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-pretty text-base leading-7 text-zinc-600">{description}</p> : null}
    </header>
  );
}
