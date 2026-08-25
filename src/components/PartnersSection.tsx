import React from 'react';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { PARTNER_LOGOS, PartnerLogo } from '../data/partners';

const LogoItem: React.FC<{ partner: PartnerLogo; index: number }> = ({ partner, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    whileHover={{ y: -3 }}
    className="flex items-center justify-center shrink-0 mx-8 sm:mx-12 md:mx-16"
  >
    <img
      src={partner.logo}
      alt={partner.name}
      className="h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 object-contain select-none"
      draggable={false}
    />
  </motion.div>
);

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="bg-white py-16 md:py-24 relative overflow-hidden border-t border-slate-100">
      {/* Black rays fading into the white background, top-right corner */}
      <div
        className="hidden md:block absolute -right-10 -top-10 w-[360px] h-[360px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from 160deg at 100% 0%, #0a0a0a 0deg 2deg, transparent 2deg 10deg, #0a0a0a 10deg 12deg, transparent 12deg 20deg, #0a0a0a 20deg 22deg, transparent 22deg 32deg, #0a0a0a 32deg 34deg, transparent 34deg 90deg)',
          maskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 12%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 12%, transparent 75%)',
          opacity: 0.05,
        }}
      />
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 md:mb-14 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[#0a0a0a] text-xs font-bold tracking-widest uppercase mb-3">
          <Handshake className="w-3.5 h-3.5" />
          <span>Group - Associate Companies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
          Our Alliances
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2.5 max-w-2xl mx-auto leading-relaxed">
          A global network of associate companies working with us across data, AI, security and enterprise technology.
        </p>
      </motion.div>

      {/* Static logo row — centered, fixed, no marquee */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-wrap items-center justify-center">
          {PARTNER_LOGOS.map((partner, idx) => (
            <LogoItem key={partner.id} partner={partner} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};