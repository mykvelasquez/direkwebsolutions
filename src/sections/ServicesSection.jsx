import { useEffect, useState } from "react";
import services from "../data/services";
import FeatureCard from "../components/FeatureCard";
import { designTokens } from "../styles/designTokens";

export default function ServicesSection({
  heading = "What I Do",
  text = "Practical Shopify help focused on setup, store structure, checkout, and ongoing operations.",
  layout = "boxed",
  background = designTokens.colors.background,
  sectionAlign = "center",
  cardTextAlign = "center",
  hoverEffect = "lift",
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
      padding: `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
      overflow: "hidden",
    },

    container: {
      maxWidth:
        layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    header: {
      textAlign: sectionAlign,
      marginBottom: "36px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
    },

    text: {
      ...designTokens.typography.sectionText,
      maxWidth: "720px",
      margin:
        sectionAlign === "center"
          ? "0 auto"
          : sectionAlign === "right"
          ? "0 0 0 auto"
          : "0",
    },

    grid: isMobile
      ? {
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
          gap: "16px",
          paddingBottom: "12px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }
      : {
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gap: designTokens.spacing.gap,
          alignItems: "stretch",
        },

    cardWrap: isMobile
      ? {
          flex: "0 0 82%",
          minWidth: "82%",
          scrollSnapAlign: "start",
        }
      : {
          minWidth: 0,
        },
  };

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.heading}>{heading}</h2>
          {text && <p style={styles.text}>{text}</p>}
        </div>

        <div style={styles.grid}>
          {services.map((service) => (
            <div key={service.id} style={styles.cardWrap}>
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                textAlign={cardTextAlign}
                hoverEffect={hoverEffect}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}