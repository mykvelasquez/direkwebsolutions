import supportBadges from "../data/supportBadges";
import { designTokens } from "../styles/designTokens";

export default function OngoingSupportSection({
  heading = "Ongoing Support",
  paragraphs = [
    "With a background in operations and customer-facing roles, I approach Shopify beyond just setup.",
    "I work with businesses long-term to keep their stores organized, updated, and aligned with how they actually operate.",
    "That includes product updates, store adjustments, and ongoing support as the business grows.",
  ],
  image,
  imageRatio = "4 / 4.6",
  layout = "boxed",
  background = designTokens.colors.background,
  lazyLoad = true,
}) {
  const styles = {
    section: {
      padding:
        layout === "full-no-gap"
          ? "0"
          : `${designTokens.spacing.sectionYTight} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
      borderTop: designTokens.borders.light,
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "0.78fr 1.22fr",
      gap: "60px",
      alignItems: "start",
    },

    imageWrap: {
      width: "100%",
      aspectRatio: imageRatio,
      overflow: "hidden",
      borderRadius: "15px",
      backgroundColor: "#e9edf3",
      border: designTokens.borders.light,
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    textWrap: {
      width: "100%",
      maxWidth: "100%",
      paddingTop: "8px",
    },

    headingRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "30px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
      margin: 0,
      whiteSpace: "nowrap",
    },

    headingLine: {
      height: "1px",
      backgroundColor: designTokens.colors.border,
      flexGrow: 1,
    },

    paragraph: {
      fontSize: "20px",
      lineHeight: 1.7,
      color: "#24344d",
      margin: "0 0 26px",
    },

    strong: {
      fontWeight: "800",
      color: "#142f57",
    },

    badgeRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "14px",
      marginTop: "8px",
    },

    badge: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "16px 20px",
      minHeight: "74px",
      backgroundColor: "#f7f8fa",
      border: designTokens.borders.light,
      borderRadius: "10px",
      boxShadow: designTokens.shadows.card,
      transition: designTokens.transitions.smooth,
      transform: "translateY(0)",
    },

    check: {
      flexShrink: 0,
      fontSize: "16px",
      fontWeight: "800",
      color: "#2d5fb3",
      lineHeight: 1,
    },

    badgeText: {
      fontSize: "17px",
      lineHeight: 1.2,
      fontWeight: "800",
      color: "#24344d",
    },
  };

  return (
    <section id="support" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.imageWrap}>
            {image && (
              <img
                src={image}
                alt={heading}
                style={styles.image}
                loading={lazyLoad ? "lazy" : "eager"}
              />
            )}
          </div>

          <div style={styles.textWrap}>
            <div style={styles.headingRow}>
              <h2 style={styles.heading}>{heading}</h2>
              <div style={styles.headingLine}></div>
            </div>

            <p style={styles.paragraph}>
              With a background in operations and customer-facing roles, I
              approach <span style={styles.strong}>Shopify beyond just setup.</span>
            </p>

            <p style={styles.paragraph}>
              I work with businesses long-term to keep their stores organized,
              updated, and aligned with how they actually operate.
            </p>

            <p style={{ ...styles.paragraph, marginBottom: "30px" }}>
              That includes product updates, store adjustments, and{" "}
              <span style={styles.strong}>ongoing support</span> as the
              business grows.
            </p>

            <div style={styles.badgeRow}>
              {supportBadges.map((badge, index) => (
                <div
                  key={badge.id}
                  style={{
                    ...styles.badge,
                    ...(index === supportBadges.length - 1 ? styles.lastBadge : {}),
                  }}
                >
                  <span style={styles.check}>✔</span>
                  <span style={styles.badgeText}>{badge.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}