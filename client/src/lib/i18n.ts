// BridgeChina — Bilingual (EN / ZH) content configuration
// Design: Dark Gold Luxury | All user-facing strings live here

export type Lang = "en" | "zh";

export const t = {
  // ─── NAV ───────────────────────────────────────────────────────────────────
  nav: {
    services:    { en: "Services",         zh: "服务项目" },
    process:     { en: "Process",          zh: "办理流程" },
    visa:        { en: "Visa",             zh: "签证类型" },
    cities:      { en: "Cities",           zh: "覆盖城市" },
    contact:     { en: "Contact",          zh: "联系我们" },
    cta:         { en: "Free Consultation",zh: "免费咨询" },
    tagline:     { en: "Premium Business Services", zh: "外事商务服务" },
  },

  // ─── LOADER ────────────────────────────────────────────────────────────────
  loader: {
    tagline:     { en: "Premium Business Services", zh: "外事商务服务" },
    alibadge:    { en: "Global Cross-border\nCenter · Hangzhou", zh: "阿里巴巴全球跨境中心\n杭州滨江" },
  },

  // ─── HERO ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow:     { en: "Foreign Business Services · China", zh: "外籍人士商务服务 · 中国" },
    h1a:         { en: "Your Gateway to", zh: "您进入中国市场的" },
    h1b:         { en: "Business in China", zh: "专业通道" },
    sub:         { en: "Company Registration · Work Visas · Legal Compliance", zh: "公司注册 · 工作签证 · 合规服务" },
    body:        { en: "We handle every legal, administrative, and regulatory step so you can focus on what matters — building your business in one of the world's largest markets.", zh: "我们处理所有法律、行政和监管事务，让您专注于最重要的事——在全球最大市场之一建立您的业务。" },
    ctaPrimary:  { en: "Start Your Journey", zh: "立即开始" },
    ctaSecondary:{ en: "Explore Services",   zh: "了解服务" },
    showing:     { en: "Currently showing",  zh: "当前城市" },
  },

  // ─── STATS ─────────────────────────────────────────────────────────────────
  stats: {
    companies:   { en: "Companies",    zh: "服务企业" },
    countries:   { en: "Countries",    zh: "覆盖国家" },
    visaSuccess: { en: "Visa Success", zh: "签证通过率" },
    yearsExp:    { en: "Years Exp.",   zh: "年从业经验" },
  },

  // ─── ALIBABA SECTION ───────────────────────────────────────────────────────
  alibaba: {
    eyebrow:     { en: "Our Advantage", zh: "我们的优势" },
    h2:          { en: "Backed by the\nAlibaba Ecosystem", zh: "依托阿里巴巴\n生态系统赋能" },
    sub:         { en: "Headquartered inside the Alibaba Global Cross-border Center in Hangzhou, we leverage one of China's most powerful trade ecosystems to serve international businesses.", zh: "我们总部位于杭州阿里巴巴全球跨境中心，依托中国最强大的贸易生态系统，为国际企业提供全方位服务。" },
    card1title:  { en: "Government-Recognised Hub", zh: "政府认可的跨境枢纽" },
    card1desc:   { en: "Operating from a nationally designated cross-border e-commerce zone gives our clients direct access to preferential policies and expedited approvals.", zh: "从国家级跨境电商综合试验区运营，客户可直接享受优惠政策和加速审批通道。" },
    card2title:  { en: "Alibaba Trade Network", zh: "阿里巴巴贸易网络" },
    card2desc:   { en: "Access to Alibaba's global supplier database, logistics partners, and cross-border payment infrastructure — resources unavailable outside the ecosystem.", zh: "接入阿里巴巴全球供应商数据库、物流合作伙伴及跨境支付基础设施——这些资源在生态系统外无法获得。" },
    card3title:  { en: "Established Relationships", zh: "深厚的政府关系网络" },
    card3desc:   { en: "Years of co-location with government agencies and Alibaba partners have built relationships that accelerate every stage of your business setup.", zh: "多年与政府机构及阿里巴巴合作伙伴的共同办公，建立了能加速您业务每个阶段的深厚关系网络。" },
  },

  // ─── SERVICES ──────────────────────────────────────────────────────────────
  services: {
    eyebrow:     { en: "What We Do", zh: "服务内容" },
    h2:          { en: "End-to-End Business\nSetup Services", zh: "全流程商务\n落地服务" },
    sub:         { en: "From company registration to ongoing compliance, we cover every aspect of establishing and operating a foreign business in China.", zh: "从公司注册到持续合规，我们涵盖在华设立和运营外资企业的每个环节。" },
    items: [
      { title: { en: "Company Registration",    zh: "公司注册" },
        desc:  { en: "Full WFOE, Joint Venture, or Representative Office registration including name approval, business scope filing, capital verification, and business license issuance.", zh: "完整的外商独资企业、合资企业或代表处注册服务，包括名称审批、经营范围备案、资本验证及营业执照颁发。" } },
      { title: { en: "Registered Address",      zh: "注册地址" },
        desc:  { en: "Government-approved virtual and physical registered addresses in Shanghai, Beijing, Shenzhen, and Guangzhou. All mail forwarding and official correspondence handled.", zh: "上海、北京、深圳、广州政府批准的虚拟及实体注册地址，提供全程邮件转发和官方信函处理服务。" } },
      { title: { en: "Work Visa Processing",    zh: "工作签证办理" },
        desc:  { en: "Full preparation and submission of Z-visa, M-visa, and R-visa applications. Our bilingual legal team reviews every document — 98% first-attempt approval.", zh: "Z签证、M签证和R签证申请的全程准备与提交。我们的双语法律团队审核每份文件——98%首次申请通过率。" } },
      { title: { en: "Document Audit & Review", zh: "文件审核" },
        desc:  { en: "Thorough pre-submission review of all legal documents, corporate filings, and visa materials. We identify errors, missing items, and compliance issues before they cause delays.", zh: "对所有法律文件、公司备案和签证材料进行全面的提交前审核，在造成延误之前识别错误、缺失项目和合规问题。" } },
      { title: { en: "Licenses & Permits",      zh: "许可证办理" },
        desc:  { en: "Industry-specific licensing for retail, trading, technology, food & beverage, and manufacturing. We identify which permits apply to your exact business model and obtain them.", zh: "零售、贸易、科技、餐饮和制造业的行业专项许可证办理，我们确定适用于您具体商业模式的许可证并代为获取。" } },
      { title: { en: "Corporate Bank Account",  zh: "企业银行开户" },
        desc:  { en: "Complete support for RMB and foreign-currency corporate account opening at major Chinese banks. We prepare all KYC documentation and accompany you through the process.", zh: "在中国主要银行开立人民币和外币企业账户的全程支持，我们准备所有KYC文件并全程陪同办理。" } },
    ],
  },

  // ─── PROCESS ───────────────────────────────────────────────────────────────
  process: {
    eyebrow:     { en: "How It Works", zh: "办理流程" },
    h2:          { en: "Four Steps to\nOperating in China", zh: "四步完成\n在华落地" },
    sub:         { en: "A structured, transparent process designed to minimise delays and maximise your chances of first-attempt approval.", zh: "结构化、透明的流程，旨在最大程度减少延误，提高首次申请通过率。" },
    steps: [
      { title: { en: "Free Consultation",    zh: "免费咨询" },
        desc:  { en: "Discuss your business model, target city, and team composition. We recommend the optimal structure and visa pathway for your specific situation.", zh: "讨论您的商业模式、目标城市和团队构成，我们为您的具体情况推荐最优结构和签证路径。" } },
      { title: { en: "Document Preparation", zh: "文件准备" },
        desc:  { en: "We provide a precise, personalised document checklist. Every document is reviewed by our legal team for completeness and accuracy before submission.", zh: "我们提供精准的个性化文件清单，每份文件在提交前均由法律团队审核完整性和准确性。" } },
      { title: { en: "Government Filing",    zh: "政府申报" },
        desc:  { en: "We file on your behalf with SAMR, local PSB, and other relevant authorities. You receive real-time updates at every stage of the review process.", zh: "我们代您向市场监管总局、当地公安局及其他相关机构提交申请，您将在审核的每个阶段收到实时更新。" } },
      { title: { en: "Activation & Beyond",  zh: "激活与后续" },
        desc:  { en: "Your business license, seals, and visa are issued. We guide you through tax registration, bank account opening, and ongoing compliance requirements.", zh: "营业执照、印章和签证颁发后，我们将引导您完成税务登记、银行开户及持续合规要求。" } },
    ],
  },

  // ─── WHY US ────────────────────────────────────────────────────────────────
  why: {
    eyebrow:     { en: "Why BridgeChina", zh: "为何选择我们" },
    h2:          { en: "The Standard for\nForeign Business in China", zh: "在华外资商务\n服务标准" },
    sub:         { en: "Four principles that define how we work — and why our clients consistently achieve results that others cannot.", zh: "四项核心原则定义了我们的工作方式，也是我们的客户能持续取得他人无法实现的成果的原因。" },
    points: [
      { title: { en: "Bilingual Legal Expertise",  zh: "双语法律专业团队" },
        desc:  { en: "All client-facing advisors are fully fluent in English and Mandarin. No translation gaps, no middlemen — direct communication throughout your case.", zh: "所有客户顾问均精通英语和普通话，无翻译障碍，无中间商，全程直接沟通。" } },
      { title: { en: "Regulatory Intelligence",    zh: "法规动态追踪" },
        desc:  { en: "Our team continuously monitors SAMR, MOFCOM, and PSB policy updates. Clients receive proactive alerts when rules affecting their business change.", zh: "我们的团队持续监控市场监管总局、商务部和公安局的政策更新，当影响您业务的规则发生变化时，客户将主动收到提醒。" } },
      { title: { en: "Alibaba Ecosystem Access",   zh: "阿里巴巴生态接入" },
        desc:  { en: "Based inside the Alibaba Global Cross-border Center, we leverage Alibaba's trade infrastructure, cross-border commerce networks, and government relationships.", zh: "总部位于阿里巴巴全球跨境中心内，我们充分利用阿里巴巴的贸易基础设施、跨境商务网络和政府关系。" } },
      { title: { en: "Transparent Fixed Pricing",  zh: "透明固定收费" },
        desc:  { en: "A complete cost breakdown before you sign anything. No hidden government fees, no unexpected surcharges at the end of the process.", zh: "签约前提供完整费用明细，无隐藏政府费用，流程结束时无意外附加费用。" } },
    ],
  },

  // ─── VISA ──────────────────────────────────────────────────────────────────
  visa: {
    eyebrow:     { en: "Visa Services", zh: "签证服务" },
    h2:          { en: "Every Visa Type,\nHandled Correctly", zh: "每种签证类型\n专业办理" },
    sub:         { en: "China's visa system is complex and frequently updated. Our team stays current with every regulation change so your application is always prepared to the latest standard.", zh: "中国签证体系复杂且频繁更新，我们的团队时刻跟进每项法规变化，确保您的申请始终符合最新标准。" },
    types: [
      { badge: "Z", title: { en: "Work Visa",       zh: "工作签证" },
        desc:  { en: "The primary visa for foreigners employed by a Chinese entity. Requires a work permit, invitation letter, and full medical examination. We manage the entire process from employer registration to visa collection.", zh: "受雇于中国实体的外籍人士主要签证，需要工作许可、邀请函和完整体检。我们管理从雇主注册到签证领取的全程。" } },
      { badge: "M", title: { en: "Business Visa",   zh: "商务签证" },
        desc:  { en: "For commercial and trade activities including negotiations, contract signing, and market research. Available in single, double, and multiple entry configurations with stays up to 180 days.", zh: "适用于商业贸易活动，包括谈判、合同签署和市场调研，提供单次、两次和多次入境配置，停留最长180天。" } },
      { badge: "R", title: { en: "Talent Visa",     zh: "人才签证" },
        desc:  { en: "Priority processing for high-end foreign experts in government-identified fields. Extended validity and simplified application requirements.", zh: "政府认定领域的高端外籍专家优先办理，延长有效期并简化申请要求。" } },
      { badge: "F", title: { en: "Exchange Visa",   zh: "交流签证" },
        desc:  { en: "For cultural, scientific, or invited business exchange visits. Flexible single and multiple entry configurations with adjustable durations.", zh: "适用于文化、科学或受邀商务交流访问，灵活的单次和多次入境配置，可调整停留时长。" } },
    ],
  },

  // ─── TESTIMONIALS ──────────────────────────────────────────────────────────
  testimonials: {
    eyebrow:     { en: "Client Results", zh: "客户案例" },
    h2:          { en: "What Our Clients\nAchieve", zh: "我们的客户\n取得的成果" },
    items: [
      { text: { en: '"BridgeChina registered our Shanghai trading company in ten working days. The whole process was handled remotely — documents, address, everything. Outstanding."',
                zh: '"BridgeChina在十个工作日内完成了我们上海贸易公司的注册，整个流程远程处理——文件、地址，一切都很完美。"' },
        name: "Sarah Okonkwo", role: { en: "Director · AfriTrade Imports, Nigeria", zh: "总监 · AfriTrade进口公司，尼日利亚" } },
      { text: { en: '"My Z-visa had been rejected twice before I contacted BridgeChina. They identified the errors in minutes and secured approval on the very first attempt."',
                zh: '"联系BridgeChina之前，我的Z签证已被拒绝两次。他们在几分钟内找到了错误，并在第一次申请时就获得了批准。"' },
        name: "Aleksei Volkov", role: { en: "Operations Manager · Russia", zh: "运营经理 · 俄罗斯" } },
      { text: { en: '"From WFOE structure selection to our first invoice — they guided every single step. Being inside the Alibaba ecosystem gave us incredible access and credibility."',
                zh: '"从外商独资企业结构选择到开出第一张发票，他们引导了每一个步骤。身处阿里巴巴生态系统内，给了我们令人难以置信的资源和信誉。"' },
        name: "Julien Moreau", role: { en: "Founder · TechVenture SAS, France", zh: "创始人 · TechVenture SAS，法国" } },
    ],
  },

  // ─── CITIES ────────────────────────────────────────────────────────────────
  cities: {
    eyebrow:     { en: "Where We Operate", zh: "覆盖城市" },
    h2:          { en: "Five Cities,\nOne Trusted Partner", zh: "五大城市\n一个可信赖的伙伴" },
    sub:         { en: "Our network of registered agents, legal advisors, and government liaisons spans China's five most important business cities.", zh: "我们在中国五大最重要商业城市拥有注册代理人、法律顾问和政府联络员网络。" },
  },

  // ─── CONTACT ───────────────────────────────────────────────────────────────
  contact: {
    eyebrow:     { en: "Get In Touch", zh: "联系我们" },
    h2:          { en: "Start Your China\nBusiness Journey", zh: "开启您的\n中国商务之旅" },
    sub:         { en: "Complete the form below and a BridgeChina advisor will contact you within one business day to discuss your specific requirements.", zh: "填写以下表单，BridgeChina顾问将在一个工作日内与您联系，讨论您的具体需求。" },
    form: {
      firstName:   { en: "First Name",    zh: "名字" },
      lastName:    { en: "Last Name",     zh: "姓氏" },
      email:       { en: "Email Address", zh: "电子邮箱" },
      contact:     { en: "WhatsApp / WeChat / Phone", zh: "WhatsApp / 微信 / 电话" },
      service:     { en: "Service Required", zh: "所需服务" },
      message:     { en: "Additional Information", zh: "补充说明" },
      messagePh:   { en: "Describe your business model, target city, timeline, or any specific questions...", zh: "请描述您的商业模式、目标城市、时间安排或任何具体问题……" },
      submit:      { en: "Submit Enquiry", zh: "提交咨询" },
      success:     { en: "Thank you — we will be in touch within one business day.", zh: "感谢您的咨询，我们将在一个工作日内与您联系。" },
      options: [
        { en: "Company Registration",    zh: "公司注册" },
        { en: "Work Visa (Z-Visa)",       zh: "工作签证（Z签证）" },
        { en: "Business Visa (M-Visa)",   zh: "商务签证（M签证）" },
        { en: "Talent Visa (R-Visa)",     zh: "人才签证（R签证）" },
        { en: "Registered Address",       zh: "注册地址" },
        { en: "Document Audit",           zh: "文件审核" },
        { en: "Licenses & Permits",       zh: "许可证办理" },
        { en: "Corporate Bank Account",   zh: "企业银行开户" },
        { en: "Full Setup Package",       zh: "全套落地服务" },
      ],
    },
    info: {
      officeLabel:   { en: "Office",         zh: "办公地址" },
      officeVal:     { en: "Alibaba Binjiang Campus, Building 5\nHangzhou, Zhejiang, China", zh: "杭州市滨江区\n阿里巴巴滨江园区五号楼" },
      emailLabel:    { en: "Email",           zh: "电子邮件" },
      wechatLabel:   { en: "WeChat",          zh: "微信" },
      whatsappLabel: { en: "WhatsApp",        zh: "WhatsApp" },
      hoursLabel:    { en: "Hours",           zh: "工作时间" },
      hoursVal:      { en: "Mon–Fri  09:00–18:00 CST", zh: "周一至周五  09:00–18:00 北京时间" },
    },
  },

  // ─── FOOTER ────────────────────────────────────────────────────────────────
  footer: {
    tagline:     { en: "Premium Business Services", zh: "外事商务服务" },
    desc:        { en: "Professional foreign affairs and business setup services for international entrepreneurs in China. Based at Alibaba Global Cross-border Center, Hangzhou.", zh: "为在华国际创业者提供专业的外事商务落地服务，总部位于杭州阿里巴巴全球跨境中心。" },
    aliLabel:    { en: "Alibaba Global Cross-border Center", zh: "阿里巴巴全球跨境中心" },
    cols: [
      { heading: { en: "Services",      zh: "服务项目" },
        links: [
          { en: "Company Registration", zh: "公司注册" },
          { en: "Work Visa",            zh: "工作签证" },
          { en: "Registered Address",   zh: "注册地址" },
          { en: "Bank Account",         zh: "企业开户" },
          { en: "Licenses & Permits",   zh: "许可证办理" },
        ],
      },
      { heading: { en: "Company",       zh: "关于我们" },
        links: [
          { en: "About Us",             zh: "公司介绍" },
          { en: "Our Process",          zh: "办理流程" },
          { en: "Client Results",       zh: "客户案例" },
          { en: "Contact",              zh: "联系我们" },
        ],
      },
    ],
    copyright:   { en: "BridgeChina. All rights reserved.", zh: "BridgeChina 版权所有。" },
    legal:       { en: "Privacy Policy · Terms of Service", zh: "隐私政策 · 服务条款" },
  },

  // ─── MOBILE MENU ───────────────────────────────────────────────────────────
  mobile: {
    location:    { en: "Alibaba Global Cross-border Center · Hangzhou", zh: "阿里巴巴全球跨境中心 · 杭州" },
    locLabel:    { en: "Our Location", zh: "我们的位置" },
  },
} as const;

// Helper to get translated string
export function tx(field: { en: string; zh: string }, lang: Lang): string {
  return field[lang];
}
