import React from "react";
import { RarityBanner } from "../../../rarity-banner/RarityBanner";
import power from "../../../../../public/images/Power.svg";
import separatorImage from "../../../../../public/images/SeparatorLine.svg";
import RolledStat from "../../../rolled-stat/RolledStat";
import modDetailsBg from "../../../../../public/images/Panel-BG.svg";
import target from "../../../../../public/images/target.svg";

interface ModDetailsProps {}

const ModDetails: React.FC<ModDetailsProps> = ({}) => {
  return (
    <div className="relative flex flex-col w-full max-w-4xl border-2 border-[#1669AD]">
      {/* Background Image Layer */}
      <img
        src={modDetailsBg}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      {/* Header Section with Title, Subtitle, and Image */}
      <div className="relative">
        {/* Rarity Banner with Title and Subtitle */}
        <div className="relative">
          <RarityBanner variant="rare" text="" size="lg" className="mb-2" />
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
        {target && (
          <div className="absolute z-20 flex items-center w-8 h-full pb-3 my-auto transform -translate-y-1/2 top-1/2 right-6">
            <img src={target} alt="Mod" className="object-contain" />
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

export default ModDetails;
