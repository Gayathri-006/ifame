import { IndustryItem } from '../types';

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'govtech',
    name: 'GovTech',
    tagline: 'Public Sector Digital Modernization',
    description: 'Building secure, efficient & citizen-centric Digital Systems.',
    fullDescription: 'We help Government Agencies, Municipal Authorities & Public Sector Institutions modernize legacy infrastructure, streamline citizen service delivery & enforce state-level cybersecurity and data privacy compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80', // neoclassical government dome / civic architecture
    focusAreas: [
      'Digital Citizen Portals & e-Governance',
      'Inter-Agency Data Interoperability',
      'Public Infrastructure Cybersecurity & Compliance',
      'Legacy Mainframe & Record Modernization'
    ],
    impactMetrics: [
      { label: 'Citizen Service Turnaround', value: '-65%' },
      { label: 'System Availability & Uptime', value: '99.99%' },
      { label: 'Compliance Audit Readiness', value: '100%' }
    ]
  },
  {
    id: 'agtech',
    name: 'AgTech',
    tagline: 'Intelligent Agricultural Systems & Supply Chains',
    description: 'Empowering Agriculture with Intelligent, data-driven solutions.',
    fullDescription: 'Enabling Agricultural Enterprises, Cooperatives & Food Production Networks to leverage IoT telemetry, Predictive Yield Analytics, Supply Chain Traceability & Smart Resource Allocation for Sustainable Productivity.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80', // modern smart tractor in sunset farmland
    focusAreas: [
      'Precision Agriculture & IoT Telemetry',
      'Supply Chain Traceability & Cold-Chain Tracking',
      'Predictive Yield Analytics & Weather Modeling',
      'Agricultural Enterprise Resource Planning (ERP)'
    ],
    impactMetrics: [
      { label: 'Input Resource Efficiency', value: '+35%' },
      { label: 'Supply Chain Loss Reduction', value: '-42%' },
      { label: 'Yield Forecasting Accuracy', value: '94%' }
    ]
  },
  {
    id: 'edtech',
    name: 'EdTech',
    tagline: 'Next-Generation Learning & Institutional Platforms',
    description: 'Transforming Education through Digital Learning and Intelligent Infrastructure.',
    fullDescription: 'Partnering with Universities, Educational Institutions & corporate learning academies to design agile digital learning ecosystems, campus management systems & adaptive learning platforms that scale globally.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80', // modern collaborative education & tech workspace
    focusAreas: [
      'Adaptive Digital Learning Environments (LMS/LXP)',
      'Campus Information & Academic Administration Systems',
      'Student Lifecycle Analytics & Retention Modeling',
      'Secure Remote Assessment & Proctoring Platforms'
    ],
    impactMetrics: [
      { label: 'Student Engagement Index', value: '+58%' },
      { label: 'Administrative Automation', value: '70%' },
      { label: 'Platform Concurrent Scale', value: '250k+' }
    ]
  }
];
