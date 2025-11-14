import React from "react";
import { WeaponPageTemplate } from "./WeaponPageTemplate";

const meta: Meta<typeof WeaponPageTemplate> = {
  title: "Templates/WeaponPageTemplate",
  component: WeaponPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    blurIntensity: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl"],
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 100, step: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeaponPageTemplate>;

// Default with local background
export const Default: Story = {
  args: {
    // Uses the default local weapon-bg.png
    blurIntensity: "md",
    overlayOpacity: 60,
    children: (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Weapon Content Area</h1>
          <p className="text-xl">
            Using local weapon-bg.png as default background
          </p>
        </div>
      </div>
    ),
  },
};

// Custom background override
export const CustomBackground: Story = {
  args: {
    backgroundImage:
      "https://images.unsplash.com/photo-1585504231275-62fc8a13db4c?w=1200",
    blurIntensity: "lg",
    overlayOpacity: 50,
    children: (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-center bg-black/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Custom Background</h2>
          <p>Overriding the default local image</p>
        </div>
      </div>
    ),
  },
};

// Strong blur with local image
export const HeavyBlur: Story = {
  args: {
    // Uses default local image
    blurIntensity: "xl",
    overlayOpacity: 40,
    children: (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-center bg-black/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold">Heavy Blur Effect</h2>
          <p>Local background with maximum blur</p>
        </div>
      </div>
    ),
  },
};

// Minimal overlay
export const LightOverlay: Story = {
  args: {
    // Uses default local image
    blurIntensity: "sm",
    overlayOpacity: 20,
    children: (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-center bg-black/50 p-6 rounded">
          <h2 className="text-2xl font-bold">Light Overlay</h2>
          <p>Background remains more visible</p>
        </div>
      </div>
    ),
  },
};
