import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-coastal-skyline.png';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onExploreExpertise: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutions,
  onExploreExpertise
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[92vh] bg-white flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 md:pb-32 overflow-hidden select-none"
    >
      {/* Photo background — already fades to white on its left edge */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Safety gradient to guarantee a clean white field behind the text on small/ultrawide screens */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0.85) 34%, rgba(255,255,255,0) 54%)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-semibold text-[#0a1620] tracking-[-0.01em] leading-[1.22] font-['Fraunces',serif]"
              id="hero-main-heading"
            >
              Transforming Opportunities into{' '}
              <span className="italic font-medium text-[#061e24]">
                Sustainable Economic Impact.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-600 text-base md:text-[16.5px] font-normal leading-[1.7] mt-6 mb-10 max-w-md"
            id="hero-supporting-copy"
          >
            Strategic Transformation.
            <br />
            Innovation. Investment. Impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8 flex-wrap"
          >
            {/* Primary button — deep teal, echoes the water in the photo */}
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={onExploreSolutions}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0b3d4a] hover:bg-[#092e38] text-white text-sm font-semibold tracking-wide shadow-lg shadow-[#0b3d4a]/25 transition-colors duration-200 cursor-pointer group"
              id="hero-explore-solutions-btn"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary link */}
            <motion.button
              whileHover={{ x: 2 }}
              onClick={onExploreExpertise}
              className="inline-flex items-center gap-2 text-[#0a1620] hover:text-[#0b3d4a] text-sm font-medium transition-colors group cursor-pointer py-2 px-1"
              id="hero-our-expertise-btn"
            >
              <span>Our Expertise</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};