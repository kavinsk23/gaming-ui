import React from 'react';
import { WeaponPage } from './WeaponPage';

const meta: Meta<typeof WeaponPage> = {
  title: 'Gaming/WeaponPage',
  component: WeaponPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof WeaponPage> = {
  args: {
    name: 'LONG WEAPON NAME IV',
    type: 'WEAPON - SNIPER RIFLE',
    powerLevel: '543-654',
    anchorStat: 'ANCHOR STAT NAME',
    element: 'kinetic',
  },
};