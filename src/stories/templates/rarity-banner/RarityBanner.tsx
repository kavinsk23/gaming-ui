import React from 'react';

/**
 * Rarity Banner component - displays rarity banner with text
 */
export interface RarityBannerProps {
  /** Rarity variant */
  variant: 'primal' | 'rare';
  /** Banner text */
  text: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Size configuration for consistent dimensions
 */
const SIZE_CONFIG = {
  sm: {
    width: 'w-[200px]',
    height: 'h-[38px]',
    text: 'text-sm'
  },
  md: {
    width: 'w-[300px]',
    height: 'h-[57px]',
    text: 'text-base'
  },
  lg: {
    width: 'w-[400px]',
    height: 'h-[76px]',
    text: 'text-lg'
  },
  xl: {
    width: 'w-[500px]',
    height: 'h-[95px]',
    text: 'text-xl'
  }
} as const;

/**
 * Background image paths for each variant
 */
const BACKGROUND_IMAGES = {
  primal: '/images/Primal.svg',
  rare: '/images/Rare.svg'
} as const;

/**
 * RarityBanner Component
 */
export const RarityBanner: React.FC<RarityBannerProps> = ({
  variant,
  text,
  size = 'lg',
  className = '',
  onClick,
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const backgroundImage = BACKGROUND_IMAGES[variant];

  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        ${sizeClasses.width}
        ${sizeClasses.height}
        ${onClick ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
        transition-transform
        duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {/* Background image layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Banner text */}
      <span className={`
        relative
        z-10
        font-bold
        uppercase
        tracking-widest
        text-white
        ${sizeClasses.text}
        text-center
        drop-shadow-lg
      `}>
        {text}
      </span>
    </div>
  );
};

export default RarityBanner;