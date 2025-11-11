import React from 'react';

/**
 * Rarity color display component - shows 136px squares with rarity labels
 */
export interface RarityColorsProps {
  /** Custom CSS class name */
  className?: string;
}

const RARITY_CONFIG = [
  { name: 'COMMON', color: 'bg-common', textColor: 'text-gray-800' },
  { name: 'UNCOMMON', color: 'bg-uncommon', textColor: 'text-gray-800' },
  { name: 'RARE', color: 'bg-rare', textColor: 'text-white' },
  { name: 'LEGENDARY', color: 'bg-legendary', textColor: 'text-white' },
  { name: 'EPIC', color: 'bg-epic', textColor: 'text-white' },
  { name: 'MYTHIC', color: 'bg-mythic', textColor: 'text-gray-800' },
  { name: 'PRIMAL', color: 'bg-primal', textColor: 'text-white' },
] as const;

export const RarityColors: React.FC<RarityColorsProps> = ({
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-8 justify-center ${className}`}>
      {RARITY_CONFIG.map((rarity) => (
        <div key={rarity.name} className="flex flex-col items-center space-y-3">
          {/* 136px x 136px Square - using exact pixel values */}
          <div 
            className="w-34 h-34 shadow-lg"
            style={{ 
              width: '136px', 
              height: '136px',
              backgroundColor: getColorValue(rarity.color)
            }}
          />
          {/* Rarity Label */}
          <span className={`font-bold text-lg ${rarity.textColor}`}>
            {rarity.name}
          </span>
        </div>
      ))}
    </div>
  );
};

// Helper function to get actual color values
function getColorValue(tailwindClass: string): string {
  const colorMap: Record<string, string> = {
    'bg-common': '#D9D9D9',
    'bg-uncommon': '#C5FFB3',
    'bg-rare': '#1A98FF',
    'bg-legendary': '#B561FF',
    'bg-epic': '#FFB12A',
    'bg-mythic': '#A2FFFD',
    'bg-primal': '#F9393C',
  };
  return colorMap[tailwindClass] || '#000000';
}

export default RarityColors;