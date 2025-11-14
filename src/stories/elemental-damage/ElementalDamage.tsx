import React from "react";
import ElementIcon, { ElementIconProps } from "../element-icon/ElementIcon";

/**
 * Elemental Damage component - displays damage value with element icon and underline
 */
export interface ElementalDamageProps {
  /** Damage value */
  damage: number;
  /** Type of element */
  element: ElementIconProps["element"];
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl";
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
    container: "gap-1",
    damage: "text-sm",
    icon: "sm" as const,
    underline: "w-[80px]",
  },
  md: {
    container: "gap-2",
    damage: "text-2xl",
    icon: "md" as const,
    underline: "w-[120px]",
  },
  lg: {
    container: "gap-3",
    damage: "text-lg",
    icon: "lg" as const,
    underline: "w-[140px]",
  },
  xl: {
    container: "gap-4",
    damage: "text-xl",
    icon: "xl" as const,
    underline: "w-[160px]",
  },
} as const;

/**
 * Element-specific underline SVG paths
 */
const UNDERLINE_PATHS = {
  earth: "/images/Underline-5.svg",
  fire: "/images/Underline.svg",
  ice: "/images/Underline-1.svg",
  kinetic: "/images/Underline-3.svg",
  lightning: "/images/Underline-4.svg",
  life: "/images/Underline-2.svg",
} as const;

/**
 * Underline SVG component
 */
const UnderlineSVG: React.FC<{
  element: ElementIconProps["element"];
  className?: string;
}> = ({ element, className = "" }) => (
  <img
    src={UNDERLINE_PATHS[element]}
    alt={`${element} underline`}
    className={className}
  />
);

/**
 * ElementalDamage Component
 */
export const ElementalDamage: React.FC<ElementalDamageProps> = ({
  damage,
  element,
  size = "md",
  className = "",
  onClick,
}) => {
  const sizeClasses = SIZE_CONFIG[size];

  return (
    <div
      className={`
        relative
        flex
        flex-col
        items-center
        ${sizeClasses.container}
        ${onClick ? "cursor-pointer hover:opacity-80" : "cursor-default"}
        transition-opacity
        duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {/* Damage value and icon */}
      <div className="flex items-center justify-center gap-2">
        <ElementIcon element={element} size={sizeClasses.icon} />
        <span
          className={`
          font-bold
          text-white
          ${sizeClasses.damage}
        `}
        >
          {damage}
        </span>
      </div>

      {/* Underline SVG */}
      <div className="w-full flex justify-center">
        <UnderlineSVG element={element} className={sizeClasses.underline} />
      </div>
    </div>
  );
};

export default ElementalDamage;
