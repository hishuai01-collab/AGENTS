import type { SiteContent } from "@/types/site";

export const siteContent: SiteContent = {
  navItems: [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Shuai Shuai",
    roles: "AI Automation Developer & Full Stack Developer",
    description:
      "I design and engineer premium digital products for modern businesses, from conversion-focused corporate websites to AI-powered internal systems that streamline operations and increase revenue.",
    avatarSrc: "/images/professional-avatar.jpg",
  },
  projects: [
    {
      title: "Restaurant Ordering System",
      summary: "Online ordering platform built for operational speed and customer convenience.",
      features: [
        "Menu Management",
        "Order Management",
        "Customer Dashboard",
        "Admin Dashboard",
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      liveDemoUrl: "https://example.com/restaurant-ordering-demo",
      githubUrl: "https://github.com/hishuai01-collab/restaurant-ordering-system",
    },
    {
      title: "Corporate Website Template",
      summary: "Modern enterprise website template optimized for trust, speed, and lead generation.",
      features: ["Landing Page", "About", "Services", "Contact", "SEO"],
      techStack: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
      liveDemoUrl: "https://example.com/corporate-website-demo",
      githubUrl: "https://github.com/hishuai01-collab/corporate-website-template",
    },
    {
      title: "CRM Dashboard System",
      summary: "Business-focused CRM with clear workflow visibility and actionable analytics.",
      features: [
        "Customer Management",
        "Sales Pipeline",
        "Task Tracking",
        "Analytics Dashboard",
      ],
      techStack: ["React", "TypeScript", "Prisma", "Chart.js"],
      liveDemoUrl: "https://example.com/crm-dashboard-demo",
      githubUrl: "https://github.com/hishuai01-collab/crm-dashboard-system",
    },
  ],
  services: [
    {
      title: "Website Development",
      description:
        "High-performance company websites engineered for brand trust, SEO growth, and conversion.",
    },
    {
      title: "CRM Development",
      description:
        "Custom CRM systems that align with sales workflows and improve team execution clarity.",
    },
    {
      title: "AI Automation",
      description:
        "AI workflows and agent-based automations that reduce manual tasks and scale output.",
    },
    {
      title: "Business Dashboard",
      description:
        "Decision-ready dashboards combining operational, sales, and growth metrics in one place.",
    },
    {
      title: "SaaS Development",
      description:
        "Product-grade SaaS architecture with secure foundations, rapid iteration, and clean UX.",
    },
  ],
  about:
    "I specialize in building enterprise websites, CRM platforms, AI automation tools, and management dashboard systems. Every solution is crafted with a product mindset: clear user flows, scalable architecture, and measurable business outcomes.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shuai-shuai",
    },
    {
      label: "GitHub",
      href: "https://github.com/hishuai01-collab",
    },
  ],
  email: "hello@shuaishuai.dev",
  wechatHint: "Scan to connect on WeChat",
};
