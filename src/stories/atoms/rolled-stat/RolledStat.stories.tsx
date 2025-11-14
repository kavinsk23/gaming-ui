import { RolledStat } from "./RolledStat";

const meta: Meta<typeof RolledStat> = {
  title: "Atoms/RolledStat",
  component: RolledStat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["positive", "negative"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof RolledStat>;

export const Positive: Story = {
  args: {
    statName: "ROLLED STAT NAME",
    percentage: 27,
    variant: "positive",
    size: "md",
  },
};

export const Negative: Story = {
  args: {
    statName: "ROLLED STAT NAME",
    percentage: 27,
    variant: "negative",
    size: "md",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center w-96">
      <RolledStat
        statName="ROLLED STAT NAME"
        percentage={27}
        variant="positive"
      />
      <RolledStat
        statName="ROLLED STAT NAME"
        percentage={27}
        variant="positive"
      />
      <RolledStat
        statName="ROLLED STAT NAME"
        percentage={27}
        variant="positive"
      />
    </div>
  ),
};

export const DifferentStats: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center w-96">
      <RolledStat statName="ATTACK DAMAGE" percentage={15} variant="positive" />
      <RolledStat statName="DEFENSE BONUS" percentage={42} variant="positive" />
      <RolledStat
        statName="CRITICAL CHANCE"
        percentage={8}
        variant="positive"
      />
      <RolledStat
        statName="MOVEMENT SPEED"
        percentage={-12}
        variant="negative"
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center w-96">
      <RolledStat
        statName="SMALL STAT"
        percentage={27}
        variant="positive"
        size="sm"
      />
      <RolledStat
        statName="MEDIUM STAT"
        percentage={27}
        variant="positive"
        size="md"
      />
      <RolledStat
        statName="LARGE STAT"
        percentage={27}
        variant="positive"
        size="lg"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center w-96">
      <RolledStat
        statName="CLICKABLE STAT"
        percentage={27}
        variant="positive"
        onClick={() => console.log("Stat clicked!")}
      />
      <RolledStat
        statName="ANOTHER STAT"
        percentage={-15}
        variant="negative"
        onClick={() => console.log("Negative stat clicked!")}
      />
    </div>
  ),
};
