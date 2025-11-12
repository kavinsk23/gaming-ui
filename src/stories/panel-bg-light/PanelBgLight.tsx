import React from 'react';

/**
 * Panel Background Light component - provides a flexible light background panel
 */
export interface PanelBgLightProps {
  /** Background image source */
  backgroundImage?: string;
  /** Background color fallback */
  backgroundColor?: string;
  /** Panel content */
  children: React.ReactNode;
  /** Width variant */
  width?: 'sm' | 'md' | 'lg' | 'full' | 'auto';
  /** Height variant */
  height?: 'sm' | 'md' | 'lg' | 'full' | 'auto';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Size configuration for consistent dimensions
 */
const SIZE_CONFIG = {
  width: {
    sm: 'w-64',
    md: 'w-96',
    lg: 'w-[500px]',
    full: 'w-full',
    auto: 'w-auto'
  },
  height: {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
    full: 'h-full',
    auto: 'h-auto'
  }
} as const;

/**
 * PanelBgLight Component
 */
export const PanelBgLight: React.FC<PanelBgLightProps> = ({
  backgroundImage = '/images/Panel-background-light.svg', // Default light background
  backgroundColor = 'transparent',
  children,
  width = 'auto',
  height = 'auto',
  className = '',
  onClick,
}) => {
  const sizeClasses = SIZE_CONFIG;

  return (
    <div
      className={`
        relative
        ${sizeClasses.width[width]}
        ${sizeClasses.height[height]}
        ${onClick ? 'cursor-pointer' : ''}
        overflow-hidden
        ${className}
      `}
      onClick={onClick}
    >
      {/* Background image layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundColor: backgroundColor,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content layer */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default PanelBgLight;