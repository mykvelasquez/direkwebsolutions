import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";

export default function HeroSection({
  heading = "Where Shopify Meets Real Operations",
  text = "Shopify stores built around how your business runs — from setup and design to payments, delivery, and day-to-day operations.",
  image,
  imageRatio = "16 / 11",
  background = designTokens.colors.backgroundSoftBlue,
  layout = "boxed",
  lazyLoad = false,
  primaryButton = { label: "Get Started", href: "#contact" },
  secondaryButton = { label: "View Services", href: "#services" },
  supportText = "Setup • Payments • Delivery • Support",
}) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const styles = {
    section: {
      padding: isMobile
        ? `${designTokens.spacing.sectionYTight} ${designTokens.spacing.sectionX}`
        : `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
      overflow: "hidden",
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
      gap: isMobile ? "28px" : designTokens.spacing.gapLarge,
      alignItems: "center",
    },

    left: {
      maxWidth: isMobile ? "100%" : "620px",
    },

    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 14px",
      marginBottom: "18px",
      borderRadius: designTokens.radius.button,
      backgroundColor: "#ffffff",
      border: designTokens.borders.light,
      boxShadow: designTokens.shadows.soft,
      fontSize: "13px",
      fontWeight: "700",
      color: designTokens.colors.primary,
      letterSpacing: "0.02em",
    },

    heading: {
      ...designTokens.typography.heroHeading,
      maxWidth: "11ch",
    },

    text: {
      ...designTokens.typography.heroText,
      maxWidth: "58ch",
      marginBottom: "28px",
    },

    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginBottom: "18px",
    },

    supportText: {
      fontSize: "14px",
      lineHeight: 1.7,
      color: designTokens.colors.textSoft,
      margin: 0,
    },

    imageCol: {
      position: "relative",
    },

    imageWrap: {
      width: "100%",
      aspectRatio: imageRatio,
      overflow: "hidden",
      borderRadius: designTokens.radius.image,
      backgroundColor: "#dfe8f7",
      boxShadow: designTokens.shadows.soft,
      border: designTokens.borders.light,
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    floatingCard: {
      position: "absolute",
      left: isMobile ? "12px" : "-18px",
      bottom: isMobile ? "12px" : "18px",
      backgroundColor: "#ffffff",
      borderRadius: designTokens.radius.card,
      border: designTokens.borders.light,
      boxShadow: designTokens.shadows.card,
      padding: "14px 16px",
      minWidth: isMobile ? "auto" : "220px",
    },

    floatingTitle: {
      fontSize: "14px",
      fontWeight: "700",
      color: designTokens.colors.text,
      margin: "0 0 4px",
    },

    floatingText: {
      fontSize: "13px",
      lineHeight: 1.5,
      color: designTokens.colors.textSoft,
      margin: 0,
    },
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.left}>
            <div style={styles.eyebrow}>Shopify • Operations • Support</div>

            <h1 style={styles.heading}>{heading}</h1>
            <p style={styles.text}>{text}</p>

            <div style={styles.buttonRow}>
              {primaryButton?.label && primaryButton?.href && (
                <a href={primaryButton.href} style={getButtonStyles("solid")}>
                  {primaryButton.label}
                </a>
              )}

              {secondaryButton?.label && secondaryButton?.href && (
                <a
                  href={secondaryButton.href}
                  style={getButtonStyles("outline")}
                >
                  {secondaryButton.label}
                </a>
              )}
            </div>

            {supportText && <p style={styles.supportText}>{supportText}</p>}
          </div>

          <div style={styles.imageCol}>
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

            <div style={styles.floatingCard}>
              <p style={styles.floatingTitle}>Built for real business use</p>
              <p style={styles.floatingText}>
                Store setup, workflows, payments, delivery, and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}