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
      backgroundColor: "#ffffff",
      border: `1px solid ${designTokens.colors.border}`,
      borderRadius: designTokens.radius.card,
      padding: "24px 20px",
      textAlign,
      boxShadow: designTokens.shadows.card,
      transition: designTokens.transitions.smooth,
      height: "100%",
    },

    iconWrap: {
      width: "64px",
      aspectRatio: "1 / 1",
      margin:
        textAlign === "left"
          ? "0 0 16px"
          : textAlign === "right"
          ? "0 0 16px auto"
          : "0 auto 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "32px",
      backgroundColor: "#f3f6fb",
      borderRadius: "16px",
    },

    title: {
      fontSize: "20px",
      lineHeight: 1.3,
      color: designTokens.colors.text,
      margin: "0 0 10px",
      fontWeight: "700",
    },

    description: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: designTokens.colors.textSoft,
      margin: 0,
    },
  };

  if (hoverEffect === "lift") {
    styles.card.transform = "translateY(0)";
  }

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