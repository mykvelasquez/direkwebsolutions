import supportBadges from "../data/supportBadges";
import TrustBadge from "../components/TrustBadge";
import { designTokens } from "../styles/designTokens";

export default function OngoingSupportSection({
  heading = "Ongoing Support",
  text = "Launching your store is only the beginning. I also help with updates, adjustments, and practical support so your Shopify store continues to work for your business over time.",
  image,
  imageRatio = "5 / 4",
  layout = "boxed",
  background = "#eef3fb",
  lazyLoad = true,
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

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "24px" : "40px",
      alignItems: "center",
    },

    imageWrap: {
      width: "100%",
      aspectRatio: imageRatio,
      overflow: "hidden",
      borderRadius: designTokens.radius.image,
      backgroundColor: "#dfe7f6",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    textWrap: {
      maxWidth: "560px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
      marginBottom: "14px",
    },

    text: {
      ...designTokens.typography.sectionText,
      marginBottom: "24px",
    },

    badgeGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "14px",
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
            <h2 style={styles.heading}>{heading}</h2>
            <p style={styles.text}>{text}</p>

            <div style={styles.badgeGrid}>
              {supportBadges.map((badge) => (
                <TrustBadge
                  key={badge.id}
                  title={badge.title}
                  description={badge.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}