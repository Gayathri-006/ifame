import React from 'react';
import logoImage from '../assets/images/logo.webp';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const heights = {
    sm: 44,
    md: 70,
    lg: 72
  }[size];

  const nudgeDown = 5;

  return (
    <div
      className={`flex items-center select-none overflow-hidden ${className}`}
      style={{ height: heights }}
      id="ifame-brand-logo"
    >
      <img
        src={logoImage}
        alt="IFAME Consulting Logo"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          height: heights,
          width: 'auto',
          position: 'relative',
          top: nudgeDown
        }}
        className="transition-transform duration-300 hover:scale-[1.02] object-contain"
      />
    </div>
  );
};