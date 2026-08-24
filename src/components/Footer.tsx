import React from 'react';
import { Wheat, Fish, FlaskConical, Globe2, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { CONSULTING_PILLARS } from '../data/services';
import { INDUSTRIES } from '../data/industries';
import { CAPABILITIES } from '../data/capabilities';
import { ConsultingPillarId } from '../types';

interface FooterProps {
  onSelectPillar: (pillarId: ConsultingPillarId) => void;
  onSelectIndustry: (indId: string) => void;
  onSelectCapability: (capId: string) => void;
  onOpenContact: () => void;
}

const PRACTICE_PILLARS = [
  { icon: Wheat, label: 'Agriculture Innovation' },
  { icon: Fish, label: 'Aquaculture Sustainability' },
  { icon: FlaskConical, label: 'Research & Development' },
  { icon: Globe2, label: 'Global Collaboration' },
];

export const Footer: React.FC<FooterProps> = ({
  onSelectPillar,
  onSelectIndustry,
  onSelectCapability,
  onOpenContact
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-500 text-xs border-t border-slate-200 pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Main Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 py-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Positioning (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 pr-0 lg:pr-6">
            <button
              onClick={() => scrollTo('home')}
              className="text-left focus:outline-none cursor-pointer"
              id="footer-logo-btn"
            >
              <Logo variant="dark" size="md" />
            </button>
            
            <p className="text-slate-500 text-sm leading-relaxed mt-5 max-w-sm">
              Management, technology, and process consulting for organizations navigating complexity and executing durable enterprise transformation.
            </p>

            <div className="mt-6">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Consultation Desk</span>
              </button>
            </div>

            {/* Practice Pillars: small inline icon row, blended into the brand column */}
            <div className="mt-7 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {PRACTICE_PILLARS.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <Icon className="w-3.5 h-3.5 text-slate-900" strokeWidth={1.75} />
                      <span>{p.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-400 mt-3 leading-relaxed max-w-sm">
                Empowering nations through agri innovation, research &amp; sustainability development.
              </p>
            </div>
          </div>

          {/* Col 2: Consulting Pillars */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Consulting Pillars
            </h4>
            <ul className="space-y-2.5">
              {CONSULTING_PILLARS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectPillar(p.id)}
                    className="hover:text-slate-950 transition-colors text-left cursor-pointer"
                  >
                    {p.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('case-studies')}
                  className="hover:text-slate-950 transition-colors text-left cursor-pointer"
                >
                  Client Impact & Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Practices */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <button
                    onClick={() => onSelectIndustry(ind.id)}
                    className="hover:text-slate-950 transition-colors text-left cursor-pointer"
                  >
                    {ind.name} Practice
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('insights')}
                  className="hover:text-slate-950 transition-colors text-left cursor-pointer"
                >
                  Insights & Perspectives
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2">
              {CAPABILITIES.slice(0, 5).map((cap) => (
                <li key={cap.id}>
                  <button
                    onClick={() => onSelectCapability(cap.id)}
                    className="hover:text-slate-950 transition-colors text-left truncate max-w-[180px] cursor-pointer"
                  >
                    {cap.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('expertise')}
                  className="text-slate-900 hover:underline font-medium cursor-pointer"
                >
                  View All 8 Capabilities →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Get in Touch (Contact & Address) */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                <a href="tel:+60312345678" className="hover:text-slate-950 transition-colors">
                  +60 3-1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                <a href="mailto:info@ifameconsulting.com" className="hover:text-slate-950 transition-colors break-all">
                  info@ifameconsulting.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  F-2-11, 2nd Floor, Block F, Pusat Komersil Jalan Kuching, No.115 Jalan Kepayang off Jalan Kuching, 51200 Kuala Lumpur, Malaysia
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} IFAME Consulting. All rights reserved. Management, Technology & Process Advisory.
          </div>
          <div className="flex items-center gap-6">
            <span>ISO 9001 / ISO 27001 Advisory</span>
            <span>Enterprise GRC</span>
            <span>Global Delivery Frameworks</span>
          </div>
        </div>

      </div>
    </footer>
  );
};