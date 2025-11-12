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
    container: 'h-8 px-4',
    text: 'text-base',
    circle: 'w-6 h-6',
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
    gradient: 'linear-gradient(90deg, #8DC740 0%, rgba(141, 199, 64, 0.8) 0%, rgba(141, 199, 64, 0.3) 80%, rgba(141, 199, 64, 0) 100%)',
    circleColor: '#89C53A',
    textColor: '#89C53A'
  },
  negative: {
    gradient: 'linear-gradient(90deg, #DB6660 0%, rgba(219, 102, 96, 0.8) 0%, rgba(219, 102, 96, 0.3) 80%, rgba(219, 102, 96, 0) 100%)',
    circleColor: '#DB6660',
    textColor: '#DB6660'
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
        <span 
          className={`
            font-medium
            ${sizeClasses.percentage}
            whitespace-nowrap
          `}
          style={{ color: variantClasses.textColor }}
        >
          ({percentage > 0 ? '+' : ''}{percentage}%)
        </span>
      </div>
    </div>
  );
};

export default RolledStat;