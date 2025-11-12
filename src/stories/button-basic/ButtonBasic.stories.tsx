// ButtonBasic.stories.tsx
import { ButtonBasic } from './ButtonBasic';

const meta: Meta<typeof ButtonBasic> = {
  title: 'Components/ButtonBasic',
  component: ButtonBasic,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'highlighted', 'disabled'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonBasic>;

export const Default: Story = {
  args: {
    children: 'DETACH',
    variant: 'default',
    size: 'md',
  },
};

export const Highlighted: Story = {
  args: {
    children: 'DETACH',
    variant: 'highlighted',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    children: 'DETACH',
    variant: 'disabled',
    size: 'md',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonBasic variant="default" size="md">DETACH</ButtonBasic>
      <ButtonBasic variant="highlighted" size="md">DETACH</ButtonBasic>
      <ButtonBasic variant="disabled" size="md">DETACH</ButtonBasic>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonBasic variant="default" size="sm">SMALL</ButtonBasic>
      <ButtonBasic variant="default" size="md">MEDIUM</ButtonBasic>
      <ButtonBasic variant="default" size="lg">LARGE</ButtonBasic>
    </div>
  ),
};

export const WithCustomImage: Story = {
  args: {
    children: 'CUSTOM',
    variant: 'default',
    image: '/custom-button-bg.svg',
  },
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonBasic 
        variant="default" 
        size="md"
        onClick={() => console.log('Default clicked!')}
      >
        CLICK ME
      </ButtonBasic>
      <ButtonBasic 
        variant="highlighted" 
        size="md"
        onClick={() => console.log('Highlighted clicked!')}
      >
        HIGHLIGHTED
      </ButtonBasic>
    </div>
  ),
};

export const DifferentText: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonBasic variant="default" size="md">ATTACH</ButtonBasic>
      <ButtonBasic variant="default" size="md">EQUIP</ButtonBasic>
      <ButtonBasic variant="default" size="md">USE</ButtonBasic>
      <ButtonBasic variant="default" size="md">CRAFT</ButtonBasic>
    </div>
  ),
};

export const FixedImageShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center p-8 bg-gray-800 rounded-lg">
      <h3 className="text-white font-bold mb-4">Same Image for All Variants</h3>
      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-center gap-2">
          <ButtonBasic variant="default" size="lg">DEFAULT</ButtonBasic>
          <span className="text-white text-sm">White Text</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonBasic variant="highlighted" size="lg">HIGHLIGHTED</ButtonBasic>
          <span className="text-white text-sm">Yellow Text</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ButtonBasic variant="disabled" size="lg">DISABLED</ButtonBasic>
          <span className="text-white text-sm">Gray Text + Disabled</span>
        </div>
      </div>
    </div>
  ),
};