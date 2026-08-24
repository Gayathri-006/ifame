import React from 'react';
import heroWaveBg from '../assets/images/hero-wave-bg.png';

interface DigitalWaveCanvasProps {
  className?: string;
}

export const DigitalWaveCanvas: React.FC<DigitalWaveCanvasProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Background image: wave/particle field sits on the right side of the source image,
          so we bias the crop further right as the viewport grows, keeping the plain dark
          area (where the headline sits) visible on small screens. Vertical position is
          biased toward the top so the empty margin above the wave (as in the source image)
          stays visible instead of being cropped out, which was pushing the wave up too far. */}
      <img
        src={heroWaveBg}
        alt="Hero digital wave background"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-[35%_15%] sm:object-[55%_15%] lg:object-[100%_15%] select-none"
      />

      {/* Left-side readability veil so headline/body text stays legible over the graphic on all screen sizes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020718] via-[#020718]/60 sm:via-[#020718]/40 to-transparent pointer-events-none" />

      {/* Subtle bottom edge blend to transition smoothly into the following section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020718] to-transparent pointer-events-none" />
    </div>
  );
};

export default DigitalWaveCanvas;