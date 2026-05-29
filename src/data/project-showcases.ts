import type { ProjectShowcase } from "@/types/project-showcase";

export const projectShowcases: ProjectShowcase[] = [
  {
    slug: "ai-customer-support-dashboard",
    title: "AI Customer Support Dashboard",
    category: "AI Operations",
    tagline: "Real-time support command center with AI triage and agent performance visibility.",
    overview:
      "A unified customer support cockpit designed for B2B SaaS teams. It blends AI intent classification, response suggestions, and SLA monitoring so support leads can reduce resolution time without expanding headcount.",
    audience: "SaaS support teams, customer success leaders, operations managers",
    timeline: "7-week delivery roadmap with staged rollout",
    metrics: [
      {
        label: "First Response Time",
        value: "-42%",
        detail: "AI triage routes priority tickets instantly.",
      },
      {
        label: "Resolution Efficiency",
        value: "+31%",
        detail: "Suggested replies and macros reduce manual overhead.",
      },
      {
        label: "SLA Compliance",
        value: "98.6%",
        detail: "Live breach alerts keep managers ahead of escalations.",
      },
    ],
    modules: [
      {
        name: "AI Ticket Triage",
        description: "Auto-detects issue intent, urgency, and department routing.",
        bullets: [
          "Intent and sentiment classification",
          "Priority scoring engine",
          "Queue load balancing",
        ],
      },
      {
        name: "Agent Performance Board",
        description: "Tracks real-time individual and team throughput.",
        bullets: [
          "Response SLA heatmap",
          "Resolved ticket velocity",
          "Escalation ratio analytics",
        ],
      },
      {
        name: "Knowledge Response Assistant",
        description: "Generates accurate draft replies based on internal docs.",
        bullets: [
          "Context-aware answer generation",
          "Multi-language response options",
          "One-click approval workflow",
        ],
      },
    ],
    outcomes: [
      "Reduced support burnout through automation-heavy workflows.",
      "Created clearer service reporting for executive reviews.",
      "Improved customer CSAT by stabilizing response consistency.",
    ],
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "OpenAI API", "TailwindCSS"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
  {
    slug: "saas-admin-dashboard",
    title: "SaaS Admin Dashboard",
    category: "Platform Management",
    tagline: "Enterprise-grade admin experience for subscription, tenant, and compliance control.",
    overview:
      "A full-stack administration dashboard for multi-tenant SaaS products. It centralizes user lifecycle, billing operations, feature flags, and audit governance with a clean role-based permission model.",
    audience: "SaaS founders, product operations, platform administrators",
    timeline: "6-week implementation with release-by-module",
    metrics: [
      {
        label: "Admin Task Time",
        value: "-48%",
        detail: "Bulk actions and automation reduced repetitive ops work.",
      },
      {
        label: "Onboarding Speed",
        value: "+37%",
        detail: "Provisioning templates accelerate tenant activation.",
      },
      {
        label: "Operational Accuracy",
        value: "99.2%",
        detail: "Audit trails and checks reduced configuration mistakes.",
      },
    ],
    modules: [
      {
        name: "Tenant & Role Management",
        description: "Granular access control with organization-level isolation.",
        bullets: [
          "Role-based permissions",
          "Tenant usage limits",
          "Session and security policies",
        ],
      },
      {
        name: "Billing Control Panel",
        description: "Subscription oversight with payment and invoice monitoring.",
        bullets: [
          "Plan lifecycle management",
          "Renewal and churn indicators",
          "Invoice and payment status board",
        ],
      },
      {
        name: "Feature Flag Console",
        description: "Safe rollout of new capabilities by segment or tenant.",
        bullets: [
          "Environment-aware toggles",
          "Canary release support",
          "Rollback and incident safety controls",
        ],
      },
    ],
    outcomes: [
      "Improved reliability of day-to-day SaaS operations.",
      "Enabled safer experimentation with controlled feature rollout.",
      "Provided leadership-grade operational insight in one interface.",
    ],
    techStack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
  {
    slug: "smart-crm-system",
    title: "Smart CRM System",
    category: "Revenue Intelligence",
    tagline: "Modern CRM workflow with AI-assisted pipeline guidance and sales forecasting.",
    overview:
      "A sales-focused CRM built for growing teams that need process clarity and better forecast accuracy. It combines account management, pipeline progression, and task orchestration with actionable AI recommendations.",
    audience: "Sales teams, revenue operations, B2B service companies",
    timeline: "8-week phased delivery with migration support",
    metrics: [
      {
        label: "Pipeline Visibility",
        value: "+54%",
        detail: "Unified stage insights reduced hidden deal risk.",
      },
      {
        label: "Follow-up Compliance",
        value: "96%",
        detail: "Task automation ensured consistent rep execution.",
      },
      {
        label: "Forecast Confidence",
        value: "+33%",
        detail: "Historical patterns and AI signals improved predictability.",
      },
    ],
    modules: [
      {
        name: "Customer & Account Hub",
        description: "Single source of truth for contacts, organizations, and histories.",
        bullets: [
          "Timeline-based interaction history",
          "Smart account segmentation",
          "Lifecycle status tracking",
        ],
      },
      {
        name: "Pipeline Intelligence",
        description: "Opportunity tracking with risk and probability scoring.",
        bullets: [
          "Stage conversion analytics",
          "AI deal health indicators",
          "Revenue forecast snapshots",
        ],
      },
      {
        name: "Execution Workflow",
        description: "Sales task orchestration to maintain momentum on active deals.",
        bullets: [
          "Automated follow-up sequencing",
          "Rep-level workload visibility",
          "Goal and quota tracking",
        ],
      },
    ],
    outcomes: [
      "Shortened sales cycles with clearer next-action guidance.",
      "Raised manager confidence in weekly forecast reviews.",
      "Improved handoff quality between sales and delivery teams.",
    ],
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
];

export const showcaseBySlug = Object.fromEntries(
  projectShowcases.map((item) => [item.slug, item]),
);
