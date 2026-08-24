import { InsightArticle } from '../types';

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'enterprise-ai-governance',
    title: 'Architecting Enterprise AI: Balancing Acceleration with Governance & Data Integrity',
    category: 'AI & Data Strategy',
    readTime: '6 min read',
    date: 'August 2026',
    featured: true,
    summary: 'How Executive Leadership Teams Can Transition from Fragmented AI Experiments to a Governed, Value-Generating Enterprise Intelligence Layer.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'IFAME Technology Practice',
      role: 'Enterprise AI & Architecture'
    },
    fullContent: [
      'The transition from exploratory GenAI prototypes to core production workloads requires rigorous data lineage, model governance & clear economic metrics.',
      'Organizations that succeed build shared data platforms that bridge operational data with enterprise intelligence frameworks without compromising security or regulatory boundaries.',
      'Our consulting methodology establishes clear guardrails, ensuring AI deployments directly improve business cycle times while strictly maintaining compliance.'
    ]
  },
  {
    id: 'legacy-system-rationalization',
    title: 'De-Risking Legacy Modernization: A Phased Approach to Core System Rationalization',
    category: 'Technology Consulting',
    readTime: '5 min read',
    date: 'July 2026',
    summary: 'A Strategic Blueprint for Modernizing Legacy Monolithic Architectures without Interrupting Live Revenue Operations or Customer Workflows.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'IFAME Process & Architecture Practice',
      role: 'Systems Modernization'
    },
    fullContent: [
      'Monolithic legacy systems represent high maintenance overhead & technical debt. A direct "rip-and-replace" strategy often carries unacceptable organizational risk.',
      'By implementing domain-driven strangler patterns & modern API integration layers, enterprises can modernize core capabilities incrementally with zero downtime.',
      'We outline how rationalizing application portfolios enables significant cost reduction & faster time-to-market.'
    ]
  },
  {
    id: 'iso-grc-frameworks-digital-age',
    title: 'Continuous Compliance: Embedding ISO Standards & GRC into Agile Delivery Workflows',
    category: 'Process Consulting',
    readTime: '4 min read',
    date: 'June 2026',
    summary: 'Transforming Compliance from a Static Annual Audit Burden into an Automated, Continuous Operational Advantage.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    author: {
      name: 'IFAME Governance & Risk Practice',
      role: 'Compliance & Quality Standards'
    },
    fullContent: [
      'Regulatory requirements across cybersecurity, data privacy & quality standards (ISO 27001, ISO 9001, SOC 2) are accelerating globally.',
      'Embedding automated controls into digital delivery pipelines ensures ongoing audit readiness & minimizes manual compliance overhead.',
      'Explore the structural shifts required to align process engineering with modern governance standards.'
    ]
  }
];