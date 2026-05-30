import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectShowcasePage } from "@/components/projects/project-showcase-page";
import { projectShowcases, showcaseBySlug } from "@/data/project-showcases";
import { SITE_URL } from "@/config/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectShowcases.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = showcaseBySlug[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const path = `/projects/${project.slug}`;
  const title = project.title.en;
  const description = project.tagline.en;

  return {
    title: `${title} Case Study`,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | Luo Meng`,
      description,
      url: `${SITE_URL}${path}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Luo Meng`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = showcaseBySlug[slug];

  if (!project) {
    notFound();
  }

  return <ProjectShowcasePage project={project} />;
}
