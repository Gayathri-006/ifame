import React, { useState } from 'react';
import { Rocket, ShieldCheck, Cpu, Wrench, BookOpen, Sprout, CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MaturityLevel } from '../types';
import farmerImg from '../assets/images/agritech_farmer_tablet_1787498450999.jpg';

const maturityLevels: MaturityLevel[] = [
  {
    level: 5,
    title: 'Frontier Research & Innovation',
    description: 'Pioneering autonomous ecosystems, synthetic biology, and generative biosystems for next-gen agriculture.',
    colorClass: 'bg-[#1e3a2b] text-white',
    iconName: 'rocket',
  },
  {
    level: 4,
    title: 'Agricultural Strategy, Governance & Leadership',
    description: 'Enterprise-wide technology roadmap, unified governance, and ecosystem leadership with verified ROI.',
    colorClass: 'bg-[#2f5940] text-white',
    iconName: 'shield',
  },
  {
    level: 3,
    title: 'Advanced Agriculture Intelligence',
    description: 'Applying predictive AI models, automated yield forecasting, and spectral satellite decision systems.',
    colorClass: 'bg-[#4c7a5e] text-white',
    iconName: 'cpu',
  },
  {
    level: 2,
    title: 'Applied Agri-Technology',
    description: 'Deploying connected IoT telemetry, drone scouting, and digitized farm management information systems.',
    colorClass: 'bg-[#7fa98d] text-stone-900',
    iconName: 'wrench',
  },
  {
    level: 1,
    title: 'Foundation & Fundamentals',
    description: 'Establishing baseline data capture, standardizing agronomic records, and basic operational digitization.',
    colorClass: 'bg-[#c3ddc7] text-stone-900',
    iconName: 'book',
  },
];

export const AgriTechMaturity: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(3);

  return (
    <section id="maturity-section" className="py-24 bg-white border-b border-stone-200 overflow-hidden">
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
              AGRI-TECH CAPABILITY MATURITY MODEL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-3">
              Where Are You in Your Agri-Tech Journey?
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We help organizations assess their current capabilities and progress toward advanced agricultural transformation.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid: Pyramid Visual & Level List vs Farmer Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Pyramid Diagram & Structured Levels */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pyramid Visual Container with Generous Top Padding & Non-cropped Level 5 */}
            <div className="pt-6 pb-5 px-2 sm:px-6 bg-[#ffffff] rounded-2xl shadow-xs">
              <div className="flex flex-col items-center max-w-md mx-auto space-y-2">
                
                {/* Level 5 (Top Triangle / Trapezoid) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  onClick={() => setActiveLevel(5)}
                  className={`w-28 sm:w-36 h-12 rounded-t-xl cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                    activeLevel === 5 ? 'scale-105 shadow-md' : 'hover:scale-102'
                  } bg-[#1e3a2b] text-white`}
                >
                  <Rocket className="w-4 h-4 text-emerald-200" />
                  <span className="font-bold text-sm">LEVEL 5</span>
                </motion.div>

                {/* Level 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  onClick={() => setActiveLevel(4)}
                  className={`w-44 sm:w-56 h-12 rounded-lg cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                    activeLevel === 4 ? 'scale-105 shadow-md' : 'hover:scale-102'
                  } bg-[#2f5940] text-white`}
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-100" />
                  <span className="font-bold text-sm">LEVEL 4</span>
                </motion.div>

                {/* Level 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  onClick={() => setActiveLevel(3)}
                  className={`w-60 sm:w-76 h-12 rounded-lg cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                    activeLevel === 3 ? 'scale-105 shadow-md' : 'hover:scale-102'
                  } bg-[#4c7a5e] text-white`}
                >
                  <Cpu className="w-4 h-4 text-white" />
                  <span className="font-bold text-sm">LEVEL 3</span>
                </motion.div>

                {/* Level 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  onClick={() => setActiveLevel(2)}
                  className={`w-76 sm:w-96 h-12 rounded-lg cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                    activeLevel === 2 ? 'scale-105 shadow-md' : 'hover:scale-102'
                  } bg-[#7fa98d] text-stone-900`}
                >
                  <Wrench className="w-4 h-4 text-stone-900" />
                  <span className="font-bold text-sm">LEVEL 2</span>
                </motion.div>

                {/* Level 1 (Base) */}
                <motion.div
                  initial={{ opacity: 0, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => setActiveLevel(1)}
                  className={`w-full max-w-[380px] sm:max-w-[460px] h-12 rounded-b-xl cursor-pointer transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                    activeLevel === 1 ? 'scale-105 shadow-md' : 'hover:scale-102'
                  } bg-[#c3ddc7] text-stone-900 font-bold`}
                >
                  <BookOpen className="w-4 h-4 text-stone-900" />
                  <span className="font-bold text-sm">LEVEL 1</span>
                </motion.div>

              </div>
            </div>

            {/* Level Descriptions Breakdown List */}
            <div className="space-y-3">
              {maturityLevels.map((lvl) => {
                const isSelected = activeLevel === lvl.level;
                return (
                  <div
                    key={lvl.level}
                    onClick={() => setActiveLevel(lvl.level)}
                    className={`p-4 rounded-xl transition-all cursor-pointer flex items-start space-x-3.5 ${
                      isSelected
                        ? 'bg-[#e3f0e6] shadow-md scale-[1.01]'
                        : 'bg-stone-50 hover:bg-stone-100/80'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                        isSelected ? 'bg-[#2f5940] text-white' : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {lvl.level}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-stone-900">
                          {lvl.title}
                        </h4>
                        {isSelected && (
                          <span className="text-[11px] font-semibold text-white bg-[#2f5940] px-2 py-0.5 rounded">
                            Selected Level
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {lvl.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Farmer Image & Value Quote Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-900 group"
            >
              {/* Farmer Image */}
              <div className="h-[480px] w-full overflow-hidden relative">
                <img
                  src={farmerImg}
                  alt="Agricultural Specialist with Tablet in Crop Field"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                <div className="absolute inset-0 bg-stone-950/20" />
              </div>

              {/* Floating Quote / Goal Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0b0b0b]/90 border border-stone-500/40 backdrop-blur-md text-white shadow-xl">
                <div className="flex items-center space-x-2 text-stone-400 mb-2">
                  <Sprout className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">ISAME Advisory Impact</span>
                </div>
                <p className="text-sm sm:text-base font-medium leading-relaxed text-stone-100">
                  "Our goal is to help you build sustainable, intelligent and scalable agricultural systems for the future."
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-stone-300 font-mono border-t border-stone-800/40 pt-2">
                  <span>Maturity Benchmark Analysis</span>
                  <span className="text-white font-bold">Assess Readiness →</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};