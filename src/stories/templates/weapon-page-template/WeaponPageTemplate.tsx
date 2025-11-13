import React from 'react';

export interface WeaponPageTemplateProps {
  /** Background image URL - defaults to local weapon-bg.png */
  backgroundImage?: string;
  /** Blur intensity (default: 'sm') */
  blurIntensity?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Overlay opacity (default: 60) */
  overlayOpacity?: number;
  /** Additional CSS classes */
  className?: string;
  /** Child components to render over the background */
  children?: React.ReactNode;
}

/**
 * WeaponPage - Provides an immersive blurred background for weapon displays
 * Perfect for gaming interfaces with customizable blur and overlay effects
 * Uses fixed local background image by default
 */
export const WeaponPageTemplate: React.FC<WeaponPageTemplateProps> = ({
  backgroundImage = '/images/weapon-bg.png',
  blurIntensity = 'sm',
  overlayOpacity = 60,
  className = '',
  children,
}) => {
  const blurClasses = {
    none: 'backdrop-blur-none',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <div 
      className={`relative min-h-screen overflow-hidden ${className}`}
      data-testid="weapon-page"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-testid="weapon-page-bg"
      />
      
      {/* Blur Layer */}
      <div 
        className={`absolute inset-0 bg-black/${overlayOpacity} ${blurClasses[blurIntensity]}`}
        data-testid="weapon-page-blur"
      />
      
      {/* Content Slot */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default WeaponPageTemplate;