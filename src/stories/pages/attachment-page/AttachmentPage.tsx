import React, { useState } from "react";
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
import RolledStatItem from "../../rolled-stat-item/RolledStatItem";
import StatItem from "../../stat-item/StatItem";
import Popup from "../../molecules/popup/Popup";
import Header from "../../molecules/header/Header";
import ModDetails from "../../molecules/molecules/ModDetails/ModDetails";
import WeaponDetails from "../../molecules/molecules/weapon-details/WeaponDetails";
import ButtonLong from "../../button-long/ButtonLong";
import ButtonBasic from "../../button-basic/ButtonBasic";
import { CatalystMods } from "../../molecules/catalyst-mods/CatalystMods";

export interface AttachmentPageProps {
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
export const AttachmentPage: React.FC<AttachmentPageProps> = ({
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
    <div className="overflow-hidden">
      <WeaponPageTemplate
        backgroundImage="/images/weapon-bg.png"
        blurIntensity="xl"
        overlayOpacity={60}
        className={`${className} overflow-hidden`}
      >
        <div>
          <Header
            resources={{ resource1: 150, resource2: 75, resource3: 300 }}
            onBackClick={() => console.log("Back clicked")}
          />
        </div>
        {/* Main Content Layout */}
        <div className="relative h-screen p-8 overflow-hidden">
          {/* Blur Layer - Applied when popup is visible */}
          {isPopupVisible && (
            <div
              className="absolute inset-0 z-30 backdrop-blur-[14.6px]"
              style={{ backdropFilter: "blur(14.600000381469727px)" }}
            />
          )}

          {/* Top Right Corner - ModDetails and WeaponDetails */}
          <div className="absolute top-8 right-4 z-20 flex gap-4">
            <div>
              <ModDetails />
              <div className="flex flex-col mt-3 gap-4 items-center">
                <ButtonLong
                  mainText="ENHANCE"
                  stats={[5, 12, 32]}
                  variant="default"
                />
                <ButtonLong
                  mainText="ENHANCE"
                  stats={[5, 12, 32]}
                  variant="highlighted"
                />
              </div>
            </div>
            <div className="gap-3 flex flex-col">
              <WeaponDetails />
              <ButtonBasic variant="highlighted" className="w-56" size="sm">
                DETACH
              </ButtonBasic>
            </div>
          </div>

          {/* Center - Weapon Image */}
          <div className="absolute bottom-[-18%] w-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src="/images/attach-bg-weapon.png"
                alt="Weapon display"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="absolute left-4 h-[90%]">
            <CatalystMods />
          </div>
        </div>
        {/* Bottom Layer - Tiles Section */}
        <div className="absolute z-20 w-full max-w-md transform -translate-x-1/2 bottom-16 left-1/2">
          <PanelBgLight
            width="full"
            height="auto"
            className="px-8 py-2"
            borderColor="#878787"
            borderThickness="md"
          >
            <div className="flex justify-center gap-6">
              {/* Third Part - Title + 5 Tiles */}
              <div className="flex flex-col items-center gap-6">
                {/* Title Column */}
                <div className="flex items-center h-full">
                  <Title size="sm">CATALYSTS</Title>
                </div>

                {/* Tiles Column */}
                <div className="flex gap-2">
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                  <Tile size="sm" variant="empty" />
                </div>
              </div>
            </div>
          </PanelBgLight>
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
    </div>
  );
};

export default AttachmentPage;
