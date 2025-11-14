import React from "react";
import ButtonBasic from "../../button-basic/ButtonBasic";
import popupbg from "../../../../public/images/Panel-BG.svg";
import separatorImg from "../../../../public/images/SeparatorLine.svg";

interface PopupProps {
  onCancel: () => void;
  onReplace: () => void;
  variant?: "default" | "warning";
  title?: string;
  description?: string;
  cancelText?: string;
  replaceText?: string;
}

const Popup: React.FC<PopupProps> = ({
  onCancel,
  onReplace,
  variant = "default",
  title = "ARE YOU SURE YOU WANT TO REPLACE THIS ATTACHMENT?",
  description,
  cancelText = "CANCEL",
  replaceText = "REPLACE",
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md p-4 mx-4 rounded-lg shadow-lg">
        <div className="absolute inset-0">
          <img
            src={popupbg}
            alt="Popup background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 p-4">
          <h2
            className={`text-lg font-bold text-white text-center ${
              variant === "warning" ? "text-red-400" : ""
            }`}
          >
            {title}
          </h2>

          {/* Separator image */}
          {description && (
            <img src={separatorImg} alt="Separator" className="w-full my-3" />
          )}

          {description && (
            <p className="text-sm text-center text-white opacity-80">
              {description}
            </p>
          )}

          <div className="flex justify-center mt-4 space-x-3">
            <ButtonBasic variant="default" size="sm" onClick={onCancel}>
              {cancelText}
            </ButtonBasic>
            <ButtonBasic
              variant={variant === "warning" ? "highlighted" : "highlighted"}
              size="sm"
              onClick={onReplace}
            >
              {replaceText}
            </ButtonBasic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
