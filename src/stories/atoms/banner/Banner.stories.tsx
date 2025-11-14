// Banner.stories.tsx
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'Atoms/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: 'ENHANCED',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'SMALL BANNER',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'LARGE BANNER',
    size: 'lg',
  },
};

export const Clickable: Story = {
  args: {
    children: 'CLICKABLE BANNER',
    size: 'md',
    onClick: () => console.log('Banner clicked!'),
  },
};

export const DifferentText: Story = {
  args: {
    children: 'PREMIUM FEATURE',
    size: 'md',
  },
};