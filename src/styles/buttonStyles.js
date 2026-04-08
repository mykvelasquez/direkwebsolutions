import { designTokens } from "./designTokens";

export function getButtonStyles(variant = "solid", overrides = {}) {
  const base = {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: designTokens.radius.button,
    fontWeight: "600",
    fontSize: "15px",
    textDecoration: "none",
    transition: designTokens.transitions.smooth,
    cursor: "pointer",
  };

  const variants = {
    solid: {
      backgroundColor: designTokens.colors.primary,
      color: designTokens.colors.primaryInverse,
      border: `1px solid ${designTokens.colors.primary}`,
    },
    outline: {
      backgroundColor: "transparent",
      color: designTokens.colors.primary,
      border: `1px solid ${designTokens.colors.primary}`,
    },
    link: {
      backgroundColor: "transparent",
      color: designTokens.colors.primary,
      border: "none",
      padding: "0",
      borderRadius: "0",
    },
  };

  return {
    ...base,
    ...variants[variant],
    ...overrides,
  };
}