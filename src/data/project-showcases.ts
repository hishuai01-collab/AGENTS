import type { ProjectShowcase } from "@/types/project-showcase";

export const projectShowcases: ProjectShowcase[] = [
  {
    slug: "smart-ordering-system",
    title: {
      zh: "智能点餐系统",
      en: "Smart Ordering System",
      th: "ระบบสั่งอาหารอัจฉริยะ",
    },
    category: {
      zh: "餐饮数字化",
      en: "Restaurant Digitalization",
      th: "ดิจิทัลสำหรับร้านอาหาร",
    },
    tagline: {
      zh: "将点餐、出单、运营管理整合到同一平台，提升门店效率。",
      en: "Unifies ordering, fulfillment, and operations into one platform for restaurant growth.",
      th: "รวมการสั่งอาหาร การจัดการออเดอร์ และการปฏิบัติการไว้ในแพลตฟอร์มเดียว",
    },
    overview: {
      zh: "该系统面向连锁餐饮品牌，覆盖前台点餐、后厨出单、库存联动与实时经营看板。",
      en: "Designed for restaurant brands, this system covers customer ordering, kitchen orchestration, inventory sync, and operational analytics.",
      th: "ระบบนี้ออกแบบสำหรับแบรนด์ร้านอาหาร ครอบคลุมการสั่งอาหาร หน้าครัว สต็อก และแดชบอร์ดธุรกิจแบบเรียลไทม์",
    },
    audience: {
      zh: "餐饮品牌、连锁门店、运营团队",
      en: "Restaurant brands, chain stores, operations teams",
      th: "แบรนด์ร้านอาหาร สาขาเชน และทีมปฏิบัติการ",
    },
    timeline: {
      zh: "6周交付 + 2周优化",
      en: "6-week delivery + 2-week optimization",
      th: "พัฒนา 6 สัปดาห์ + ปรับปรุง 2 สัปดาห์",
    },
    metrics: [
      {
        label: { zh: "点餐完成率", en: "Order Completion", th: "อัตราปิดออเดอร์" },
        value: "+39%",
        detail: {
          zh: "简化流程后完成支付的用户明显提升。",
          en: "Checkout completion improved after streamlining ordering flow.",
          th: "ลูกค้าทำรายการสำเร็จมากขึ้นหลังปรับขั้นตอนการสั่ง",
        },
      },
      {
        label: { zh: "出单效率", en: "Fulfillment Speed", th: "ความเร็วการจัดการออเดอร์" },
        value: "-33%",
        detail: {
          zh: "后厨处理时长显著下降。",
          en: "Kitchen processing time dropped significantly.",
          th: "เวลาประมวลผลออเดอร์ในครัวลดลงอย่างชัดเจน",
        },
      },
      {
        label: { zh: "复购率", en: "Repeat Purchase", th: "อัตราซื้อซ้ำ" },
        value: "+21%",
        detail: {
          zh: "会员体系提升了回访与复购。",
          en: "Membership features increased return visits and repeat orders.",
          th: "ระบบสมาชิกช่วยเพิ่มการกลับมาซื้อซ้ำ",
        },
      },
    ],
    modules: [
      {
        name: { zh: "智能菜单中心", en: "Smart Menu Center", th: "ศูนย์จัดการเมนูอัจฉริยะ" },
        description: {
          zh: "支持多门店价格策略与库存联动。",
          en: "Supports branch-level pricing and inventory synchronization.",
          th: "รองรับราคาตามสาขาและซิงก์สต็อก",
        },
        bullets: {
          zh: ["菜单分组", "库存同步", "套餐组合"],
          en: ["Category Structuring", "Stock Sync", "Bundle Rules"],
          th: ["จัดหมวดเมนู", "ซิงก์สต็อก", "จัดชุดสินค้า"],
        },
      },
      {
        name: { zh: "订单流程引擎", en: "Order Flow Engine", th: "เอนจินจัดการออเดอร์" },
        description: {
          zh: "覆盖下单、支付、后厨、配送全链路。",
          en: "Orchestrates ordering, payment, kitchen, and delivery workflow.",
          th: "เชื่อมการสั่ง จ่ายเงิน ครัว และจัดส่งแบบครบวงจร",
        },
        bullets: {
          zh: ["状态流转", "异常提醒", "自动分单"],
          en: ["Status Pipelines", "Alert Rules", "Auto Dispatch"],
          th: ["สถานะออเดอร์", "ระบบแจ้งเตือน", "กระจายงานอัตโนมัติ"],
        },
      },
      {
        name: { zh: "运营看板", en: "Operations Dashboard", th: "แดชบอร์ดปฏิบัติการ" },
        description: {
          zh: "实时追踪门店效率与销售数据。",
          en: "Tracks store performance and sales metrics in real time.",
          th: "ติดตามประสิทธิภาพสาขาและยอดขายแบบเรียลไทม์",
        },
        bullets: {
          zh: ["热销排行", "门店对比", "时段分析"],
          en: ["Best Sellers", "Branch Comparison", "Time-slot Analysis"],
          th: ["สินค้าขายดี", "เทียบผลแต่ละสาขา", "วิเคราะห์รายช่วงเวลา"],
        },
      },
    ],
    outcomes: {
      zh: ["减少前台与后厨沟通成本", "提升高峰期稳定性", "优化会员复购路径"],
      en: ["Reduced front-kitchen coordination overhead", "Stabilized peak-hour operations", "Improved repeat-order lifecycle"],
      th: ["ลดต้นทุนการประสานงานหน้าร้านและครัว", "ระบบเสถียรมากขึ้นช่วงพีค", "เพิ่มประสิทธิภาพเส้นทางซื้อซ้ำ"],
    },
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
  {
    slug: "enterprise-website-solution",
    title: {
      zh: "企业官网解决方案",
      en: "Enterprise Website Solution",
      th: "โซลูชันเว็บไซต์องค์กร",
    },
    category: {
      zh: "品牌与转化",
      en: "Brand & Conversion",
      th: "แบรนด์และคอนเวอร์ชัน",
    },
    tagline: {
      zh: "高性能官网体系，兼顾品牌展示与线索转化。",
      en: "A high-performance web system balancing brand storytelling and lead conversion.",
      th: "เว็บไซต์องค์กรประสิทธิภาพสูงที่สมดุลทั้งภาพลักษณ์และการแปลงลูกค้า",
    },
    overview: {
      zh: "围绕企业获客漏斗设计页面结构、内容层级与转化触点，支持SEO长期增长。",
      en: "Built around business acquisition funnels with clear page hierarchy, conversion CTAs, and sustainable SEO growth.",
      th: "ออกแบบโครงสร้างหน้าเว็บตาม Funnel ธุรกิจ พร้อมจุดคอนเวอร์ชันและ SEO ระยะยาว",
    },
    audience: {
      zh: "企业市场团队、销售团队、品牌负责人",
      en: "Marketing teams, sales teams, brand owners",
      th: "ทีมการตลาด ทีมขาย และเจ้าของแบรนด์",
    },
    timeline: {
      zh: "4周上线 + 迭代优化",
      en: "4-week launch + iterative optimization",
      th: "เปิดตัว 4 สัปดาห์ + ปรับปรุงต่อเนื่อง",
    },
    metrics: [
      {
        label: { zh: "自然流量", en: "Organic Traffic", th: "ทราฟฟิกธรรมชาติ" },
        value: "+62%",
        detail: {
          zh: "页面结构与内容策略显著提升曝光。",
          en: "Better structure and content strategy increased search visibility.",
          th: "โครงสร้างหน้าและคอนเทนต์ช่วยเพิ่มการมองเห็นบนเสิร์ช",
        },
      },
      {
        label: { zh: "线索转化率", en: "Lead Conversion", th: "อัตราแปลงลีด" },
        value: "+28%",
        detail: {
          zh: "CTA与表单路径优化带来更多询盘。",
          en: "Optimized CTA and forms produced more qualified inquiries.",
          th: "ปรับ CTA และฟอร์มแล้วได้ลีดคุณภาพเพิ่มขึ้น",
        },
      },
      {
        label: { zh: "页面速度", en: "Page Speed", th: "ความเร็วหน้าเว็บ" },
        value: "95+",
        detail: {
          zh: "Lighthouse指标保持高分。",
          en: "Lighthouse performance stays in the high-score range.",
          th: "คะแนน Lighthouse อยู่ในระดับสูงอย่างสม่ำเสมอ",
        },
      },
    ],
    modules: [
      {
        name: { zh: "品牌首页体系", en: "Brand Landing System", th: "ระบบหน้า Landing ของแบรนด์" },
        description: {
          zh: "建立品牌信任与信息层级。",
          en: "Builds trust through structured storytelling and hierarchy.",
          th: "สร้างความน่าเชื่อถือด้วยการเล่าเรื่องและลำดับข้อมูลที่ชัดเจน",
        },
        bullets: {
          zh: ["价值主张", "客户案例", "转化路径"],
          en: ["Value Proposition", "Case Proof", "Conversion Flow"],
          th: ["คุณค่าแบรนด์", "ผลงานอ้างอิง", "เส้นทางคอนเวอร์ชัน"],
        },
      },
      {
        name: { zh: "SEO内容引擎", en: "SEO Content Engine", th: "เอนจินคอนเทนต์ SEO" },
        description: {
          zh: "面向搜索与业务词的内容布局。",
          en: "Content architecture targeting intent-driven search terms.",
          th: "โครงสร้างคอนเทนต์ที่ตรงเจตนาการค้นหา",
        },
        bullets: {
          zh: ["关键词地图", "页面结构化", "内链策略"],
          en: ["Keyword Mapping", "Semantic Structure", "Internal Linking"],
          th: ["แผนคีย์เวิร์ด", "โครงสร้างเชิงความหมาย", "กลยุทธ์ลิงก์ภายใน"],
        },
      },
      {
        name: { zh: "线索系统", en: "Lead Capture System", th: "ระบบเก็บลีด" },
        description: {
          zh: "统一管理表单、咨询与转化事件。",
          en: "Unifies forms, inquiry channels, and conversion events.",
          th: "รวมฟอร์ม ช่องทางสอบถาม และอีเวนต์คอนเวอร์ชันไว้ด้วยกัน",
        },
        bullets: {
          zh: ["多入口表单", "转化追踪", "自动通知"],
          en: ["Multi-entry Forms", "Event Tracking", "Auto Alerts"],
          th: ["ฟอร์มหลายจุด", "ติดตามอีเวนต์", "แจ้งเตือนอัตโนมัติ"],
        },
      },
    ],
    outcomes: {
      zh: ["显著提升品牌可信度", "增强获客稳定性", "建立可持续内容资产"],
      en: ["Improved brand credibility", "Stabilized lead acquisition", "Built sustainable SEO assets"],
      th: ["ยกระดับความน่าเชื่อถือแบรนด์", "เพิ่มเสถียรภาพการได้ลีด", "สร้างสินทรัพย์ SEO ระยะยาว"],
    },
    techStack: ["Next.js 15", "TypeScript", "Structured Data", "Vercel"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
  {
    slug: "crm-management-system",
    title: {
      zh: "客户关系管理系统 CRM",
      en: "CRM Management System",
      th: "ระบบ CRM สำหรับบริหารลูกค้า",
    },
    category: {
      zh: "销售数字化",
      en: "Sales Intelligence",
      th: "ข้อมูลอัจฉริยะฝ่ายขาย",
    },
    tagline: {
      zh: "客户、销售、任务与预测一体化，打造更清晰的营收管道。",
      en: "A unified CRM for customers, sales pipeline, task execution, and forecasting.",
      th: "CRM แบบรวมศูนย์สำหรับลูกค้า Pipeline งาน และการคาดการณ์ยอดขาย",
    },
    overview: {
      zh: "以销售执行为核心，支持客户档案、机会跟进、任务协同和阶段预测。",
      en: "Built around sales execution with account timelines, opportunity progression, and forecast controls.",
      th: "ออกแบบเพื่อการทำงานฝ่ายขายจริง ด้วยข้อมูลลูกค้า โอกาสขาย และการคาดการณ์",
    },
    audience: {
      zh: "销售团队、业务负责人、营收运营",
      en: "Sales teams, business owners, revenue operations",
      th: "ทีมขาย ผู้บริหารธุรกิจ และทีม RevOps",
    },
    timeline: {
      zh: "8周分阶段交付",
      en: "8-week phased delivery",
      th: "ส่งมอบเป็นเฟสภายใน 8 สัปดาห์",
    },
    metrics: [
      {
        label: { zh: "机会可视化", en: "Pipeline Visibility", th: "การมองเห็น Pipeline" },
        value: "+54%",
        detail: {
          zh: "减少机会盲区与跟进遗漏。",
          en: "Reduced hidden risk and missed follow-ups.",
          th: "ลดจุดบอดและการตกหล่นในการติดตามดีล",
        },
      },
      {
        label: { zh: "执行合规", en: "Execution Compliance", th: "ความสม่ำเสมอในการปฏิบัติ" },
        value: "96%",
        detail: {
          zh: "任务机制保证团队执行一致性。",
          en: "Task automation improved consistency across reps.",
          th: "ระบบงานช่วยให้ทีมขายทำงานได้สม่ำเสมอ",
        },
      },
      {
        label: { zh: "预测准确", en: "Forecast Confidence", th: "ความมั่นใจการคาดการณ์" },
        value: "+33%",
        detail: {
          zh: "提高周会预测可信度。",
          en: "Forecast discussions became materially more reliable.",
          th: "การคาดการณ์ในทีมมีความน่าเชื่อถือมากขึ้น",
        },
      },
    ],
    modules: [
      {
        name: { zh: "客户与账户中心", en: "Customer & Account Hub", th: "ศูนย์ลูกค้าและบัญชี" },
        description: {
          zh: "集中管理客户生命周期与交互记录。",
          en: "Centralizes lifecycle records and relationship history.",
          th: "จัดการวงจรลูกค้าและประวัติความสัมพันธ์แบบรวมศูนย์",
        },
        bullets: {
          zh: ["互动时间线", "标签分层", "生命周期状态"],
          en: ["Activity Timeline", "Smart Segments", "Lifecycle Status"],
          th: ["Timeline กิจกรรม", "การแบ่งกลุ่ม", "สถานะวงจรลูกค้า"],
        },
      },
      {
        name: { zh: "销售管道智能", en: "Pipeline Intelligence", th: "อัจฉริยะด้าน Pipeline" },
        description: {
          zh: "追踪阶段转化与风险评分。",
          en: "Tracks stage conversion with risk and probability signals.",
          th: "ติดตามการแปลงแต่ละสเตจพร้อมสัญญาณความเสี่ยง",
        },
        bullets: {
          zh: ["阶段转化", "健康评分", "营收预测"],
          en: ["Stage Conversion", "Deal Health", "Revenue Forecast"],
          th: ["อัตราแปลงสเตจ", "สุขภาพดีล", "คาดการณ์รายได้"],
        },
      },
      {
        name: { zh: "执行协同", en: "Execution Workflow", th: "เวิร์กโฟลว์การทำงาน" },
        description: {
          zh: "自动化跟进与任务提醒，确保执行闭环。",
          en: "Automates follow-ups and action reminders for execution discipline.",
          th: "ติดตามงานและเตือนอัตโนมัติเพื่อปิดงานอย่างมีวินัย",
        },
        bullets: {
          zh: ["任务自动化", "负责人看板", "目标追踪"],
          en: ["Task Automation", "Rep Dashboard", "Goal Tracking"],
          th: ["งานอัตโนมัติ", "แดชบอร์ดผู้รับผิดชอบ", "ติดตามเป้าหมาย"],
        },
      },
    ],
    outcomes: {
      zh: ["缩短销售周期", "提升周会决策质量", "加强跨团队协作"],
      en: ["Shortened sales cycles", "Improved forecast decisions", "Strengthened team collaboration"],
      th: ["ลดระยะเวลาปิดการขาย", "ตัดสินใจจากฟอร์แคสต์ดีขึ้น", "ทำงานข้ามทีมดีขึ้น"],
    },
    techStack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
  {
    slug: "ai-customer-service-dashboard",
    title: {
      zh: "AI客服管理后台",
      en: "AI Customer Service Dashboard",
      th: "แดชบอร์ดบริการลูกค้า AI",
    },
    category: {
      zh: "AI运营",
      en: "AI Operations",
      th: "การปฏิบัติการด้วย AI",
    },
    tagline: {
      zh: "通过AI分流、知识推荐与SLA预警提升客服效率。",
      en: "Boosts support productivity through AI triage, knowledge suggestions, and SLA alerts.",
      th: "เพิ่มประสิทธิภาพทีมซัพพอร์ตด้วย AI triage คำแนะนำความรู้ และแจ้งเตือน SLA",
    },
    overview: {
      zh: "帮助客服团队统一处理工单并识别高优先级问题，降低响应时间与人力压力。",
      en: "Enables support teams to route tickets intelligently and identify high-risk issues before SLA breaches.",
      th: "ช่วยทีมซัพพอร์ตจัดการทิกเก็ตอย่างชาญฉลาด และเห็นปัญหาเร่งด่วนก่อน SLA หลุด",
    },
    audience: {
      zh: "客服团队、客户成功、运营负责人",
      en: "Support teams, customer success, operations leads",
      th: "ทีมซัพพอร์ต ทีม Customer Success และหัวหน้าปฏิบัติการ",
    },
    timeline: {
      zh: "7周交付",
      en: "7-week delivery",
      th: "ส่งมอบภายใน 7 สัปดาห์",
    },
    metrics: [
      {
        label: { zh: "首响时长", en: "First Response Time", th: "เวลาตอบกลับครั้งแรก" },
        value: "-42%",
        detail: {
          zh: "AI分流显著缩短首响时间。",
          en: "AI triage dramatically reduced first response latency.",
          th: "AI triage ลดเวลาตอบกลับครั้งแรกได้มาก",
        },
      },
      {
        label: { zh: "处理效率", en: "Resolution Efficiency", th: "ประสิทธิภาพการปิดเคส" },
        value: "+31%",
        detail: {
          zh: "知识建议降低重复操作成本。",
          en: "Knowledge suggestions reduced repetitive handling.",
          th: "คำแนะนำความรู้ช่วยลดงานซ้ำและปิดเคสได้เร็วขึ้น",
        },
      },
      {
        label: { zh: "SLA达标", en: "SLA Compliance", th: "การผ่าน SLA" },
        value: "98.6%",
        detail: {
          zh: "预警机制有效防止超时工单。",
          en: "Proactive alerts prevented overdue ticket accumulation.",
          th: "ระบบเตือนล่วงหน้าช่วยป้องกันทิกเก็ตค้างเกิน SLA",
        },
      },
    ],
    modules: [
      {
        name: { zh: "AI工单分流", en: "AI Ticket Triage", th: "AI Ticket Triage" },
        description: {
          zh: "按意图与优先级自动分派工单。",
          en: "Routes tickets by intent and urgency with automated logic.",
          th: "กระจายทิกเก็ตตามเจตนาและความเร่งด่วนแบบอัตโนมัติ",
        },
        bullets: {
          zh: ["语义识别", "优先级评分", "队列均衡"],
          en: ["Intent Classification", "Priority Scoring", "Queue Balancing"],
          th: ["จำแนกเจตนา", "ให้คะแนนความเร่งด่วน", "ปรับสมดุลคิว"],
        },
      },
      {
        name: { zh: "客服绩效看板", en: "Agent Performance Board", th: "แดชบอร์ดประสิทธิภาพเอเจนต์" },
        description: {
          zh: "实时追踪个人与团队处理能力。",
          en: "Monitors individual and team support throughput in real time.",
          th: "ติดตามผลงานรายบุคคลและทีมแบบเรียลไทม์",
        },
        bullets: {
          zh: ["响应热力图", "解决效率", "升级率统计"],
          en: ["SLA Heatmap", "Resolution Velocity", "Escalation Ratio"],
          th: ["Heatmap SLA", "ความเร็วการปิดเคส", "สัดส่วนการ Escalate"],
        },
      },
      {
        name: { zh: "知识推荐助手", en: "Knowledge Assistant", th: "ผู้ช่วยแนะนำความรู้" },
        description: {
          zh: "基于知识库推荐回复草案。",
          en: "Suggests response drafts based on internal documentation.",
          th: "แนะนำคำตอบจากเอกสารความรู้ภายในทีม",
        },
        bullets: {
          zh: ["上下文建议", "多语言草案", "一键审核"],
          en: ["Context-aware Suggestions", "Multi-language Drafts", "One-click Approval"],
          th: ["คำแนะนำตามบริบท", "ร่างหลายภาษา", "อนุมัติคลิกเดียว"],
        },
      },
    ],
    outcomes: {
      zh: ["减少客服疲劳", "提升客户满意度", "强化运营可视化"],
      en: ["Reduced agent burnout", "Improved customer satisfaction", "Enhanced operational visibility"],
      th: ["ลดความล้าของเอเจนต์", "เพิ่มความพึงพอใจลูกค้า", "มองเห็นการปฏิบัติการชัดขึ้น"],
    },
    techStack: ["Next.js 15", "TypeScript", "OpenAI API", "PostgreSQL"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
  {
    slug: "saas-operations-platform",
    title: {
      zh: "SaaS运营管理平台",
      en: "SaaS Operations Platform",
      th: "แพลตฟอร์มปฏิบัติการ SaaS",
    },
    category: {
      zh: "平台治理",
      en: "Platform Governance",
      th: "การกำกับแพลตฟอร์ม",
    },
    tagline: {
      zh: "覆盖租户、权限、计费、发布与审计的SaaS运营中心。",
      en: "A centralized operations hub for tenants, permissions, billing, releases, and audits.",
      th: "ศูนย์ปฏิบัติการรวมสำหรับผู้เช่า สิทธิ์ บิลลิ่ง การปล่อยฟีเจอร์ และ Audit",
    },
    overview: {
      zh: "为SaaS团队提供稳定运营能力，降低配置错误与发布风险。",
      en: "Provides operational control for SaaS teams while reducing configuration errors and release risks.",
      th: "ช่วยทีม SaaS ควบคุมระบบได้เสถียร ลดความผิดพลาดจากการตั้งค่าและการปล่อยฟีเจอร์",
    },
    audience: {
      zh: "SaaS创始团队、平台运维、产品运营",
      en: "SaaS founders, platform admins, product operations",
      th: "ผู้ก่อตั้ง SaaS ผู้ดูแลแพลตฟอร์ม และทีม Product Ops",
    },
    timeline: {
      zh: "6周上线",
      en: "6-week production rollout",
      th: "เปิดใช้งานจริงภายใน 6 สัปดาห์",
    },
    metrics: [
      {
        label: { zh: "运维效率", en: "Ops Efficiency", th: "ประสิทธิภาพปฏิบัติการ" },
        value: "+46%",
        detail: {
          zh: "批量操作和自动化降低重复工作。",
          en: "Bulk actions and automation reduced repetitive admin work.",
          th: "การทำงานแบบชุดและอัตโนมัติช่วยลดงานซ้ำของแอดมิน",
        },
      },
      {
        label: { zh: "配置准确率", en: "Configuration Accuracy", th: "ความถูกต้องการตั้งค่า" },
        value: "99.2%",
        detail: {
          zh: "权限校验减少误操作。",
          en: "Permission checks significantly reduced misconfiguration.",
          th: "การตรวจสิทธิ์ช่วยลดการตั้งค่าผิดพลาด",
        },
      },
      {
        label: { zh: "发布稳定性", en: "Release Stability", th: "เสถียรภาพการปล่อยฟีเจอร์" },
        value: "+34%",
        detail: {
          zh: "灰度与回滚机制降低发布风险。",
          en: "Canary rollout and rollback controls improved release safety.",
          th: "ระบบ Canary และ Rollback เพิ่มความปลอดภัยการปล่อยฟีเจอร์",
        },
      },
    ],
    modules: [
      {
        name: { zh: "租户与权限", en: "Tenant & Access Control", th: "ผู้เช่าและสิทธิ์" },
        description: {
          zh: "按组织和角色管理系统权限。",
          en: "Role-based access governance at organization and tenant levels.",
          th: "จัดการสิทธิ์ตามองค์กรและบทบาท",
        },
        bullets: {
          zh: ["角色权限", "配额限制", "会话策略"],
          en: ["Role Policy", "Usage Limits", "Session Rules"],
          th: ["นโยบายบทบาท", "ขีดจำกัดการใช้งาน", "กฎเซสชัน"],
        },
      },
      {
        name: { zh: "计费管理", en: "Billing Management", th: "การจัดการบิลลิ่ง" },
        description: {
          zh: "统一管理订阅、账单与支付状态。",
          en: "Controls subscription lifecycle, invoicing, and payment states.",
          th: "จัดการวงจรสมาชิก ใบแจ้งหนี้ และสถานะการชำระเงิน",
        },
        bullets: {
          zh: ["订阅生命周期", "续费提醒", "支付监控"],
          en: ["Subscription Lifecycle", "Renewal Signals", "Payment Monitoring"],
          th: ["วงจรสมาชิก", "สัญญาณต่ออายุ", "มอนิเตอร์การชำระเงิน"],
        },
      },
      {
        name: { zh: "发布与审计", en: "Release & Audit Control", th: "การปล่อยฟีเจอร์และ Audit" },
        description: {
          zh: "保障新功能发布可控且可追溯。",
          en: "Ensures controlled feature rollout with traceable audit records.",
          th: "ควบคุมการปล่อยฟีเจอร์และตรวจสอบย้อนหลังได้",
        },
        bullets: {
          zh: ["灰度开关", "版本回滚", "审计日志"],
          en: ["Feature Flags", "Rollback Plan", "Audit Trails"],
          th: ["Feature Flag", "Rollback", "Audit Trail"],
        },
      },
    ],
    outcomes: {
      zh: ["运维团队效率提升", "平台发布风险下降", "管理流程更可追溯"],
      en: ["Improved admin throughput", "Reduced deployment risk", "Higher operational traceability"],
      th: ["ทีมแอดมินทำงานเร็วขึ้น", "ลดความเสี่ยงการปล่อยระบบ", "ติดตามการทำงานย้อนหลังได้ชัดเจน"],
    },
    techStack: ["Next.js 15", "TypeScript", "Prisma", "Framer Motion"],
    githubUrl: "https://github.com/hishuai01-collab/AGENTS",
  },
];

export const showcaseBySlug = Object.fromEntries(projectShowcases.map((item) => [item.slug, item]));
