import React, { useState } from "react";
import { ButtonBlock } from "../types";

interface ButtonBlockComponentProps {
  block: ButtonBlock;
  isSelected: boolean;
}

export const ButtonBlockComponent: React.FC<ButtonBlockComponentProps> = ({
  block,
  isSelected,
}) => {
  const buttonBorder =
    block.borderWidth > 0
      ? `${block.borderWidth}px solid ${block.borderColor}`
      : "none";

  const buttonDisplay =
    block.alignment === "left"
      ? "flex"
      : block.alignment === "right"
        ? "flex"
        : "flex";

  const buttonJustify =
    block.alignment === "left"
      ? "flex-start"
      : block.alignment === "right"
        ? "flex-end"
        : "center";

  const buttonWidth =
    block.widthUnit === "%"
      ? `${block.width}%`
      : `${block.width}px`;

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`p-4 transition-all ${
        isSelected ? "ring-2 ring-valasys-orange" : ""
      }`}
      style={{
        display: buttonDisplay,
        justifyContent: buttonJustify,
        margin: `${block.margin}px`,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "visible"
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          style={{
            backgroundColor: block.backgroundColor,
            color: block.textColor,
            padding: `${block.padding}px 20px`,
            borderRadius: `${block.borderRadius}px`,
            border: buttonBorder,
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            width: buttonWidth,
            textAlign: "center",
          }}
          disabled
        >
          {block.text}
        </button>
        {showTooltip && block.linkTooltip && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#333333",
              color: "#ffffff",
              padding: "6px 10px",
              borderRadius: "4px",
              fontSize: "12px",
              whiteSpace: "nowrap",
              zIndex: 10000,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              fontWeight: "normal",
              pointerEvents: "none",
            }}
          >
            {block.linkTooltip}
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                marginLeft: "-4px",
                borderLeft: "4px solid transparent",
                borderRight: "4px solid transparent",
                borderTop: "4px solid #333333",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
