import React from "react";
import Tile from "../../tile/Tile";
import Title from "../../title/Title";

/**
 * CatalystMods Component
 *
 * A scrollable grid of tiles with uniform size and search functionality.
 * Features 4-column layout with consistent tile sizing.
 */
export const CatalystMods: React.FC = () => {
  // Sample images for demonstration (replace with your actual image paths)
  const sampleImages = {
    weapon1: "/images/wepon1.svg",
    weapon2: "/images/wepon2.svg",
    weapon3: "/images/wepon3.svg",
    item1: "/images/item1.svg",
    item2: "/images/item2.svg",
    item3: "/images/item3.svg",
    item4: "/images/item4.svg",
  };

  // Tile configurations - all same size with different variations
  const tileConfigs = [
    // Row 1
    {
      id: 1,
      variant: "empty" as const,
      borderColor: "#878787",
    },
    {
      id: 2,
      variant: "filled" as const,
      image: sampleImages.weapon1,
      alt: "Weapon 1",
      borderColor: "#1669AD",
    },
    {
      id: 3,
      variant: "selected" as const,
      borderColor: "#7EBF4B",
      cornerColor: "#7EBF4B",
      gradientColor: "rgba(126, 191, 75, 0.3)",
    },
    {
      id: 4,
      variant: "locked" as const,
      borderColor: "#8F40CB",
    },

    // Row 2
    {
      id: 5,
      variant: "filled" as const,
      image: sampleImages.weapon2,
      alt: "Weapon 2",
      borderColor: "#1669AD",
    },
    {
      id: 6,
      variant: "filled" as const,
      image: sampleImages.weapon3,
      alt: "Weapon 3",
      borderColor: "#1669AD",
    },
    {
      id: 7,
      variant: "selected" as const,
      borderColor: "#FFFFFF",
      cornerColor: "#FFFFFF",
      gradientColor: "rgba(255, 255, 255, 0.7)",
    },
    {
      id: 8,
      variant: "empty" as const,
      borderColor: "#878787",
    },

    // Row 3
    {
      id: 9,
      variant: "filled" as const,
      image: sampleImages.item1,
      alt: "Item 1",
      borderColor: "#8F40CB",
    },
    {
      id: 10,
      variant: "locked" as const,
      borderColor: "#1669AD",
    },
    {
      id: 11,
      variant: "filled" as const,
      image: sampleImages.item2,
      alt: "Item 2",
      borderColor: "#7EBF4B",
    },
    {
      id: 12,
      variant: "selected" as const,
      borderColor: "#1669AD",
      cornerColor: "#1669AD",
      gradientColor: "rgba(22, 105, 173, 0.3)",
    },

    // Row 4
    {
      id: 13,
      variant: "empty" as const,
      borderColor: "#7EBF4B",
    },
    {
      id: 14,
      variant: "filled" as const,
      image: sampleImages.item3,
      alt: "Item 3",
      borderColor: "#8F40CB",
    },
    {
      id: 15,
      variant: "locked" as const,
      borderColor: "#878787",
    },
    {
      id: 16,
      variant: "filled" as const,
      image: sampleImages.item4,
      alt: "Item 4",
      borderColor: "#1669AD",
    },

    // Row 5 - Additional items for scrolling
    {
      id: 17,
      variant: "selected" as const,
      borderColor: "#7EBF4B",
      cornerColor: "#7EBF4B",
      gradientColor: "rgba(126, 191, 75, 0.3)",
    },
    {
      id: 18,
      variant: "empty" as const,
      borderColor: "#878787",
    },
    {
      id: 19,
      variant: "filled" as const,
      image: sampleImages.weapon1,
      alt: "Weapon 1",
      borderColor: "#8F40CB",
    },
    {
      id: 20,
      variant: "locked" as const,
      borderColor: "#1669AD",
    },
    {
      id: 21,
      variant: "filled" as const,
      image: sampleImages.item1,
      alt: "Item 5",
      borderColor: "#1669AD",
    },
    {
      id: 22,
      variant: "selected" as const,
      borderColor: "#8F40CB",
      cornerColor: "#8F40CB",
      gradientColor: "rgba(143, 64, 203, 0.3)",
    },
    {
      id: 23,
      variant: "empty" as const,
      borderColor: "#7EBF4B",
    },
    {
      id: 24,
      variant: "locked" as const,
      borderColor: "#878787",
    },

    // Row 7
    {
      id: 25,
      variant: "filled" as const,
      image: sampleImages.weapon1,
      alt: "Weapon 4",
      borderColor: "#8F40CB",
    },
    {
      id: 26,
      variant: "empty" as const,
      borderColor: "#1669AD",
    },
    {
      id: 27,
      variant: "selected" as const,
      borderColor: "#7EBF4B",
      cornerColor: "#7EBF4B",
      gradientColor: "rgba(126, 191, 75, 0.3)",
    },
    {
      id: 28,
      variant: "filled" as const,
      image: sampleImages.item1,
      alt: "Item 6",
      borderColor: "#1669AD",
    },

    // Row 8
    {
      id: 29,
      variant: "locked" as const,
      borderColor: "#7EBF4B",
    },
    {
      id: 30,
      variant: "filled" as const,
      image: sampleImages.item1,
      alt: "Item 7",
      borderColor: "#8F40CB",
    },
    {
      id: 31,
      variant: "empty" as const,
      borderColor: "#878787",
    },
    {
      id: 32,
      variant: "selected" as const,
      borderColor: "#FFFFFF",
      cornerColor: "#FFFFFF",
      gradientColor: "rgba(255, 255, 255, 0.7)",
    },

    // Row 9
    {
      id: 33,
      variant: "filled" as const,
      image: sampleImages.weapon1,
      alt: "Weapon 5",
      borderColor: "#1669AD",
    },
    {
      id: 34,
      variant: "empty" as const,
      borderColor: "#7EBF4B",
    },
    {
      id: 35,
      variant: "locked" as const,
      borderColor: "#8F40CB",
    },
    {
      id: 36,
      variant: "filled" as const,
      image: sampleImages.item1,
      alt: "Item 8",
      borderColor: "#1669AD",
    },

    // Row 10
    {
      id: 37,
      variant: "selected" as const,
      borderColor: "#7EBF4B",
      cornerColor: "#7EBF4B",
      gradientColor: "rgba(126, 191, 75, 0.3)",
    },
    {
      id: 38,
      variant: "filled" as const,
      image: sampleImages.item1,
      alt: "Item 9",
      borderColor: "#8F40CB",
    },
    {
      id: 39,
      variant: "empty" as const,
      borderColor: "#878787",
    },
    {
      id: 40,
      variant: "locked" as const,
      borderColor: "#1669AD",
    },
  ];

  const handleTileClick = (tileId: number) => {
    console.log(`Tile ${tileId} clicked`);
    // Add your tile click logic here
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search:", event.target.value);
    // Add your search logic here
  };

  return (
    <div className="flex flex-col p-6 w-[580px] max-w-[580px] bg-gray-900">
      {/* Header Section with Title and Search */}
      <div className="flex-shrink-0 mb-6">
        {/* Title */}
        <Title size="sm" className="mb-4">
          CATALYST MODS
        </Title>
      </div>

      {/* Scrollable Grid Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-4 gap-4">
          {tileConfigs.map((tile) => (
            <Tile
              key={tile.id}
              variant={tile.variant}
              size="sm"
              onClick={() => handleTileClick(tile.id)}
              hoverEffect={true}
              borderColor={tile.borderColor}
              image={tile.image}
              alt={tile.alt}
              cornerColor={tile.cornerColor}
              gradientColor={tile.gradientColor}
              className="transition-all duration-200 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalystMods;
