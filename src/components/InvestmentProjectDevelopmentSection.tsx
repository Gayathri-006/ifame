import React from 'react';
import { motion } from 'motion/react';
import {
  Search,
  ClipboardCheck,
  Layers,
  Handshake,
  Cog,
  TrendingUp,
} from 'lucide-react';

const STAGES = [
  { icon: Search, label: 'Opportunity Identification' },
  { icon: ClipboardCheck, label: 'Feasibility & Assessment' },
  { icon: Layers, label: 'Project Structuring' },
  { icon: Handshake, label: 'Investment Facilitation' },
  { icon: Cog, label: 'Implementation' },
  { icon: TrendingUp, label: 'Commercialisation & Scale-up' },
];

export const InvestmentProjectDevelopmentSection: React.FC = () => {
  return (
    <section
      id="investment-project-development"
      className="relative bg-slate-50 py-24 md:py-32 overflow-hidden select-none"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.2em] text-xs font-semibold text-[#0b3d4a]/70 mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#0a1620] tracking-[-0.01em] leading-[1.2] font-['Fraunces',serif]"
          >
            Investment &{' '}
            <span className="italic font-medium text-[#0b3d4a]">Project Development</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-slate-600 text-base md:text-[16.5px] leading-[1.7] mt-6"
          >
            We transform opportunities into investment-ready projects.
          </motion.p>
        </div>

        {/* Desktop: horizontal stepper with connecting line */}
        <div className="hidden lg:block relative">
          <div className="absolute top-7 left-0 right-0 h-px bg-slate-300" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="absolute top-7 left-0 right-0 h-px bg-[#0b3d4a]"
          />
          <div className="relative grid grid-cols-6 gap-4">
            {STAGES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-900/5 flex items-center justify-center relative z-10 hover:border-[#0b3d4a]/30 hover:shadow-[#0b3d4a]/10 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-[#0b3d4a]" strokeWidth={1.75} />
                  </motion.div>
                  <p className="text-[#0a1620] text-[13px] font-medium leading-snug mt-4 max-w-[130px]">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical stepper */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[26px] top-2 bottom-2 w-px bg-slate-300" />
          <div className="space-y-8">
            {STAGES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex items-center gap-5"
                >
                  <div className="shrink-0 w-14 h-14 -ml-8 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-900/5 flex items-center justify-center relative z-10">
                    <Icon className="w-6 h-6 text-[#0b3d4a]" strokeWidth={1.75} />
                  </div>
                  <p className="text-[#0a1620] text-sm font-medium leading-snug">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
