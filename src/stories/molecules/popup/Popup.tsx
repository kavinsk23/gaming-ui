import React from "react";
import ButtonBasic from "../../button-basic/ButtonBasic";
import popupbg from "../../../../public/images/Panel-BG.svg";
import separatorImg from "../../../../public/images/SeparatorLine.svg";
import icon1 from "../../../../public/icons/image-40.svg";
import icon2 from "../../../../public/icons/image-41.svg";
import icon3 from "../../../../public/icons/image-42.svg";

interface PopupProps {
  onCancel: () => void;
  onReplace: () => void;
  variant?: "default" | "warning" | "enhance" | "single";
  title?: string;
  description?: string;
  cancelText?: string;
  replaceText?: string;
  /** Resource costs for enhance variant */
  resources?: {
    resource1?: number;
    resource2?: number;
    resource3?: number;
  };
  /** OK button text for single variant */
  okText?: string;
}

const Popup: React.FC<PopupProps> = ({
  onCancel,
  onReplace,
  variant = "default",
  title = "ARE YOU SURE YOU WANT TO REPLACE THIS ATTACHMENT?",
  description,
  cancelText = "CANCEL",
  replaceText = "REPLACE",
  resources = { resource1: +5, resource2: +12, resource3: +32 },
  okText = "OK",
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
          {(description || variant === "enhance") && (
            <img src={separatorImg} alt="Separator" className="w-full my-3" />
          )}

          {description && (
            <p className="text-sm text-center text-white opacity-80">
              {description}
            </p>
          )}

          {/* Resource costs for enhance variant */}
          {variant === "enhance" && (
            <div className="flex justify-center my-4 space-x-3">
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
              <div className="relative flex items-center justify-center w-16 h-8 ">
                <img src={icon3} alt="Resource 3" className="w-4 h-4 mr-1" />
                <span className="text-sm font-bold text-white">
                  {resources.resource3}
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4 space-x-3">
            {variant === "single" ? (
              <ButtonBasic variant="default" size="sm" onClick={onReplace}>
                {okText}
              </ButtonBasic>
            ) : (
              <>
                <ButtonBasic variant="default" size="sm" onClick={onCancel}>
                  {cancelText}
                </ButtonBasic>
                <ButtonBasic
                  variant={
                    variant === "warning" ? "highlighted" : "highlighted"
                  }
                  size="sm"
                  onClick={onReplace}
                >
                  {replaceText}
                </ButtonBasic>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
