import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)" // Remove .mdx for now
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: [
    "../public"
  ]
};
export default config;