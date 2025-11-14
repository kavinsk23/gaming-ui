import React from 'react';
import { ElementIcon } from './ElementIcon';

export default {
  title: 'Atoms/ElementIcon',
  component: ElementIcon,
};

export const AllElements = () => (
  <div>
    <h2 className="text-white text-xl font-bold mb-6 text-center">All Elements</h2>
    <div className="flex gap-6 flex-wrap justify-center">
      {(['earth', 'fire', 'ice', 'kinetic', 'life', 'lightning'] as const).map((element) => (
        <div key={element} className="flex flex-col items-center space-y-3">
          <ElementIcon element={element} size="lg" />
          <span className="text-white text-sm font-medium capitalize">{element}</span>
        </div>
      ))}
    </div>
  </div>
);

export const SizeVariants = () => (
  <div>
    <h2 className="text-white text-xl font-bold mb-6 text-center">Size Variants</h2>
    <div className="flex gap-8 items-end justify-center">
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex flex-col items-center space-y-3">
          <ElementIcon element="fire" size={size} />
          <span className="text-white text-sm font-medium capitalize">{size}</span>
        </div>
      ))}
    </div>
  </div>
);

export const Interactive = () => (
  <div>
    <h2 className="text-white text-xl font-bold mb-6 text-center">Interactive Example</h2>
    <div className="flex gap-6 justify-center">
      {(['earth', 'fire', 'lightning'] as const).map((element) => (
        <div key={element} className="flex flex-col items-center space-y-3">
          <ElementIcon 
            element={element} 
            size="lg" 
            onClick={() => alert(`${element} element clicked!`)}
          />
          <span className="text-white text-sm font-medium capitalize">Click me</span>
        </div>
      ))}
    </div>
  </div>
);

// Individual element stories
export const Earth = () => <ElementIcon element="earth" size="md" />;
export const Fire = () => <ElementIcon element="fire" size="md" />;
export const Ice = () => <ElementIcon element="ice" size="md" />;
export const Kinetic = () => <ElementIcon element="kinetic" size="md" />;
export const Life = () => <ElementIcon element="life" size="md" />;
export const Lightning = () => <ElementIcon element="lightning" size="md" />;