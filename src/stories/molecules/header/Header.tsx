import React from "react";
import icon1 from "../../../../public/icons/image-40.svg";
import icon2 from "../../../../public/icons/image-41.svg";
import icon3 from "../../../../public/icons/image-42.svg";
import headerBg from "../../../../public/images/GradientHeader.png";

interface HeaderProps {
  resources: {
    resource1: number;
    resource2: number;
    resource3: number;
  };
  onBackClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ resources, onBackClick }) => {
  return (
    <header className="flex items-center justify-between px-4 h-[50px] relative">
      {/* Gradient Background Image */}
      <img
        src={headerBg}
        alt="Header background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      {/* Left corner - ESC BACK button */}
      <button
        className="inline-flex items-center justify-center bg-transparent"
        onClick={onBackClick}
      >
        <div className="flex items-center justify-center w-10 h-10 mr-2 font-bold text-black bg-gray-300 rounded-lg text-md">
          ESC
        </div>
        <div className="flex items-center justify-center text-xl font-bold text-white">
          BACK
        </div>
      </button>

      {/* Right corner - Resource items */}
      <div className="flex justify-center space-x-3">
        {/* Resource 1 */}
        <div className="relative flex items-center justify-center w-16 h-8">
          <img src={icon1} alt="Resource 1" className="w-4 h-4 mr-1" />
          <span className="text-sm font-bold text-white">
            {resources.resource1}
          </span>
        </div>

        {/* Resource 2 */}
        <div className="relative flex items-center justify-center w-16 h-8">
          <img src={icon2} alt="Resource 2" className="w-4 h-4 mr-1" />
          <span className="text-sm font-bold text-white">
            {resources.resource2}
          </span>
        </div>

        {/* Resource 3 */}
        <div className="relative flex items-center justify-center w-16 h-8">
          <img src={icon3} alt="Resource 3" className="w-4 h-4 mr-1" />
          <span className="text-sm font-bold text-white">
            {resources.resource3}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
