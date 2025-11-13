import React from "react";
import ButtonStacked from "../../button-stacked/ButtonStacked";
import ElementalDamage from "../../elemental-damage/ElementalDamage";
import WeaponPageTemplate from "../../templates/weapon-page-template/WeaponPageTemplate";
import Title from "../../title/Title";
import { ElementIcon } from "../../element-icon/ElementIcon";
import Tile from "../../tile/Tile";
import PanelBgLight from "../../panel-bg-light/PanelBgLight";
import { RefreshCcw } from "lucide-react";
import StatProgressBar from "../../stat-progress-bar/StatProgressBar";

export interface WeaponPageProps {
  /** Weapon name */
  name: string;
  /** Weapon type and category */
  type: string;
  /** Power level range */
  powerLevel: string;
  /** Anchor stat name */
  anchorStat: string;
  /** Weapon element type */
  element: "fire" | "ice" | "lightning" | "earth" | "life" | "kinetic";
  /** Additional CSS classes */
  className?: string;
}

/**
 * WeaponPage - Complete weapon display page based on the provided image layout
 * Features weapon image in center, left side info, bottom tiles, and right side stats
 */
export const WeaponPage: React.FC<WeaponPageProps> = ({
  name,
  type,
  powerLevel,
  anchorStat,
  element,
  className = "",
}) => {
  return (
    <WeaponPageTemplate
      backgroundImage="/images/weapon-bg.png"
      blurIntensity="xl"
      overlayOpacity={60}
      className={className}
    >
      {/* Main Content Layout */}
      <div className="relative min-h-screen p-8">
        {/* Top Left Corner - Weapon Info */}
        <div className="absolute top-8 left-8 z-20">
          {/* Big Text and Sub Text */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-2">
              {name}
            </h1>
            <p className="text-md text-gray-300 uppercase">{type}</p>
          </div>

          {/* Power Level with Icon */}
          <div className="mb-4 mt-8">
            <div className="flex items-center gap-2 mb-1">
              <ElementIcon element="earth" size="sm" />
              <span className="text-2xl font-bold text-white">
                {powerLevel}
              </span>
            </div>
            <p className="text-md text-gray-300 uppercase">{anchorStat}</p>
          </div>

          {/* Elemental Damage */}
          <div className="flex flex-col mt-10">
            <div className="flex">
              <ElementalDamage damage={125} size="sm" element="lightning" />
              <ElementalDamage damage={342} size="sm" element="ice" />
            </div>
            <div className="flex">
              <ElementalDamage damage={789} size="sm" element="fire" />
              <ElementalDamage damage={56} size="sm" element="earth" />
            </div>
            <div className="flex">
              <ElementalDamage damage={789} size="sm" element="kinetic" />
              <ElementalDamage damage={56} size="sm" element="life" />
            </div>
          </div>

          {/* Vertical Data Sets - 3 sets */}
          <div className="space-y-4 mt-10">
            {/* RELOAD */}
            <div className="flex items-center justify-between w-40 flex-col">
              <span className="text-gray-400 text-sm uppercase">RELOAD</span>
              <div className="text-right">
                <div className="text-white font-bold text-xl">527</div>
                <div className="text-green-400 text-sm">(+27%)</div>
              </div>
            </div>

            {/* FIRE RATE */}
            <div className="flex items-center justify-between w-40 flex-col">
              <span className="text-gray-400 text-sm uppercase">FIRE RATE</span>
              <div className="text-right">
                <div className="text-white font-bold text-xl">527</div>
                <div className="text-red-400 text-sm">(-13%)</div>
              </div>
            </div>

            {/* MAG SIZE */}
            <div className="flex items-center justify-between w-40 flex-col">
              <span className="text-gray-400 text-sm uppercase">MAG SIZE</span>
              <div className="text-right">
                <div className="text-white font-bold text-xl">527</div>
                <div className="text-gray-400 text-sm">(+0%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Corner - Back Button */}
        <div className="absolute bottom-8 left-8 z-20">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 uppercase tracking-wide flex items-center gap-2">
            <span>←</span>
            BACK
          </button>
        </div>

        {/* Center - Weapon Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/images/HumanTech-Assaullt-RiflView-3D.svg"
              alt="Weapon display"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Layer - Tiles Section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl">
          <PanelBgLight
            width="full"
            height="auto"
            className="p-8"
            borderColor="#878787"
            borderThickness="md"
          >
            <div className="flex justify-center gap-6">
              {/* First Part - Title + 5 Tiles */}
              <div className="flex gap-6 flex-col items-center">
                {/* Title Column */}
                <div className="flex items-center h-full">
                  <Title size="sm">ENTANCE</Title>
                </div>

                {/* Tiles Column */}
                <div className="flex gap-1">
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                </div>
              </div>

              {/* Second Part - Title + 1 Tile */}
              <div className="flex gap-6 flex-col items-center">
                {/* Title Column */}
                <div className="flex items-center h-full">
                  <Title size="sm">ENHANCED</Title>
                </div>

                {/* Tile Column */}
                <div className="flex">
                  <Tile size="sm" variant="empty" />
                </div>
              </div>

              {/* Third Part - Title + 5 Tiles */}
              <div className="flex gap-6 flex-col items-center">
                {/* Title Column */}
                <div className="flex items-center h-full">
                  <Title size="sm">CATALYSTS</Title>
                </div>

                {/* Tiles Column */}
                <div className="flex gap-1">
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                </div>
              </div>
            </div>
          </PanelBgLight>
        </div>

        <div className="absolute top-8 right-8 z-20">
          {/* Top Stats Section */}
          <div>
            <div className="flex flex-col gap-0 w-[500px]">
              <StatProgressBar
                statName="STAT NAME"
                value={156}
                percentage={60}
                segments={[
                  { percentage: 40, color: "white" },
                  { percentage: 20, color: "red" },
                ]}
              />
              <StatProgressBar
                statName="STAT NAME"
                value={89}
                percentage={30}
                segments={[
                  { percentage: 15, color: "green" },
                  { percentage: 15, color: "white" },
                ]}
              />
              <StatProgressBar
                statName="STAT NAME"
                value={1200}
                percentage={80}
                segments={[
                  { percentage: 30, color: "white" },
                  { percentage: 25, color: "green" },
                  { percentage: 25, color: "red" },
                ]}
              />
              <StatProgressBar
                statName="STAT NAME"
                value={450}
                percentage={45}
                segments={[
                  { percentage: 20, color: "white" },
                  { percentage: 15, color: "green" },
                  { percentage: 10, color: "gray" },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Stats and Buttons */}
        <div className="absolute bottom-72 right-8 z-20">
          {/* Bottom Right - Stacked Buttons */}
          <div className="space-y-4">
            <ButtonStacked
              mainText="ENHANCE"
              stats={[5, 12, 32]}
              variant="highlighted"
            />
            <ButtonStacked
              mainText="BREAKDOWN"
              stats={[+20, +3212, +92]}
              variant="default"
              topIcon={<RefreshCcw className="w-5 h-5 text-white" />}
            />
          </div>
        </div>
      </div>
    </WeaponPageTemplate>
  );
};

export default WeaponPage;
