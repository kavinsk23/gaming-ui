// ButtonLong.tsx
import React from "react";
import { ChevronsUp, Zap } from "lucide-react";
import pattern from "../../../public/images/Pattern.png";

/**
 * ButtonLong component - Gaming-style stacked button with icon and stats
 *
 * Features:
 * - Black background with fixed image layer
 * - Stacked layout with icon and text
 * - Three stat icons with numbers
 * - Multiple states: default, highlighted, locked
 */
export interface ButtonLongProps {
  /** Main text content */
  mainText: string;
  /** Array of stat numbers [left, middle, right] */
  stats: [number, number, number];
  /** Button state variant */
  variant?: "default" | "highlighted" | "locked";
  /** Size variant of the button */
  size?: "sm" | "md" | "lg";
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Background image source */
  backgroundImage?: string;
  /** Stat icons source */
  statIcons?: [string, string, string];
  /** Alt text for images */
  alt?: string;
}

/**
 * Size configuration for consistent button dimensions
 */
const SIZE_CONFIG = {
  sm: {
    container: "py-3 px-6",
    mainText: "text-sm",
    stats: "text-xs",
    icon: "w-4 h-4",
  },
  md: {
    container: "p-4",
    mainText: "text-base",
    stats: "text-sm",
    icon: "w-5 h-5",
  },
  lg: {
    container: "py-5 px-10",
    mainText: "text-lg",
    stats: "text-base",
    icon: "w-6 h-6",
  },
} as const;

/**
 * Default stat icons
 */
const DEFAULT_STAT_ICONS: [string, string, string] = [
  "/icons/image-40.svg",
  "/icons/image-41.svg",
  "/icons/image-42.svg",
];

/**
 * ButtonLong Component
 *
 * Gaming-style stacked button with icon, main text, and stat indicators.
 */
export const ButtonLong: React.FC<ButtonLongProps> = ({
  mainText,
  stats,
  variant = "default",
  size = "md",
  className = "",
  onClick,
  statIcons = DEFAULT_STAT_ICONS,
  alt = "Button background",
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const isLocked = variant === "locked";

  return (
    <button
      className={`
        relative
        bg-black
        flex
        w-full
        flex-row
        items-center
        justify-center
        ${sizeClasses.container}
        ${
          !isLocked
            ? "cursor-pointer hover:opacity-90 transition-opacity duration-200"
            : ""
        }
        ${variant === "highlighted" ? "border-r-[3px] border-b-white" : ""}
        ${className}
      `}
      onClick={!isLocked ? onClick : undefined}
      disabled={isLocked}
    >
      {/* Radial gradient for half oval with soft fade edges */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at right center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* Background image layer */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src={pattern}
          alt={alt}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-row items-center justify-between gap-2 w-full">
        {/* First row: Icon + Main text */}
        <div className="flex items-center gap-2 mr-auto">
          <ChevronsUp
            className={`
            ${sizeClasses.icon}
            ${variant === "highlighted" ? "" : "text-white"}
            ${isLocked ? "text-[#FE6163]" : "text-white"}
          `}
          />
          <span
            className={`
            font-bold
            text-white
            uppercase
            tracking-wide
            ${sizeClasses.mainText}
            ${isLocked ? "text-[#FE6163]" : ""}
          `}
          >
            {mainText}
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 ml-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-1">
              <img
                src={statIcons[index]}
                alt={`Stat ${index + 1}`}
                className={`
          ${sizeClasses.icon}
          opacity-80
        `}
              />
              <span
                className={`
        font-mono
        ${isLocked && index === 1 ? "text-[#FE6163]" : "text-white"}
        ${sizeClasses.stats}
        ${isLocked && index !== 1 ? "text-white" : ""}
      `}
              >
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lock overlay for locked variant - EMPTY NOW, JUST KEEPING THE STRUCTURE */}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          {/* Empty - background image will show through */}
        </div>
      )}
    </button>
  );
};

export default ButtonLong;
