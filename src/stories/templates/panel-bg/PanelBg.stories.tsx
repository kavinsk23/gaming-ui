import { PanelBg } from "./PanelBg";

const meta: Meta<typeof PanelBg> = {
  title: "Templates/PanelBg",
  component: PanelBg,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "full", "auto"],
    },
    height: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "full", "auto"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof PanelBg>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6 text-white">
        <h3 className="text-lg font-bold">Panel Content</h3>
        <p className="mt-2">This is the content inside the panel background.</p>
      </div>
    ),
    width: "md",
    height: "md",
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <PanelBg width="sm" height="sm">
        <div className="p-4 text-white text-sm">Small Panel</div>
      </PanelBg>
      <PanelBg width="md" height="md">
        <div className="p-6 text-white">Medium Panel</div>
      </PanelBg>
      <PanelBg width="lg" height="lg">
        <div className="p-8 text-white text-lg">Large Panel</div>
      </PanelBg>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <PanelBg width="md" height="auto">
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Game Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Health:</span>
            <span className="text-green-400">100%</span>
          </div>
          <div className="flex justify-between">
            <span>Mana:</span>
            <span className="text-blue-400">75%</span>
          </div>
          <div className="flex justify-between">
            <span>Stamina:</span>
            <span className="text-yellow-400">50%</span>
          </div>
        </div>
      </div>
    </PanelBg>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <PanelBg width="full" height="auto">
        <div className="p-6 text-white">
          <h3 className="text-lg font-bold">Full Width Panel</h3>
          <p className="mt-2">
            This panel stretches to fill its container width.
          </p>
        </div>
      </PanelBg>
    </div>
  ),
};

export const CustomBackground: Story = {
  args: {
    backgroundImage: "/custom-bg.svg", // Replace with your actual SVG path
    children: (
      <div className="p-6 text-white">
        <h3 className="text-lg font-bold">Custom Background</h3>
        <p>Using a custom background image.</p>
      </div>
    ),
    width: "md",
    height: "md",
  },
};

export const Interactive: Story = {
  render: () => (
    <PanelBg
      width="md"
      height="md"
      onClick={() => console.log("Panel clicked!")}
    >
      <div className="p-6 text-white text-center">
        <h3 className="text-lg font-bold">Clickable Panel</h3>
        <p className="mt-2">Click me!</p>
      </div>
    </PanelBg>
  ),
};
