import React from "react";
import power from "../../../../public/images/Power.svg";
import separatorImage from "../../../../public/images/SeparatorLine.svg";
import ElementIcon from "../../atoms/element-icon/ElementIcon";
import RolledStatItem from "../../atoms/rolled-stat-item/RolledStatItem";
import StatItem from "../../atoms/stat-item/StatItem";
import StatProgressBar from "../stat-progress-bar/StatProgressBar";

interface WeaponCardProps {
  weaponName: string;
  weaponType: string;
  rarity: "rare" | "primal" | "legendary";
  powerLevel: number;
  damage?: {
    value: string;
    element: "earth" | "fire" | "ice" | "kinetic" | "life" | "lightning";
  };
  damageModifiers?: {
    value: string;
    element: "earth" | "fire" | "ice" | "kinetic" | "life" | "lightning";
  };
  stats?: {
    fireRate: { value: number; percent: number };
    magazine: { value: number; percent: number };
    reload: { value: number; percent: number };
  };
  attributes?: Array<{
    label: string;
    value: number;
    percent: number;
  }>;
  rolledStats?: Array<{
    name: string;
    value: string;
    color: string;
    showDot?: boolean;
  }>;
}

const WeaponCard: React.FC<WeaponCardProps> = ({
  weaponName,
  weaponType,
  rarity,
  powerLevel,
  damage,
  damageModifiers,
  stats,
  attributes,
  rolledStats,
}) => {
  const getRarityColor = () => {
    switch (rarity) {
      case "primal":
        return "bg-purple-600";
      case "legendary":
        return "bg-yellow-600";
      case "rare":
      default:
        return "bg-blue-600";
    }
  };

  const renderSeparator = () => (
    <div className="my-4">
      <img
        src={separatorImage}
        alt="Separator"
        className="object-contain w-full h-2"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full max-w-2xl bg-[##2D2325] border-2 border-[#91919180]">
      {/* Header Section with Background Color */}
      <div className={`${getRarityColor()} py-3 px-4`}>
        <h1 className="text-xl font-bold tracking-wide text-white uppercase">
          {weaponName}
        </h1>
        <p className="text-sm tracking-wider text-white uppercase opacity-80">
          {weaponType}
        </p>
      </div>

      <div className="m-4 mt-0">
        {/* Power Section */}
        <div className="flex items-center justify-start gap-3 my-4">
          <div className="text-6xl font-bold text-white">{powerLevel}</div>
          <div className="flex flex-col justify-center">
            <img
              src={power}
              alt="Power Icon"
              className="w-10 h-10 mx-auto text-white"
            />
            <div className="text-sm text-white opacity-50">POWER</div>
          </div>
        </div>

        {/* Damage Section with Element Icon */}
        {damage && (
          <>
            {renderSeparator()}
            <div className="flex items-center justify-center p-3 mb-4">
              <div className="flex flex-col items-center gap-3">
                <div className="w-full text-lg font-bold text-center text-white uppercase">
                  DAMAGE
                </div>
                <div className="flex">
                  <ElementIcon element={damage.element} size="md" />
                  <div className="flex items-center text-2xl font-bold text-white">
                    {damage.value}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Damage Modifiers Section with Element Icon */}
        {damageModifiers && (
          <>
            {renderSeparator()}
            <div className="flex items-center justify-center p-3 mb-6 rounded-lg">
              <div className="flex flex-col items-center gap-3">
                <div className="w-full text-lg font-bold text-center text-white uppercase">
                  DAMAGE MODIFIERS
                </div>
                <div className="flex items-center">
                  <ElementIcon element={damageModifiers.element} size="md" />
                  <div className="text-2xl font-bold text-white">
                    {damageModifiers.value}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Three Stat Items Horizontally */}
        {stats && (
          <>
            {renderSeparator()}
            <div className="flex justify-between mb-6">
              <StatItem
                label="FIRE RATE"
                value={stats.fireRate.value}
                percentChange={stats.fireRate.percent}
              />
              <StatItem
                label="MAGAZINE"
                value={stats.magazine.value}
                percentChange={stats.magazine.percent}
              />
              <StatItem
                label="RELOAD"
                value={stats.reload.value}
                percentChange={stats.reload.percent}
              />
            </div>
          </>
        )}

        {/* Stat Progress */}
        {attributes && (
          <>
            {renderSeparator()}
            <div className="flex flex-col gap-2">
              {attributes.map((attribute, index) => (
                <StatProgressBar
                  key={index}
                  statName={attribute.label}
                  value={attribute.value}
                  percentage={attribute.percent}
                  segments={[
                    { percentage: 40, color: "white" },
                    { percentage: 20, color: "red" },
                  ]}
                />
              ))}
            </div>
          </>
        )}

        {/* Rolled Stats */}
        {rolledStats && (
          <>
            {renderSeparator()}
            <div className="space-y-2">
              {rolledStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <RolledStatItem
                    statName={stat.name}
                    statValue={stat.value}
                    statColor={stat.color}
                    showDot={stat.showDot}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeaponCard;
