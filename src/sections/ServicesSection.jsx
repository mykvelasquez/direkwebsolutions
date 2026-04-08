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
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const styles = {
    section: {
      padding: `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
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

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(220px, 1fr))",
      gap: designTokens.spacing.gap,
      alignItems: "stretch",
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
            <FeatureCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              textAlign={cardTextAlign}
              hoverEffect={hoverEffect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}