import React from 'react';

/**
 * Tile component - Square container with background image
 * 
 * Features:
 * - Square aspect ratio
 * - SVG background image
 * - Multiple size variants
 * - Optional hover effects
 */
export interface TileProps {
  /** Size variant of the tile */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Background image source (SVG) */
  backgroundImage?: string;

  /** Content to display inside the tile */
  children?: React.ReactNode;
  /** Show hover effect */
  hoverEffect?: boolean;
}

/**
 * Size configuration for consistent tile dimensions
 * Includes specific 84px and 116px sizes as requested
 */
const SIZE_CONFIG = {
  xs: { container: 'w-16 h-16', text: 'text-xs' },      // 64px
  sm: { container: 'w-20 h-20', text: 'text-sm' },      // 80px
  md: { container: 'w-24 h-24', text: 'text-base' },    // 96px
  lg: { container: 'w-28 h-28', text: 'text-lg' },      // 112px
  xl: { container: 'w-32 h-32', text: 'text-xl' },      // 128px
  '2xl': { container: 'w-36 h-36', text: 'text-2xl' },  // 144px
} as const;

/**
 * Specific pixel size variants
 */
const PIXEL_SIZE_CONFIG = {
  '84px': { container: 'w-[84px] h-[84px]', text: 'text-base' },
  '116px': { container: 'w-[116px] h-[116px]', text: 'text-lg' },
} as const;

/**
 * Default background SVG (you can replace this)
 */
const DEFAULT_BACKGROUND = '/images/tile-bg.svg';

/**
 * Tile Component
 * 
 * Square tile with SVG background, perfect for icons, mod thumbnails, or game items.
 */
export const Tile: React.FC<TileProps> = ({
  size = 'md',
  className = '',
  onClick,
  backgroundImage = DEFAULT_BACKGROUND,
  children,
  hoverEffect = false,
}) => {
  const sizeClasses = SIZE_CONFIG[size];

  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        ${sizeClasses.container}
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverEffect ? 'hover:scale-105 hover:shadow-lg transition-all duration-200' : ''}
        ${className}
      `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      {/* Optional overlay for better text readability */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`
            text-white
            font-semibold
            text-center
            uppercase
            tracking-wide
            ${sizeClasses.text}
          `}>
            {children}
          </div>
        </div>
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
  backgroundImage = DEFAULT_BACKGROUND,
  children,
  hoverEffect = false,
}) => {
  const sizeClasses = PIXEL_SIZE_CONFIG[size];

  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        ${sizeClasses.container}
        ${onClick ? 'cursor-pointer' : ''}
        ${hoverEffect ? 'hover:scale-105 hover:shadow-lg transition-all duration-200' : ''}
        ${className}
      `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={onClick}
    >
      {/* Optional overlay for better text readability */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`
            text-white
            font-semibold
            text-center
            uppercase
            tracking-wide
            ${sizeClasses.text}
          `}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tile;