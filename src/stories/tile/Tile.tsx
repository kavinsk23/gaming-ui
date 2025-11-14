import React from "react";

/**
 * Tile component - Square container with multiple variants
 *
 * Features:
 * - Square aspect ratio
 * - Multiple variants: empty, filled, selected, and locked
 * - Replaceable image/SVG content for filled variant
 * - Thick top border for filled variant
 * - Background pattern for empty variant
 * - Corner indicators for selected variant
 * - Lock icon for locked variant
 * - Gradient overlay for selected variant
 */
export interface TileProps {
  /** Size variant of the tile */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Show hover effect */
  hoverEffect?: boolean;
  /** Tile variant */
  variant?: "empty" | "filled" | "selected" | "locked";
  /** Image/SVG source to display (for filled variant) */
  image?: string;
  /** Alt text for image (for filled variant) */
  alt?: string;
  /** Thickness of the top border (for filled variant) */
  topBorderThickness?: "sm" | "md" | "lg";
  /** Background pattern for empty variant */
  emptyBackground?: string;
  /** Corner color for selected variant */
  cornerColor?: string;
  /** Lock icon source */
  lockIcon?: string;
  /** Border color for all variants */
  borderColor?: string;
  /** Gradient color for selected variant */
  gradientColor?: string;
}

/**
 * Size configuration for consistent tile dimensions
 */
const SIZE_CONFIG = {
  xs: { container: "w-16 h-16", corner: "w-1 h-1", lock: "w-4 h-4" }, // 64px
  sm: { container: "w-20 h-20", corner: "w-1.5 h-1.5", lock: "w-5 h-5" }, // 80px
  md: { container: "w-24 h-24", corner: "w-2 h-2", lock: "w-6 h-6" }, // 96px
  lg: { container: "w-28 h-28", corner: "w-2.5 h-2.5", lock: "w-7 h-7" }, // 112px
  xl: { container: "w-32 h-32", corner: "w-3 h-3", lock: "w-8 h-8" }, // 128px
  "2xl": { container: "w-36 h-36", corner: "w-3.5 h-3.5", lock: "w-9 h-9" }, // 144px
} as const;

/**
 * Specific pixel size variants
 */
const PIXEL_SIZE_CONFIG = {
  "84px": {
    container: "w-[84px] h-[84px]",
    corner: "w-2 h-2",
    lock: "w-6 h-6",
  },
  "116px": {
    container: "w-[116px] h-[116px]",
    corner: "w-2.5 h-2.5",
    lock: "w-8 h-8",
  },
} as const;

/**
 * Top border thickness configuration (for filled variant)
 */
const BORDER_CONFIG = {
  sm: "border-t-[3px]",
  md: "border-t-[4px]",
  lg: "border-t-[6px]",
} as const;

/**
 * Default background pattern for empty tiles
 */
const DEFAULT_EMPTY_BG = "/images/tile-bg.svg";
/**
 * Default corner color for selected tiles
 */
const DEFAULT_CORNER_COLOR = "#878787";
/**
 * Default lock icon
 */
const DEFAULT_LOCK_ICON = "/icons/custom-lock.svg";
/**
 * Default border color
 */
const DEFAULT_BORDER_COLOR = "#878787";
/**
 * Default gradient color for selected tiles
 */
const DEFAULT_GRADIENT_COLOR = "rgba(255, 255, 255, 0.5)";

/**
 * Corner Component for selected variant
 */
const Corner: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color: string;
  size: string;
}> = ({ position, color, size }) => {
  const positionClasses = {
    "top-left": "top-[-3px] left-[-3px] border-r border-b rotate-180",
    "top-right": "top-[-3px] right-[-3px] border-l border-b rotate-180",
    "bottom-left": "bottom-[-3px] left-[-3px] border-r border-t rotate-180",
    "bottom-right": "bottom-[-3px] right-[-3px] border-l border-t rotate-180",
  };

  return (
    <div
      className={`
        absolute
        ${positionClasses[position]}
        ${size}
      `}
      style={{
        borderColor: color,
      }}
    />
  );
};

/**
 * Lock Icon Component for locked variant
 */
const LockIcon: React.FC<{ icon: string; size: string }> = ({ icon, size }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={icon}
      alt="Locked"
      className={`
        ${size}
        object-contain
      `}
    />
  </div>
);

/**
 * Gradient Overlay Component for selected variant
 */
const GradientOverlay: React.FC<{ color: string }> = ({ color }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background: `radial-gradient(50% 50% at 50% 50%, ${color} 0%, rgba(255, 255, 255, 0) 100%)`,
    }}
  />
);

/**
 * Tile Component
 *
 * Square tile with empty, filled, selected, and locked variants.
 */
export const Tile: React.FC<TileProps> = ({
  size = "md",
  className = "",
  onClick,
  hoverEffect = false,
  variant = "empty",
  image,
  alt = "",
  topBorderThickness = "md",
  emptyBackground = DEFAULT_EMPTY_BG,
  cornerColor = DEFAULT_CORNER_COLOR,
  lockIcon = DEFAULT_LOCK_ICON,
  borderColor = DEFAULT_BORDER_COLOR,
  gradientColor = DEFAULT_GRADIENT_COLOR,
}) => {
  const sizeClasses = SIZE_CONFIG[size];
  const borderClass = BORDER_CONFIG[topBorderThickness];

  // Selected variant - has corner indicators and gradient overlay
  if (variant === "selected") {
    return (
      <div
        className={`
          border
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? "cursor-pointer" : ""}
          ${
            hoverEffect
              ? "hover:border-white transition-colors duration-200"
              : ""
          }
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: borderColor,
        }}
        onClick={onClick}
      >
        {/* Gradient overlay */}
        <GradientOverlay color={gradientColor} />

        {/* Corner indicators */}
        <Corner
          position="top-left"
          color={cornerColor}
          size={sizeClasses.corner}
        />
        <Corner
          position="top-right"
          color={cornerColor}
          size={sizeClasses.corner}
        />
        <Corner
          position="bottom-left"
          color={cornerColor}
          size={sizeClasses.corner}
        />
        <Corner
          position="bottom-right"
          color={cornerColor}
          size={sizeClasses.corner}
        />
      </div>
    );
  }

  // Locked variant - has lock icon overlay
  if (variant === "locked") {
    return (
      <div
        className={`
          border
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? "cursor-pointer" : ""}
          ${
            hoverEffect
              ? "hover:border-white transition-colors duration-200"
              : ""
          }
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: borderColor,
        }}
        onClick={onClick}
      >
        {/* Lock icon overlay */}
        <LockIcon icon={lockIcon} size={sizeClasses.lock} />
      </div>
    );
  }

  // Empty variant - always has background pattern
  if (variant === "empty") {
    return (
      <div
        className={`
          border
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? "cursor-pointer" : ""}
          ${
            hoverEffect
              ? "hover:border-white transition-colors duration-200"
              : ""
          }
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: borderColor,
        }}
        onClick={onClick}
      />
    );
  }

  // Filled variant
  return (
    <div
      className={`
        border
        ${borderClass}
        bg-transparent
        relative
        overflow-hidden
        ${sizeClasses.container}
        ${onClick ? "cursor-pointer" : ""}
        ${
          hoverEffect ? "hover:border-white transition-colors duration-200" : ""
        }
        ${className}
      `}
      style={{
        borderColor: borderColor,
      }}
      onClick={onClick}
    >
      {/* Image/SVG content */}
      {image && (
        <img src={image} alt={alt} className="object-cover w-full h-full p-1" />
      )}
    </div>
  );
};

/**
 * Pixel-perfect Tile component with specific pixel sizes
 */
export const PixelTile: React.FC<
  Omit<TileProps, "size"> & { size: keyof typeof PIXEL_SIZE_CONFIG }
> = ({
  size = "116px",
  className = "",
  onClick,
  hoverEffect = false,
  variant = "empty",
  image,
  alt = "",
  topBorderThickness = "md",
  emptyBackground = DEFAULT_EMPTY_BG,
  cornerColor = DEFAULT_CORNER_COLOR,
  lockIcon = DEFAULT_LOCK_ICON,
  borderColor = DEFAULT_BORDER_COLOR,
  gradientColor = DEFAULT_GRADIENT_COLOR,
}) => {
  const sizeClasses = PIXEL_SIZE_CONFIG[size];
  const borderClass = BORDER_CONFIG[topBorderThickness];

  // Selected variant - has corner indicators and gradient overlay
  if (variant === "selected") {
    return (
      <div
        className={`
          border
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? "cursor-pointer" : ""}
          ${
            hoverEffect
              ? "hover:border-white transition-colors duration-200"
              : ""
          }
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: borderColor,
        }}
        onClick={onClick}
      >
        {/* Gradient overlay */}
        <GradientOverlay color={gradientColor} />

        {/* Corner indicators */}
        <Corner
          position="top-left"
          color={cornerColor}
          size={sizeClasses.corner}
        />
        <Corner
          position="top-right"
          color={cornerColor}
          size={sizeClasses.corner}
        />
        <Corner
          position="bottom-left"
          color={cornerColor}
          size={sizeClasses.corner}
        />
        <Corner
          position="bottom-right"
          color={cornerColor}
          size={sizeClasses.corner}
        />
      </div>
    );
  }

  // Locked variant - has lock icon overlay
  if (variant === "locked") {
    return (
      <div
        className={`
          border
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? "cursor-pointer" : ""}
          ${
            hoverEffect
              ? "hover:border-white transition-colors duration-200"
              : ""
          }
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: borderColor,
        }}
        onClick={onClick}
      >
        {/* Lock icon overlay */}
        <LockIcon icon={lockIcon} size={sizeClasses.lock} />
      </div>
    );
  }

  // Empty variant - always has background pattern
  if (variant === "empty") {
    return (
      <div
        className={`
          border
          bg-transparent
          relative
          ${sizeClasses.container}
          ${onClick ? "cursor-pointer" : ""}
          ${
            hoverEffect
              ? "hover:border-white transition-colors duration-200"
              : ""
          }
          ${className}
        `}
        style={{
          backgroundImage: `url(${emptyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderColor: borderColor,
        }}
        onClick={onClick}
      />
    );
  }

  // Filled variant
  return (
    <div
      className={`
        border
        ${borderClass}
        bg-transparent
        relative
        overflow-hidden
        ${sizeClasses.container}
        ${onClick ? "cursor-pointer" : ""}
        ${
          hoverEffect ? "hover:border-white transition-colors duration-200" : ""
        }
        ${className}
      `}
      style={{
        borderColor: borderColor,
      }}
      onClick={onClick}
    >
      {/* Image/SVG content */}
      {image && (
        <img src={image} alt={alt} className="object-cover w-full h-full p-1" />
      )}
    </div>
  );
};

export default Tile;
