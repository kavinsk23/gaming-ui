// RolledStatItem.tsx
import React from "react";

interface RolledStatItemProps {
  statName: string;
  statValue: string;
  statColor: string;
  showDot?: boolean;
}

const RolledStatItem: React.FC<RolledStatItemProps> = ({
  statName,
  statValue,
  statColor,
  showDot = false,
}) => {
  return (
    <>
      <div className="text-white">{statName}</div>
      <div
        className={`flex items-center gap-2 text-${statColor} justify-between`}
      >
        {statValue}
        {showDot && (
          <div
            className={`w-3 h-3 bg-${
              statColor === "red-400" ? "red-500" : statColor
            } rounded-full`}
          ></div>
        )}
      </div>
    </>
  );
};

export default RolledStatItem;
