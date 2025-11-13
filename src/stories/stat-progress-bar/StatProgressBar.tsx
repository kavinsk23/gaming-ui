import React from "react";

/**
 * Progress segment configuration
 */
export interface ProgressSegment {
  /** Percentage of this segment */
  percentage: number;
  /** Color of this segment */
  color: "white" | "red" | "green" | "gray";
}

/**
 * Stat Progress Bar component - displays stat with multi-color progress bar
 */
export interface StatProgressBarProps {
  /** Stat name */
  statName: string;
  /** Stat value */
  value: number;
  /** Total percentage change */
  percentage: number;
  /** Progress segments */
  segments?: ProgressSegment[];
  /** Show baseline indicator */
  isBaseline?: boolean;
  /** Custom CSS class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Color mapping
 */
const COLOR_MAP = {
  white: "#FFFFFF",
  red: "#F9393C",
  green: "#4CAF51", // Adding green for the example
  gray: "#414141",
} as const;

/**
 * StatProgressBar Component
 */
export const StatProgressBar: React.FC<StatProgressBarProps> = ({
  statName,
  value,
  percentage,
  segments = [],
  isBaseline = false,
  className = "",
  onClick,
}) => {
  // Determine text color based on percentage - UPDATED COLORS
  const percentageColor = percentage >= 0 ? "text-[#4CAF51]" : "text-red-400";

  // Calculate total segments percentage to ensure it doesn't exceed 100%
  const totalSegmentsPercentage = segments.reduce(
    (total, segment) => total + segment.percentage,
    0
  );
  const effectiveSegments = segments.map((segment) => ({
    ...segment,
    percentage: (segment.percentage / totalSegmentsPercentage) * 100,
  }));

  return (
    <div
      className={`
        flex
        items-center
        justify-between
        w-full
        h-8
        px-4
        ${onClick ? "cursor-pointer" : "cursor-default"}
        transition-opacity
        duration-200
        ${className}
      `}
      onClick={onClick}
    >
      {/* Left section: Stat name and value */}
      <div className="flex items-center gap-3 flex-1 justify-end">
        <span
          className={`
          font-bold
          text-white
          text-base
          whitespace-nowrap
          ${isBaseline ? "font-bold" : ""}
        `}
        >
          {statName}
        </span>
        <span
          className={`
          font-mono
          font-bold
          text-white
          text-base
          whitespace-nowrap
        `}
        >
          {value}
        </span>
      </div>

      {/* Right section: Progress bar and percentage */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        {/* Multi-color progress bar container */}
        <div className="flex-1 max-w-[200px] h-2 bg-[#414141] overflow-hidden ml-3">
          <div className="flex h-full w-full">
            {effectiveSegments.map((segment, index) => (
              <div
                key={index}
                className="h-full transition-all duration-300"
                style={{
                  width: `${segment.percentage}%`,
                  backgroundColor: COLOR_MAP[segment.color],
                }}
              />
            ))}
          </div>
        </div>

        {/* Percentage text */}
        <span
          className={`
          font-mono
          font-bold
          text-base
          min-w-[70px]
          text-right
          whitespace-nowrap
          flex
          justify-start
          ${percentageColor}
        `}
        >
          {percentage > 0 ? "+" : ""}
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default StatProgressBar;
