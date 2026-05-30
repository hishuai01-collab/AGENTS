import type { Locale, LocaleText } from "@/i18n/types";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  th: "ไทย",
};

export const navigationLinks = [
  { href: "#projects", label: { zh: "项目", en: "Projects", th: "ผลงาน" } },
  { href: "#services", label: { zh: "服务", en: "Services", th: "บริการ" } },
  { href: "#about", label: { zh: "关于", en: "About", th: "เกี่ยวกับ" } },
  { href: "#contact", label: { zh: "联系", en: "Contact", th: "ติดต่อ" } },
];

export const homepageProjects = [
  {
    slug: "smart-ordering-system",
    title: {
      zh: "智能点餐系统",
      en: "Smart Ordering System",
      th: "ระบบสั่งอาหารอัจฉริยะ",
    },
    summary: {
      zh: "为餐饮门店打造的智能下单与运营联动系统，提升出单效率与顾客体验。",
      en: "An intelligent ordering platform for restaurants to improve fulfillment speed and customer experience.",
      th: "แพลตฟอร์มสั่งอาหารอัจฉริยะสำหรับร้านอาหาร เพิ่มความเร็วและประสบการณ์ลูกค้า",
    },
    features: {
      zh: ["菜单管理", "订单流转", "会员中心", "运营看板"],
      en: ["Menu Management", "Order Flow", "Customer Portal", "Operations Dashboard"],
      th: ["จัดการเมนู", "เวิร์กโฟลว์ออเดอร์", "พอร์ทัลลูกค้า", "แดชบอร์ดปฏิบัติการ"],
    },
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Framer Motion"],
  },
  {
    slug: "enterprise-website-solution",
    title: {
      zh: "企业官网解决方案",
      en: "Enterprise Website Solution",
      th: "โซลูชันเว็บไซต์องค์กร",
    },
    summary: {
      zh: "面向企业品牌与获客转化的高性能官网方案，支持SEO与线索收集。",
      en: "A conversion-focused corporate web solution with SEO strength and lead generation flows.",
      th: "โซลูชันเว็บไซต์องค์กรที่เน้นการเปลี่ยนลูกค้า พร้อม SEO และการเก็บลีด",
    },
    features: {
      zh: ["品牌落地页", "服务体系", "线索转化", "SEO优化"],
      en: ["Brand Landing", "Service Framework", "Lead Conversion", "SEO Optimization"],
      th: ["หน้า Landing แบรนด์", "โครงสร้างบริการ", "คอนเวอร์ชันลีด", "ปรับ SEO"],
    },
    techStack: ["Next.js 15", "TailwindCSS", "Vercel", "Structured Data"],
  },
  {
    slug: "crm-management-system",
    title: {
      zh: "客户关系管理系统 CRM",
      en: "CRM Management System",
      th: "ระบบ CRM สำหรับบริหารลูกค้า",
    },
    summary: {
      zh: "整合销售流程、客户生命周期与任务协作，构建可预测的增长引擎。",
      en: "A unified CRM for pipeline tracking, customer lifecycle management, and execution discipline.",
      th: "CRM แบบรวมศูนย์สำหรับติดตาม Pipeline วงจรลูกค้า และงานปฏิบัติการทีมขาย",
    },
    features: {
      zh: ["客户档案", "销售管道", "任务协同", "数据洞察"],
      en: ["Customer Profiles", "Sales Pipeline", "Task Collaboration", "Revenue Insights"],
      th: ["โปรไฟล์ลูกค้า", "Sales Pipeline", "งานร่วมทีม", "ข้อมูลเชิงลึก"],
    },
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "ai-customer-service-dashboard",
    title: {
      zh: "AI客服管理后台",
      en: "AI Customer Service Dashboard",
      th: "แดชบอร์ดบริการลูกค้า AI",
    },
    summary: {
      zh: "通过AI分流与知识建议提升客服效率，降低响应时延与运营成本。",
      en: "An AI-assisted support cockpit for faster response, triage automation, and SLA visibility.",
      th: "ศูนย์ควบคุมบริการลูกค้า AI เพื่อเร่งการตอบกลับและมองเห็น SLA แบบเรียลไทม์",
    },
    features: {
      zh: ["AI工单分流", "客服绩效", "知识推荐", "SLA预警"],
      en: ["AI Ticket Routing", "Agent Performance", "Knowledge Suggestions", "SLA Alerts"],
      th: ["กระจายทิกเก็ตด้วย AI", "ประสิทธิภาพเอเจนต์", "คำแนะนำความรู้", "แจ้งเตือน SLA"],
    },
    techStack: ["Next.js 15", "OpenAI API", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "saas-operations-platform",
    title: {
      zh: "SaaS运营管理平台",
      en: "SaaS Operations Platform",
      th: "แพลตฟอร์มปฏิบัติการ SaaS",
    },
    summary: {
      zh: "多租户SaaS运营后台，覆盖权限、计费、发布与审计的全链路管理。",
      en: "A multi-tenant SaaS operations hub for permissions, billing, release control, and audits.",
      th: "ศูนย์ปฏิบัติการ SaaS แบบหลายผู้เช่า ครอบคลุมสิทธิ์ บิลลิ่ง การปล่อยฟีเจอร์ และ Audit",
    },
    features: {
      zh: ["租户权限", "计费管理", "功能发布", "审计日志"],
      en: ["Tenant Permissions", "Billing Console", "Feature Releases", "Audit Logs"],
      th: ["สิทธิ์ผู้เช่า", "คอนโซลบิลลิ่ง", "ปล่อยฟีเจอร์", "บันทึก Audit"],
    },
    techStack: ["Next.js 15", "Prisma", "TypeScript", "Framer Motion"],
  },
] as const;

export const translations = {
  siteName: "Luo Meng",
  roleText: {
    zh: "AI Automation Developer · Full Stack Developer",
    en: "AI Automation Developer · Full Stack Developer",
    th: "AI Automation Developer · Full Stack Developer",
  },
  hero: {
    eyebrow: {
      zh: "高端数字产品开发",
      en: "Product-grade Digital Engineering",
      th: "การพัฒนาดิจิทัลระดับโปรดักต์",
    },
    headline: {
      zh: "帮助企业快速构建官网、CRM系统、AI自动化工具与管理后台",
      en: "Building Websites, CRM Systems and AI Automation Solutions for Modern Businesses",
      th: "พัฒนาเว็บไซต์ ระบบ CRM และระบบ AI Automation สำหรับธุรกิจยุคใหม่",
    },
    description: {
      zh: "从品牌官网到复杂业务系统，我专注于把产品体验、工程质量与商业转化统一到同一条交付链路。",
      en: "From premium marketing websites to complex business systems, I combine product UX, engineering quality, and conversion outcomes in one delivery pipeline.",
      th: "ตั้งแต่เว็บไซต์แบรนด์จนถึงระบบธุรกิจที่ซับซ้อน ฉันผสาน UX คุณภาพวิศวกรรม และผลลัพธ์เชิงธุรกิจไว้ในงานเดียว",
    },
    ctaPrimary: {
      zh: "立即联系",
      en: "Contact Me",
      th: "ติดต่อฉัน",
    },
    ctaSecondary: {
      zh: "查看项目",
      en: "View Projects",
      th: "ดูผลงาน",
    },
    statusTitle: {
      zh: "可合作",
      en: "Available",
      th: "พร้อมรับงาน",
    },
    statusBody: {
      zh: "支持企业项目合作",
      en: "Open for business projects",
      th: "พร้อมสำหรับโปรเจกต์ธุรกิจ",
    },
  },
  stats: [
    {
      label: {
        zh: "交付速度",
        en: "Delivery Speed",
        th: "ความเร็วการส่งมอบ",
      },
      detail: {
        zh: "快速上线与稳定迭代",
        en: "Rapid launch and stable iteration",
        th: "เปิดใช้งานเร็วและพัฒนาได้ต่อเนื่อง",
      },
    },
    {
      label: {
        zh: "系统质量",
        en: "System Quality",
        th: "คุณภาพระบบ",
      },
      detail: {
        zh: "清晰架构与可维护代码",
        en: "Clean architecture and maintainable code",
        th: "สถาปัตยกรรมชัดเจนและดูแลง่าย",
      },
    },
    {
      label: {
        zh: "商业价值",
        en: "Business Value",
        th: "คุณค่าทางธุรกิจ",
      },
      detail: {
        zh: "以转化和效率为目标",
        en: "Built for conversion and efficiency",
        th: "ออกแบบเพื่อคอนเวอร์ชันและประสิทธิภาพ",
      },
    },
  ],
  sections: {
    projects: {
      eyebrow: { zh: "项目案例", en: "Projects", th: "กรณีศึกษา" },
      title: {
        zh: "围绕业务结果打造的真实产品案例",
        en: "Commercial-grade projects engineered for measurable outcomes",
        th: "โปรเจกต์ระดับเชิงพาณิชย์ที่วัดผลได้จริง",
      },
      description: {
        zh: "每个案例都聚焦用户体验、系统稳定性与转化效率。",
        en: "Each case balances product UX, reliability, and conversion performance.",
        th: "ทุกเคสผสาน UX ความเสถียร และประสิทธิภาพการแปลงผลลัพธ์",
      },
      liveDemo: { zh: "查看案例", en: "Live Demo", th: "ดูเดโม" },
      github: { zh: "源码", en: "GitHub", th: "โค้ด" },
      audienceLabel: { zh: "适用对象", en: "Audience", th: "กลุ่มผู้ใช้งาน" },
      timelineLabel: { zh: "交付周期", en: "Timeline", th: "ระยะเวลาส่งมอบ" },
      coreModules: { zh: "核心模块", en: "Core Modules", th: "โมดูลหลัก" },
      coreModulesTitle: {
        zh: "按商业交付标准构建的系统能力",
        en: "Built as a commercial-ready product foundation",
        th: "ออกแบบเป็นโครงสร้างผลิตภัณฑ์ที่พร้อมใช้งานเชิงพาณิชย์",
      },
      outcomesLabel: { zh: "业务结果", en: "Business Outcomes", th: "ผลลัพธ์ทางธุรกิจ" },
      outcomesTitle: {
        zh: "不仅是界面设计，更是可落地的业务成果",
        en: "Production-focused results, not just attractive interfaces",
        th: "ไม่ใช่แค่หน้าตาสวย แต่ส่งผลลัพธ์ทางธุรกิจได้จริง",
      },
      techStackLabel: { zh: "技术栈", en: "Tech Stack", th: "เทคโนโลยีที่ใช้" },
      openCaseStudy: { zh: "打开案例", en: "Open Case Study", th: "เปิดกรณีศึกษา" },
    },
    services: {
      eyebrow: { zh: "服务能力", en: "Services", th: "บริการ" },
      title: {
        zh: "为增长型企业提供端到端开发支持",
        en: "End-to-end development services for modern growth teams",
        th: "บริการพัฒนาแบบครบวงจรสำหรับธุรกิจที่กำลังเติบโต",
      },
      description: {
        zh: "聚焦官网、业务系统、自动化与SaaS产品落地。",
        en: "Focused on websites, business systems, automation, and SaaS delivery.",
        th: "เน้นเว็บไซต์ ระบบธุรกิจ อัตโนมัติ และการพัฒนา SaaS",
      },
    },
    about: {
      eyebrow: { zh: "关于我", en: "About", th: "เกี่ยวกับฉัน" },
      title: {
        zh: "以产品思维驱动工程交付",
        en: "Engineering execution guided by product thinking",
        th: "การส่งมอบงานวิศวกรรมด้วยแนวคิดผลิตภัณฑ์",
      },
      body: {
        zh: "我专注企业官网、CRM系统、AI自动化工具与管理后台开发。目标是帮助团队更快上线、更稳增长。",
        en: "I specialize in enterprise websites, CRM systems, AI automation tools, and operational dashboards with a business-first product mindset.",
        th: "ฉันเชี่ยวชาญเว็บไซต์องค์กร ระบบ CRM เครื่องมือ AI Automation และแดชบอร์ดบริหาร เพื่อช่วยทีมเปิดตัวเร็วและเติบโตอย่างมั่นคง",
      },
      metrics: [
        {
          value: "60+",
          text: {
            zh: "业务流程优化",
            en: "Workflows optimized",
            th: "เวิร์กโฟลว์ที่ปรับปรุงแล้ว",
          },
        },
        {
          value: "20+",
          text: {
            zh: "系统交付上线",
            en: "Systems delivered",
            th: "ระบบที่ส่งมอบแล้ว",
          },
        },
        {
          value: "99%",
          text: {
            zh: "客户满意目标",
            en: "Client satisfaction target",
            th: "เป้าหมายความพึงพอใจลูกค้า",
          },
        },
      ],
    },
    contact: {
      eyebrow: { zh: "联系", en: "Contact", th: "ติดต่อ" },
      title: {
        zh: "准备好开始你的下一个项目了吗？",
        en: "Let’s build your next high-value product",
        th: "พร้อมเริ่มโปรเจกต์ถัดไปของคุณหรือยัง",
      },
      description: {
        zh: "支持短期项目、长期合作与企业级系统定制。",
        en: "Available for freelance projects, long-term product partnerships, and custom builds.",
        th: "พร้อมรับงานโปรเจกต์ งานระยะยาว และการพัฒนาระบบเฉพาะองค์กร",
      },
      emailLabel: { zh: "邮箱", en: "Email", th: "อีเมล" },
      wechatArea: { zh: "微信二维码", en: "WeChat QR", th: "คิวอาร์ WeChat" },
      wechatHint: {
        zh: "微信: luomeng060998",
        en: "WeChat: luomeng060998",
        th: "WeChat: luomeng060998",
      },
    },
    conversion: {
      eyebrow: { zh: "立即启动", en: "Start Your Project", th: "เริ่มโปรเจกต์" },
      title: {
        zh: "需要一个真正能转化的企业官网或业务系统？",
        en: "Need a premium website or business platform that actually converts?",
        th: "ต้องการเว็บไซต์หรือระบบธุรกิจที่สร้างผลลัพธ์จริงใช่ไหม",
      },
      description: {
        zh: "我会用产品策略 + 全栈工程，帮助你快速上线并持续优化增长。",
        en: "I help teams launch and scale with product strategy, clean architecture, and premium UX execution.",
        th: "ฉันช่วยทีมเปิดตัวและเติบโตด้วยกลยุทธ์ผลิตภัณฑ์ สถาปัตยกรรมที่ดี และ UX ระดับพรีเมียม",
      },
      ctaPrimary: { zh: "预约沟通", en: "Book A Call", th: "นัดคุยโปรเจกต์" },
      ctaSecondary: { zh: "查看案例", en: "See Case Studies", th: "ดูกรณีศึกษา" },
    },
  },
  footer: {
    rights: {
      zh: "保留所有权利。",
      en: "All rights reserved.",
      th: "สงวนลิขสิทธิ์ทั้งหมด",
    },
  },
  services: [
    {
      title: { zh: "企业官网开发", en: "Website Development", th: "พัฒนาเว็บไซต์องค์กร" },
      description: {
        zh: "构建高性能、可转化、可维护的企业官网。",
        en: "High-performance business websites engineered for trust and conversion.",
        th: "เว็บไซต์องค์กรประสิทธิภาพสูง เน้นความน่าเชื่อถือและการแปลงผล",
      },
    },
    {
      title: { zh: "CRM系统开发", en: "CRM Development", th: "พัฒนาระบบ CRM" },
      description: {
        zh: "结合销售流程与客户数据，打造可执行的CRM系统。",
        en: "Custom CRM systems aligned with sales execution and customer lifecycle.",
        th: "ระบบ CRM ที่สอดคล้องกับการทำงานฝ่ายขายและวงจรลูกค้า",
      },
    },
    {
      title: { zh: "AI自动化", en: "AI Automation", th: "AI Automation" },
      description: {
        zh: "让重复流程自动运行，降低人力成本并提升效率。",
        en: "Automate repetitive workflows with AI-enabled logic and operational controls.",
        th: "ทำงานซ้ำให้เป็นอัตโนมัติด้วย AI เพื่อลดต้นทุนและเพิ่มประสิทธิภาพ",
      },
    },
    {
      title: { zh: "业务数据看板", en: "Business Dashboard", th: "แดชบอร์ดธุรกิจ" },
      description: {
        zh: "把运营、销售与增长指标汇总到同一决策界面。",
        en: "Unify operations, sales, and growth metrics into decision-ready dashboards.",
        th: "รวมตัวชี้วัดการดำเนินงาน การขาย และการเติบโตไว้ในหน้าเดียว",
      },
    },
    {
      title: { zh: "SaaS产品开发", en: "SaaS Development", th: "พัฒนา SaaS" },
      description: {
        zh: "提供从架构到上线的SaaS产品端到端研发支持。",
        en: "End-to-end SaaS product engineering from architecture to production release.",
        th: "พัฒนา SaaS แบบครบวงจรตั้งแต่สถาปัตยกรรมจนถึงเปิดใช้งานจริง",
      },
    },
  ],
  socialLabels: {
    linkedin: "LinkedIn",
    github: "GitHub",
    telegram: "Telegram",
  },
};

export const defaultLocale: Locale = "zh";

export function t(text: LocaleText, locale: Locale) {
  return text[locale];
}
