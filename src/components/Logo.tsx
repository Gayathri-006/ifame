import React from 'react';
import logoImage from '../assets/images/logo.png';

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

  // How far to push the logo down inside its box, in px.
  // Increase this if it's still poking out the top.
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