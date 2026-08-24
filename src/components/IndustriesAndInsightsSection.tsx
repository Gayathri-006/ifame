import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/industries';

interface IndustriesAndInsightsSectionProps {
  onSelectIndustry: (indId: string) => void;
  onExploreInsights: () => void;
  onViewAllIndustries: () => void;
}

export const IndustriesAndInsightsSection: React.FC<IndustriesAndInsightsSectionProps> = ({
  onSelectIndustry,
  onExploreInsights,
  onViewAllIndustries
}) => {
  return (
    <section id="industries" className="relative bg-white py-16 md:py-24 overflow-hidden border-t border-slate-100">
      {/* Black rays fading into the white background, top-left corner */}
      <div
        className="hidden md:block absolute -left-10 -top-10 w-[380px] h-[380px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from -20deg at 0% 0%, #0a0a0a 0deg 2deg, transparent 2deg 10deg, #0a0a0a 10deg 12deg, transparent 12deg 20deg, #0a0a0a 20deg 22deg, transparent 22deg 32deg, #0a0a0a 32deg 34deg, transparent 34deg 90deg)',
          maskImage: 'radial-gradient(circle at 0% 0%, black 0%, black 12%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 0% 0%, black 0%, black 12%, transparent 75%)',
          opacity: 0.06,
        }}
      />
      {/* Background Subtle Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-slate-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-950 tracking-tight uppercase leading-snug">
              INDUSTRIES WE EMPOWER
            </h2>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">
              Solutions tailored for sectors shaping the future.
            </p>
            <button
              onClick={onViewAllIndustries}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-slate-600 mt-6 group transition-colors cursor-pointer"
              id="view-all-industries-btn"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>

          {/* Middle 3 Columns: Industry Cards (GovTech, AgTech, EdTech) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: -35, y: 15 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectIndustry(industry.id)}
                className="group relative rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[260px] p-5"
                id={`industry-card-${industry.id}`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={industry.imageUrl}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="mt-4 pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-neutral-200 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Insights & Perspectives Callout */}
          <div className="lg:col-span-3 relative rounded-xl bg-gradient-to-br from-slate-950 to-[#0a0a0a] border border-slate-800 p-6 flex flex-col justify-between h-full min-h-[220px]">
            {/* Subtle SVG wave mesh in background */}
            <svg
              className="absolute right-0 bottom-0 w-44 h-44 opacity-20 pointer-events-none text-neutral-400"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M 10 90 Q 50 10 90 90"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <path
                d="M 20 80 Q 60 20 95 85"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="50" cy="50" r="2" fill="currentColor" />
              <circle cx="70" cy="40" r="3" fill="currentColor" />
              <circle cx="85" cy="70" r="2.5" fill="currentColor" />
            </svg>

            <div>
              <h2 className="text-lg md:text-xl font-extrabold text-white tracking-tight uppercase leading-snug">
                INSIGHTS & PERSPECTIVES
              </h2>
              <p className="text-xs md:text-sm text-slate-400 mt-3 leading-relaxed">
                Thought leadership on strategy, technology and transformation.
              </p>
            </div>

            <div className="mt-6 pt-2">
              <button
                onClick={onExploreInsights}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 group transition-colors cursor-pointer"
                id="explore-insights-btn"
              >
                <span>Explore Insights</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};