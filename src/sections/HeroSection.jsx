import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";

export default function HeroSection({
  heading = "Where Shopify Meets Real Operations",
  text = "Shopify stores built around how your business runs — from setup and design to payments, delivery, and day-to-day operations.",
  image,
  imageRatio = "16 / 10",
  background = "#eef3fb",
  layout = "boxed",
  lazyLoad = false,
  primaryButton = { label: "Get Started", href: "#contact" },
  secondaryButton = { label: "View Services", href: "#services" },
  supportText = "Setup • Payments • Delivery • Support",
}) {
  const styles = {
    section: {
      padding:
        layout === "full-no-gap"
          ? "0"
          : `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
    },

    container: {
      maxWidth:
        layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "40px",
      alignItems: "center",
    },

    left: {
      maxWidth: "560px",
    },

    heading: {
      ...designTokens.typography.heroHeading,
      marginBottom: "18px",
    },

    text: {
      ...designTokens.typography.heroText,
      marginBottom: "28px",
      maxWidth: "52ch",
    },

    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginBottom: "18px",
    },

    supportText: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: designTokens.colors.textSoft,
    },

    imageWrap: {
      width: "100%",
      aspectRatio: imageRatio,
      overflow: "hidden",
      borderRadius: designTokens.radius.image,
      backgroundColor: "#dfe7f6",
      boxShadow: designTokens.shadows.cardHover,
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
  };

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  if (isMobile) {
    styles.grid.gridTemplateColumns = "1fr";
    styles.grid.gap = "24px";
    styles.left.maxWidth = "100%";
  }

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.left}>
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
        </div>
      </div>
    </section>
  );
}