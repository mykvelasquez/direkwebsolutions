import { designTokens } from "../styles/designTokens";

export default function HelpFixSection({
  heading = "What I Help Fix",
  items = [
    "Stores not ready for real operations",
    "Confusing checkout setup",
    "Inefficient order handling",
    "Poor product organization",
    "Hard to maintain & update",
  ],
  image,
  imageRatio = "5 / 4",
  background = designTokens.colors.backgroundAlt,
  layout = "boxed",
  lazyLoad = true,
}) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const styles = {
    section: {
      padding:
        layout === "full-no-gap"
          ? "0"
          : isMobile
          ? "56px 20px"
          : `${designTokens.spacing.sectionYTight} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: isMobile ? "28px" : "36px",
      alignItems: "center",
      justifyItems: "center",
    },

    imageWrap: {
      width: "100%",
      maxWidth: isMobile ? "100%" : "520px",
      aspectRatio: imageRatio,
      borderRadius: designTokens.radius.image,
      overflow: "hidden",
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

    textWrap: {
      width: "100%",
      maxWidth: "520px",
      textAlign: "center",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
      marginBottom: "24px",
    },

    list: {
      display: "grid",
      gap: "16px",
      padding: 0,
      margin: "0 auto",
      listStyle: "none",
      maxWidth: "420px",
    },

    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      fontSize: isMobile ? "16.5px" : "18px",
      lineHeight: 1.5,
      color: designTokens.colors.text,
      fontWeight: "500",
      textAlign: "left",
    },

    icon: {
      flexShrink: 0,
      width: "22px",
      height: "22px",
      borderRadius: "999px",
      backgroundColor: "#2ea44f",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: "700",
      marginTop: "2px",
    },
  };

  return (
    <section id="help-fix" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* IMAGE ON TOP */}
          <div style={styles.imageWrap}>
            {image && (
              <img
                src={image}
                alt={heading}
                style={styles.image}
                loading={lazyLoad ? "lazy" : "eager"}
                decoding="async"
              />
            )}
          </div>

          {/* CENTERED TEXT */}
          <div style={styles.textWrap}>
            <h2 style={styles.heading}>{heading}</h2>

            <ul style={styles.list}>
              {items.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={styles.icon}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}