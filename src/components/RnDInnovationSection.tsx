import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, Dna, Microscope, Cpu, Bot, ShieldCheck } from 'lucide-react';

const CAPABILITIES = [
  { icon: FlaskConical, label: 'Agricultural R&D', desc: 'Applied research turning field trials into scalable practice.' },
  { icon: Dna, label: 'Biotechnology', desc: 'Genetics and bio-innovation for resilient, higher-yield crops.' },
  { icon: Microscope, label: 'Food Science & Technology', desc: 'Nutrition, safety and shelf-life engineered from the lab up.' },
  { icon: Cpu, label: 'Smart Farming Solutions', desc: 'Sensors and data platforms that guide every growing decision.' },
  { icon: Bot, label: 'Digital & Automation', desc: 'Robotics and software reducing labour intensity across the chain.' },
  { icon: ShieldCheck, label: 'Testing, Quality & Certification', desc: 'Standards and traceability that open premium export markets.' },
];

export const RnDInnovationSection: React.FC = () => {
  return (
    <section
      id="rnd-innovation"
      className="relative bg-[#0a1620] py-24 md:py-32 overflow-hidden select-none"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(11,61,74,0.55) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.2em] text-xs font-semibold text-white/50 mb-4"
          >
            Innovation Capability
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-white tracking-[-0.01em] leading-[1.2] font-['Fraunces',serif]"
          >
            R&D, Innovation{' '}
            <span className="italic font-medium text-white/80">& Technology</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-[#0b3d4a] flex items-center justify-center transition-colors duration-300 mb-5">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-white text-base font-semibold mb-2 font-['Fraunces',serif]">
                  {item.label}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
