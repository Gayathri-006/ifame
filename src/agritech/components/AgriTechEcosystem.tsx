import React from 'react';
import { Landmark, GraduationCap, FlaskConical, Network, Users, HandCoins, Sprout } from 'lucide-react';
import { motion } from 'motion/react';

export const AgriTechEcosystem: React.FC = () => {
  return (
    <section id="ecosystem-section" className="py-24 bg-[#060606] text-white relative overflow-hidden border-b border-[#212121]">
      {/* Background Texture & Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(192, 192, 192, 0.25 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(159, 159, 159, 0.15 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#143522_1px,transparent_1px),linear-gradient(to_bottom,#143522_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                A Collaborative<br />
                <span className="text-white">Agri-Tech Ecosystem</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Agricultural transformation happens through collaboration. We work with key stakeholders to drive meaningful, sustainable impact across every link of the food and bio-systems value chain.
              </p>
            </motion.div>

            {/* Pillar badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2 flex flex-wrap gap-2 text-xs"
            >
              <span className="bg-[#1a1a1a] border border-[#393939] text-stone-300 px-3 py-1.5 rounded-lg">
                Multi-Stakeholder Alignment
              </span>
              <span className="bg-[#1a1a1a] border border-[#393939] text-stone-300 px-3 py-1.5 rounded-lg">
                Public-Private Synergies
              </span>
            </motion.div>
          </div>

          {/* Right Column / Center Ecosystem Diagram */}
          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f0f0f]/90 border border-stone-800/50 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
                
                {/* Left Stakeholders List (3 nodes) */}
                <div className="md:col-span-3 space-y-4">
                  {/* Node 1: Government */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1a1a1a]/80 border border-stone-700/40 hover:border-stone-500/70 hover:bg-[#282828] transition-all group">
                    <div className="text-right flex-1 pr-3">
                      <div className="text-sm font-bold text-white group-hover:text-stone-300 transition-colors">
                        Government
                      </div>
                      <div className="text-xs text-stone-300">
                        Policy &amp; Strategic Direction
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-400/60 flex items-center justify-center text-stone-300 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Landmark className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Node 2: Research & Universities */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1a1a1a]/80 border border-stone-700/40 hover:border-stone-500/70 hover:bg-[#282828] transition-all group">
                    <div className="text-right flex-1 pr-3">
                      <div className="text-sm font-bold text-white group-hover:text-stone-300 transition-colors">
                        Research &amp; Universities
                      </div>
                      <div className="text-xs text-stone-300">
                        Science, Innovation &amp; Knowledge
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-400/60 flex items-center justify-center text-stone-300 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Node 3: R&D Centres & Innovation Labs */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1a1a1a]/80 border border-stone-700/40 hover:border-stone-500/70 hover:bg-[#282828] transition-all group">
                    <div className="text-right flex-1 pr-3">
                      <div className="text-sm font-bold text-white group-hover:text-stone-300 transition-colors">
                        R&amp;D Centres &amp; Labs
                      </div>
                      <div className="text-xs text-stone-300">
                        Research, experimentation &amp; commercialization
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-400/60 flex items-center justify-center text-stone-300 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Central Glowing Agri-Tech Core Hub */}
                <div className="md:col-span-1 flex flex-col items-center justify-center my-4 md:my-0">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing rings */}
                    <div className="absolute w-24 h-24 rounded-full border border-stone-400/30 animate-ping opacity-30" />
                    <div className="absolute w-20 h-20 rounded-full border border-[#c6c6c6]/40 animate-pulse" />
                    
                    {/* Center Core Circle */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#333333] via-[#525252] to-[#8e8e8e] border-2 border-[#c6c6c6] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(198, 198, 198,0.4] z-10">
                      <Sprout className="w-7 h-7 text-white animate-bounce" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-300 font-bold text-center mt-2.5">
                    AGRI-TECH TRANSFORMATION
                  </span>
                </div>

                {/* Right Stakeholders List (3 nodes) */}
                <div className="md:col-span-3 space-y-4">
                  {/* Node 4: Industry & Technology Partners */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1a1a1a]/80 border border-stone-700/40 hover:border-stone-500/70 hover:bg-[#282828] transition-all group">
                    <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-400/60 flex items-center justify-center text-stone-300 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Network className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1 pl-3">
                      <div className="text-sm font-bold text-white group-hover:text-stone-300 transition-colors">
                        Industry &amp; Tech Partners
                      </div>
                      <div className="text-xs text-stone-300">
                        Technology development &amp; deployment
                      </div>
                    </div>
                  </div>

                  {/* Node 5: Farmers & Communities */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1a1a1a]/80 border border-stone-700/40 hover:border-stone-500/70 hover:bg-[#282828] transition-all group">
                    <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-400/60 flex items-center justify-center text-stone-300 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1 pl-3">
                      <div className="text-sm font-bold text-white group-hover:text-stone-300 transition-colors">
                        Farmers &amp; Communities
                      </div>
                      <div className="text-xs text-stone-300">
                        Real-world adoption &amp; field expertise
                      </div>
                    </div>
                  </div>

                  {/* Node 6: Investors & Financial Partners */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1a1a1a]/80 border border-stone-700/40 hover:border-stone-500/70 hover:bg-[#282828] transition-all group">
                    <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-400/60 flex items-center justify-center text-stone-300 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <HandCoins className="w-5 h-5" />
                    </div>
                    <div className="text-left flex-1 pl-3">
                      <div className="text-sm font-bold text-white group-hover:text-stone-300 transition-colors">
                        Investors &amp; Finance
                      </div>
                      <div className="text-xs text-stone-300">
                        Capital, scaling &amp; risk sharing
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};