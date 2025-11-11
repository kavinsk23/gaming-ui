import React from 'react';

/**
 * Tile component - Square container with multiple variants
 * 
 * Features:
 * - Square aspect ratio
 * - Multiple variants: empty and filled
 * - Replaceable image/SVG content for filled variant
 * - Thick top border for filled variant
 * - Background pattern for empty variant
 */
export interface TileProps {
  /** Size variant of the tile */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Show hover effect */
  hoverEffect?: boolean;
  /** Tile variant */
  variant?: 'empty' | 'filled';
  /** Image/SVG source to display (for filled variant) */
  image?: string;
  /** Alt text for image (for filled variant) */
  alt?: string;
  /** Thickness of the top border (for filled variant) */
  topBorderThickness?: 'sm' | 'md' | 'lg';
  /** Background pattern for empty variant */
  emptyBackground?: string;
}

/**
 * Size configuration for consistent tile dimensions
 */
const SIZE_CONFIG = {
  xs: { container: 'w-16 h-16' },      // 64px
  sm: { container: 'w-20 h-20' },      // 80px
  md: { container: 'w-24 h-24' },      // 96px
  lg: { container: 'w-28 h-28' },      // 112px
  xl: { container: 'w-32 h-32' },      // 128px
  '2xl': { container: 'w-36 h-36' },   // 144px
} as const;

/**
 * Specific pixel size variants
 */
const PIXEL_SIZE_CONFIG = {
  '84px': { container: 'w-[84px] h-[84px]' },
  '116px': { container: 'w-[116px] h-[116px]' },
} as const;

/**
 * Top border thickness configuration (for filled variant)
 */
const BORDER_CONFIG = {
  sm: 'border-t-[3px]',
  md: 'border-t-[4px]',
  lg: 'border-t-[6px]',
} as const;

/**
 * Default background pattern for empty tiles
 */
const DEFAULT_EMPTY_BG = '/images/tile-bg.svg';

/**
 * Tile Component
 * 
 * Square tile with empty and filled variants.
 */
export const Tile: React.FC<TileProps> = ({
  size = 'md',
  className = '',
  onClick,
  hoverEffect = false,
  variant = 'empty',
  image,
  alt = '',
  topBorderThickness = 'md',
  emptyBackground = DEFAULT_EMPTY_BG,
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const borderClass = BORDER_CONFIG[topBorderThickness];

  // Empty variant - always has background pattern
  if (variant === 'empty') {
    return (
      <div
        className={`
          border
          border-[#878787]
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? 'cursor-pointer' : ''}
          ${hoverEffect ? 'hover:border-white transition-colors duration-200' : ''}
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        onClick={onClick}
      />
    );
  }

  // Filled variant
  return (
    <div
      className={`
        border
        border-[#878787]
        ${borderClass}
        border-t-[#878787]
        bg-transparent
        relative
        overflow-hidden
        ${sizeClasses.container}
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverEffect ? 'hover:border-white transition-colors duration-200' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image/SVG content */}
      {image && (
        <img 
          src={image}
          alt={alt}
          className="w-full h-full object-cover p-1"
        />
      )}
    </div>
  );
};

/**
 * Pixel-perfect Tile component with specific pixel sizes
 */
export const PixelTile: React.FC<Omit<TileProps, 'size'> & { size: keyof typeof PIXEL_SIZE_CONFIG }> = ({
  size = '116px',
  className = '',
  onClick,
  hoverEffect = false,
  variant = 'empty',
  image,
  alt = '',
  topBorderThickness = 'md',
  emptyBackground = DEFAULT_EMPTY_BG,
}) => {
  const sizeClasses = PIXEL_SIZE_CONFIG[size];
  const borderClass = BORDER_CONFIG[topBorderThickness];

  // Empty variant - always has background pattern
  if (variant === 'empty') {
    return (
      <div
        className={`
          border
          border-[#878787]
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? 'cursor-pointer' : ''}
          ${hoverEffect ? 'hover:border-white transition-colors duration-200' : ''}
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        onClick={onClick}
      />
    );
  }

  // Filled variant
  return (
    <div
      className={`
        border
        border-[#878787]
        ${borderClass}
        border-t-[#878787]
        bg-transparent
        relative
        overflow-hidden
        ${sizeClasses.container}
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverEffect ? 'hover:border-white transition-colors duration-200' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image/SVG content */}
      {image && (
        <img 
          src={image}
          alt={alt}
          className="w-full h-full object-cover p-1"
        />
      )}
    </div>
  );
};

export default Tile;