// PixelTile.stories.tsx
import Tile, { PixelTile } from "./Tile";
import weapon1 from "../../../public/images/wepon1.svg";

const meta: Meta<typeof PixelTile> = {
  title: "Components/PixelTile",
  component: PixelTile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["84px", "116px"],
    },
    variant: {
      control: { type: "select" },
      options: ["empty", "filled", "selected"],
    },
    topBorderThickness: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    hoverEffect: {
      control: "boolean",
    },
    cornerColor: {
      control: "color",
    },
    borderColor: {
      control: "color",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof PixelTile>;

export const DefaultPixelEmpty: Story = {
  args: {
    variant: "empty",
    size: "116px",
  },
};

export const DefaultPixelFilled: Story = {
  args: {
    variant: "filled",
    size: "116px",
    image: weapon1,
    alt: "Weapon",
  },
};

export const DefaultPixelSelected: Story = {
  args: {
    variant: "selected",
    size: "116px",
  },
};

export const EightyFourPixel: Story = {
  args: {
    variant: "selected",
    size: "84px",
  },
};

// Custom border colors for PixelTile
export const PixelTileWithCustomBorders: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-bold text-white">
        PixelTile with Custom Border Colors
      </h3>
      <div className="flex items-center gap-4">
        <PixelTile
          variant="filled"
          size="116px"
          image={weapon1}
          alt="Blue Border"
          borderColor="#1669AD"
        />
        <PixelTile
          variant="filled"
          size="116px"
          image={weapon1}
          alt="Green Border"
          borderColor="#7EBF4B"
        />
        <PixelTile
          variant="filled"
          size="116px"
          image={weapon1}
          alt="Purple Border"
          borderColor="#8F40CB"
        />
        <PixelTile
          variant="filled"
          size="116px"
          image={weapon1}
          alt="White Border"
          borderColor="#FFFFFF"
        />
      </div>
    </div>
  ),
};

export const PixelComparison: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <PixelTile variant="empty" size="84px" />
        <PixelTile variant="filled" size="84px" image={weapon1} alt="Item" />
        <PixelTile variant="selected" size="84px" />
      </div>
      <div className="flex items-center gap-4">
        <PixelTile variant="empty" size="116px" />
        <PixelTile variant="filled" size="116px" image={weapon1} alt="Item" />
        <PixelTile variant="selected" size="116px" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <PixelTile
          variant="filled"
          size="116px"
          image={weapon1}
          alt="Custom Border"
          borderColor="#1669AD"
          topBorderThickness="lg"
        />
        <PixelTile
          variant="filled"
          size="116px"
          image={weapon1}
          alt="Custom Border"
          borderColor="#8F40CB"
          topBorderThickness="lg"
        />
      </div>
    </div>
  ),
};

// All PixelTile variants with custom borders
export const AllPixelTileVariantsWithBorders: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-bold text-white">
        All PixelTile Variants with Custom Borders
      </h3>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <PixelTile variant="empty" size="116px" borderColor="#1669AD" />
          <PixelTile
            variant="filled"
            size="116px"
            image={weapon1}
            borderColor="#1669AD"
          />
          <PixelTile
            variant="selected"
            size="116px"
            borderColor="#1669AD"
            cornerColor="#1669AD"
          />
        </div>
        <div className="flex items-center gap-4">
          <PixelTile variant="empty" size="116px" borderColor="#8F40CB" />
          <PixelTile
            variant="filled"
            size="116px"
            image={weapon1}
            borderColor="#8F40CB"
          />
          <PixelTile
            variant="selected"
            size="116px"
            borderColor="#8F40CB"
            cornerColor="#8F40CB"
          />
        </div>
      </div>
    </div>
  ),
};
// Tile.stories.tsx (additional stories for gradient)

// Gradient stories for selected state
export const SelectedWithDefaultGradient: Story = {
  args: {
    variant: "selected",
    size: "lg",
    borderColor: "#1669AD",
    cornerColor: "#1669AD",
  },
};

export const SelectedWithCustomGradient: Story = {
  args: {
    variant: "selected",
    size: "lg",
    borderColor: "#8F40CB",
    cornerColor: "#8F40CB",
    gradientColor: "rgba(143, 64, 203, 0.3)",
  },
};

export const SelectedWithWhiteGradient: Story = {
  args: {
    variant: "selected",
    size: "lg",
    borderColor: "#FFFFFF",
    cornerColor: "#FFFFFF",
    gradientColor: "rgba(255, 255, 255, 0.7)",
  },
};

// Gradient comparison
export const GradientComparison: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-bold text-white">
        Selected Tiles with Different Gradients
      </h3>
      <div className="flex items-center gap-4">
        <Tile
          variant="selected"
          size="lg"
          borderColor="#1669AD"
          cornerColor="#1669AD"
          gradientColor="rgba(22, 105, 173, 0.3)"
        />
        <Tile
          variant="selected"
          size="lg"
          borderColor="#7EBF4B"
          cornerColor="#7EBF4B"
          gradientColor="rgba(126, 191, 75, 0.3)"
        />
        <Tile
          variant="selected"
          size="lg"
          borderColor="#8F40CB"
          cornerColor="#8F40CB"
          gradientColor="rgba(143, 64, 203, 0.3)"
        />
        <Tile
          variant="selected"
          size="lg"
          borderColor="#FFFFFF"
          cornerColor="#FFFFFF"
          gradientColor="rgba(255, 255, 255, 0.7)"
        />
      </div>
    </div>
  ),
};

// All variants including selected with gradient
export const AllVariantsWithGradient: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-bold text-white">
        All Variants (Selected has Gradient)
      </h3>
      <div className="flex items-center gap-4">
        <Tile variant="empty" size="lg" borderColor="#1669AD" />
        <Tile
          variant="filled"
          size="lg"
          image={weapon1}
          borderColor="#1669AD"
        />
        <Tile
          variant="selected"
          size="lg"
          borderColor="#1669AD"
          cornerColor="#1669AD"
          gradientColor="rgba(22, 105, 173, 0.3)"
        />
        <Tile variant="locked" size="lg" borderColor="#1669AD" />
      </div>
    </div>
  ),
};
