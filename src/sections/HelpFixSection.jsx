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
  const styles = {
    section: {
      padding:
        layout === "full-no-gap"
          ? "0"
          : `${designTokens.spacing.sectionYTight} ${designTokens.spacing.sectionX}`,
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
      gridTemplateColumns: "0.95fr 1.05fr",
      alignItems: "center",
      gap: "28px",
    },

    textWrap: {
      width: "100%",
      maxWidth: "560px",
    },

    headingRow: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "28px",
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

    list: {
      display: "grid",
      gap: "18px",
      padding: 0,
      margin: 0,
      listStyle: "none",
    },

    listItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "18px",
      lineHeight: 1.5,
      color: designTokens.colors.text,
      fontWeight: "500",
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
    },

    imageWrap: {
      width: "100%",
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
  };

  return (
    <section id="help-fix" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.textWrap}>
            <div style={styles.headingRow}>
              <h2 style={styles.heading}>{heading}</h2>
              <div style={styles.headingLine}></div>
            </div>

            <ul style={styles.list}>
              {items.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={styles.icon}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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