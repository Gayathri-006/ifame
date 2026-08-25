import React from 'react';
import { motion } from 'motion/react';
import {
  Landmark,
  Factory,
  GraduationCap,
  Wallet,
  Users,
  Lightbulb,
} from 'lucide-react';

const STAKEHOLDERS = [
  { icon: Landmark, label: 'Government & Policy' },
  { icon: Factory, label: 'Industry & Enterprise' },
  { icon: GraduationCap, label: 'Academia & Research' },
  { icon: Wallet, label: 'Investors & Capital' },
  { icon: Users, label: 'Community & Talent' },
  { icon: Lightbulb, label: 'Innovation Partners' },
];

// Positions around a circle (percent offsets from center), computed for 6 nodes
const angleStep = 360 / STAKEHOLDERS.length;
const RADIUS = 42; // percent

export const OurEcosystemSection: React.FC = () => {
  return (
    <section
      id="our-ecosystem"
      className="relative bg-[#0a1620] py-24 md:py-32 overflow-hidden select-none"
    >
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(11,61,74,0.5) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-4">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.25em] text-xs font-bold text-white/70 mb-4"
          >
            Connected Value
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-[52px] font-semibold text-white tracking-[-0.02em] leading-[1.15] font-['Fraunces',serif]"
          >
            Our <span className="italic font-medium text-white/85">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/60 text-base md:text-lg leading-[1.7] mt-6"
          >
            IFAME connects the right stakeholders to create sustainable value
            for Malaysia and the world.
          </motion.p>
        </div>

        {/* Desktop: radial hub diagram */}
        <div className="hidden lg:block relative w-full max-w-3xl mx-auto aspect-square mt-8">
          {/* Connecting lines — solid, thicker, higher contrast */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden>
            {STAKEHOLDERS.map((_, i) => {
              const angle = (angleStep * i - 90) * (Math.PI / 180);
              const x = 50 + RADIUS * Math.cos(angle);
              const y = 50 + RADIUS * Math.sin(angle);
              return (
                <motion.line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                />
              );
            })}
          </svg>

          {/* Center node — larger, heavier border, crisp shadow instead of a glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0b3d4a] border-2 border-white/30 shadow-[0_18px_40px_rgba(0,0,0,0.55)] flex flex-col items-center justify-center text-center px-2 z-10"
          >
            <span className="text-white font-bold text-base tracking-wide font-['Fraunces',serif]">
              IFAME
            </span>
          </motion.div>

          {/* Orbit nodes — bigger, bolder borders, stronger icon weight */}
          {STAKEHOLDERS.map((item, i) => {
            const angle = (angleStep * i - 90) * (Math.PI / 180);
            const x = 50 + RADIUS * Math.cos(angle);
            const y = 50 + RADIUS * Math.sin(angle);
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 w-32"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/[0.08] border-2 border-white/25 hover:border-white/60 hover:bg-white/[0.14] shadow-[0_10px_24px_rgba(0,0,0,0.4)] flex items-center justify-center transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <p className="text-white/85 text-xs font-bold text-center leading-snug tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / tablet: grid fallback */}
        <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
          {STAKEHOLDERS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-center gap-4 rounded-2xl bg-white/[0.07] border-2 border-white/15 p-5 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/[0.12] border border-white/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <p className="text-white text-sm font-bold">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};