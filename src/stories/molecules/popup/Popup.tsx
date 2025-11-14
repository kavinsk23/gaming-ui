import React from "react";
import ButtonBasic from "../../button-basic/ButtonBasic";
import popupbg from "../../../../public/images/Panel-BG.svg";

interface PopupProps {
  onCancel: () => void;
  onReplace: () => void;
}

const Popup: React.FC<PopupProps> = ({ onCancel, onReplace }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Popup content */}
      <div className="relative p-8 rounded-lg shadow-lg">
        <div className="absolute inset-0">
          {/* SVG image layer */}
          <img
            src={popupbg}
            alt="Popup background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10">
          <h2 className="mb-4 text-2xl font-bold text-white">
            ARE YOU SURE YOU WANT TO REPLACE THIS ATTACHMENT?
          </h2>
          <div className="flex justify-center space-x-4">
            <ButtonBasic variant="default" onClick={onCancel}>
              CANCEL
            </ButtonBasic>
            <ButtonBasic variant="highlighted" onClick={onReplace}>
              REPLACE
            </ButtonBasic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
