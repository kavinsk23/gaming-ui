import React from 'react';

/**
 * Rolled Stat component - displays stat name with percentage and colored indicator
 */
export interface RolledStatProps {
  /** Stat name */
  statName: string;
  /** Percentage value */
  percentage: number;
  /** Variant type */
  variant?: 'positive' | 'negative';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
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
    container: 'h-8 px-3',
    text: 'text-sm',
    circle: 'w-3 h-3',
    percentage: 'text-sm'
  },
  md: {
    container: 'h-10 px-4',
    text: 'text-base',
    circle: 'w-4 h-4',
    percentage: 'text-base'
  },
  lg: {
    container: 'h-12 px-5',
    text: 'text-lg',
    circle: 'w-5 h-5',
    percentage: 'text-lg'
  },
} as const;

/**
 * Variant configuration for colors and gradients
 */
const VARIANT_CONFIG = {
  positive: {
    gradient: 'linear-gradient(90deg, #8DC740 0%, #8DC740 0%, rgba(141, 199, 64, 0.4) 50%, rgba(141, 199, 64, 0.1) 100%)',
    circleColor: '#89C53A',
    textColor: 'text-white'
  },
  negative: {
    gradient: 'linear-gradient(90deg, #DB6660 0%, #DB6660 0%, rgba(219, 102, 96, 0.4) 50%, rgba(219, 102, 96, 0.1) 100%)',
    circleColor: '#DB6660',
    textColor: 'text-white'
  },
} as const;

/**
 * RolledStat Component
 */
export const RolledStat: React.FC<RolledStatProps> = ({
  statName,
  percentage,
  variant = 'positive',
  size = 'md',
  className = '',
  onClick,
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const variantClasses = VARIANT_CONFIG[variant];

  return (
    <div className="flex items-center w-full">
      {/* Label text on left side */}
      <div className="flex-1 pr-4">
        <span className={`
          font-medium
          text-white
          ${sizeClasses.text}
          whitespace-nowrap
        `}>
          {statName}
        </span>
      </div>

      {/* Percentage and circle with gradient background */}
      <div
        className={`
          relative
          flex
          items-center
          justify-end
          ${sizeClasses.container}
          ${onClick ? 'cursor-pointer hover:opacity-90' : 'cursor-default'}
          transition-opacity
          duration-200
          min-w-[120px]
          ${className}
        `}
        style={{
          background: variantClasses.gradient,
        }}
        onClick={onClick}
      >
        {/* Colored circle indicator */}
        <div
          className={`${sizeClasses.circle} rounded-full mr-3 flex-shrink-0`}
          style={{ backgroundColor: variantClasses.circleColor }}
        />

        {/* Percentage text */}
        <span className={`
          font-medium
          ${variantClasses.textColor}
          ${sizeClasses.percentage}
          whitespace-nowrap
        `}>
          ({percentage > 0 ? '+' : ''}{percentage}%)
        </span>
      </div>
    </div>
  );
};

export default RolledStat;