// RolledStatItem.stories.tsx
import React from "react";
import RolledStatItem from "./RolledStatItem";

export default {
  title: "Atoms/RolledStatItem",
  component: RolledStatItem,
} as ComponentMeta<typeof RolledStatItem>;

const Template: ComponentStory<typeof RolledStatItem> = (args) => (
  <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 w-64">
    <RolledStatItem {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  statName: "ROLLED STAT NAME",
  statValue: "+13%",
  statColor: "[#4CAF51]",
  showDot: true,
};

export const NegativeValue = Template.bind({});
NegativeValue.args = {
  statName: "ROLLED STAT NAME",
  statValue: "-8%",
  statColor: "red-400",
};
