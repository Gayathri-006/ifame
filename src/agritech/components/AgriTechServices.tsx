import React from 'react';
import { Compass, Cpu, LineChart, Target, Wifi, Sprout, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceItem } from '../types';

import strategyImg from '../assets/images/agritech_farmer_tablet_1787498450999.jpg';
import digitalAgriImg from '../assets/images/service_digital_agri_1787498509765.jpg';
import aiAnalyticsImg from '../assets/images/agri_drone_daylight_1787508232924.jpg';
import precisionDroneImg from '../assets/images/service_precision_drone_1787498549736.jpg';
import smartFarmingImg from '../assets/images/service_smart_farming_1787498568037.jpg';
import sustainableImg from '../assets/images/service_sustainable_1787498587781.jpg';

const services: ServiceItem[] = [
  {
    id: 'agri-strategy',
    title: 'Agri-Tech Strategy',
    description: 'Develop technology roadmaps aligned with your agricultural goals.',
    image: strategyImg,
    iconName: 'strategy',
  },
  {
    id: 'digital-agri',
    title: 'Digital Agriculture',
    description: 'Digitize scientific and operational workflows for efficiency and transparency.',
    image: digitalAgriImg,
    iconName: 'digital',
  },
  {
    id: 'ai-analytics',
    title: 'AI & Data Analytics',
    description: 'Design data-driven solutions for forecasting, monitoring and decision support.',
    image: aiAnalyticsImg,
    iconName: 'analytics',
  },
  {
    id: 'precision-agri',
    title: 'Precision Agriculture',
    description: 'Implement precision farming solutions for better resource use.',
    image: precisionDroneImg,
    iconName: 'precision',
  },
  {
    id: 'smart-farming',
    title: 'Smart Farming',
    description: 'Leverage IoT, sensors and automation for smart agricultural operations.',
    image: smartFarmingImg,
    iconName: 'smart',
  },
  {
    id: 'sustainable-agri',
    title: 'Sustainable Agriculture',
    description: 'Create long-term value through sustainable and responsible practices.',
    image: sustainableImg,
    iconName: 'sustainable',
  },
];

interface AgriTechServicesProps {
  onServiceSelect?: (service: ServiceItem) => void;
}

export const AgriTechServices: React.FC<AgriTechServicesProps> = ({ onServiceSelect }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'strategy':
        return <Compass className="w-5 h-5 text-white" />;
      case 'digital':
        return <Cpu className="w-5 h-5 text-white" />;
      case 'analytics':
        return <LineChart className="w-5 h-5 text-white" />;
      case 'precision':
        return <Target className="w-5 h-5 text-white" />;
      case 'smart':
        return <Wifi className="w-5 h-5 text-white" />;
      case 'sustainable':
        return <Sprout className="w-5 h-5 text-white" />;
      default:
        return <Compass className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services-section" className="py-20 bg-[#ffffff] border-b border-stone-200">
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
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
              How We Help You Transform Agriculture
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Tailored consulting, technical architecture, and implementation frameworks across the agri-food spectrum.
            </p>
          </motion.div>
        </div>

        {/* 6 Visual Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => onServiceSelect?.(service)}
            >
              {/* Image Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                
                {/* Dark & Green Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />

                {/* Floating Icon Badge on bottom left of image */}
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-[#4b4b4b]/90 backdrop-blur-md border border-[#878787]/60 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#656565] transition-all">
                  {renderIcon(service.iconName)}
                </div>

                {/* Subtle top right hover indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-stone-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center text-xs font-semibold text-stone-900 group-hover:text-stone-900">
                  <span>Explore Service Framework</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};