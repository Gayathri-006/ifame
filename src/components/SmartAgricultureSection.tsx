import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Wheat, PackageCheck, Factory, Truck, BadgeCheck } from 'lucide-react';

const PILLARS = [
  { icon: Sprout, label: 'Smart Farming & Precision Agriculture' },
  { icon: Wheat, label: 'High-Value Crops & Integrated Farming' },
  { icon: PackageCheck, label: 'Post-Harvest Technology' },
  { icon: Factory, label: 'Food Processing & Value Addition' },
  { icon: Truck, label: 'Supply Chain & Logistics' },
  { icon: BadgeCheck, label: 'Export Market & Certification' },
];

export const SmartAgricultureSection: React.FC = () => {
  return (
    <section
      id="smart-agriculture"
      className="relative bg-white py-24 md:py-32 overflow-hidden select-none"
    >
      {/* Ambient field-row backdrop, quiet and abstract */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(100deg, rgba(11,61,74,0.035) 0px, rgba(11,61,74,0.035) 2px, transparent 2px, transparent 64px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-8 items-center">
        {/* Copy column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.2em] text-xs font-semibold text-[#0b3d4a]/70 mb-4"
          >
            Sector Focus
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#0a1620] tracking-[-0.01em] leading-[1.2] font-['Fraunces',serif]"
          >
            Smart Agriculture{' '}
            <span className="italic font-medium text-[#0b3d4a]">& Agrofood</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-slate-600 text-base md:text-[16.5px] leading-[1.7] mt-6 max-w-md"
          >
            Building resilient, technology-driven food systems, from precision
            farming in the field to certified produce on the global shelf.
          </motion.p>
        </div>

        {/* Pillar list column */}
        <div className="grid sm:grid-cols-2 gap-4">
          {PILLARS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[#0b3d4a]/25 hover:shadow-lg hover:shadow-[#0b3d4a]/10 transition-all duration-300 p-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0b3d4a] group-hover:bg-[#092e38] flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <p className="text-[#0a1620] text-sm font-medium leading-snug pt-2.5">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
