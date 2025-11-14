import React from "react";

/**
 * Panel Background Light component - provides a flexible light background panel with dashed borders
 */
export interface PanelBgLightProps {
  /** Background image source */
  backgroundImage?: string;
  /** Background color fallback */
  backgroundColor?: string;
  /** Panel content */
  children: React.ReactNode;
  /** Width variant */
  width?: "sm" | "md" | "lg" | "full" | "auto";
  /** Height variant */
  height?: "sm" | "md" | "lg" | "full" | "auto";
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Border color for dashed borders */
  borderColor?: string;
  /** Border thickness */
  borderThickness?: "sm" | "md" | "lg";
}

/**
 * Size configuration for consistent dimensions
 */
const SIZE_CONFIG = {
  width: {
    sm: "w-64",
    md: "w-96",
    lg: "w-[500px]",
    full: "w-full",
    auto: "w-auto",
  },
  height: {
    sm: "h-32",
    md: "h-48",
    lg: "h-64",
    full: "h-full",
    auto: "h-auto",
  },
} as const;

/**
 * Border thickness configuration
 */
const BORDER_CONFIG = {
  sm: "border-t-[1px] border-b-[1px]",
  md: "border-t-[2px] border-b-[2px]",
  lg: "border-t-[3px] border-b-[3px]",
} as const;

/**
 * PanelBgLight Component with dashed top and bottom borders
 */
export const PanelBgLight: React.FC<PanelBgLightProps> = ({
  backgroundImage = "/images/Panel-background-light.svg",
  backgroundColor = "transparent",
  children,
  width = "auto",
  height = "auto",
  className = "",
  onClick,
  borderColor = "#878787",
  borderThickness = "md",
}) => {
  const sizeClasses = SIZE_CONFIG;
  const borderClass = BORDER_CONFIG[borderThickness];

  return (
    <div
      className={`
        relative
        ${sizeClasses.width[width]}
        ${sizeClasses.height[height]}
        ${borderClass}
        border-dashed
        ${onClick ? "cursor-pointer" : ""}
        overflow-hidden
        ${className}
      `}
      style={{
        borderTopColor: borderColor,
        borderBottomColor: borderColor,
      }}
      onClick={onClick}
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundColor: backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};

export default PanelBgLight;
