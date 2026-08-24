import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe as GlobeIcon, Wheat, Fish, FlaskConical, Globe2 } from 'lucide-react';
import { Logo } from '../../components/Logo';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const PRACTICE_PILLARS = [
  { icon: Wheat, label: 'Agriculture Innovation' },
  { icon: Fish, label: 'Aquaculture Sustainability' },
  { icon: FlaskConical, label: 'Research & Development' },
  { icon: Globe2, label: 'Global Collaboration' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="footer-section" className="bg-white text-slate-500 pt-12 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-slate-200">

          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate?.('home')}
              className="text-left focus:outline-none cursor-pointer"
              id="agritech-footer-logo-btn"
            >
              <Logo variant="dark" size="md" />
            </button>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Empowering global agribusinesses, governments, and institutional leaders with high-impact strategy, cutting-edge technology, and sustainable digital transformation frameworks.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#linkedin"
                id="social-linkedin"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-[#383838] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                id="social-twitter"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-[#383838] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#globe"
                id="social-globe"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:text-white hover:bg-[#383838] flex items-center justify-center transition-colors"
                aria-label="Global Network"
              >
                <GlobeIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Practice Pillars: blended inline, matching the rest of the footer's style */}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                {PRACTICE_PILLARS.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <Icon className="w-3.5 h-3.5 text-stone-900" strokeWidth={1.75} />
                      <span>{p.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed max-w-sm">
                Empowering nations through agri innovation, research &amp; sustainability development.
              </p>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('agri-tech')}
                  className="text-slate-500 hover:text-stone-900 transition-colors flex items-center text-left cursor-pointer"
                >
                  <span>Agri-Tech & BioSystems</span>
                  <span className="ml-1.5 px-1.5 py-0.2 bg-stone-50 text-stone-900 text-[10px] rounded border border-stone-200">Active</span>
                </button>
              </li>
              <li>
                <a href="#digital-transformation" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#enterprise-ai" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Enterprise AI & Analytics
                </a>
              </li>
              <li>
                <a href="#sustainability" className="text-slate-500 hover:text-slate-900 transition-colors">
                  ESG & Sustainability
                </a>
              </li>
              <li>
                <a href="#supply-chain" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Agri-Supply Chain
                </a>
              </li>
            </ul>
          </div>

          {/* Advisory & Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services-section" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Agri-Tech Strategy
                </a>
              </li>
              <li>
                <a href="#services-section" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Precision & Smart Farming
                </a>
              </li>
              <li>
                <a href="#maturity-section" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Capability Maturity Model
                </a>
              </li>
              <li>
                <a href="#ecosystem-section" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Ecosystem Partnerships
                </a>
              </li>
              <li>
                <a href="#process-section" className="text-slate-500 hover:text-slate-900 transition-colors">
                  Transformation Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Global Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">
              Global Advisory
            </h4>
            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                <span>F-2-11, 2nd Floor, Block F, Pusat Komersil Jalan Kuching, No.115 Jalan Kepayang off Jalan Kuching, 51200 Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-stone-900 shrink-0" />
                <a href="mailto:agritech@ifameconsulting.com" className="hover:text-slate-900 transition-colors">
                  agritech@ifameconsulting.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-stone-900 shrink-0" />
                <a href="tel:+60312345678" className="hover:text-slate-900 transition-colors">+60 3-1234 5678</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} IFAME Consulting. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms of Engagement</a>
            <a href="#security" className="hover:text-slate-600 transition-colors">Data Governance</a>
            <a href="#cookies" className="hover:text-slate-600 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};