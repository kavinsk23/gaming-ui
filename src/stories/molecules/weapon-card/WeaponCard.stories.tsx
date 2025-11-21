import WeaponCard from "./WeaponCard";

const meta: Meta<typeof WeaponCard> = {
  title: "Molecules/WeaponCard",
  component: WeaponCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeaponCard>;

export const Sniper: Story = {
  args: {
    weaponName: "LONG WEAPON NAME IV",
    weaponType: "WEAPON - SNIPER",
    rarity: "primal",
    powerLevel: 731,
    damage: {
      value: "120-140",
      element: "kinetic",
    },
    damageModifiers: {
      value: "+654",
      element: "kinetic",
    },
    stats: {
      fireRate: { value: 1.5, percent: 75 },
      magazine: { value: 8, percent: 85 },
      reload: { value: 2.5, percent: 0 },
    },
    attributes: [
      { label: "RANGE", value: 100, percent: 80 },
      { label: "ADS SPEED", value: 0, percent: 0 },
      { label: "ACCURACY", value: 85, percent: 0 },
      { label: "STABILITY", value: 75, percent: 0 },
      { label: "HANDLING", value: 70, percent: 0 },
      { label: "ADS MOVE SPEED", value: 50, percent: 0 },
    ],
    rolledStats: [
      { name: "CRITICAL DAMAGE", value: "+27%", color: "green-400" },
      { name: "MAGAZINE SIZE", value: "+18%", color: "green-400" },
      { name: "RELOAD SPEED", value: "0%", color: "gray-400" },
      { name: "FIRE RATE", value: "+75%", color: "green-400" },
      { name: "RANGE", value: "-60%", color: "red-400" },
      { name: "CRITICAL CHANCE", value: "+27%", color: "green-400" },
    ],
  },
};

export const SMG: Story = {
  args: {
    weaponName: "LEGENDARY SMG MK7",
    weaponType: "WEAPON - SMG",
    rarity: "legendary",
    powerLevel: 160,
    damage: {
      value: "12-14",
      element: "fire",
    },
    stats: {
      fireRate: { value: 20, percent: 0 },
      magazine: { value: 50, percent: 0 },
      reload: { value: 2, percent: 0 },
    },
    attributes: [
      { label: "RANGE", value: 25, percent: 0 },
      { label: "ADS SPEED", value: 0, percent: 0 },
      { label: "ACCURACY", value: 85, percent: 0 },
      { label: "STABILITY", value: 75, percent: 0 },
      { label: "HANDLING", value: 70, percent: 0 },
      { label: "ADS MOVE SPEED", value: 40, percent: 0 },
    ],
    rolledStats: [
      { name: "EARTH DAMAGE", value: "+6%", color: "green-400" },
      { name: "ICE DAMAGE", value: "+8%", color: "green-400" },
      { name: "ELECTRIC DAMAGE", value: "+6%", color: "green-400" },
      { name: "NATURE DAMAGE", value: "+8%", color: "green-400" },
      { name: "FIRE DAMAGE", value: "+8%", color: "green-400" },
    ],
  },
};
