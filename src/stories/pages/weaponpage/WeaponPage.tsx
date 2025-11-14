import React, { useState } from "react";
import ButtonStacked from "../../atoms/button-stacked/ButtonStacked";
import ElementalDamage from "../../atoms/elemental-damage/ElementalDamage";
import WeaponPageTemplate from "../../templates/weapon-page-template/WeaponPageTemplate";
import Title from "../../atoms/title/Title";
import { ElementIcon } from "../../atoms/element-icon/ElementIcon";
import Tile from "../../atoms/tile/Tile";
import PanelBgLight from "../../templates/panel-bg-light/PanelBgLight";
import { RefreshCcw, Zap } from "lucide-react";
import StatProgressBar from "../../molecules/stat-progress-bar/StatProgressBar";
import Banner from "../../atoms/banner/Banner";
import power from "../../../../public/images/Power.svg";
import RolledStatItem from "../../atoms/rolled-stat-item/RolledStatItem";
import StatItem from "../../atoms/stat-item/StatItem";
import Header from "../../molecules/header/Header";
import Popup from "../../molecules/popup/Popup";

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
  /** Show popup variant */
  showPopup?: boolean;
  /** Popup variant type */
  popupVariant?: "default" | "warning" | "enhance" | "single";
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
  showPopup = false,
  popupVariant = "enhance",
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(showPopup);

  const handleEnhanceClick = () => {
    setIsPopupVisible(true);
  };

  const handlePopupCancel = () => {
    setIsPopupVisible(false);
  };

  const handlePopupReplace = () => {
    console.log("Enhance confirmed");
    setIsPopupVisible(false);
  };

  return (
    <>
      <WeaponPageTemplate
        backgroundImage="/images/weapon-bg.png"
        blurIntensity="xl"
        overlayOpacity={60}
        className={className}
      >
        {/* <div>
          <Header
            resources={{ resource1: 150, resource2: 75, resource3: 300 }}
            onBackClick={() => console.log("Back clicked")}
          />
        </div> */}
        {/* Main Content Layout */}
        <div className="relative min-h-screen p-8">
          {/* Blur Layer - Applied when popup is visible */}
          {isPopupVisible && (
            <div
              className="absolute inset-0 z-30 backdrop-blur-[14.6px]"
              style={{ backdropFilter: "blur(14.600000381469727px)" }}
            />
          )}

          {/* Top Left Corner - Weapon Info */}
          <div className="absolute z-20 top-8 left-8">
            {/* Big Text and Sub Text */}
            <div className="mb-6">
              <h1
                className="mb-2 font-bold tracking-wide text-white uppercase"
                style={{ fontSize: "clamp(2rem, 3vw, 4rem)" }}
              >
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
              <StatItem label="RELOAD" value={527} percentChange={27} />
              <StatItem label="FIRE RATE" value={527} percentChange={-13} />
              <StatItem label="MAG SIZE" value={527} percentChange={0} />
            </div>
          </div>

          {/* Bottom Left Corner - Back Button */}
          <div className="absolute z-20 bottom-8 left-8">
            <button className="inline-flex items-center justify-center bg-transparent">
              <div className="flex items-center justify-center w-10 h-10 mr-2 font-bold text-black bg-gray-300 rounded-lg text-md">
                ESC
              </div>
              <div className="flex items-center justify-center text-xl font-bold text-white">
                BACK
              </div>
            </button>
          </div>

          {/* Center - Weapon Image */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src="/images/HumanTech-Assaullt-RiflView-3D.svg"
                alt="Weapon display"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="fixed transform -translate-x-1/2 bottom-48 left-1/2 w-80">
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
          <div className="absolute z-20 w-full max-w-4xl transform -translate-x-1/2 bottom-8 left-1/2">
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
                  <div className="flex gap-2">
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
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
                    <Tile size="xs" variant="empty" />
                  </div>
                </div>

                {/* Third Part - Title + 5 Tiles */}
                <div className="flex flex-col items-center gap-6">
                  {/* Title Column */}
                  <div className="flex items-center h-full">
                    <Title size="sm">CATALYSTS</Title>
                  </div>

                  {/* Tiles Column */}
                  <div className="flex gap-2">
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                    <Tile size="xs" variant="empty" />
                  </div>
                </div>
              </div>
            </PanelBgLight>
          </div>

          <div className="absolute z-20 top-8 right-8 ">
            {/* Top Stats Section */}
            <div className="flex">
              <div className="flex flex-col gap-0 w-[450px] border-white border-r mr-4">
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

              <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 w-58">
                <RolledStatItem
                  statName="ROLLED STAT NAME"
                  statValue="+13%"
                  statColor="[#4CAF51]"
                  showDot
                />
                <RolledStatItem
                  statName="ROLLED STAT NAME"
                  statValue="+13%"
                  statColor="[#4CAF51]"
                  showDot
                />
                <RolledStatItem
                  statName="ROLLED STAT NAME"
                  statValue="-8%"
                  statColor="red-400"
                />
                <RolledStatItem
                  statName="ROLLED STAT NAME"
                  statValue="-5%"
                  statColor="red-400"
                  showDot
                />
                <RolledStatItem
                  statName="ROLLED STAT NAME"
                  statValue="+13%"
                  statColor="[#4CAF51]"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Stats and Buttons */}
          <div className="absolute z-20 bottom-56 right-8">
            {/* Bottom Right - Stacked Buttons */}
            <div className="space-y-4">
              <ButtonStacked
                mainText="ENHANCE"
                stats={[5, 12, 32]}
                variant="highlighted"
                onClick={handleEnhanceClick}
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

      {/* Popup */}
      {isPopupVisible && (
        <Popup
          variant={popupVariant}
          title="ARE YOU SURE YOU WANT TO ENHANCE THIS ITEM?"
          description="Lorem ipsum dolor an extra explanation if needed - this is a description. Resources needed:"
          cancelText="CANCEL"
          replaceText="ENHANCE"
          resources={{
            resource1: 5,
            resource2: 12,
            resource3: 32,
          }}
          onCancel={handlePopupCancel}
          onReplace={handlePopupReplace}
        />
      )}
    </>
  );
};

export default WeaponPage;
