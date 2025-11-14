// CatalystMods.stories.tsx
import CatalystMods from "./CatalystMods";

const meta: Meta<typeof CatalystMods> = {
  title: "Components/CatalystMods",
  component: CatalystMods,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CatalystMods>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "100vh", minHeight: "800px" }}>
      <CatalystMods />
    </div>
  ),
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  render: () => (
    <div style={{ height: "100vh", minHeight: "667px" }}>
      <CatalystMods />
    </div>
  ),
};
