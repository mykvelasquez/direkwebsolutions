import { designTokens } from "../styles/designTokens";

export default function TrustBadge({ title, description }) {
  const styles = {
    badge: {
      backgroundColor: "#ffffff",
      border: `1px solid ${designTokens.colors.border}`,
      borderRadius: designTokens.radius.card,
      padding: "16px 18px",
      boxShadow: designTokens.shadows.card,
    },
    title: {
      fontSize: "16px",
      fontWeight: "700",
      color: designTokens.colors.text,
      margin: "0 0 6px",
    },
    description: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: designTokens.colors.textSoft,
      margin: 0,
    },
  };

  return (
    <div style={styles.badge}>
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.description}>{description}</p>
    </div>
  );
}