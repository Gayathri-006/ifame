import React from 'react';
import { TrendingUp, Droplets, BrainCircuit, Zap, ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { OutcomeItem } from '../types';

const outcomes: OutcomeItem[] = [
  {
    id: 'productivity',
    title: 'Increase Productivity',
    description: 'Improve yields and operational performance across variable acreages and crop cycles.',
    iconName: 'trending',
  },
  {
    id: 'resource-use',
    title: 'Optimize Resource Use',
    description: 'Make better use of land, water, energy and inputs with precision application models.',
    iconName: 'droplets',
  },
  {
    id: 'decision-intelligence',
    title: 'Improve Decision Intelligence',
    description: 'Make faster, smarter decisions with automated telemetry, satellite imagery, and AI-driven insights.',
    iconName: 'brain',
  },
  {
    id: 'operational-efficiency',
    title: 'Increase Operational Efficiency',
    description: 'Digitize legacy processes, eliminate manual paperwork, and reduce operating expenditures.',
    iconName: 'zap',
  },
  {
    id: 'resilience',
    title: 'Build Resilience',
    description: 'Strengthen adaptability to extreme weather volatility, supply chain shocks, and market changes.',
    iconName: 'shield',
  },
  {
    id: 'sustainability',
    title: 'Support Sustainability',
    description: 'Drive long-term environmental stewardship, soil health recovery, and ESG compliance.',
    iconName: 'leaf',
  },
];

export const AgriTechOutcomes: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'trending':
        return <TrendingUp className="w-6 h-6 text-stone-900" />;
      case 'droplets':
        return <Droplets className="w-6 h-6 text-stone-900" />;
      case 'brain':
        return <BrainCircuit className="w-6 h-6 text-stone-900" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-stone-900" />;
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-stone-900" />;
      case 'leaf':
        return <Leaf className="w-6 h-6 text-stone-900" />;
      default:
        return <Leaf className="w-6 h-6 text-stone-900" />;
    }
  };

  return (
    <section id="outcomes-section" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-stone-900 px-3.5 py-1 rounded-full border border-stone-900 inline-block mb-3 shadow-sm">
              OUTCOMES YOU CAN ACHIEVE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
              Transform Today. Thrive Tomorrow.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Tangible economic returns and sustainable operational metrics delivered through validated advisory frameworks.
            </p>
          </motion.div>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#ffffff] border border-stone-200/90 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#bcbcbc] transition-all flex items-start space-x-4 group"
            >
              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-[#ffffff] border border-[#ebebeb] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#fbfbfb] transition-all">
                {renderIcon(outcome.iconName)}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-1.5 group-hover:text-stone-900 transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};