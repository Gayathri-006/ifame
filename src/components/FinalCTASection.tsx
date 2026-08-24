import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Cpu, Users } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenContact: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-28 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-neutral-700/20 via-neutral-500/10 to-neutral-800/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-xs font-bold text-neutral-300 uppercase tracking-wider mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-pulse" />
          Strategic Engagement
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          id="final-cta-heading"
        >
          Let's discuss what's next.
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-base md:text-xl leading-relaxed mt-6 max-w-2xl mx-auto text-balance"
          id="final-cta-description"
        >
          Explore how IFAME can help navigate complex management, technology and process challenges.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-200 text-[#0a0a0a] text-base font-semibold tracking-wide shadow-xl shadow-neutral-900/30 hover:shadow-neutral-900/50 transition-all duration-200 active:scale-[0.98] group cursor-pointer"
            id="final-cta-contact-btn"
          >
            <span>Contact IFAME</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Consulting Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-neutral-300 shrink-0 border border-slate-800">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Management Governance</div>
              <div className="text-[11px] text-slate-400">Strategy & PMO Execution</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-neutral-300 shrink-0 border border-slate-800">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Technology & AI</div>
              <div className="text-[11px] text-slate-400">Modernization & Cloud</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-neutral-300 shrink-0 border border-slate-800">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Process & ISO Standards</div>
              <div className="text-[11px] text-slate-400">GRC & System Rationalization</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};