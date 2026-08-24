import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Sparkles,
  BrainCircuit,
  Lock,
  Cloud,
  Settings2,
  Activity,
  Box
} from 'lucide-react';
import { CAPABILITIES } from '../data/capabilities';

interface ExpertiseStripProps {
  onSelectCapability: (capId: string) => void;
}

export const ExpertiseStrip: React.FC<ExpertiseStripProps> = ({ onSelectCapability }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'strategic-planning':
        return <TrendingUp className="w-5 h-5" />;
      case 'digital-transformation':
        return <Sparkles className="w-5 h-5" />;
      case 'ai-data-intelligence':
        return <BrainCircuit className="w-5 h-5" />;
      case 'cybersecurity':
        return <Lock className="w-5 h-5" />;
      case 'cloud-platform':
        return <Cloud className="w-5 h-5" />;
      case 'governance-risk-compliance':
        return <Settings2 className="w-5 h-5" />;
      case 'process-engineering':
        return <Activity className="w-5 h-5" />;
      case 'system-integration':
        return <Box className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="expertise" className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 mt-10 md:mt-14 mb-10">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-4"
      >
        <span className="text-xs font-bold tracking-[0.2em] text-[#0a0a0a] uppercase">
          OUR EXPERTISE
        </span>
      </motion.div>

      {/* Individual Dark Glass Chip Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {CAPABILITIES.map((cap, idx) => (
          <motion.button
            key={cap.id}
            onClick={() => onSelectCapability(cap.id)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="p-4 md:p-5 text-left flex flex-row items-center gap-3 group bg-slate-950/85 hover:bg-slate-950/95 backdrop-blur-md border border-white/10 hover:border-[#18181b]/40 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none"
            id={`expertise-item-${cap.id}`}
          >
            {/* Icon */}
            <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#0a0a0a] text-neutral-300 group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
              {getIcon(cap.id)}
            </div>

            {/* Title */}
            <span className="text-[12.5px] font-semibold text-slate-100 group-hover:text-white transition-colors leading-tight">
              {cap.title}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
};