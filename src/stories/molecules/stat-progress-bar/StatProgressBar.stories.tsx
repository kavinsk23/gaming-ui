import { StatProgressBar } from "./StatProgressBar";

const meta: Meta<typeof StatProgressBar> = {
  title: "Molecules/StatProgressBar",
  component: StatProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof StatProgressBar>;

export const SingleColor: Story = {
  args: {
    statName: "STAT NAME",
    value: 527,
    percentage: 13,
    segments: [{ percentage: 25, color: "white" }],
  },
};

export const TwoColors: Story = {
  args: {
    statName: "STAT NAME",
    value: 527,
    percentage: 50,
    segments: [
      { percentage: 25, color: "white" },
      { percentage: 25, color: "green" },
    ],
  },
};

export const ThreeColors: Story = {
  args: {
    statName: "STAT NAME",
    value: 527,
    percentage: 75,
    segments: [
      { percentage: 25, color: "white" },
      { percentage: 25, color: "green" },
      { percentage: 25, color: "red" },
    ],
  },
};

export const MultipleStats: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[500px]">
      <StatProgressBar
        statName="STAT NAME"
        value={527}
        percentage={25}
        segments={[{ percentage: 25, color: "white" }]}
      />
      <StatProgressBar
        statName="STAT NAME"
        value={527}
        percentage={50}
        segments={[
          { percentage: 25, color: "white" },
          { percentage: 25, color: "green" },
        ]}
      />
      <StatProgressBar
        statName="STAT NAME"
        value={527}
        percentage={75}
        segments={[
          { percentage: 25, color: "white" },
          { percentage: 25, color: "green" },
          { percentage: 25, color: "red" },
        ]}
      />
      <StatProgressBar
        statName="STAT NAME"
        value={527}
        percentage={100}
        segments={[
          { percentage: 25, color: "white" },
          { percentage: 25, color: "green" },
          { percentage: 25, color: "red" },
          { percentage: 25, color: "gray" },
        ]}
      />
    </div>
  ),
};

export const DifferentCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[500px]">
      <StatProgressBar
        statName="DAMAGE"
        value={156}
        percentage={60}
        segments={[
          { percentage: 40, color: "white" },
          { percentage: 20, color: "red" },
        ]}
      />
      <StatProgressBar
        statName="DEFENSE"
        value={89}
        percentage={30}
        segments={[
          { percentage: 15, color: "green" },
          { percentage: 15, color: "white" },
        ]}
      />
      <StatProgressBar
        statName="HEALTH"
        value={1200}
        percentage={80}
        segments={[
          { percentage: 30, color: "white" },
          { percentage: 25, color: "green" },
          { percentage: 25, color: "red" },
        ]}
      />
      <StatProgressBar
        statName="MANA"
        value={450}
        percentage={45}
        segments={[
          { percentage: 20, color: "white" },
          { percentage: 15, color: "green" },
          { percentage: 10, color: "gray" },
        ]}
      />
    </div>
  ),
};

export const NegativePercentages: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[500px]">
      <StatProgressBar
        statName="WEAKNESS"
        value={75}
        percentage={-25}
        segments={[{ percentage: 25, color: "red" }]}
      />
      <StatProgressBar
        statName="SLOW"
        value={50}
        percentage={-50}
        segments={[
          { percentage: 25, color: "red" },
          { percentage: 25, color: "gray" },
        ]}
      />
    </div>
  ),
};

export const RealGameExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[500px]">
      <StatProgressBar
        statName="FIRE RESIST"
        value={85}
        percentage={65}
        segments={[
          { percentage: 30, color: "white" },
          { percentage: 20, color: "green" },
          { percentage: 15, color: "red" },
        ]}
      />
      <StatProgressBar
        statName="ICE POWER"
        value={92}
        percentage={40}
        segments={[
          { percentage: 25, color: "white" },
          { percentage: 15, color: "green" },
        ]}
      />
      <StatProgressBar
        statName="POISON DMG"
        value={78}
        percentage={85}
        segments={[
          { percentage: 30, color: "white" },
          { percentage: 30, color: "green" },
          { percentage: 25, color: "red" },
        ]}
      />
    </div>
  ),
};
