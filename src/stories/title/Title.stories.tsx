import React from 'react';
import { Title } from './Title';

export default {
  title: 'Atoms/Title',
  component: Title,
};

export const Default = () => (
  <div className="p-8 bg-gray-900 min-h-screen">
    <Title>CORE MOD</Title>
  </div>
);

export const SizeVariants = () => (
  <div className="p-8 bg-gray-900 min-h-screen space-y-6">
    <Title size="sm">SMALL TITLE</Title>
    <Title size="md">MEDIUM TITLE</Title>
    <Title size="lg">LARGE TITLE</Title>
  </div>
);

export const CustomImages = () => (
  <div className="p-8 bg-gray-900 min-h-screen space-y-6">
    <Title 
      leftImage="/icons/custom-left.png"
      rightImage="/icons/custom-right.png"
    >
      CUSTOM IMAGES
    </Title>
    <Title>CORE MOD</Title>
  </div>
);

export const DifferentText = () => (
  <div className="p-8 bg-gray-900 min-h-screen space-y-6">
    <Title>WEAPONS</Title>
    <Title>ARMOR SET</Title>
    <Title>SKILL TREE</Title>
    <Title>CHARACTER STATS</Title>
  </div>
);

export const Interactive = () => (
  <div className="p-8 bg-gray-900 min-h-screen space-y-6">
    <Title onClick={() => alert('Title clicked!')}>CLICKABLE TITLE</Title>
    <Title>STATIC TITLE</Title>
  </div>
);