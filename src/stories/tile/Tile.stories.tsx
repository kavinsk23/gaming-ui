// PixelTile.stories.tsx
import { PixelTile } from './Tile';

const meta: Meta<typeof PixelTile> = {
  title: 'Components/PixelTile',
  component: PixelTile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['84px', '116px'],
    },
    variant: {
      control: { type: 'select' },
      options: ['empty', 'filled', 'selected'],
    },
    topBorderThickness: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    hoverEffect: {
      control: 'boolean',
    },
    cornerColor: {
      control: 'color',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof PixelTile>;

export const DefaultPixelEmpty: Story = {
  args: {
    variant: 'empty',
    size: '116px',
  },
};

export const DefaultPixelFilled: Story = {
  args: {
    variant: 'filled',
    size: '116px',
    image: '/weapon-icon.svg',
    alt: 'Weapon',
  },
};

export const DefaultPixelSelected: Story = {
  args: {
    variant: 'selected',
    size: '116px',
  },
};

export const EightyFourPixel: Story = {
  args: {
    variant: 'selected',
    size: '84px',
  },
};

export const PixelComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-4 items-center">
        <PixelTile variant="empty" size="84px" />
        <PixelTile variant="filled" size="84px" image="/item-icon.svg" alt="Item" />
        <PixelTile variant="selected" size="84px" />
      </div>
      <div className="flex gap-4 items-center">
        <PixelTile variant="empty" size="116px" />
        <PixelTile variant="filled" size="116px" image="/item-icon.svg" alt="Item" />
        <PixelTile variant="selected" size="116px" />
      </div>
    </div>
  ),
};