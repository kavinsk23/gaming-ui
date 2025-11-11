// Tile.stories.tsx
import { Tile, PixelTile } from './Tile';
import wepon1 from "../../../public/images/wepon1.svg"

const meta: Meta<typeof Tile> = {
  title: 'Components/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['empty', 'filled'],
    },
    topBorderThickness: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    hoverEffect: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const EmptyTile: Story = {
  args: {
    variant: 'empty',
    size: 'lg',
  },
};

export const FilledTile: Story = {
  args: {
    variant: 'filled',
    size: 'lg',
    image: '/weapon-icon.svg',
    alt: 'Weapon Icon',
  },
};

export const EmptySizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tile variant="empty" size="xs" />
      <Tile variant="empty" size="sm" />
      <Tile variant="empty" size="md" />
      <Tile variant="empty" size="lg" />
      <Tile variant="empty" size="xl" />
      <Tile variant="empty" size="2xl" />
    </div>
  ),
};

export const FilledSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tile variant="filled" size="xs" image={wepon1} alt="Item" />
      <Tile variant="filled" size="sm" image={wepon1} alt="Item" />
      <Tile variant="filled" size="md" image={wepon1} alt="Item" />
      <Tile variant="filled" size="lg" image={wepon1} alt="Item" />
      <Tile variant="filled" size="xl" image={wepon1} alt="Item" />
      <Tile variant="filled" size="2xl" image={wepon1} alt="Item" />
    </div>
  ),
};

export const PixelTiles: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <PixelTile variant="empty" size="84px" />
      <PixelTile variant="filled" size="84px" image="/item-icon.svg" alt="Item" />
      <PixelTile variant="empty" size="116px" />
      <PixelTile variant="filled" size="116px" image="/item-icon.svg" alt="Item" />
    </div>
  ),
};

export const BorderThickness: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tile variant="filled" size="lg" image="/item-icon.svg" alt="Item" topBorderThickness="sm" />
      <Tile variant="filled" size="lg" image="/item-icon.svg" alt="Item" topBorderThickness="md" />
      <Tile variant="filled" size="lg" image="/item-icon.svg" alt="Item" topBorderThickness="lg" />
    </div>
  ),
};

export const InteractiveTiles: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tile variant="empty" size="lg" hoverEffect />
      <Tile variant="filled" size="lg" image="/item-icon.svg" alt="Item" hoverEffect />
      <PixelTile variant="empty" size="116px" hoverEffect />
      <PixelTile variant="filled" size="116px" image="/item-icon.svg" alt="Item" hoverEffect />
    </div>
  ),
};

export const GamingItems: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tile variant="filled" size="lg" image="/weapon-icon.svg" alt="Weapon" />
      <Tile variant="filled" size="lg" image="/armor-icon.svg" alt="Armor" />
      <Tile variant="filled" size="lg" image="/potion-icon.svg" alt="Potion" />
      <Tile variant="filled" size="lg" image="/magic-icon.svg" alt="Magic" />
      <Tile variant="filled" size="lg" image="/key-icon.svg" alt="Key" />
    </div>
  ),
};