import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import ecosystemGraphic from '../assets/ecosystem-hub.png';

const PILLARS: string[] = [
  'Agricultural Transformation',
  'Agricultural Innovation',
  'Agricultural Economic Development',
  'Agricultural Workforce Development',
  'Research & Development',
];

export const EcosystemInitiativeSection: React.FC = () => {
  return (
    <section
      id="ecosystem-initiative"
      className="relative overflow-hidden bg-[#e8eef5]"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div
          className="
            grid
            min-h-[700px]
            grid-cols-1
            lg:grid-cols-[44%_56%]
            items-center
          "
        >

          {/* ============================================================
              LEFT CONTENT
          ============================================================ */}
          <div
            className="
              relative
              z-20
              flex
              h-full
              items-center
              px-8
              py-16
              sm:px-12
              lg:px-[55px]
              lg:py-20
              xl:px-[68px]
            "
          >
            <div className="w-full max-w-[610px]">

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#174b62]
                    sm:text-xs
                  "
                >
                  Flagship Initiative
                </span>

                {/* MAITI */}
                <h2
                  className="
                    mt-4
                    font-['Fraunces',serif]
                    text-[52px]
                    font-medium
                    leading-[0.95]
                    tracking-[-0.025em]
                    text-[#071827]
                    sm:text-[58px]
                    lg:text-[64px]
                  "
                >
                  MAITI
                </h2>

                {/* Subtitle */}
                <p
                  className="
                    mt-5
                    text-[17px]
                    font-medium
                    leading-[1.4]
                    text-[#0b4a63]
                    sm:text-[18px]
                  "
                >
                  Malaysia Agriculture Innovation &amp; Transformation
                  Initiative
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-8
                  max-w-[590px]
                  text-[15px]
                  font-normal
                  leading-[1.75]
                  text-[#46596c]
                  sm:text-[16px]
                "
              >
                MAITI is IFAME&rsquo;s flagship initiative to accelerate
                Malaysia&rsquo;s agricultural transformation through
                innovation, investment, technology, and human capital
                development.
              </motion.p>

              {/* Pillars */}
              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  delay: 0.22,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-8 space-y-[14px]"
              >
                {PILLARS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      className="
                        h-[21px]
                        w-[21px]
                        flex-shrink-0
                        text-[#14536b]
                      "
                      strokeWidth={1.7}
                    />

                    <span
                      className="
                        text-[14.5px]
                        leading-none
                        text-[#344b60]
                        sm:text-[15px]
                      "
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </motion.ul>

            </div>
          </div>

          {/* ============================================================
              RIGHT ECOSYSTEM
          ============================================================ */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              h-[520px]
              w-full
              sm:h-[600px]
              lg:h-[700px]
            "
          >

            {/* Background-colored wrapper */}
            <div
              className="
                absolute
                inset-0
                overflow-hidden
                bg-[#e8eef5]
              "
            >

              {/* Ecosystem image */}
              <img
                src={ecosystemGraphic}
                alt="MAITI agricultural innovation ecosystem"
                draggable={false}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-auto
                  w-[108%]
                  max-w-none
                  -translate-x-1/2
                  -translate-y-1/2
                  select-none
                "
              />

              {/* ---------------------------------------------------------
                  Subtle edge blending.

                  This hides the original image's slightly different
                  background at the edges without affecting the actual
                  ecosystem artwork.
              --------------------------------------------------------- */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-[8%]
                  bg-gradient-to-r
                  from-[#e8eef5]
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  w-[5%]
                  bg-gradient-to-l
                  from-[#e8eef5]
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-[5%]
                  bg-gradient-to-b
                  from-[#e8eef5]
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[5%]
                  bg-gradient-to-t
                  from-[#e8eef5]
                  to-transparent
                "
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};