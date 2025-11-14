import React from "react";
import Popup from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
};

const Template = (args) => <Popup {...args} />;

export const Default = Template.bind({});
Default.args = {
  onCancel: () => console.log("Cancel button clicked"),
  onReplace: () => console.log("Replace button clicked"),
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  title: "WARNING: THIS ACTION CANNOT BE UNDONE!",
  description:
    "It will be permanently lost. Lorem ipsum dolor an extra explanation if needed.",
  onCancel: () => console.log("Cancel button clicked"),
  onReplace: () => console.log("Replace button clicked"),
};

export const Enhance = Template.bind({});
Enhance.args = {
  variant: "enhance",
  title: "ARE YOU SURE YOU WANT TO ENHANCE THIS ITEM?",
  description:
    "Lorem ipsum dolor an extra explanation if needed - this is a description. Resources needed:",
  cancelText: "CANCEL",
  replaceText: "ENHANCE",
  resources: {
    resource1: 5,
    resource2: 12,
    resource3: 32,
  },
  onCancel: () => console.log("Cancel button clicked"),
  onReplace: () => console.log("Enhance button clicked"),
};

export const Single = Template.bind({});
Single.args = {
  variant: "single",
  title: "OPERATION COMPLETED SUCCESSFULLY!",
  description: "Your item has been enhanced. All resources have been consumed.",
  okText: "OK",
  onCancel: () => console.log("Cancel button clicked"),
  onReplace: () => console.log("OK button clicked"),
};
