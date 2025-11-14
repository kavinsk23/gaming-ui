import AttachmentPage from "./AttachmentPage";

const meta = {
  title: "Pages/AttachmentPage",
  component: AttachmentPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    element: {
      control: { type: "select" },
      options: ["fire", "ice", "lightning", "earth", "life", "kinetic"],
    },
    popupVariant: {
      control: { type: "select" },
      options: ["default", "warning", "enhance", "single"],
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof AttachmentPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base variants
export const Default: Story = {
  args: {
    name: "QUANTUM RIFLE",
    type: "ASSAULT RIFLE",
    powerLevel: "255-300",
    anchorStat: "STABILITY",
    element: "kinetic",
    showPopup: false,
    popupVariant: "enhance",
  },
};

// Element variants
export const FireElement: Story = {
  args: {
    name: "INFERNO CANNON",
    type: "HEAVY WEAPON",
    powerLevel: "280-320",
    anchorStat: "DAMAGE",
    element: "fire",
    showPopup: false,
  },
};

export const IceElement: Story = {
  args: {
    name: "CRYO BLASTER",
    type: "SPECIAL WEAPON",
    powerLevel: "265-305",
    anchorStat: "PRECISION",
    element: "ice",
    showPopup: false,
  },
};

export const LightningElement: Story = {
  args: {
    name: "ARC THROWER",
    type: "ENERGY RIFLE",
    powerLevel: "270-310",
    anchorStat: "FIRE RATE",
    element: "lightning",
    showPopup: false,
  },
};

export const EarthElement: Story = {
  args: {
    name: "TERRA BREAKER",
    type: "HEAVY LAUNCHER",
    powerLevel: "290-330",
    anchorStat: "IMPACT",
    element: "earth",
    showPopup: false,
  },
};

export const LifeElement: Story = {
  args: {
    name: "BIOSPHERE RIFLE",
    type: "SUPPORT RIFLE",
    powerLevel: "240-280",
    anchorStat: "HEALING",
    element: "life",
    showPopup: false,
  },
};

// Popup variants
export const WithEnhancePopup: Story = {
  args: {
    ...Default.args,
    showPopup: true,
    popupVariant: "enhance",
  },
};

export const WithWarningPopup: Story = {
  args: {
    ...Default.args,
    showPopup: true,
    popupVariant: "warning",
  },
};

export const WithSinglePopup: Story = {
  args: {
    ...Default.args,
    showPopup: true,
    popupVariant: "single",
  },
};

// Weapon type variants
export const SniperRifle: Story = {
  args: {
    name: "LONG SHOT VII",
    type: "SNIPER RIFLE",
    powerLevel: "275-315",
    anchorStat: "ACCURACY",
    element: "kinetic",
    showPopup: false,
  },
};

export const Shotgun: Story = {
  args: {
    name: "DOOM BRINGER",
    type: "SHOTGUN",
    powerLevel: "260-300",
    anchorStat: "SPREAD",
    element: "fire",
    showPopup: false,
  },
};

export const Pistol: Story = {
  args: {
    name: "QUICK DRAW",
    type: "SIDEARM PISTOL",
    powerLevel: "230-270",
    anchorStat: "HANDLING",
    element: "lightning",
    showPopup: false,
  },
};

// Edge cases
export const LongWeaponName: Story = {
  args: {
    name: "EXPERIMENTAL QUANTUM DISRUPTOR MARK IX",
    type: "EXOTIC HEAVY WEAPON",
    powerLevel: "300-350",
    anchorStat: "EXPERIMENTAL STABILITY",
    element: "kinetic",
    showPopup: false,
  },
};

export const HighPowerLevel: Story = {
  args: {
    name: "ENDGAME DESTROYER",
    type: "RAID WEAPON",
    powerLevel: "400-450",
    anchorStat: "ULTIMATE DAMAGE",
    element: "fire",
    showPopup: false,
  },
};
