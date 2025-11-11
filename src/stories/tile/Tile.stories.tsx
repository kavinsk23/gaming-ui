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
    backgroundColor: {
      control: 'color',
    },
    hoverEffect: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof PixelTile>;

export const DefaultPixel: Story = {
  args: {
    size: '116px',
    children: '116px',
  },
};

export const EightyFourPixel: Story = {
  args: {
    size: '84px',
    children: '84px',
  },
};

export const PixelWithBackground: Story = {
  args: {
    size: '116px',
    backgroundImage: '/images/game-tile.svg',
    children: 'Game',
  },
};

export const PixelShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex gap-4 items-center">
        <PixelTile size="84px">Small</PixelTile>
        <PixelTile size="116px">Large</PixelTile>
      </div>
      <div className="flex gap-4 items-center">
        <PixelTile size="84px" hoverEffect>Hover</PixelTile>
        <PixelTile size="116px" hoverEffect>Hover</PixelTile>
      </div>
    </div>
  ),
};