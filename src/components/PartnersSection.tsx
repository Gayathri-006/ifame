import React from 'react';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { PARTNER_LOGOS, PartnerLogo } from '../data/partners';

const LogoItem: React.FC<{ partner: PartnerLogo }> = ({ partner }) => (
  <div className="flex items-center justify-center shrink-0 mx-6 sm:mx-8 md:mx-10">
    <img
      src={partner.logo}
      alt={partner.name}
      className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 object-contain select-none"
      draggable={false}
    />
  </div>
);

export const PartnersSection: React.FC = () => {
  const rowA = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  const rowB = [...PARTNER_LOGOS.slice().reverse(), ...PARTNER_LOGOS.slice().reverse()];

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

      {/* Marquee Row 1: Left to Right — logos only, no card, full-bleed edge to edge */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 34 }}
          className="flex items-center w-max"
        >
          {rowA.map((partner, idx) => (
            <LogoItem key={`row-a-${partner.id}-${idx}`} partner={partner} />
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2: Right to Left */}
      <div className="relative w-full mt-4 md:mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 34 }}
          className="flex items-center w-max"
        >
          {rowB.map((partner, idx) => (
            <LogoItem key={`row-b-${partner.id}-${idx}`} partner={partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};