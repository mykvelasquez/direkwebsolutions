import helpFix from "../data/helpFix";
import { designTokens } from "../styles/designTokens";

export default function HelpFixSection({
  heading = "Problems I Fix",
  background = "#ffffff",
  layout = "boxed",
}) {
  const styles = {
    section: {
      padding: `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
    },

    container: {
      maxWidth:
        layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
    },

    header: {
      textAlign: "center",
      marginBottom: "60px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
    },

    block: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "center",
      marginBottom: "60px",
    },

    textWrap: {
      maxWidth: "520px",
    },

    title: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "12px",
      color: designTokens.colors.text,
    },

    description: {
      fontSize: "16px",
      lineHeight: 1.6,
      color: designTokens.colors.textSoft,
    },

    imageWrap: {
      width: "100%",
      borderRadius: designTokens.radius.card,
      overflow: "hidden",
    },

    image: {
      width: "100%",
      display: "block",
      objectFit: "cover",
    },
  };

  return (
    <section id="help-fix" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.heading}>{heading}</h2>
        </div>

        {helpFix.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={item.id}
              style={{
                ...styles.block,
                direction: isReverse ? "rtl" : "ltr",
              }}
            >
              {/* TEXT */}
              <div style={{ ...styles.textWrap, direction: "ltr" }}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>

              {/* IMAGE */}
              <div style={styles.imageWrap}>
                <img src={item.image} alt={item.title} style={styles.image} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}