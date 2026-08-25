import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import { INDUSTRIES } from '../data/industries';
import { ConsultingPillarId } from '../types';

interface NavbarProps {
  onSelectPillar: (pillarId: ConsultingPillarId) => void;
  onSelectCapability: (capId: string) => void;
  onSelectIndustry: (indId: string) => void;
  onNavigate: (page: string) => void;
  currentPage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectPillar,
  onSelectCapability,
  onSelectIndustry,
  onNavigate,
  currentPage = 'home',
}) => {
  const isHome = currentPage === 'home';

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'industries' | null>(
    null
  );
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'who-we-are',
        'vision',
        'mission',
        'core-pillars',
        'industries',
        'our-ecosystem',
        'partners',
        'insights',
      ];

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
    }
  }, [isHome]);

  /*
   * Scroll to a section while accounting for
   * the fixed navbar height.
   */
  const scrollToWithOffset = (el: HTMLElement) => {
    const header = document.getElementById('main-navigation-bar');

    const headerHeight = header ? header.offsetHeight : 80;
    const extraGap = 16;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      extraGap;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });
  };

  /*
   * Main navigation scroll handler.
   */
  const scrollToSection = (sectionId: string) => {
    setActiveDropdown(null);

    if (isHome) {
      const el = document.getElementById(sectionId);

      if (el) {
        scrollToWithOffset(el);
      }

      return;
    }

    onNavigate(sectionId);

    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(sectionId);

      if (el) {
        scrollToWithOffset(el);
      } else if (attempts < 30) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(tryScroll);
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
      {/* Back arrow — only shown on non-home pages */}
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

      {/* =========================================================
          MAIN NAVBAR CONTAINER
          Logo stays on the left.
          Navigation stays centered.
         ========================================================= */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 flex items-center">
        {/* ================= LOGO ================= */}
        <button
          onClick={() => scrollToSection('home')}
          className="cursor-pointer focus:outline-none flex items-center"
          aria-label="IFAME Consulting Home"
          id="nav-logo-btn"
        >
          <Logo variant="light" size="md" />
        </button>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center whitespace-nowrap space-x-1 xl:space-x-2 text-[14.5px] font-medium text-slate-700">

          {/* ================= HOME ================= */}
          <button
            onClick={() => scrollToSection('home')}
            className={`relative whitespace-nowrap px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'home'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-home"
          >
            Home

            {isHome && activeSection === 'home' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>

          {/* ================= ABOUT US ================= */}
          <button
            onClick={() => scrollToSection('who-we-are')}
            className={`relative whitespace-nowrap min-w-[90px] px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'who-we-are'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-about-us"
          >
            About Us

            {isHome && activeSection === 'who-we-are' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>

          {/* ================= VISION ================= */}
          <button
            onClick={() => scrollToSection('vision')}
            className={`relative whitespace-nowrap px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'vision'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-vision"
          >
            Vision

            {isHome && activeSection === 'vision' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>

          {/* ================= MISSION ================= */}
          <button
            onClick={() => scrollToSection('mission')}
            className={`relative whitespace-nowrap px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'mission'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-mission"
          >
            Mission

            {isHome && activeSection === 'mission' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>

          {/* ================= INDUSTRIES ================= */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => scrollToSection('industries')}
              className={`flex items-center gap-1 whitespace-nowrap px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
                isHome && activeSection === 'industries'
                  ? 'text-[#0055d4] font-semibold'
                  : ''
              }`}
              id="nav-link-industries"
            >
              Industries

              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'industries'
                    ? 'rotate-180 text-[#0055d4]'
                    : 'text-slate-400'
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === 'industries' && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 6,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200/90 p-7 mt-1.5 z-50 overflow-hidden"
                >
                  {/* Dropdown Header */}
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

                  {/* Industry Cards */}
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
                          {/* Image */}
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

                          {/* Description */}
                          <div className="p-3.5">
                            <p className="text-[11.5px] text-slate-600 line-clamp-2 leading-relaxed">
                              {ind.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mt-3">
                              {ind.focusAreas
                                .slice(0, 2)
                                .map((focus, idx) => (
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

                        {/* Card Footer */}
                        <div className="px-3.5 pb-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          {ind.impactMetrics[0] && (
                            <span className="text-[11px] font-bold text-slate-700">
                              {ind.impactMetrics[0].value}{' '}
                              <span className="text-slate-400 font-normal">
                                {ind.impactMetrics[0].label}
                              </span>
                            </span>
                          )}

                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0055d4] group-hover:translate-x-1 transition-transform">
                            Details
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/80 -mx-7 -mb-7 px-7 py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                      <span>
                        Dedicated practice groups with deep sovereign
                        compliance & regulatory alignment.
                      </span>
                    </div>

                    <span className="font-semibold text-slate-700">
                      ISO 27001 & CMMI Level 5 Certified
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ================= VALUES ================= */}
          <button
            onClick={() => scrollToSection('core-pillars')}
            className={`relative whitespace-nowrap px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'core-pillars'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-values"
          >
            Values

            {isHome && activeSection === 'core-pillars' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>

          {/* ================= OUR ECOSYSTEM ================= */}
          <button
            onClick={() => scrollToSection('our-ecosystem')}
            className={`relative whitespace-nowrap px-3.5 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'our-ecosystem'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-ecosystem"
          >
            Our Ecosystem

            {isHome && activeSection === 'our-ecosystem' && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#0055d4] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
          </button>

          {/* ================= ALLIANCES ================= */}
          <button
            onClick={() => scrollToSection('partners')}
            className={`relative whitespace-nowrap px-3 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'partners'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-alliances"
          >
            Alliances
          </button>

          {/* ================= INSIGHTS ================= */}
          <button
            onClick={() => scrollToSection('insights')}
            className={`relative whitespace-nowrap px-3 py-2 transition-colors hover:text-[#0055d4] cursor-pointer ${
              isHome && activeSection === 'insights'
                ? 'text-[#0055d4] font-semibold'
                : ''
            }`}
            id="nav-link-insights"
          >
            Insights
          </button>
        </nav>
      </div>
    </header>
  );
};