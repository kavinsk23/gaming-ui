import ModDetails from "./ModDetails";

const meta: Meta<typeof ModDetails> = {
  title: "Molecules/ModDetails",
  component: ModDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModDetails>;

export const Default: Story = {
  args: {
    modImage: "/images/mod-image.png",
    separatorImage: "/images/separator.png",
    powerIcon: "/icons/power-icon.png",
  },
};

export const WithoutImages: Story = {
  args: {
    // No images provided to show fallback state
  },
};

export const CustomContent: Story = {
  args: {
    modImage: "/images/custom-mod.png",
    separatorImage: "/images/custom-separator.png",
    powerIcon: "/icons/custom-power.png",
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <ModDetails {...args} />
    </div>
  ),
};
