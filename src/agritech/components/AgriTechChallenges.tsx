import React from 'react';
import { ThermometerSun, Droplets, Database, TrendingUp, Truck, ShieldAlert, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ChallengeItem } from '../types';

const challenges: ChallengeItem[] = [
  {
    id: 'climate-change',
    title: 'Climate Change',
    description: 'Changing climate patterns increase uncertainty and affect agricultural productivity.',
    iconName: 'thermometer',
  },
  {
    id: 'resource-pressure',
    title: 'Resource Pressure',
    description: 'Efficient management of land, water, energy and resources is increasingly critical.',
    iconName: 'droplets',
  },
  {
    id: 'fragmented-data',
    title: 'Fragmented Data',
    description: 'Disconnected data systems limit visibility and decision-making.',
    iconName: 'database',
  },
  {
    id: 'productivity-gap',
    title: 'Productivity Gap',
    description: 'Traditional practices and limited technology adoption can limit potential.',
    iconName: 'trending',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Complexity',
    description: 'Fragmented supply chains create inefficiencies and reduce resilience.',
    iconName: 'truck',
  },
];

export const AgriTechChallenges: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'thermometer':
        return <ThermometerSun className="w-7 h-7 text-[#0a1620]" />;
      case 'droplets':
        return <Droplets className="w-7 h-7 text-[#0a1620]" />;
      case 'database':
        return <Database className="w-7 h-7 text-[#0a1620]" />;
      case 'trending':
        return <TrendingUp className="w-7 h-7 text-[#0a1620]" />;
      case 'truck':
        return <Truck className="w-7 h-7 text-[#0a1620]" />;
      default:
        return <ShieldAlert className="w-7 h-7 text-[#0a1620]" />;
    }
  };

  return (
    <section
      id="challenges-section"
      className="py-20 bg-[#ffffff] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white bg-[#0a1620] px-3.5 py-1 rounded-full border border-[#0a1620] inline-block mb-3 shadow-sm">
              THE CHALLENGE
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1620] tracking-tight leading-tight mb-3">
              Agriculture Is Facing a New Generation of Challenges
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Global pressures and local realities require a new approach to agricultural transformation.
            </p>
          </motion.div>
        </div>

        {/* 5 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#c1c1c1] transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#ffffff] border border-[#f4f4f4] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#ffffff] transition-transform duration-300 shadow-inner">
                {renderIcon(challenge.iconName)}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0a1620] mb-2.5 group-hover:text-[#0a1620] transition-colors">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-[#ffffff] border border-[#e2e2e2] rounded-2xl p-4 sm:p-5 text-center max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex items-center justify-center space-x-2 text-stone-800 font-semibold text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-[#0a1620] shrink-0" />
            <span>
              We help organizations turn these challenges into opportunities through technology-led agricultural transformation.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};