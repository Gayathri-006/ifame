export type ConsultingPillarId = 'Management' | 'Technology' | 'Business';

export interface ConsultingPillar {
  id: ConsultingPillarId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  primaryFocus: string[];
  subServices: string[];
  clientOutcomes: string[];
}

export const CONSULTING_PILLARS: ConsultingPillar[] = [
  {
    id: 'Management',
    title: 'Management Consulting',
    shortDesc: 'Driving strategic clarity, operational excellence and Business growth through tailored management solutions.',
    fullDesc: 'We partner with enterprise leaders to solve complex structural challenges, accelerate organizational performance, and execute high-stakes transformations with precision and discipline.',
    iconName: 'Users',
    primaryFocus: [
      'Project Management',
      'Corporate Management Consulting',
      'Production Management Consulting'
    ],
    subServices: [
      'Enterprise Program Management & PMO',
      'Corporate Strategy & Portfolio Realignment',
      'Production & Manufacturing Management',
      'Executive Advisory & Leadership Enablement',
      'Resource & Capital Allocation Optimization',
      'Organizational Change Management'
    ],
    clientOutcomes: [
      '30-40% faster initiative rollout speeds',
      'Comprehensive alignment between strategy and execution',
      'Optimized operational throughput and reduced overhead'
    ]
  },
  {
    id: 'Technology',
    title: 'Technology Consulting',
    shortDesc: 'Innovating with Digital, Cloud, Data, AI & Cybersecurity Solutions that enable Intelligent and Sustainable Transformation.',
    fullDesc: 'Empowering Organizations to build modern, resilient Digital Ecosystems. From Enterprise Architecture to Artificial Intelligence and cybersecurity, we turn technology investments into durable competitive advantages.',
    iconName: 'Cpu',
    primaryFocus: [
      'Digital Transformation & IT Strategy',
      'AI & Data Intelligence',
      'Cybersecurity & Information Security',
      'Application Development & Infrastructure'
    ],
    subServices: [
      'Information Technology Solutions & Consulting',
      'IT Strategy Consulting & Portfolio Management',
      'Digital Transformation & Business Process Management',
      'Application Development and Maintenance',
      'Remote Infrastructure Management',
      'Cloud Models (PaaS, IaaS, SaaS, DaaS, KaaS)',
      'Artificial Intelligence & Business Intelligence',
      'Customer, Knowledge, and Data Intelligence',
      'Data Analytics & Modern Data Architecture',
      'Information Security & Cybersecurity Solutions',
      'Cybersecurity Training, Frameworks & Standards',
      'Application and Software Support & Upgrades',
      'Training & Orientation on Software Products, Tools and Technology',
      'Industrial Solutions & Services for GovTech, AgTech and EdTech'
    ],
    clientOutcomes: [
      'Resilient, scalable Cloud and Hybrid Architectures',
      'Data-driven executive decision Pipelines with AI',
      'Zero-trust Cybersecurity posture and compliance'
    ]
  },
  {
    id: 'Business',
    title: 'Business Consulting',
    shortDesc: 'Optimizing processes, Governance and Systems to build resilient, compliant and future-ready organizations.',
    fullDesc: 'Eliminating operational friction and engineering sustainable, standardized workflows. We modernize legacy systems, implement stringent ISO & GRC frameworks, and align process architecture with business agility.',
    iconName: 'Network',
    primaryFocus: [
      'Business Process Engineering',
      'Governance, Risk & Compliance (GRC)',
      'ISO Frameworks & Standards',
      'System Modernization & Rationalization'
    ],
    subServices: [
      'ISO 19001 & ISO 57000 Consulting Frameworks',
      'ISO Frameworks & Certification Readiness',
      'Governance, Risk and Compliance (GRC)',
      'Business Process Engineering & Re-engineering',
      'Performance Engineering & Operational Optimization',
      'Industrial Transformation & Modernization',
      'Digital Empowerment & Workforce Enablement',
      'Organization Transformation & Change Design',
      'System Integration & Middleware Architecture',
      'Legacy System Modernization & Rationalization'
    ],
    clientOutcomes: [
      'Streamlined workflows with 50%+ reduction in cycle latency',
      'Full regulatory compliance and audit-ready governance',
      'Seamless interoperability across legacy and modern platforms'
    ]
  }
];

export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: 'Strategic' | 'Technology' | 'Operations' | 'Governance';
  deliverables: string[];
  businessValue: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  focusAreas: string[];
  impactMetrics: { label: string; value: string }[];
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  fullContent?: string[];
  imageUrl: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  pillar: string;
  industry: string;
  challenge: string;
  approach: string;
  transformation: string;
  outcome: string;
  metrics: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Technology' | 'Management' | 'Process Engineering';
  imageUrl: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  education: string;
  yearsExperience: number;
  linkedinUrl?: string;
  featuredQuote?: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  organization: string;
  pillarOfInterest: ConsultingPillarId | 'all' | 'custom';
  message: string;
  timeline: string;
}