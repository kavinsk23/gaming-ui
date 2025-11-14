import React from "react";
import { RarityBanner } from "../../templates/rarity-banner/RarityBanner";
import power from "../../../../../public/images/Power.svg";
import separatorImage from "../../../../../public/images/SeparatorLine.svg";
import RolledStat from "../../atoms/rolled-stat/RolledStat";
import weaponDetailsBg from "../../../../../public/images/Panel-BG.svg";
import gun from "../../../../../public/images/gun.svg";
import StatProgressBar from "../stat-progress-bar/StatProgressBar";

interface WeaponDetailsProps {}

const WeaponDetails: React.FC<WeaponDetailsProps> = ({}) => {
  return (
    <div className="relative flex flex-col w-full max-w-4xl border-2 border-[#91919180]">
      {/* Background Image Layer */}
      <img
        src={weaponDetailsBg}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      {/* Header Section with Title, Subtitle, and Image */}
      <div className="relative">
        {/* Rarity Banner with Title and Subtitle */}
        <div className="relative">
          <RarityBanner variant="primal" text="" size="lg" className="mb-2" />
          {/* Title positioned on the banner */}
          <div className="absolute z-20 transform -translate-y-1/2 top-1/2 left-3">
            <h1 className="text-xl font-bold tracking-wide text-white uppercase">
              LONG MOD NAME IV
            </h1>
            <p className="text-sm tracking-wider text-white uppercase opacity-80">
              ITEM TYPE
            </p>
          </div>
        </div>

        {/* Right corner image */}
        {gun && (
          <div className="absolute z-20 flex items-center w-24 h-full pb-3 my-auto transform -translate-y-1/2 top-1/2 right-6">
            <img src={gun} alt="Weapon" className="object-contain" />
          </div>
        )}
      </div>
      <div className="m-4 mt-0">
        {/* Power Section */}
        <div className="flex items-center justify-between 2">
          <div className="flex items-center justify-center gap-3">
            <div className="text-4xl font-bold text-white">255</div>
            <div className="flex flex-col justify-center">
              <img
                src={power}
                alt="Power Icon"
                className="w-10 h-10 mx-auto text-white"
              />
              <div className="text-sm text-white opacity-50">POWER</div>
            </div>
          </div>

          <div className="text-lg text-white uppercase">ENHANCED</div>
        </div>

        {/* Separator */}
        {separatorImage && (
          <div className="my-2">
            <img
              src={separatorImage}
              alt="Separator"
              className="object-contain h-2 w-[360px]"
            />
          </div>
        )}

        {/* Number of Rolled Stats */}
        <div className="mb-4">
          <div className="text-lg text-white uppercase">
            NUMBER OF ROLLED STATS (6)
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <StatProgressBar
            statName="STAT NAME"
            value={527}
            percentage={25}
            segments={[{ percentage: 25, color: "white" }]}
          />
          <StatProgressBar
            statName="STAT NAME"
            value={527}
            percentage={50}
            segments={[
              { percentage: 25, color: "white" },
              { percentage: 25, color: "green" },
            ]}
          />
          <StatProgressBar
            statName="STAT NAME"
            value={527}
            percentage={75}
            segments={[
              { percentage: 25, color: "white" },
              { percentage: 25, color: "green" },
              { percentage: 25, color: "red" },
            ]}
          />
          <StatProgressBar
            statName="STAT NAME"
            value={527}
            percentage={100}
            segments={[
              { percentage: 25, color: "white" },
              { percentage: 25, color: "green" },
              { percentage: 25, color: "red" },
              { percentage: 25, color: "gray" },
            ]}
          />
        </div>
        {/* Separator */}
        {separatorImage && (
          <div className="my-2">
            <img
              src={separatorImage}
              alt="Separator"
              className="object-contain h-2 w-[360px]"
            />
          </div>
        )}

        {/* Rolled Stats List */}
        <div className="flex flex-col items-center w-64 gap-2">
          <RolledStat
            statName="ROLLED STAT NAME"
            percentage={27}
            variant="positive"
          />
          <RolledStat
            statName="ROLLED STAT NAME"
            percentage={27}
            variant="negative"
          />
          <RolledStat
            statName="ROLLED STAT NAME"
            percentage={27}
            variant="positive"
          />
          <RolledStat
            statName="ROLLED STAT NAME"
            percentage={27}
            variant="negative"
          />
          <RolledStat
            statName="ROLLED STAT NAME"
            percentage={27}
            variant="negative"
          />
        </div>
      </div>
    </div>
  );
};

export default WeaponDetails;
