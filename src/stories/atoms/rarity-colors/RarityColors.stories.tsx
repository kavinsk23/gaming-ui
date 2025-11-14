import { RarityColors } from './RarityColors';

export default {
  title: 'Atoms/RarityColors',
  component: RarityColors,
};

export const AllRarities = () => (
  <div className="p-8 bg-gray-900 min-h-screen">
    <RarityColors />
  </div>
);

export const SingleRarityExample = () => (
  <div className="p-8 bg-gray-900 min-h-screen">
    <div className="flex flex-col items-center space-y-3">
      <div 
        className="rounded-lg border-2 border-white shadow-lg"
        style={{ 
          width: '136px', 
          height: '136px',
          backgroundColor: '#1A98FF' // RARE color
        }}
      />
      <span className="font-bold text-lg text-white">RARE</span>
    </div>
  </div>
);
