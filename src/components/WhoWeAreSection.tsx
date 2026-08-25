import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, TrendingUp, Cpu, Leaf } from 'lucide-react';

// Custom target-with-arrow icon (Strategy) — lucide's plain "Target" read as a
// flat spiral at small sizes, so this is a hand-drawn version with a visible
// arrow striking the bullseye, matching the reference mark.
const StrategyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="11" cy="13" r="4.6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="11" cy="13" r="1.3" fill="currentColor" />
    <path
      d="M21.5 2.5L14.2 9.8M21.5 2.5L17 3M21.5 2.5L21 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CORE_PILLARS = [
  { id: 'strategy', label: 'Strategy', icon: StrategyIcon },
  { id: 'innovation', label: 'Innovation', icon: Lightbulb },
  { id: 'investment', label: 'Investment', icon: TrendingUp },
  { id: 'technology', label: 'Technology', icon: Cpu },
  { id: 'sustainability', label: 'Sustainability', icon: Leaf },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <section
      id="who-we-are"
      className="relative z-20 -mt-10 md:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
    >
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-100 p-6 sm:p-8 md:p-9 lg:p-10">

        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#c9a96a]" />
            <span className="text-[13px] sm:text-sm font-semibold tracking-[0.24em] text-[#0b3d4a] uppercase font-['Inter',sans-serif]">
              Who We Are
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight mt-3 font-['Fraunces',serif]"
            id="who-we-are-heading"
          >
            Strategic Project Development &amp; Transformation Partner
          </h2>
        </motion.div>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 space-y-3 max-w-3xl"
        >
          <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
            IFAME Consulting Sdn. Bhd. is a Malaysian strategic consulting and project
            development company that transforms high-potential ideas, assets and
            opportunities into bankable, sustainable and commercially viable projects.
            Our multidisciplinary teams work at the intersection of policy, capital and
            technology, guiding initiatives from early-stage concept through to
            full commercial deployment.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
            We bridge Government, investors, research institutions, technology providers,
            industry and communities to build integrated economic ecosystems. By aligning
            stakeholders around a shared roadmap, we help unlock financing, de-risk
            execution and accelerate the path from idea to impact.
          </p>
          <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
            Every engagement is grounded in local market realities and global best
            practice, giving our partners the clarity and confidence to invest in
            projects that are built to last.
          </p>
        </motion.div>

        {/* Pillars row */}
        <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4">
          {CORE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center gap-2.5 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0b3d4a]/[0.07] border border-[#0b3d4a]/15 flex items-center justify-center group-hover:bg-[#0b3d4a] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#0b3d4a] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.08em] text-slate-800 uppercase">
                  {pillar.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};