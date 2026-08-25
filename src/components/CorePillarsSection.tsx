import React from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, TrendingUp, Cpu, Leaf } from 'lucide-react';

const PILLARS = [
  { icon: Compass, number: '01', title: 'Strategy', description: 'Strategic insight and integrated planning' },
  { icon: Lightbulb, number: '02', title: 'Innovation', description: 'R&D, creativity and continuous improvement' },
  { icon: TrendingUp, number: '03', title: 'Investment', description: 'Capital mobilization and value creation' },
  { icon: Cpu, number: '04', title: 'Technology', description: 'Smart solutions and digital transformation' },
  { icon: Leaf, number: '05', title: 'Sustainability', description: 'Environmental responsibility and community well-being' },
];

export const CorePillarsSection: React.FC = () => {
  return (
    <section id="core-pillars" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* soft brand-color glow for the glass panels to catch */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0b3d4a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c9a96a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-24 md:mb-28">
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#0b3d4a] uppercase font-['Inter',sans-serif]">
            Our Core Pillars
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mt-3 font-['Fraunces',serif]">
            Five pillars that drive our strategy
          </h3>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-4">
            and every project we develop
          </p>
        </div>

        <div className="relative">
          {/* connecting line running through every icon badge, desktop only */}
          <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#c9a96a]/50 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-16 md:gap-y-0">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              const zigzag = idx % 2 === 0 ? 'md:mt-6' : 'md:mt-16';
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* faint editorial numeral behind the icon */}
                  <span className="absolute -top-6 text-6xl md:text-7xl font-bold text-[#0b3d4a]/[0.06] font-['Fraunces',serif] select-none leading-none pointer-events-none">
                    {pillar.number}
                  </span>

                  {/* gem-shaped icon badge with gradient ring */}
                  <div className="relative w-16 h-16 rotate-45 rounded-xl bg-gradient-to-br from-[#c9a96a] to-[#0b3d4a] p-[2px] transition-transform duration-500 group-hover:rotate-[135deg]">
                    <div className="w-full h-full rounded-[10px] bg-[#0b3d4a] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#c9a96a] -rotate-45 transition-transform duration-500 group-hover:rotate-[-135deg]" strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* glass content panel, staggered per column */}
                  <div className={`relative w-full mt-8 ${zigzag}`}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c9a96a]/30 to-[#0b3d4a]/20 -z-10 translate-y-1 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="rounded-2xl border border-[#0b3d4a]/15 bg-[#0b3d4a]/[0.04] backdrop-blur-sm px-4 py-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-[#0b3d4a]/[0.09] group-hover:border-[#c9a96a]/40 group-hover:shadow-xl group-hover:shadow-[#0b3d4a]/10">
                      <h4 className="text-base font-bold text-slate-900 font-['Fraunces',serif]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-2">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};