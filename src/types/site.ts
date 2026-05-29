export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  name: string;
  roles: string;
  description: string;
  avatarSrc: string;
};

export type Project = {
  title: string;
  summary: string;
  features: string[];
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
};

export type Service = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  navItems: NavItem[];
  hero: HeroContent;
  projects: Project[];
  services: Service[];
  about: string;
  socials: SocialLink[];
  email: string;
  wechatHint: string;
};
