import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroBg from '../assets/images/agri_drone_daylight_1787508232924.jpg';

interface AgriTechHeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const AgriTechHero: React.FC<AgriTechHeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center bg-white overflow-hidden border-b border-slate-200">
      {/* Background Image: Bright daytime crop field with hovering drone under soft white/pale blue sky */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Transforming Agriculture Through Technology, Data & Intelligence"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right-top md:object-center opacity-90"
        />
        
        {/* Soft, natural white gradient overlay on the left to ensure crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content - Clean White Neutral Styling with Sharp Slate/Black Typography */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 max-w-2xl"
            >
              {/* Subtle Eyebrow Pill */}
              <div className="inline-flex items-center space-x-2 bg-white/95 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                <span className="tracking-wide text-slate-800">GLOBAL ADVISORY &amp; STRATEGY • AGRI-TECH</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Transforming Agriculture<br />
                Through Technology,<br />
                <span className="text-stone-900 inline-block font-extrabold">
                  Data &amp; Intelligence.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed pt-1 max-w-xl">
                Building smarter, more sustainable and resilient agricultural systems through science, technology, AI and data-driven transformation.
              </p>
            </motion.div>

            {/* Action Buttons with Clean Neutral IFAME Pill Styling */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                id="hero-explore-capabilities-btn"
                onClick={onExploreClick}
                className="group inline-flex items-center space-x-2 bg-[#191919] hover:bg-[#303030] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#505050]"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                id="hero-talk-to-experts-btn"
                onClick={onContactClick}
                className="inline-flex items-center space-x-1.5 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold border border-slate-300 hover:border-slate-400 shadow-2xs transition-all cursor-pointer"
              >
                <span>Talk to Our Experts</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};