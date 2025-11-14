import React from "react";
import { WeaponPage } from "./WeaponPage";

const meta = {
  title: "Gaming/WeaponPage",
  component: WeaponPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    name: "LONG WEAPON NAME IV",
    type: "WEAPON - SNIPER RIFLE",
    powerLevel: "543-654",
    anchorStat: "ANCHOR STAT NAME",
    element: "kinetic",
  },
};

export const WithEnhancePopup = {
  args: {
    name: "LONG WEAPON NAME IV",
    type: "WEAPON - SNIPER RIFLE",
    powerLevel: "543-654",
    anchorStat: "ANCHOR STAT NAME",
    element: "kinetic",
    showPopup: true,
    popupVariant: "enhance",
  },
};

export const WithWarningPopup = {
  args: {
    name: "LONG WEAPON NAME IV",
    type: "WEAPON - SNIPER RIFLE",
    powerLevel: "543-654",
    anchorStat: "ANCHOR STAT NAME",
    element: "kinetic",
    showPopup: true,
    popupVariant: "warning",
  },
};

export const WithSingleButtonPopup = {
  args: {
    name: "LONG WEAPON NAME IV",
    type: "WEAPON - SNIPER RIFLE",
    powerLevel: "543-654",
    anchorStat: "ANCHOR STAT NAME",
    element: "kinetic",
    showPopup: true,
    popupVariant: "single",
  },
};
