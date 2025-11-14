// StatItem.stories.tsx
import React from "react";
import StatItem from "./StatItem";

export default {
  title: "Components/StatItem",
  component: StatItem,
} as ComponentMeta<typeof StatItem>;

const Template: ComponentStory<typeof StatItem> = (args) => (
  <StatItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "STAT LABEL",
  value: 100,
  percentChange: 0,
};

export const PositiveChange = Template.bind({});
PositiveChange.args = {
  label: "RELOAD",
  value: 527,
  percentChange: 27,
};

export const NegativeChange = Template.bind({});
NegativeChange.args = {
  label: "FIRE RATE",
  value: 527,
  percentChange: -13,
};
