import { useState } from "react";
import { getButtonStyles } from "../styles/buttonStyles";

export default function Button({
  href,
  children,
  variant = "solid",
  style = {},
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle = getButtonStyles(variant, style);

  let interactiveStyle = {};

  if (variant === "solid") {
    if (isHovered) {
      interactiveStyle = {
        backgroundColor: "#1f4f95",
        border: "1px solid #1f4f95",
      };
    }
    if (isActive) {
      interactiveStyle = {
        backgroundColor: "#173e77",
        border: "1px solid #173e77",
        transform: "translateY(1px)",
      };
    }
  }

  if (variant === "outline") {
    if (isHovered) {
      interactiveStyle = {
        backgroundColor: "#eef4fb",
        border: "1px solid #9fb6db",
      };
    }
    if (isActive) {
      interactiveStyle = {
        backgroundColor: "#dfe8f7",
        border: "1px solid #7f9dcb",
        transform: "translateY(1px)",
      };
    }
  }

  if (variant === "link") {
    if (isHovered) {
      interactiveStyle = {
        color: "#1f4f95",
      };
    }
    if (isActive) {
      interactiveStyle = {
        color: "#173e77",
        transform: "translateY(1px)",
      };
    }
  }

  return (
    <a
      href={href}
      style={{ ...baseStyle, ...interactiveStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {children}
    </a>
  );
}