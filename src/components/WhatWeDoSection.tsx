import React from 'react';
import { motion } from 'motion/react';
import { Users, Cpu, Network, ArrowRight } from 'lucide-react';
import { CONSULTING_PILLARS } from '../data/services';
import { ConsultingPillarId } from '../types';

interface WhatWeDoSectionProps {
  onSelectPillar: (pillarId: ConsultingPillarId) => void;
  onLearnMoreAboutUs: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  onSelectPillar,
  onLearnMoreAboutUs
}) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#111111]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#111111]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#111111]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section id="what-we-do" className="relative z-20 -mt-10 md:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Elevated White Card Container matching Figma */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-100 p-6 sm:p-8 md:p-10 lg:p-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          
          {/* Col 1: Heading & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between h-full pr-0 lg:pr-2"
          >
            <div>
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#0a0a0a] uppercase">
                WHAT WE DO
              </span>
              <h2
                className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-slate-900 tracking-tight leading-snug mt-2.5 font-['Outfit',sans-serif]"
                id="what-we-do-heading"
              >
                End-to-end Consulting for Transformative Impact
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3.5">
                We help organizations navigate complexity, accelerate transformation and build future-ready capabilities.
              </p>
            </div>

            <div className="mt-6 pt-2">
              <button
                onClick={onLearnMoreAboutUs}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0a0a0a] hover:text-[#000000] group cursor-pointer"
                id="what-we-do-learn-more"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Cols 2, 3, 4: Pillar Cards */}
          {CONSULTING_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: -30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-50/70 hover:bg-white rounded-xl md:rounded-2xl p-5 sm:p-6 border border-slate-100/90 hover:border-neutral-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full group"
              id={`pillar-card-${pillar.id}`}
            >
              <div>
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-neutral-200/80 transition-colors">
                  {getPillarIcon(pillar.iconName)}
                </div>

                {/* Pillar Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0a0a0a] transition-colors leading-tight font-['Outfit',sans-serif]">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2.5">
                  {pillar.shortDesc}
                </p>
              </div>

              {/* View More Link */}
              <div className="mt-5 pt-3 border-t border-slate-200/50">
                <button
                  onClick={() => onSelectPillar(pillar.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0a0a0a] hover:text-[#000000] group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};