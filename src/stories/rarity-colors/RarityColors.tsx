import React from 'react';

/**
 * Rarity color display component - shows 136px squares with rarity labels
 */
export interface RarityColorsProps {
  /** Custom CSS class name */
  className?: string;
}

const RARITY_CONFIG = [
  { name: 'COMMON', color: '#D9D9D9' },
  { name: 'UNCOMMON', color: '#C5FFB3' },
  { name: 'RARE', color: '#1A98FF' },
  { name: 'LEGENDARY', color: '#B561FF' },
  { name: 'EPIC', color: '#FFB12A' },
  { name: 'MYTHIC', color: '#A2FFFD' },
  { name: 'PRIMAL', color: '#F9393C' },
] as const;

export const RarityColors: React.FC<RarityColorsProps> = ({
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-8 justify-center ${className}`}>
      {RARITY_CONFIG.map((rarity) => (
        <div key={rarity.name} className="flex flex-col items-center space-y-3">
          {/* 136px x 136px Square */}
          <div 
            className="w-34 h-34 shadow-lg"
            style={{ 
              width: '136px', 
              height: '136px',
              backgroundColor: rarity.color
            }}
          />
          {/* Text with same fucking color as square */}
          <span 
            className="font-bold text-lg"
            style={{ color: rarity.color }}
          >
            {rarity.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RarityColors;