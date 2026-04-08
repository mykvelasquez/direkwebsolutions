import { designTokens } from "./designTokens";

export function getSectionStyles({
  layout = "boxed",
  background = designTokens.colors.background,
  align = "left",
  headingStyle = {},
  textStyle = {},
} = {}) {
  const baseSection = {
    padding:
      layout === "full-no-gap"
        ? "0"
        : `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
    background,
    width: "100%",
  };

  const container =
    layout === "boxed"
      ? {
          maxWidth: designTokens.spacing.container,
          margin: "0 auto",
          width: "100%",
        }
      : layout === "full"
      ? {
          width: "100%",
        }
      : {
          width: "100%",
        };

  const header = {
    marginBottom: "32px",
    textAlign: align,
  };

  const heading = {
    ...designTokens.typography.sectionHeading,
    ...headingStyle,
  };

  const text = {
    ...designTokens.typography.sectionText,
    ...textStyle,
  };

  return {
    section: baseSection,
    container,
    header,
    heading,
    text,
  };
}