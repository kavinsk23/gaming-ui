import React from 'react';

/**
 * Title component with decorative side images
 * 
 * Features:
 * - Gray background (#D9D9D9)
 * - White top and bottom borders
 * - Decorative side images for transparent effect
 * - Centered text with gaming style
 */
export interface TitleProps {
  /** Text content of the title */
  children: React.ReactNode;
  /** Size variant of the title */
  size?: 'sm' | 'md' | 'lg';
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Left decorative image source */
  leftImage?: string;
  /** Right decorative image source */
  rightImage?: string;
}

/**
 * Size configuration for consistent title dimensions
 */
const SIZE_CONFIG = {
  sm: { container: 'py-2 px-6', text: 'text-lg', image: 'w-32 h-10 flex' },
  md: { container: 'py-3 px-8', text: 'text-xl', image: 'w-48 h-14 flex' },
  lg: { container: 'py-4 px-10', text: 'text-2xl', image: 'w-56 h-16 flex' },
} as const;

/**
 * Default decorative images (you can replace these paths)
 */
const DEFAULT_IMAGES = {
  left: '/images/Left.png',
  right: '/images/Right.png',
};

/**
 * Title Component
 * 
 * Gaming-style title with decorative side images and bordered design.
 * Perfect for section headers, mod titles, and feature labels.
 */
export const Title: React.FC<TitleProps> = ({
  children,
  size = 'md',
  className = '',
  onClick,
  leftImage = DEFAULT_IMAGES.left,
  rightImage = DEFAULT_IMAGES.right,
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
        ${onClick ? 'cursor-pointer hover:bg-gray-300 transition-colors duration-200' : ''}
        ${className}
      `}
style={{
  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, #3A3A3A 25%, #3A3A3A 65%, rgba(0, 0, 0, 0.3) 100%)'
}}
      onClick={onClick}
    >
      {/* Left decorative image */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center">
        <img 
          src={leftImage}
          alt=""
          className={`
            ${sizeClasses.image}
            object-contain
            opacity-80
          `}
        />
      </div>

      {/* Right decorative image */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center">
        <img 
          src={rightImage}
          alt=""
          className={`
            ${sizeClasses.image}
            object-contain
            opacity-80
          `}
        />
      </div>

      {/* Title text */}
      <h2 className={`
        font-bold
        text-white
        text-center
        uppercase
        tracking-wide
        relative
        z-10
        ${sizeClasses.text}
      `}>
        {children}
      </h2>
    </div>
  );
};

export default Title;