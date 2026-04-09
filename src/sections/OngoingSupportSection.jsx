import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const styles = {
    section: {
      padding:
        layout === "full-no-gap"
          ? "0"
          : isMobile
          ? `56px 20px`
          : `${designTokens.spacing.sectionYTight} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
      borderTop: designTokens.borders.light,
      overflow: "hidden",
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "0.78fr 1.22fr",
      gap: isMobile ? "28px" : "60px",
      alignItems: "start",
    },

    imageWrap: {
      width: "100%",
      aspectRatio: isMobile ? "4 / 3" : imageRatio,
      overflow: "hidden",
      borderRadius: "15px",
      backgroundColor: "#e9edf3",
      border: designTokens.borders.light,
      order: isMobile ? 1 : 0,
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    textWrap: {
      width: "100%",
      paddingTop: isMobile ? "0" : "8px",
      order: isMobile ? 2 : 0,
    },

    headingRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: isMobile ? "22px" : "30px",
    },

    // ✅ FIXED HEADING (now matches other sections)
    heading: {
      ...designTokens.typography.sectionHeading,
      margin: 0,
      whiteSpace: isMobile ? "normal" : "nowrap",
      fontSize: isMobile ? "28px" : designTokens.typography.sectionHeading.fontSize,
      lineHeight: isMobile ? 1.25 : designTokens.typography.sectionHeading.lineHeight,
    },

    headingLine: {
      height: "1px",
      backgroundColor: designTokens.colors.border,
      flexGrow: 1,
    },

    // ✅ FIXED PARAGRAPH (now consistent)
    paragraph: {
      fontSize: isMobile ? "16.5px" : "18px",
      lineHeight: isMobile ? 1.6 : 1.7,
      color: "#24344d",
      margin: "0 0 20px",
    },

    strong: {
      fontWeight: "800",
      color: "#142f57",
    },

    badgeRow: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
      gap: isMobile ? "12px" : "5px",
      marginTop: "8px",
    },

    badge: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: isMobile ? "14px 16px" : "16px 20px",
      minHeight: isMobile ? "64px" : "74px",
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
    },

    badgeText: {
      fontSize: isMobile ? "15.5px" : "17px",
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

            <p style={{ ...styles.paragraph, marginBottom: "26px" }}>
              That includes product updates, store adjustments, and{" "}
              <span style={styles.strong}>ongoing support</span> as the
              business grows.
            </p>

            <div style={styles.badgeRow}>
              {supportBadges.map((badge) => (
                <div key={badge.id} style={styles.badge}>
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