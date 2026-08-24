import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onExploreExpertise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutions,
  onExploreExpertise
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[84vh] lg:min-h-[88vh] bg-white flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 md:pb-32 overflow-hidden select-none"
    >
      {/* Right-side black gradient graphic panel — the hero's signature visual element */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[46%] pointer-events-none">
        {/* Angled black panel */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1c1c1c]"
          style={{ clipPath: 'polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />

        {/* Constellation / network motif in monochrome */}
        <svg
          className="absolute inset-0 w-full h-full opacity-90"
          viewBox="0 0 600 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1">
            <line x1="180" y1="120" x2="340" y2="220" />
            <line x1="340" y1="220" x2="300" y2="380" />
            <line x1="340" y1="220" x2="500" y2="180" />
            <line x1="300" y1="380" x2="470" y2="440" />
            <line x1="300" y1="380" x2="200" y2="480" />
            <line x1="470" y1="440" x2="560" y2="360" />
            <line x1="200" y1="480" x2="260" y2="620" />
            <line x1="260" y1="620" x2="440" y2="640" />
            <line x1="440" y1="640" x2="470" y2="440" />
            <line x1="180" y1="120" x2="120" y2="260" />
            <line x1="120" y1="260" x2="200" y2="480" />
          </g>
          <g fill="#ffffff">
            <circle cx="180" cy="120" r="3" fillOpacity="0.7" />
            <circle cx="340" cy="220" r="4.5" fillOpacity="0.9" />
            <circle cx="500" cy="180" r="2.5" fillOpacity="0.5" />
            <circle cx="300" cy="380" r="3.5" fillOpacity="0.8" />
            <circle cx="470" cy="440" r="5" fillOpacity="1" />
            <circle cx="560" cy="360" r="2.5" fillOpacity="0.5" />
            <circle cx="200" cy="480" r="3" fillOpacity="0.6" />
            <circle cx="260" cy="620" r="4" fillOpacity="0.85" />
            <circle cx="440" cy="640" r="3" fillOpacity="0.6" />
            <circle cx="120" cy="260" r="2.5" fillOpacity="0.5" />
          </g>
        </svg>

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/[0.06] rounded-full blur-[100px]" />
      </div>

      {/* Content Container with Left-to-Right and Fade Motion Transitions */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          
          {/* Subtle Category Pill with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-slate-700" />
            <span>GLOBAL ADVISORY & STRATEGY</span>
          </motion.div>

          {/* Main Headline - Refined Font Weight (not overly bold) and Smooth Motion Transitions */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-[42px] lg:text-[46px] font-semibold text-slate-950 tracking-[-0.015em] leading-[1.18] uppercase font-['Outfit',sans-serif]"
              id="hero-main-heading"
            >
              NAVIGATE <span className="font-black text-[#0a0a0a] underline decoration-4 decoration-slate-300 underline-offset-4">COMPLEXITY.</span>
              <br />
              ENABLE <span className="font-black text-[#0a0a0a] underline decoration-4 decoration-slate-300 underline-offset-4">TRANSFORMATION.</span>
            </h1>
          </motion.div>

          {/* Subtitle with Staggered Entrance Motion */}
                    {/* Subtitle with Staggered Entrance Motion */}
                    {/* Subtitle with Staggered Entrance Motion */}
          <motion.p
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 text-sm sm:text-base md:text-[15.5px] font-normal leading-[1.65] mt-4 mb-8 max-w-lg text-balance"
            id="hero-supporting-copy"
          >
            Management&nbsp;&nbsp; Technology&nbsp;&nbsp; Business
            <br />
            Consulting&nbsp;&nbsp;for&nbsp;&nbsp;Digital&nbsp;&nbsp;Transformation.
          </motion.p>

          {/* Action CTAs with Interactive Hover & Entry Motion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6"
          >
            {/* Primary Black Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreSolutions}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#0a0a0a] hover:bg-[#000000] text-white text-sm font-semibold tracking-wide shadow-lg shadow-slate-300/60 hover:shadow-slate-400/60 transition-all duration-200 cursor-pointer group"
              id="hero-explore-solutions-btn"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Link */}
            <motion.button
              whileHover={{ x: 2 }}
              onClick={onExploreExpertise}
              className="inline-flex items-center gap-2 text-slate-800 hover:text-[#0a0a0a] text-sm font-medium transition-colors group cursor-pointer py-2 px-1"
              id="hero-our-expertise-btn"
            >
              <span>Our Expertise</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};