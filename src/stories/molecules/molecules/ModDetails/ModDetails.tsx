import React from "react";
import { RarityBanner } from "../../rarity-banner/RarityBanner";

interface ModDetailsProps {
  modImage?: string;
  separatorImage?: string;
  powerIcon?: string;
}

const ModDetails: React.FC<ModDetailsProps> = ({
  modImage,
  separatorImage,
  powerIcon,
}) => {
  return (
    <div className="flex flex-col w-full max-w-4xl p-6 mx-auto bg-gray-900 rounded-lg">
      {/* Header Section with Title, Subtitle, and Image */}
      <div className="relative mb-6">
        {/* Rarity Banner with Title and Subtitle */}
        <div className="relative">
          <RarityBanner variant="primal" text="" size="lg" className="mb-2" />
          {/* Title positioned on the banner */}
          <div className="absolute z-20 transform -translate-y-1/2 top-1/2 left-6">
            <h1 className="text-2xl font-bold tracking-wide text-white uppercase">
              LONG MOD NAME IV
            </h1>
            <p className="text-sm tracking-wider text-white uppercase opacity-80">
              ITEM TYPE
            </p>
          </div>
        </div>

        {/* Right corner image */}
        {modImage && (
          <div className="absolute z-20 transform -translate-y-1/2 top-1/2 right-6">
            <img
              src={modImage}
              alt="Mod"
              className="object-contain w-24 h-24"
            />
          </div>
        )}
      </div>

      {/* Power Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-center gap-3">
          <div className="text-4xl font-bold text-white">255</div>
          <div className="flex flex-col justify-center">
            <img
              src={powerIcon}
              alt="Power Icon"
              className="w-10 h-10 mx-auto text-white"
            />
            <div className="text-sm text-white opacity-50">POWER</div>
          </div>
        </div>

        <div className="text-lg font-bold text-green-400 uppercase">
          ENHANCED
        </div>
      </div>

      {/* Separator */}
      {separatorImage && (
        <div className="my-4">
          <img
            src={separatorImage}
            alt="Separator"
            className="object-contain w-full h-2"
          />
        </div>
      )}

      {/* Number of Rolled Stats */}
      <div className="mb-4">
        <div className="text-lg font-bold text-white uppercase">
          NUMBER OF ROLLED STATS (6)
        </div>
      </div>

      {/* Rolled Stats List */}
      <div className="space-y-2">
        {/* Stat 1 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white uppercase">ROLLED STAT NAME</span>
          <span className="text-sm font-bold text-green-400">+27%</span>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white uppercase">ROLLED STAT NAME</span>
          <span className="text-sm font-bold text-red-400">-60%</span>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white uppercase">ROLLED STAT NAME</span>
          <span className="text-sm font-bold text-green-400">+27%</span>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white uppercase">ROLLED STAT NAME</span>
          <span className="text-sm font-bold text-red-400">-60%</span>
        </div>

        {/* Stat 5 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white uppercase">ROLLED STAT NAME</span>
          <span className="text-sm font-bold text-green-400">+27%</span>
        </div>

        {/* Stat 6 */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white uppercase">ROLLED STAT NAME</span>
          <span className="text-sm font-bold text-red-400">-60%</span>
        </div>
      </div>
    </div>
  );
};

export default ModDetails;
