import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import ctaBg from '../assets/images/agritech_cta_bg_1787498468209.jpg';

interface AgriTechCTAProps {
  onContactClick: () => void;
}

export const AgriTechCTA: React.FC<AgriTechCTAProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-28 bg-[#0a1620] text-white overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="Agricultural Harvest Sunset"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1620]/95 via-[#0a1620]/85 to-[#0a1620]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1620] via-transparent to-[#0a1620]/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-300 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PARTNER WITH ISAME CONSULTING</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Transform Agriculture?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-200/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you're developing an agricultural strategy, evaluating emerging technologies or building a smart farming initiative, we can help you move from vision to implementation.
          </p>

          {/* CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              id="cta-talk-to-experts-btn"
              onClick={onContactClick}
              className="group inline-flex items-center space-x-3 bg-[#548a27] hover:bg-[#629f2e] text-white px-8 py-4 rounded-xl text-base font-bold shadow-2xl shadow-[#0a1620]/60 hover:shadow-emerald-900/50 border border-[#6ea936] transition-all duration-200 cursor-pointer"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust points */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84d94b]" />
              <span>Independent Technology Advisory</span>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84d94b]" />
              <span>Tailored Implementation Roadmaps</span>
            </div>

            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84d94b]" />
              <span>Global Agri-Food Subject Matter Experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};