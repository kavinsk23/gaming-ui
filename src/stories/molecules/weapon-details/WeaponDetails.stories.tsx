import WeaponDetails from "./WeaponDetails";

const meta: Meta<typeof WeaponDetails> = {
  title: "Molecules/WeaponDetails",
  component: WeaponDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WeaponDetails>;

export const Default: Story = {
  args: {},
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <WeaponDetails />
    </div>
  ),
};
