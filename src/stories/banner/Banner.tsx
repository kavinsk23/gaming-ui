import React from 'react';

/**
 * Banner component 
 * 
 * Features:
 * - Dark gradient background
 * - No side images
 * - White text with 50% opacity
 * - Centered text with gaming style
 */
export interface BannerProps {
  /** Text content of the banner */
  children: React.ReactNode;
  /** Size variant of the banner */
  size?: 'sm' | 'md' | 'lg';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Size configuration for consistent banner dimensions
 */
const SIZE_CONFIG = {
  sm: { container: 'py-2 px-6', text: 'text-lg' },
  md: { container: 'py-3 px-8', text: 'text-xl' },
  lg: { container: 'py-4 px-10', text: 'text-2xl' },
} as const;

/**
 * Banner Component
 * 
 * Gaming-style banner with gradient background and semi-transparent text.
 * Perfect for section headers, status labels, and feature indicators.
 */
export const Banner: React.FC<BannerProps> = ({
  children,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeClasses = SIZE_CONFIG[size];

  return (
    <div
      className={`
        relative
        border-t-2
        border-b-2
        border-white
        flex
        items-center
        justify-center
        ${sizeClasses.container}
        ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity duration-200' : ''}
        ${className}
      `}
  style={{
  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(58, 58, 58, 0.8) 20%, #3A3A3A 40%, #3A3A3A 60%, rgba(58, 58, 58, 0.8) 80%, rgba(0, 0, 0, 0.3) 100%)'
}}
      onClick={onClick}
    >
      {/* Banner text with 50% opacity */}
      <h2 className={`
        font-bold
        text-white
        text-center
        uppercase
        tracking-wide
        relative
        z-10
        opacity-50
        ${sizeClasses.text}
      `}>
        {children}
      </h2>
    </div>
  );
};

export default Banner;