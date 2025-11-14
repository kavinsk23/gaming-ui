import React from "react";
import textureImg from "../../../../public/images/Texture.png";

/**
 * ButtonBasic component - Gaming-style button with fixed image layer and text
 *
 * Features:
 * - Dark gradient background
 * - Fixed image layer for all states
 * - Text overlay
 * - Multiple states: default, highlighted, disabled
 */
export interface ButtonBasicProps {
  /** Text content of the button */
  children: React.ReactNode;
  /** Button state variant */
  variant?: "default" | "highlighted" | "disabled";
  /** Size variant of the button */
  size?: "sm" | "md" | "lg";
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Fixed image source for all variants */
  image?: string;
  /** Alt text for image */
  alt?: string;
}

/**
 * Size configuration for consistent button dimensions
 */
const SIZE_CONFIG = {
  sm: {
    container: "py-2 px-6",
    text: "text-sm",
    image: "w-full h-full",
  },
  md: {
    container: "py-3 px-8",
    text: "text-base",
    image: "w-full h-full",
  },
  lg: {
    container: "py-4 px-10",
    text: "text-lg",
    image: "w-full h-full",
  },
} as const;

/**
 * ButtonBasic Component
 *
 * Gaming-style button with fixed image layer and text overlay.
 * Perfect for action buttons, menu items, and interactive elements.
 */
export const ButtonBasic: React.FC<ButtonBasicProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick,
  image = textureImg,
  alt = "Button decoration",
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const isDisabled = variant === "disabled";

  return (
    <button
      className={`
        relative
        border-b-2
        border-white
        bg-[#2E353A]
        flex
        items-center
        justify-center
        ${sizeClasses.container}
        ${
          !isDisabled
            ? "cursor-pointer hover:opacity-90 text-[#5A5A5A] transition-opacity duration-200"
            : "cursor-not-allowed opacity-90"
        }
        ${
          variant === "highlighted"
            ? "border-b-[3px] border-b-white"
            : "border-none"
        }
        ${className}
      `}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
    >
      {/* Fixed background image layer - same for all variants */}
      <div className="absolute inset-0 flex items-center justify-center opacity-80">
        <img
          src={image}
          alt={alt}
          className={`
            ${sizeClasses.image}
            object-cover
          `}
        />
      </div>

      {/* Text content */}
      <span
        className={`
        font-bold
        text-white
        text-center
        uppercase
        tracking-wide
        relative
        z-10
        ${sizeClasses.text}
        ${isDisabled ? "text-gray-400" : ""}
      `}
      >
        {children}
      </span>
    </button>
  );
};

export default ButtonBasic;
