import type { Preview } from '@storybook/react'; // Change this import
import '../src/index.css'; // Add this line for Tailwind

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;