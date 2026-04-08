import { useState } from "react";

export default function Button({
  children,
  href,
  onClick,
  type = "button", // supports submit
  style = {},
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle = {
    display: "inline-block",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    ...style,
  };

  const hoverStyle = isHovered
    ? {
        transform: "translateY(-2px)",
        filter: "brightness(1.05)",
      }
    : {};

  const activeStyle = isActive
    ? {
        transform: "translateY(0)",
        filter: "brightness(0.95)",
      }
    : {};

  const combinedStyle = {
    ...baseStyle,
    ...hoverStyle,
    ...activeStyle,
  };

  // 👉 LINK MODE
  if (href) {
    return (
      <a
        href={href}
        style={combinedStyle}
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

  // 👉 BUTTON MODE (submit, click, etc.)
  return (
    <button
      type={type}
      onClick={onClick}
      style={combinedStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {children}
    </button>
  );
}