import React from "react";
import ButtonStacked from "../../button-stacked/ButtonStacked";
import ElementalDamage from "../../elemental-damage/ElementalDamage";
import WeaponPageTemplate from "../../templates/weapon-page-template/WeaponPageTemplate";
import Title from "../../title/Title";
import { ElementIcon } from "../../element-icon/ElementIcon";
import Tile from "../../tile/Tile";
import PanelBgLight from "../../panel-bg-light/PanelBgLight";
import { RefreshCcw, Zap } from "lucide-react";
import StatProgressBar from "../../stat-progress-bar/StatProgressBar";
import Banner from "../../banner/Banner";
import power from "../../../../public/images/Power.svg";

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
        <div className="absolute z-20 top-8 left-8">
          {/* Big Text and Sub Text */}
          <div className="mb-6">
            <h1 className="mb-2 text-4xl font-bold tracking-wide text-white uppercase md:text-5xl">
              {name}
            </h1>
            <p className="text-gray-300 uppercase text-md">{type}</p>
          </div>

          {/* Power Level with Icon */}
          <div className="mt-8 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <ElementIcon element="earth" size="sm" />
              <span className="text-2xl font-bold text-white">
                {powerLevel}
              </span>
            </div>
            <p className="text-gray-300 uppercase text-md">{anchorStat}</p>
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
          <div className="mt-10 space-y-4">
            {/* RELOAD */}
            <div className="flex flex-col items-center justify-between w-40">
              <span className="text-sm text-gray-400 uppercase">RELOAD</span>
              <div className="text-right">
                <div className="text-xl font-bold text-white">527</div>
                <div className="text-sm text-green-400">(+27%)</div>
              </div>
            </div>

            {/* FIRE RATE */}
            <div className="flex flex-col items-center justify-between w-40">
              <span className="text-sm text-gray-400 uppercase">FIRE RATE</span>
              <div className="text-right">
                <div className="text-xl font-bold text-white">527</div>
                <div className="text-sm text-red-400">(-13%)</div>
              </div>
            </div>

            {/* MAG SIZE */}
            <div className="flex flex-col items-center justify-between w-40">
              <span className="text-sm text-gray-400 uppercase">MAG SIZE</span>
              <div className="text-right">
                <div className="text-xl font-bold text-white">527</div>
                <div className="text-sm text-gray-400">(+0%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Corner - Back Button */}
        <div className="absolute z-20 bottom-8 left-8">
          <div className="inline-flex items-center justify-center bg-transparent">
            <div className="flex items-center justify-center w-10 h-10 mr-2 font-bold text-black bg-gray-300 rounded-lg text-md">
              ESC
            </div>
            <div className="flex items-center justify-center text-xl font-bold text-white">
              BACK
            </div>
          </div>
        </div>

        {/* Center - Weapon Image */}
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/images/HumanTech-Assaullt-RiflView-3D.svg"
              alt="Weapon display"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="fixed transform -translate-x-1/2 bottom-56 left-1/2 w-80">
          <div className="flex flex-col gap-4">
            {/* First column - Number, icon and power */}
            <div className="flex items-center justify-center gap-3">
              <div className="text-4xl font-bold text-white">731</div>
              <div className="flex flex-col justify-center">
                <img
                  src={power}
                  alt="Power Icon"
                  className="w-10 h-10 mx-auto text-white"
                />
                <div className="text-sm text-white opacity-50">POWER</div>
              </div>
            </div>

            {/* Second column - Enhanced banner */}
            <div>
              <Banner size="sm">ENHANCED</Banner>
            </div>
          </div>
        </div>
        {/* Bottom Layer - Tiles Section */}
        <div className="absolute z-20 w-full max-w-6xl transform -translate-x-1/2 bottom-8 left-1/2">
          <PanelBgLight
            width="full"
            height="auto"
            className="px-8 py-2"
            borderColor="#878787"
            borderThickness="md"
          >
            <div className="flex justify-center gap-6">
              {/* First Part - Title + 5 Tiles */}
              <div className="flex flex-col items-center gap-6">
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
              <div className="flex flex-col items-center gap-6">
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
              <div className="flex flex-col items-center gap-6">
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

        <div className="absolute z-20 top-8 right-8">
          {/* Top Stats Section */}
          <div className="flex">
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
            <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 w-64">
              <div className="text-white">ROLLED STAT NAME</div>
              <div className="flex items-center gap-2 text-[#4CAF51] justify-between">
                +13%
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>

              <div className="text-white">ROLLED STAT NAME</div>
              <div className="flex items-center gap-2 text-[#4CAF51] justify-between">
                +13%
                <div className="w-3 h-3 bg-[#4CAF51] rounded-full"></div>
              </div>

              <div className="text-white">ROLLED STAT NAME</div>
              <div className="text-red-400">-8%</div>

              <div className="text-white">ROLLED STAT NAME</div>
              <div className="flex items-center justify-between gap-2 text-red-400">
                -5%
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>

              <div className="text-white">ROLLED STAT NAME</div>
              <div className="text-[#4CAF51]">+13%</div>
            </div>
          </div>
        </div>

        {/* Right Side - Stats and Buttons */}
        <div className="absolute z-20 bottom-72 right-8">
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
