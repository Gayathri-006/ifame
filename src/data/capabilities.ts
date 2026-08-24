import { CapabilityItem } from '../types';

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    shortDesc: 'Formulate robust corporate and operational roadmaps aligned with long-term enterprise goals.',
    iconName: 'TrendingUp',
    category: 'Strategic',
    deliverables: [
      'Strategic Vision & Roadmap Design',
      'Operating Model Architecture',
      'Portfolio Prioritization Matrices',
      'Executive KPI & Performance Frameworks'
    ],
    businessValue: 'Ensures capital & Resource Deployment delivers Measurable Strategic ROI.'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDesc: 'Reimagine Operating Models with Digital Agility, Connected Workflows & Intelligent Automation.',
    iconName: 'Sparkles',
    category: 'Technology',
    deliverables: [
      'Digital Maturity Assessment',
      'Enterprise Workflow Modernization',
      'Digital Product Strategy',
      'Omnichannel Ecosystem Integration'
    ],
    businessValue: 'Drives Organizational Speed, Customer Satisfaction & Continuous Innovation.'
  },
  {
    id: 'ai-data-intelligence',
    title: 'AI & Data Intelligence',
    shortDesc: 'Harness Predictive Intelligence, Modern Data Platforms & Machine Learning Models for Decision Advantage.',
    iconName: 'BrainCircuit',
    category: 'Technology',
    deliverables: [
      'Enterprise Data Architecture & Lakes',
      'Predictive Analytics & BI Dashboards',
      'Generative AI & LLM Integration',
      'Knowledge Management Intelligence (KaaS)'
    ],
    businessValue: 'Converts fragmented Corporate Data into high-conviction Decision Systems.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Information Security',
    shortDesc: 'Protect Critical Infrastructure, Data Integrity & Digital Assets with Defense-in-Depth Frameworks.',
    iconName: 'ShieldCheck',
    category: 'Governance',
    deliverables: [
      'Zero Trust Security Architecture',
      'Vulnerability & Threat Assessment',
      'Security Operations & Incident Response',
      'Workforce Cybersecurity Training & Governance'
    ],
    businessValue: 'Minimizes Enterprise exposure & ensures uninterrupted Business Resilience.'
  },
  {
    id: 'cloud-platform',
    title: 'Cloud & Platform Services',
    shortDesc: 'Architect Scalable Cloud Infrastructure, PaaS/IaaS/SaaS models & Resilient Environments.',
    iconName: 'Cloud',
    category: 'Technology',
    deliverables: [
      'Multi-Cloud Strategy & Cloud Migration',
      'PaaS, IaaS, SaaS & DaaS Architectures',
      'Remote Infrastructure Management',
      'DevSecOps & Cloud Cost Optimization'
    ],
    businessValue: 'Maximizes Agility, Uptime & Financial Predictability across Cloud Investments.'
  },
  {
    id: 'governance-risk-compliance',
    title: 'Governance, Risk & Compliance',
    shortDesc: 'Establish ISO-aligned frameworks, risk mitigation, and automated compliance standards.',
    iconName: 'Settings2',
    category: 'Governance',
    deliverables: [
      'ISO Standards Certification Readiness',
      'Enterprise Risk Assessment (ERM)',
      'Regulatory Compliance Management',
      'Data Privacy & Governance Controls'
    ],
    businessValue: 'Protects institutional reputation and guarantees compliance with global mandates.'
  },
  {
    id: 'process-engineering',
    title: 'Process Engineering & Optimization',
    shortDesc: 'Re-engineer core Business Workflows to eliminate bottlenecks, waste & cycle latency.',
    iconName: 'Activity',
    category: 'Operations',
    deliverables: [
      'Lean Six Sigma Process Redesign',
      'Workflow Automation & BPM Systems',
      'Performance Engineering Benchmarking',
      'Operational Cost Reduction Strategies'
    ],
    businessValue: 'Dramatically improves throughput speed while reducing Operational overhead.'
  },
  {
    id: 'system-integration',
    title: 'System Integration & Modernization',
    shortDesc: 'Rationalize Legacy Applications & Connect Disparate Systems with Modern API Architectures.',
    iconName: 'Box',
    category: 'Operations',
    deliverables: [
      'Enterprise Application Integration (EAI)',
      'Legacy Modernization & Code Refactoring',
      'API Gateway & Middleware Architecture',
      'Application Portfolio Rationalization'
    ],
    businessValue: 'Unlocks siloed systems & lowers long-term technical debt.'
  }
];
