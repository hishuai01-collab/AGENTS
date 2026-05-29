export type ProjectMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ProjectModule = {
  name: string;
  description: string;
  bullets: string[];
};

export type ProjectShowcase = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  overview: string;
  audience: string;
  timeline: string;
  metrics: ProjectMetric[];
  modules: ProjectModule[];
  outcomes: string[];
  techStack: string[];
  githubUrl: string;
};
