import React from "react";
import Popup from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  onCancel: () => {
    console.log("Cancel button clicked");
  },
  onReplace: () => {
    console.log("Replace button clicked");
  },
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  title: "WARNING: THIS ACTION CANNOT BE UNDONE!",
  description:
    "It will be permanently lost. Lorem ipsum dolor an extra explanation if needed - are you super duper sure? Filler text that is very long and can take up multiple lines in this panel.",
  cancelText: "CANCEL",
  replaceText: "REPLACE",
  onCancel: () => {
    console.log("Cancel button clicked");
  },
  onReplace: () => {
    console.log("Replace button clicked");
  },
};
