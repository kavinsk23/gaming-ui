import React from "react";
import Popup from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  onCancel: () => {
    console.log("Cancel button clicked");
  },
  onReplace: () => {
    console.log("Replace button clicked");
  },
};
