import { RarityBanner } from "./RarityBanner";

const meta: Meta<typeof RarityBanner> = {
  title: "Templates/RarityBanner",
  component: RarityBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primal", "rare"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof RarityBanner>;

export const Primal: Story = {
  args: {
    variant: "primal",
    text: "PRIMAL",
    size: "lg",
  },
};

export const Rare: Story = {
  args: {
    variant: "rare",
    text: "RARE",
    size: "lg",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <RarityBanner variant="primal" text="PRIMAL" size="sm" />
      <RarityBanner variant="primal" text="PRIMAL" size="md" />
      <RarityBanner variant="primal" text="PRIMAL" size="lg" />
      <RarityBanner variant="primal" text="PRIMAL" size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-4 items-center">
        <RarityBanner variant="primal" text="PRIMAL WEAPON" size="lg" />
        <RarityBanner variant="primal" text="PRIMAL ARMOR" size="lg" />
        <RarityBanner variant="primal" text="PRIMAL ARTIFACT" size="lg" />
      </div>
      <div className="flex flex-col gap-4 items-center">
        <RarityBanner variant="rare" text="RARE SWORD" size="lg" />
        <RarityBanner variant="rare" text="RARE SHIELD" size="lg" />
        <RarityBanner variant="rare" text="RARE POTION" size="lg" />
      </div>
    </div>
  ),
};

export const DifferentText: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <RarityBanner variant="primal" text="LEGENDARY ITEM" size="lg" />
      <RarityBanner variant="primal" text="MYTHIC EQUIPMENT" size="lg" />
      <RarityBanner variant="rare" text="EPIC LOOT" size="lg" />
      <RarityBanner variant="rare" text="ANCIENT RELIC" size="lg" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <RarityBanner
        variant="primal"
        text="CLICKABLE PRIMAL"
        size="lg"
        onClick={() => console.log("Primal banner clicked!")}
      />
      <RarityBanner
        variant="rare"
        text="CLICKABLE RARE"
        size="lg"
        onClick={() => console.log("Rare banner clicked!")}
      />
    </div>
  ),
};

export const SizeComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <div className="text-white text-lg font-bold mb-2">Primal Variant</div>
      <div className="flex gap-4 items-end">
        <RarityBanner variant="primal" text="SM" size="sm" />
        <RarityBanner variant="primal" text="MD" size="md" />
        <RarityBanner variant="primal" text="LG" size="lg" />
        <RarityBanner variant="primal" text="XL" size="xl" />
      </div>

      <div className="text-white text-lg font-bold mb-2 mt-6">Rare Variant</div>
      <div className="flex gap-4 items-end">
        <RarityBanner variant="rare" text="SM" size="sm" />
        <RarityBanner variant="rare" text="MD" size="md" />
        <RarityBanner variant="rare" text="LG" size="lg" />
        <RarityBanner variant="rare" text="XL" size="xl" />
      </div>
    </div>
  ),
};

export const CustomBackgroundPaths: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <RarityBanner
        variant="primal"
        text="CUSTOM PRIMAL"
        size="lg"
        // You can override the background by modifying the BACKGROUND_IMAGES constant
      />
      <RarityBanner
        variant="rare"
        text="CUSTOM RARE"
        size="lg"
        // You can override the background by modifying the BACKGROUND_IMAGES constant
      />
    </div>
  ),
};
