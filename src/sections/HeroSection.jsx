import { useEffect, useState } from "react";
import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";
import Button from "../components/Button";

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
          ? "0 0 40px"
          : `40px ${designTokens.spacing.sectionX} 48px`,
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
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      alignItems: "center",
      gap: isMobile ? "30px" : "32px",
    },

    textWrap: {
      width: "100%",
      maxWidth: isMobile ? "100%" : "640px",
      paddingTop: isMobile ? "0" : "18px",
      textAlign: isMobile ? "center" : "left",
      order: isMobile ? 2 : 1,
      minWidth: 0,
      paddingLeft: isMobile ? "20px" : "0",
      paddingRight: isMobile ? "20px" : "0",
      boxSizing: "border-box",
    },

    imageWrap: {
      width: "100%",
      maxWidth: "100%",
      margin: "0",
      minHeight: isMobile ? "260px" : "380px",
      borderRadius: isMobile ? "0" : designTokens.radius.image,
      overflow: "hidden",
      background:
        "linear-gradient(90deg, #f3f6fb 0%, #edf2fa 45%, #d9e5fb 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      order: isMobile ? 1 : 2,
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      display: "block",
    },

    heading: {
      fontSize: isMobile ? "36px" : "52px",
      lineHeight: isMobile ? 1.08 : 1.05,
      fontWeight: "800",
      letterSpacing: isMobile ? "-0.02em" : "-0.03em",
      color: "#17325c",
      margin: "0 0 16px",
      maxWidth: isMobile ? "16ch" : "none",
      marginLeft: isMobile ? "auto" : 0,
      marginRight: isMobile ? "auto" : 0,
      textAlign: isMobile ? "center" : "left",
    },

    text: {
      fontSize: isMobile ? "16px" : "18px",
      lineHeight: isMobile ? 1.65 : 1.7,
      color: "#31445f",
      margin: "0 0 24px",
      maxWidth: isMobile ? "30ch" : "36ch",
      marginLeft: isMobile ? "auto" : 0,
      marginRight: isMobile ? "auto" : 0,
    },

    buttonRow: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "auto auto",
      gap: "14px",
      justifyContent: isMobile ? "center" : "start",
      alignItems: "stretch",
      marginBottom: "20px",
      width: isMobile ? "100%" : "auto",
      maxWidth: isMobile ? "420px" : "none",
      marginLeft: isMobile ? "auto" : 0,
      marginRight: isMobile ? "auto" : 0,
    },

    supportText: {
      fontSize: isMobile ? "14px" : "15px",
      lineHeight: 1.6,
      color: "#31445f",
      margin: 0,
      fontWeight: "500",
      textAlign: isMobile ? "center" : "left",
    },
  };

  const primaryStyle = getButtonStyles("solid", {
    padding: isMobile ? "14px 18px" : "15px 34px",
    fontSize: isMobile ? "15px" : "16px",
    backgroundColor: "#2d5fb3",
    border: "1px solid #2d5fb3",
    boxShadow: "0 8px 18px rgba(45, 95, 179, 0.18)",
    width: isMobile ? "100%" : "auto",
    justifyContent: "center",
  });

  const secondaryStyle = getButtonStyles("outline", {
    padding: isMobile ? "14px 18px" : "15px 34px",
    fontSize: isMobile ? "15px" : "16px",
    backgroundColor: "#ffffff",
    color: "#17325c",
    border: "1px solid #c8d2e3",
    width: isMobile ? "100%" : "auto",
    justifyContent: "center",
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
                <Button
                  href={primaryButton.href}
                  variant="solid"
                  style={primaryStyle}
                >
                  {primaryButton.label}
                </Button>
              )}

              {secondaryButton?.label && secondaryButton?.href && (
                <Button
                  href={secondaryButton.href}
                  variant="outline"
                  style={secondaryStyle}
                >
                  {secondaryButton.label}
                </Button>
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