import React from 'react';
import { Target, Search, FileText, Layers, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ProcessStage } from '../types';

const stages: ProcessStage[] = [
  {
    step: '01',
    title: 'Assess',
    description: 'Understand your current state, challenges and opportunities.',
    iconName: 'target',
  },
  {
    step: '02',
    title: 'Identify',
    description: 'Identify gaps, opportunities and high-impact areas for transformation.',
    iconName: 'search',
  },
  {
    step: '03',
    title: 'Strategize',
    description: 'Develop a practical technology and transformation roadmap.',
    iconName: 'roadmap',
  },
  {
    step: '04',
    title: 'Implement',
    description: 'Support pilot programs, capability development and technology adoption.',
    iconName: 'implement',
  },
  {
    step: '05',
    title: 'Scale',
    description: 'Measure outcomes and scale successful initiatives across your operations.',
    iconName: 'scale',
  },
];

export const AgriTechProcess: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'target':
        return <Target className="w-6 h-6 text-[#0a1620]" />;
      case 'search':
        return <Search className="w-6 h-6 text-[#0a1620]" />;
      case 'roadmap':
        return <FileText className="w-6 h-6 text-[#0a1620]" />;
      case 'implement':
        return <Layers className="w-6 h-6 text-[#0a1620]" />;
      case 'scale':
        return <TrendingUp className="w-6 h-6 text-[#0a1620]" />;
      default:
        return <Target className="w-6 h-6 text-[#0a1620]" />;
    }
  };

  return (
    <section
      id="process-section"
      className="py-20 bg-[#ffffff] border-b border-stone-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0a1620] px-3.5 py-1 rounded-full border border-[#0a1620] inline-block mb-3 shadow-sm">
              HOW WE WORK
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1620] tracking-tight leading-tight mb-3">
              A Collaborative Process. Measurable Impact.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              From initial baseline assessment to enterprise-scale deployment and continuous performance optimization.
            </p>
          </motion.div>
        </div>

        {/* 5 Stages Process Flow */}
        <div className="relative">

          {/* Connecting dashed line for large screens */}
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 border-t-2 border-dashed border-stone-300 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Icon Badge */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#dfdfdf] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#ffffff] group-hover:border-[#8c8c8c] transition-all duration-300">
                    {renderIcon(stage.iconName)}
                  </div>

                  {/* Step arrow indicator */}
                  {idx < stages.length - 1 && (
                    <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 text-stone-400 z-20">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Step badge & Title */}
                <div className="flex items-center space-x-1.5 mb-2">
                  <span className="text-xs font-mono font-bold text-[#0a1620] bg-[#ffffff] px-2 py-0.5 rounded border border-[#ededed]">
                    {stage.step}
                  </span>

                  <h3 className="text-base font-bold text-[#0a1620] group-hover:text-[#0a1620] transition-colors">
                    {stage.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-[210px]">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};