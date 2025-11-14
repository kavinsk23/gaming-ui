// StatItem.tsx
import React from "react";

interface StatItemProps {
  label: string;
  value: number;
  percentChange: number;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, percentChange }) => {
  const getPercentChangeColor = () => {
    if (percentChange > 0) {
      return "text-green-400";
    } else if (percentChange < 0) {
      return "text-red-400";
    } else {
      return "text-gray-400";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-40 text-center">
      <span className="text-sm text-gray-400 uppercase">{label}</span>
      <div className="text-cenetr">
        <div className="text-xl font-bold text-white">{value}</div>
        <div className={`text-sm ${getPercentChangeColor()}`}>
          ({percentChange >= 0 ? "+" : ""}
          {percentChange}%)
        </div>
      </div>
    </div>
  );
};

export default StatItem;
