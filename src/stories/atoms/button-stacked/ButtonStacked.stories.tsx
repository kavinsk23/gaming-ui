// ButtonStacked.stories.tsx
import { ButtonStacked } from './ButtonStacked';

const meta: Meta<typeof ButtonStacked> = {
  title: 'Components/ButtonStacked',
  component: ButtonStacked,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'highlighted', 'locked'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonStacked>;

export const Default: Story = {
  args: {
    mainText: 'ENHANCE',
    stats: [5, 12, 32],
    variant: 'default',
    size: 'md',
  },
};

export const Highlighted: Story = {
  args: {
    mainText: 'ENHANCE',
    stats: [5, 12, 32],
    variant: 'highlighted',
    size: 'md',
  },
};

export const Locked: Story = {
  args: {
    mainText: 'ENHANCE',
    stats: [5, 12, 32],
    variant: 'locked',
    size: 'md',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="default" 
      />
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="highlighted" 
      />
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="locked" 
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="default" 
        size="sm" 
      />
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="default" 
        size="md" 
      />
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="default" 
        size="lg" 
      />
    </div>
  ),
};

export const DifferentStats: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonStacked 
        mainText="UPGRADE" 
        stats={[3, 8, 15]} 
        variant="default" 
      />
      <ButtonStacked 
        mainText="BOOST" 
        stats={[10, 25, 50]} 
        variant="highlighted" 
      />
      <ButtonStacked 
        mainText="MODIFY" 
        stats={[1, 6, 20]} 
        variant="default" 
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  args: {
    mainText: 'ENHANCE',
    stats: [5, 12, 32],
    variant: 'default',
    statIcons: [
      '/custom-icons/damage.svg',
      '/custom-icons/range.svg', 
      '/custom-icons/speed.svg'
    ],
  },
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ButtonStacked 
        mainText="ENHANCE" 
        stats={[5, 12, 32]} 
        variant="default"
        onClick={() => console.log('Enhance clicked!')}
      />
      <ButtonStacked 
        mainText="UPGRADE" 
        stats={[8, 16, 24]} 
        variant="highlighted"
        onClick={() => console.log('Upgrade clicked!')}
      />
    </div>
  ),
};

