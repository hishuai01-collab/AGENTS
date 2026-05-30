import type { Locale, LocaleText } from "@/i18n/types";

export type ProjectMetric = {
  label: LocaleText;
  value: string;
  detail: LocaleText;
};

export type ProjectModule = {
  name: LocaleText;
  description: LocaleText;
  bullets: Record<Locale, string[]>;
};

export type ProjectShowcase = {
  slug: string;
  title: LocaleText;
  category: LocaleText;
  tagline: LocaleText;
  overview: LocaleText;
  audience: LocaleText;
  timeline: LocaleText;
  metrics: ProjectMetric[];
  modules: ProjectModule[];
  outcomes: Record<Locale, string[]>;
  techStack: string[];
  githubUrl: string;
};
