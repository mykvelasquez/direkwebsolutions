import { designTokens } from "../styles/designTokens";

export default function FeatureCard({
  icon,
  title,
  description,
  textAlign = "center",
  hoverEffect = "lift",
}) {
  const styles = {
    card: {
      backgroundColor: designTokens.colors.background,
      border: designTokens.borders.light,
      borderRadius: designTokens.radius.card,
      padding: designTokens.spacing.cardPadding,
      textAlign,
      boxShadow: designTokens.shadows.card,
      transition: designTokens.transitions.smooth,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      transform: "translateY(0)",
    },

    iconWrap: {
      width: "68px",
      aspectRatio: "1 / 1",
      margin:
        textAlign === "left"
          ? "0 0 18px"
          : textAlign === "right"
          ? "0 0 18px auto"
          : "0 auto 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
      backgroundColor: designTokens.colors.iconBackground,
      borderRadius: designTokens.radius.iconBox,
      boxShadow: "inset 0 0 0 1px rgba(31, 79, 149, 0.05)",
    },

    title: {
      ...designTokens.typography.cardTitle,
      maxWidth: textAlign === "center" ? "16ch" : "none",
      margin:
        textAlign === "center"
          ? "0 auto 10px"
          : textAlign === "right"
          ? "0 0 10px auto"
          : "0 0 10px",
    },

    description: {
      ...designTokens.typography.cardText,
      maxWidth: textAlign === "center" ? "28ch" : "none",
      margin:
        textAlign === "center"
          ? "0 auto"
          : textAlign === "right"
          ? "0 0 0 auto"
          : "0",
    },
  };

  return (
    <article
      style={styles.card}
      onMouseEnter={(e) => {
        if (hoverEffect === "lift") {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = designTokens.shadows.cardHover;
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect === "lift") {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = designTokens.shadows.card;
        }
      }}
    >
      <div style={styles.iconWrap}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </article>
  );
}