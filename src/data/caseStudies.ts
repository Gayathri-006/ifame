import { CaseStudyItem } from '../types';

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'govtech-digital-portal',
    title: 'Nationwide Public Services Digital Modernization',
    pillar: 'Technology & Business Consulting',
    industry: 'GovTech',
    challenge: 'A national administrative body faced severe citizen application backlog, disjointed regional legacy mainframes & escalating security compliance vulnerabilities.',
    approach: 'IFAME conducted an enterprise architecture audit, established an ISO-compliant governance roadmap & designed an event-driven microservices integration layer.',
    transformation: 'Engineered a unified citizen portal with automated workflow routing, centralized identity governance & high-resilience hybrid cloud infrastructure.',
    outcome: 'Eliminated application processing backlog by 68%, achieved 99.99% system availability & delivered a seamless digital experience across 4M+ citizen touchpoints.',
    metrics: [
      { label: 'Cycle Time Reduction', value: '68%' },
      { label: 'Annual Cost Savings', value: '$14.2M' },
      { label: 'Citizen Satisfaction', value: '96%' }
    ]
  },
  {
    id: 'agtech-supply-chain',
    title: 'Intelligent Agricultural Telemetry & Cold-Chain Optimization',
    pillar: 'Technology & Management Consulting',
    industry: 'AgTech',
    challenge: 'A Multinational Agricultural Enterprise suffered significant perishable produce degradation & volatile logistics forecasting across multi-regional distribution networks.',
    approach: 'Deployed an IoT Sensor Telemetry Architecture integrated with predictive machine learning algorithms & real-time ERP visibility dashboards.',
    transformation: 'Connected farm telemetry, storage climate monitoring & predictive logistics routing into a centralized enterprise intelligence platform.',
    outcome: 'Reduced cold-chain spoilage by 42%, improved harvest-to-distribution forecasting accuracy to 94% & optimized fleet route efficiency by 31%.',
    metrics: [
      { label: 'Spoilage Reduction', value: '42%' },
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'Throughput Speed', value: '+35%' }
    ]
  },
  {
    id: 'enterprise-grc-modernization',
    title: 'Global Manufacturing Process Re-Engineering & ISO Framework Integration',
    pillar: 'Business Consulting',
    industry: 'Enterprise Operations',
    challenge: 'An Industrial manufacturing conglomerate operated with disparate quality standards, fragmented shop-floor protocols & slow regulatory reporting across 12 production facilities.',
    approach: 'Executed lean six sigma process Diagnostics, Structured Standardized Operational SOPs & Deployed Automated GRC Compliance Tracking Systems.',
    transformation: 'Unified shop-floor operations with standardized ISO 9001 & ISO 27001 control frameworks, integrating production ERP with real-time audit dashboards.',
    outcome: 'Reduced Operational Defects by 45%, achieved 100% first-pass ISO certification across all 12 plants & accelerated production cycle turnaround by 28%.',
    metrics: [
      { label: 'Defect Reduction', value: '45%' },
      { label: 'Audit Readiness', value: '100%' },
      { label: 'Production Velocity', value: '+28%' }
    ]
  }
];