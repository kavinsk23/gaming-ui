import React from "react";
import WeaponBgTemplate from "./WeaponBgTemplate ";

export default {
  title: "Templates/WeaponBgTemplate",
  component: WeaponBgTemplate,
} as ComponentMeta<typeof WeaponBgTemplate>;

const Template: ComponentStory<typeof WeaponBgTemplate> = (args) => (
  <WeaponBgTemplate {...args}>
    <div className="p-8 text-white">
      <h1 className="mb-4 text-4xl font-bold">Weapon Details</h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,
        nisl eget ultricies tincidunt, nisl nibh aliquam nisl, nec aliquam nisl
        nisl sit amet nisl.
      </p>
    </div>
  </WeaponBgTemplate>
);

export const Default = Template.bind({});
Default.args = {
  backgroundImage: "/images/weapon-bg.png",
  weaponImage: "/images/HumanTech-Assault-RifleView-3D.svg",
  weaponImageAlt: "Assault Rifle",
  blurIntensity: "sm",
  overlayOpacity: 60,
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  backgroundImage: "/images/custom-bg.jpg",
  weaponImage: "/images/HumanTech-Assault-RifleView-3D.svg",
  weaponImageAlt: "Assault Rifle",
  blurIntensity: "lg",
  overlayOpacity: 80,
};

export const NoBlur = Template.bind({});
NoBlur.args = {
  backgroundImage: "/images/weapon-bg.png",
  weaponImage: "/images/HumanTech-Assault-RifleView-3D.svg",
  weaponImageAlt: "Assault Rifle",
  blurIntensity: "none",
  overlayOpacity: 40,
};
