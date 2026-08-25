import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

import visionImg from '../assets/images/vision-transformation.png';
import missionImg from '../assets/images/mission-target.png';

const MISSION_POINTS = [
  'Transform strategic opportunities into implementable projects',
  'Mobilize domestic and international investment into high-value sectors',
  'Accelerate agriculture and agrofood modernization through technology and innovation',
  'Create employment, entrepreneurship and income opportunities',
  "Support Malaysia's transition towards high-value, technology-driven and sustainable industries",
];

const BLOB = '63% 37% 54% 46% / 43% 47% 53% 57%';

export const VisionMissionSection: React.FC = () => {
  return (
    <section
      id="vision-mission"
      className="relative bg-white py-20 md:py-28 overflow-hidden"
    >
      <div className="space-y-24 md:space-y-32">

        {/* ================= VISION ================= */}
        <div
          id="vision"
          className="relative scroll-mt-24"
        >
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[42vw] max-w-[520px] h-[85%] bg-[#e8b4bc]/50 rounded-r-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] mx-auto md:mx-0"
            >
              <div
                className="relative w-full h-full shadow-xl overflow-hidden"
                style={{ borderRadius: BLOB }}
              >
                <img
                  src={visionImg}
                  alt="Traditional agriculture transforming into a smart sustainable city"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-['Fraunces',serif]">
                Our Vision
              </h3>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed mt-5">
                To be a leading Malaysian strategic transformation and project
                development company driving sustainable economic growth through
                innovation, investment and technology. We partner with government
                agencies and private investors to turn national priorities into
                projects that break ground and deliver measurable impact. Our work
                spans agriculture modernization, high-value industry, and the
                infrastructure that supports long-term growth.
              </p>

              <p className="text-sm md:text-base italic text-[#0b3d4a] font-medium mt-6">
                "Building a Sustainable Future for Generations"
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= MISSION ================= */}
        <div
          id="mission"
          className="relative scroll-mt-24"
        >
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[42vw] max-w-[520px] h-[85%] bg-[#a8d4d8]/50 rounded-l-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="md:order-1"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-['Fraunces',serif]">
                Our Mission
              </h3>

              <ul className="mt-6 space-y-3">
                {MISSION_POINTS.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#c9a96a] flex-shrink-0 mt-1" />

                    <span className="text-base text-slate-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] mx-auto md:mx-0 md:order-2"
            >
              <div
                className="relative w-full h-full shadow-xl overflow-hidden"
                style={{ borderRadius: BLOB }}
              >
                <img
                  src={missionImg}
                  alt="Target with dart symbolizing precise, focused execution"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '15% center' }}
                />
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};