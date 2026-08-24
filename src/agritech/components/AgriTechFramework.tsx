import React from 'react';
import { Sprout, Microscope, BarChart3, Brain, Radio, Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FrameworkStage } from '../types';

const stages: FrameworkStage[] = [
  {
    step: '01',
    title: 'Agriculture',
    description: 'Understand agricultural operations, environment and business objectives.',
    iconName: 'sprout',
  },
  {
    step: '02',
    title: 'Agriscience',
    description: 'Apply scientific and domain knowledge to improve processes.',
    iconName: 'microscope',
  },
  {
    step: '03',
    title: 'Data & Analytics',
    description: 'Connect, structure and analyze data to create actionable insights.',
    iconName: 'chart',
  },
  {
    step: '04',
    title: 'AI & Intelligence',
    description: 'Use AI and intelligent systems to improve prediction and decisions.',
    iconName: 'brain',
  },
  {
    step: '05',
    title: 'Precision Technology',
    description: 'Deploy IoT, drones, sensors and automation for precision agriculture.',
    iconName: 'precision',
  },
  {
    step: '06',
    title: 'Sustainability',
    description: 'Build systems that improve productivity and support sustainability.',
    iconName: 'sustainability',
  },
];

export const AgriTechFramework: React.FC = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'sprout':
        return <Sprout className="w-6 h-6 text-stone-900" />;
      case 'microscope':
        return <Microscope className="w-6 h-6 text-stone-900" />;
      case 'chart':
        return <BarChart3 className="w-6 h-6 text-stone-900" />;
      case 'brain':
        return <Brain className="w-6 h-6 text-stone-900" />;
      case 'precision':
        return <Radio className="w-6 h-6 text-stone-900" />;
      case 'sustainability':
        return <Leaf className="w-6 h-6 text-stone-900" />;
      default:
        return <Sprout className="w-6 h-6 text-stone-900" />;
    }
  };

  return (
    <section id="framework-section" className="py-20 bg-white border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-stone-900 px-3.5 py-1 rounded-full border border-stone-900 inline-block mb-3 shadow-sm">
              OUR APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
              Our Agri-Tech Transformation Framework
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We combine science, data and technology to deliver end-to-end agricultural transformation.
            </p>
          </motion.div>
        </div>

        {/* 6 Stage Horizontal Flow */}
        <div className="relative">
          
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-10 left-[7%] right-[7%] h-0.5 border-t-2 border-dashed border-stone-300 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
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
                  <div className="w-20 h-20 rounded-full bg-[#ffffff] border-2 border-[#dfdfdf] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#ffffff] group-hover:border-[#8c8c8c] transition-all duration-300">
                    {renderIcon(stage.iconName)}
                  </div>
                  {/* Arrow for mobile/tablet indication if needed */}
                  {idx < stages.length - 1 && (
                    <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 text-stone-400">
                      <ArrowRight className="w-4 h-4 rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </div>

                {/* Step Number */}
                <span className="text-xs font-mono font-bold text-stone-900 bg-[#ffffff] px-2 py-0.5 rounded border border-[#ededed] mb-2">
                  {stage.step}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-stone-900 mb-2 group-hover:text-stone-900 transition-colors">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-500 leading-relaxed max-w-[190px]">
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