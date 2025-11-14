import React from 'react';

/**
 * Element Icon component - displays gaming element icons from PNG files
 */
export interface ElementIconProps {
  /** Type of element to display */
  element: 'earth' | 'fire' | 'ice' | 'kinetic' | 'life' | 'lightning';
  /** Size variant of the icon */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Size configuration for consistent icon dimensions
 */
const SIZE_CONFIG = {
  sm: { container: 'w-8 h-8', icon: 'w-6 h-6' },
  md: { container: 'w-12 h-12', icon: 'w-10 h-10' },
  lg: { container: 'w-16 h-16', icon: 'w-14 h-14' },
  xl: { container: 'w-20 h-20', icon: 'w-18 h-18' },
} as const;

/**
 * Element icon paths in public folder
 */
const ELEMENT_PATHS = {
  earth: '/icons/Earth.png',
  fire: '/icons/Fire.png',
  ice: '/icons/Ice.png',
  kinetic: '/icons/Kinetic.png',
  life: '/icons/Life.png',
  lightning: '/icons/Lightning.png',
} as const;

/**
 * ElementIcon Component
 */
export const ElementIcon: React.FC<ElementIconProps> = ({
  element,
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const iconPath = ELEMENT_PATHS[element];

  return (
    <div
      className={`
        ${sizeClasses.container}
        
        flex
        items-center
        justify-center
        transition-all
        duration-200
        hover:scale-105
        hover:border-gray-400
        hover:shadow-lg
        cursor-pointer
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
        ${className}
      `}
      onClick={onClick}
      role="img"
      aria-label={`${element} element icon`}
    >
      <img 
        src={iconPath}
        alt={`${element} element`}
        className={`
          ${sizeClasses.icon}
          object-contain
          transition-transform
          duration-200
        `}
      />
    </div>
  );
};

export default ElementIcon;