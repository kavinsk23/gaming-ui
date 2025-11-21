import React from "react";

export interface WeaponBgTemplateProps {
  /** Background image URL - defaults to local weapon-bg.png */
  backgroundImage?: string;
  /** Weapon image URL */
  weaponImage: string;
  /** Weapon image alt text */
  weaponImageAlt?: string;
  /** Blur intensity (default: 'sm') */
  blurIntensity?: "none" | "sm" | "md" | "lg" | "xl";
  /** Overlay opacity (default: 60) */
  overlayOpacity?: number;
  /** Additional CSS classes */
  className?: string;
  /** Child components to render over the background */
  children?: React.ReactNode;
}

/**
 * WeaponBgTemplate - Provides an immersive blurred background for weapon displays
 * Perfect for gaming interfaces with customizable blur and overlay effects
 * Uses fixed local background image by default
 * Includes a reusable image tag for displaying the weapon
 */
export const WeaponBgTemplate: React.FC<WeaponBgTemplateProps> = ({
  backgroundImage = "/images/weapon-bg.png",
  weaponImage,
  weaponImageAlt = "Weapon display",
  blurIntensity = "sm",
  overlayOpacity = 60,
  className = "",
  children,
}) => {
  const blurClasses = {
    none: "backdrop-blur-none",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${className}`}
      data-testid="weapon-bg-template"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        data-testid="weapon-bg-template-bg"
      />

      {/* Blur Layer */}
      <div
        className={`absolute inset-0 bg-black/${overlayOpacity} ${blurClasses[blurIntensity]}`}
        data-testid="weapon-bg-template-blur"
      />

      {/* Weapon Image */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center justify-center overflow-hidden">
          <img
            src={weaponImage}
            alt={weaponImageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content Slot */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default WeaponBgTemplate;
