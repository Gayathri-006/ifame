import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Layers, Target, Clock, Calendar } from 'lucide-react';
import { ConsultingPillar, CapabilityItem, IndustryItem, InsightArticle } from '../types';

type ModalContent =
  | { type: 'pillar'; data: ConsultingPillar }
  | { type: 'capability'; data: CapabilityItem }
  | { type: 'industry'; data: IndustryItem }
  | { type: 'insight'; data: InsightArticle }
  | null;

interface DetailModalProps {
  content: ModalContent;
  onClose: () => void;
  onOpenContact: (subject?: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ content, onClose, onOpenContact }) => {
  if (!content) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-slate-900 border border-slate-800 text-white rounded-2xl md:rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          id="detail-modal-container"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
            id="detail-modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 1. Pillar View */}
          {content.type === 'pillar' && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-500/10 text-neutral-400 border border-neutral-500/20 uppercase tracking-wider">
                  Consulting Pillar
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.data.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                {content.data.fullDesc}
              </p>

              {/* Sub-Services & Capabilities */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Scope of Services & Disciplines
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {content.data.subServices.map((sub, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#18181b] shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Outcomes */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Strategic Outcomes
                </h4>
                <ul className="space-y-2">
                  {content.data.clientOutcomes.map((out, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-emerald-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact(content.data.title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-sm font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Request {content.data.title} Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 2. Capability View */}
          {content.type === 'capability' && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-500/10 text-neutral-400 border border-neutral-500/20 uppercase tracking-wider">
                  {content.data.category} Capability
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.data.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                {content.data.shortDesc}
              </p>

              {/* Deliverables */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Framework Deliverables
                </h4>
                <div className="space-y-2">
                  {content.data.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <Layers className="w-4 h-4 text-[#18181b] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Value */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-950/30 border border-neutral-900/40">
                <div className="text-xs font-bold text-[#18181b] uppercase tracking-wider mb-1">
                  Enterprise Value Impact
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {content.data.businessValue}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact(content.data.title);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-sm font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Inquire About Capability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 3. Industry View */}
          {content.type === 'industry' && (
            <div>
              <div className="h-44 rounded-xl overflow-hidden relative mb-6">
                <img
                  src={content.data.imageUrl}
                  alt={content.data.name}
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#0a0a0a] text-white">
                    Industry Practice
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                    {content.data.name}
                  </h3>
                </div>
              </div>

              <div className="text-xs font-semibold text-[#18181b] mb-2">{content.data.tagline}</div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {content.data.fullDescription}
              </p>

              {/* Focus Areas */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Strategic Industry Focus Areas
                </h4>
                <div className="space-y-2">
                  {content.data.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <Target className="w-4 h-4 text-[#18181b] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Metrics */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Target Performance Benchmarks
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {content.data.impactMetrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 text-center">
                      <div className="text-base font-extrabold text-[#18181b]">{m.value}</div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact(content.data.name);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-sm font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Connect with {content.data.name} Practice</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 4. Insight Article View */}
          {content.type === 'insight' && (
            <div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-500/10 text-neutral-400 border border-neutral-500/20">
                  {content.data.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {content.data.readTime}</span>
                <span>•</span>
                <span>{content.data.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {content.data.title}
              </h3>

              <div className="mt-3 text-xs text-slate-400 pb-4 border-b border-slate-800">
                Author: <strong className="text-slate-200">{content.data.author.name}</strong> ({content.data.author.role})
              </div>

              <div className="my-6 h-52 rounded-xl overflow-hidden">
                <img
                  src={content.data.imageUrl}
                  alt={content.data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p className="font-medium text-slate-100 italic">
                  "{content.data.summary}"
                </p>
                {content.data.fullContent?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-400">Published by IFAME Thought Leadership</span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact(`Insight: ${content.data.title}`);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a0a0a] hover:bg-[#000000] text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Discuss Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};