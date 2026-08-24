import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';

interface CaseStudySectionProps {
  onContactUs: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onContactUs }) => {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const currentStudy = CASE_STUDIES[activeStudyIndex];

  return (
    <section id="case-studies" className="bg-white text-slate-900 py-20 md:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Black rays fading into the white background, top-right corner */}
      <div
        className="hidden md:block absolute -right-10 -top-10 w-[420px] h-[420px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'conic-gradient(from 160deg at 100% 0%, #0a0a0a 0deg 2deg, transparent 2deg 10deg, #0a0a0a 10deg 12deg, transparent 12deg 20deg, #0a0a0a 20deg 22deg, transparent 22deg 32deg, #0a0a0a 32deg 34deg, transparent 34deg 90deg)',
          maskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 12%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 100% 0%, black 0%, black 12%, transparent 75%)',
          opacity: 0.06,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
              CLIENT IMPACT & TRANSFORMATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-3">
              Delivering Measurable Enterprise Outcomes
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-3 max-w-2xl">
              How our integrated Management, Technology &  Business Consulting disciplines translate complexity into strategic advantage.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 self-start">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveStudyIndex(idx)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                  activeStudyIndex === idx
                    ? 'bg-[#0a0a0a] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                }`}
                id={`case-study-tab-${study.id}`}
              >
                {study.industry}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Case Study Layout: Challenge -> Approach -> Transformation -> Outcome */}
        <motion.div
          key={currentStudy.id}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm"
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white border border-slate-900">
                  {currentStudy.industry}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {currentStudy.pillar}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight">
                {currentStudy.title}
              </h3>
            </div>

            {/* Impact Metric Chips */}
            <div className="flex flex-wrap gap-4">
              {currentStudy.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-center min-w-[110px] shadow-sm">
                  <div className="text-lg md:text-xl font-extrabold text-slate-950">{metric.value}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Consulting Transformation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            
            {/* 1. Challenge */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-rose-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                Challenge
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {currentStudy.challenge}
              </p>
            </div>

            {/* 2. Approach */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Approach
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {currentStudy.approach}
              </p>
            </div>

            {/* 3. Transformation */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="text-xs font-bold text-neutral-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                Transformation
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {currentStudy.transformation}
              </p>
            </div>

            {/* 4. Outcome */}
            <div className="bg-slate-950 rounded-xl p-6 border border-slate-900">
              <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Outcome
              </div>
              <p className="text-xs md:text-sm text-slate-100 leading-relaxed font-medium">
                {currentStudy.outcome}
              </p>
            </div>

          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs md:text-sm text-slate-500">
              Need a similar transformation roadmap tailored for your enterprise?
            </span>
            <button
              onClick={onContactUs}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};