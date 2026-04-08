import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";

export default function HeroSection({
  heading = "Where Shopify Meets Real Operations",
  text = "Shopify stores built around how your business runs — from setup and design to payments, delivery, and day-to-day operations.",
  image,
  background = designTokens.colors.backgroundSoftBlue,
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
      overflow: "hidden",
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    content: {
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      alignItems: "center",
      gap: "28px",
    },

    textWrap: {
      maxWidth: "560px",
      paddingRight: "12px",
    },

    imageWrap: {
      width: "100%",
      minHeight: "500px",
      borderRadius: designTokens.radius.image,
      overflow: "hidden",
      background:
        "linear-gradient(90deg, #f3f6fb 0%, #edf2fa 45%, #d9e5fb 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center",
      display: "block",
    },

    heading: {
      fontSize: "46px",
      lineHeight: 1.08,
      fontWeight: "800",
      letterSpacing: "-0.03em",
      color: "#17325c",
      margin: "0 0 20px",
    },

    text: {
      fontSize: "18px",
      lineHeight: 1.7,
      color: "#31445f",
      margin: "0 0 26px",
    },

    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      marginBottom: "24px",
    },

    supportText: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "#31445f",
      margin: 0,
      fontWeight: "500",
    },
  };

  const primaryStyle = getButtonStyles("solid", {
    padding: "15px 34px",
    fontSize: "16px",
    backgroundColor: "#2d5fb3",
    border: "1px solid #2d5fb3",
    boxShadow: "0 8px 18px rgba(45, 95, 179, 0.18)",
  });

  const secondaryStyle = getButtonStyles("outline", {
    padding: "15px 34px",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    color: "#17325c",
    border: "1px solid #c8d2e3",
  });

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.textWrap}>
            <h1 style={styles.heading}>{heading}</h1>
            <p style={styles.text}>{text}</p>

            <div style={styles.buttonRow}>
              {primaryButton?.label && primaryButton?.href && (
                <a href={primaryButton.href} style={primaryStyle}>
                  {primaryButton.label}
                </a>
              )}

              {secondaryButton?.label && secondaryButton?.href && (
                <a href={secondaryButton.href} style={secondaryStyle}>
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