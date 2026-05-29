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
    avatarSrc: "/images/hero-avatar.png",
  },
  projects: [
    {
      slug: "ai-customer-support-dashboard",
      title: "AI Customer Support Dashboard",
      summary: "AI-powered support operations center focused on faster response and better SLA execution.",
      features: [
        "AI Ticket Triage",
        "Agent Performance Board",
        "Knowledge Response Assistant",
        "SLA Risk Alerts",
      ],
      techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "OpenAI API"],
      liveDemoUrl: "/projects/ai-customer-support-dashboard",
      githubUrl: "https://github.com/hishuai01-collab/AGENTS",
    },
    {
      slug: "saas-admin-dashboard",
      title: "SaaS Admin Dashboard",
      summary: "Enterprise administration dashboard for tenant control, billing operations, and safe rollouts.",
      features: ["Tenant & Role Management", "Billing Control Panel", "Feature Flag Console", "Audit Governance"],
      techStack: ["Next.js 15", "TypeScript", "Prisma", "Framer Motion"],
      liveDemoUrl: "/projects/saas-admin-dashboard",
      githubUrl: "https://github.com/hishuai01-collab/AGENTS",
    },
    {
      slug: "smart-crm-system",
      title: "Smart CRM System",
      summary: "Sales intelligence CRM with pipeline analytics, follow-up automation, and forecast confidence.",
      features: [
        "Customer & Account Hub",
        "Pipeline Intelligence",
        "Execution Workflow",
        "Revenue Forecasting",
      ],
      techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL"],
      liveDemoUrl: "/projects/smart-crm-system",
      githubUrl: "https://github.com/hishuai01-collab/AGENTS",
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
