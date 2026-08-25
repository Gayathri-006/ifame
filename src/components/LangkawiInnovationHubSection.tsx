import React from 'react';
import { motion } from 'motion/react';
import {
  Waves,
  Shell,
  Sprout,
  FlaskConical,
  GraduationCap,
  Palmtree,
} from 'lucide-react';

const FEATURES = [
  { icon: Waves, label: 'Marine Biology Laboratory' },
  { icon: Shell, label: 'Aquaculture R&D Centre' },
  { icon: Sprout, label: 'Agricultural R&D Centre' },
  { icon: FlaskConical, label: 'Food & Biotechnology Research' },
  { icon: GraduationCap, label: 'Training, Education & Incubation' },
  { icon: Palmtree, label: 'Agro & Eco Tourism' },
];

export const LangkawiInnovationHubSection: React.FC = () => {
  return (
    <section
      id="langkawi-innovation-hub"
      className="
        relative
        overflow-hidden
        select-none
        bg-[#061e24]
        py-24
        md:py-32
      "
    >
      {/* Coastal-inspired layered gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1100px 500px at 85% 0%, rgba(11,61,74,0.9) 0%, transparent 60%), radial-gradient(900px 500px at 15% 100%, rgba(8,90,107,0.55) 0%, transparent 60%)',
        }}
      />

      {/* Subtle bottom texture */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 opacity-40"
        style={{
          background:
            'repeating-linear-gradient(100deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 22px)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">

          {/* ============================================================
              LEFT — CONTENT
          ============================================================ */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/50
              "
            >
              Flagship Proposal
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="
                font-['Fraunces',serif]
                text-3xl
                font-semibold
                leading-[1.2]
                tracking-[-0.01em]
                text-white
                sm:text-4xl
                md:text-[42px]
              "
            >
              Langkawi{' '}
              <span className="font-medium italic text-white/80">
                Innovation Hub
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                mt-6
                max-w-md
                text-base
                leading-[1.7]
                text-white/60
                md:text-[16.5px]
              "
            >
              A proposed Langkawi Island as a regional centre for marine
              biology, aquaculture and agricultural R&D, anchoring the
              island's next economic chapter in science and sustainability.
            </motion.p>
          </div>

          {/* ============================================================
              RIGHT — FEATURES
              
              No card / no glass container.
          ============================================================ */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

            {FEATURES.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                  }}
                  whileHover={{ y: -3 }}
                  className="
                    flex
                    items-center
                    gap-4
                    py-2
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                    "
                  >
                    <Icon
                      className="h-[18px] w-[18px] text-white"
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="
                      text-sm
                      font-medium
                      leading-snug
                      text-white
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};