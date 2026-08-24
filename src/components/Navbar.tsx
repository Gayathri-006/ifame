import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ArrowLeft, Menu, X, Users, Cpu, Network, ShieldCheck, TrendingUp, Sparkles, BrainCircuit, Cloud, Settings2, Activity, Box } from 'lucide-react';
import { Logo } from './Logo';
import { CONSULTING_PILLARS } from '../data/services';
import { CAPABILITIES } from '../data/capabilities';
import { INDUSTRIES } from '../data/industries';
import { ConsultingPillarId } from '../types';

interface NavbarProps {
  onOpenContact: () => void;
  onSelectPillar: (pillarId: ConsultingPillarId) => void;
  onSelectCapability: (capId: string) => void;
  onSelectIndustry: (indId: string) => void;
  onNavigate: (page: string) => void;
  /** Which page is currently rendered. Defaults to 'home'. */
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onSelectPillar,
  onSelectCapability,
  onSelectIndustry,
  onNavigate,
  currentPage = 'home',
}) => {
  const isHome = currentPage === 'home';

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'what-we-do' | 'industries' | 'capabilities' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isHome) return; // section spy only makes sense on the home page

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'what-we-do', 'expertise', 'industries', 'partners', 'insights'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    // On any non-home page, treat the header as "scrolled" style (compact, shadowed)
    if (!isHome) setIsScrolled(true);
  }, [isHome]);

  // The single click handler every nav item funnels through.
  // On the home page it scrolls directly. On any other page it
  // reports the target section id to the parent (which navigates home,
  // e.g. via history.back() for the AgTech page), then polls for that
  // section to exist in the DOM and scrolls once it mounts.
  const scrollToSection = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    onNavigate(sectionId);
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 30) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  };

  // Wraps callbacks like onSelectPillar that aren't tied to a DOM id —
  // if we're not on home, hop home first, then fire the callback.
  const runOnHome = (action: () => void) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (isHome) {
      action();
      return;
    }
    onNavigate('home');
    setTimeout(action, 80);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'management': return <Users className="w-5 h-5 text-[#0066ee]" />;
      case 'technology': return <Cpu className="w-5 h-5 text-[#0066ee]" />;
      case 'process': return <Network className="w-5 h-5 text-[#0066ee]" />;
      default: return <Sparkles className="w-5 h-5 text-[#0066ee]" />;
    }
  };

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#0066ee]" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#0066ee]" />;
      case 'BrainCircuit': return <BrainCircuit className="w-4 h-4 text-[#0066ee]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#0066ee]" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#0066ee]" />;
      case 'Settings2': return <Settings2 className="w-4 h-4 text-[#0066ee]" />;
      case 'Activity': return <Activity className="w-4 h-4 text-[#0066ee]" />;
      case 'Box': return <Box className="w-4 h-4 text-[#0066ee]" />;
      default: return <Sparkles className="w-4 h-4 text-[#0066ee]" />;
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-sm border-b border-slate-100 py-[5px]'
          : 'border-b border-slate-100/80 py-[7px]'
      }`}
    >
      {/* Back arrow — only shown on non-home pages, pinned to the true left edge */}
      {!isHome && (
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Back to IFAME home"
          id="nav-back-btn"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-50 transition-all cursor-pointer shrink-0 z-10"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Left: Brand Logo — same position/size on every page */}
        <button
          onClick={() => scrollToSection('home')}
          className="cursor-pointer focus:outline-none flex items-center"
          aria-label="IFAME Consulting Home"
          id="nav-logo-btn"
        >
          <Logo variant="light" size="md" />
        </button>

        {/* Center: Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14.5px] font-medium text-slate-700">
          {/* Home */}
          <button
            onClick={() => scrollToSection('home')}
            className={`relative px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'home' ? 'text-[#0055d4] font-semibold' : ''
            }`}
            id="nav-link-home"
          >
            Home
            {isHome && activeSection === 'home' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>

          {/* What We Do Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('what-we-do')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => scrollToSection('what-we-do')}
              className={`flex items-center gap-1 px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
                isHome && activeSection === 'what-we-do' ? 'text-[#0055d4] font-semibold' : ''
              }`}
              id="nav-link-what-we-do"
            >
              What We Do
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'what-we-do' ? 'rotate-180 text-[#0055d4]' : 'text-slate-400'}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'what-we-do' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-5 mt-1"
                >
                  {CONSULTING_PILLARS.map((pillar) => (
                    <div
                      key={pillar.id}
                      onClick={() => runOnHome(() => onSelectPillar(pillar.id))}
                      className="group p-3.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer flex flex-col justify-between"
                      id={`nav-dropdown-${pillar.id}`}
                    >
                      <div>
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-[#0055d4] group-hover:text-white transition-colors">
                          {getPillarIcon(pillar.id)}
                        </div>
                        <h4 className="text-[14px] font-bold text-slate-900 group-hover:text-[#0055d4] transition-colors leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-[12px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                          {pillar.shortDesc}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[11.5px] font-semibold text-[#0055d4] mt-3 group-hover:translate-x-1 transition-transform">
                        Explore Scope <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown (Enlarged Mega-Box) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => scrollToSection('industries')}
              className={`flex items-center gap-1 px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
                isHome && activeSection === 'industries' ? 'text-[#0055d4] font-semibold' : ''
              }`}
              id="nav-link-industries"
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'industries' ? 'rotate-180 text-[#0055d4]' : 'text-slate-400'}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'industries' && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 p-7 mt-1.5 z-50 overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <div>
                      <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#0055d4]">
                        SECTOR ADVISORY & ECOSYSTEMS
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 font-['Outfit',sans-serif]">
                        Specialized Industry Practices
                      </h3>
                    </div>
                    <button
                      onClick={() => scrollToSection('industries')}
                      className="text-xs font-bold text-[#0055d4] hover:text-[#003da0] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore All 3 Target Verticals</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-5">
                    {INDUSTRIES.map((ind) => (
                      <div
                        key={ind.id}
                        onClick={() => {
                          setActiveDropdown(null);
                          onSelectIndustry(ind.id);
                        }}
                        className="group rounded-xl overflow-hidden border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer bg-slate-50/50 flex flex-col justify-between"
                        id={`nav-ind-${ind.id}`}
                      >
                        <div>
                          <div className="h-32 overflow-hidden relative">
                            <img
                              src={ind.imageUrl}
                              alt={ind.name}
                              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="px-2 py-0.5 rounded-full text-[9.5px] font-extrabold bg-blue-600/90 text-white uppercase tracking-wider backdrop-blur-sm">
                                Sector Vertical
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 left-3 right-3">
                              <span className="text-sm font-extrabold text-white tracking-wide block font-['Outfit',sans-serif]">
                                {ind.name}
                              </span>
                              <span className="text-[11px] text-blue-200/90 font-medium block truncate">
                                {ind.tagline}
                              </span>
                            </div>
                          </div>

                          <div className="p-3.5">
                            <p className="text-[11.5px] text-slate-600 line-clamp-2 leading-relaxed">
                              {ind.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-3">
                              {ind.focusAreas.slice(0, 2).map((focus, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-semibold"
                                >
                                  {focus}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="px-3.5 pb-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          {ind.impactMetrics[0] && (
                            <span className="text-[11px] font-bold text-slate-700">
                              {ind.impactMetrics[0].value} <span className="text-slate-400 font-normal">{ind.impactMetrics[0].label}</span>
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0055d4] group-hover:translate-x-1 transition-transform">
                            Details <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/80 -mx-7 -mb-7 px-7 py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Dedicated practice groups with deep sovereign compliance & regulatory alignment.</span>
                    </div>
                    <span className="font-semibold text-slate-700">ISO 27001 & CMMI Level 5 Certified</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Capabilities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('capabilities')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => scrollToSection('expertise')}
              className={`flex items-center gap-1 px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
                isHome && activeSection === 'expertise' ? 'text-[#0055d4] font-semibold' : ''
              }`}
              id="nav-link-capabilities"
            >
              Capabilities
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'capabilities' ? 'rotate-180 text-[#0055d4]' : 'text-slate-400'}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === 'capabilities' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-3 mt-1"
                >
                  {CAPABILITIES.map((cap) => (
                    <div
                      key={cap.id}
                      onClick={() => {
                        setActiveDropdown(null);
                        onSelectCapability(cap.id);
                      }}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/50 border border-transparent hover:border-blue-100 transition-colors cursor-pointer"
                      id={`nav-cap-${cap.id}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#0055d4] group-hover:text-white transition-colors">
                        {getCapabilityIcon(cap.iconName)}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-[#0055d4] transition-colors">
                          {cap.title}
                        </h4>
                        <p className="text-[11.5px] text-slate-500 mt-0.5 line-clamp-1">
                          {cap.shortDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Alliances */}
          <button
            onClick={() => scrollToSection('partners')}
            className={`px-3 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'partners' ? 'text-[#0055d4] font-semibold' : ''
            }`}
            id="nav-link-alliances"
          >
            Alliances
          </button>

          {/* Insights */}
          <button
            onClick={() => scrollToSection('insights')}
            className={`px-3 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'insights' ? 'text-[#0055d4] font-semibold' : ''
            }`}
            id="nav-link-insights"
          >
            Insights
          </button>

        </nav>

        {/* Right: Contact Button & Hamburger */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-[13.5px] font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer"
            id="nav-contact-btn"
          >
            Contact Us
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
            id="nav-hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Responsive Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 overflow-hidden shadow-xl"
            id="mobile-navigation-drawer"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left font-semibold text-slate-800 text-[15px] py-2 border-b border-slate-100 hover:text-[#0055d4]"
              >
                Home
              </button>

              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">What We Do</div>
                <div className="space-y-2 pl-2">
                  {CONSULTING_PILLARS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => runOnHome(() => onSelectPillar(p.id))}
                      className="w-full text-left text-sm font-medium text-slate-700 hover:text-[#0055d4] py-1 flex items-center justify-between"
                    >
                      <span>{p.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">Industries</div>
                <div className="space-y-2 pl-2">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onSelectIndustry(ind.id);
                      }}
                      className="w-full text-left text-sm font-medium text-slate-700 hover:text-[#0055d4] py-1 flex items-center justify-between"
                    >
                      <span>{ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollToSection('expertise')}
                className="text-left font-semibold text-slate-800 text-[15px] py-2 border-b border-slate-100 hover:text-[#0055d4]"
              >
                Capabilities & Expertise
              </button>

              <button
                onClick={() => scrollToSection('partners')}
                className="text-left font-semibold text-slate-800 text-[15px] py-2 border-b border-slate-100 hover:text-[#0055d4]"
              >
                Alliances
              </button>

              <button
                onClick={() => scrollToSection('insights')}
                className="text-left font-semibold text-slate-800 text-[15px] py-2 border-b border-slate-100 hover:text-[#0055d4]"
              >
                Insights & Perspectives
              </button>

              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-full bg-[#0a0a0a] text-white font-semibold text-center text-sm shadow-md hover:bg-[#000000] transition-colors"
                >
                  Contact IFAME Consulting
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};