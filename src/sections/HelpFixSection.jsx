import helpFix from "../data/helpFix";
import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";

export default function HelpFixSection({
  heading = "Problems I Fix",
  introText = "I help clean up the parts of a Shopify store that usually slow down growth, confuse customers, or create extra work behind the scenes.",
  background = designTokens.colors.backgroundAlt,
  layout = "boxed",
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
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    header: {
      textAlign: "center",
      maxWidth: "760px",
      margin: "0 auto 56px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
    },

    introText: {
      ...designTokens.typography.sectionText,
    },

    block: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "24px" : designTokens.spacing.gapLarge,
      alignItems: "center",
      marginBottom: "64px",
    },

    textWrap: {
      maxWidth: "560px",
    },

    itemTitle: {
      fontSize: "clamp(1.35rem, 2vw, 1.75rem)",
      lineHeight: 1.2,
      fontWeight: "800",
      color: designTokens.colors.text,
      margin: "0 0 14px",
      letterSpacing: "-0.02em",
    },

    itemDescription: {
      ...designTokens.typography.sectionText,
      marginBottom: "20px",
      maxWidth: "52ch",
    },

    imageWrap: {
      width: "100%",
      aspectRatio: "5 / 4",
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
        <div style={styles.header}>
          <h2 style={styles.heading}>{heading}</h2>
          {introText && <p style={styles.introText}>{introText}</p>}
        </div>

        {helpFix.map((item, index) => {
          const reverse = !isMobile && index % 2 !== 0;

          return (
            <div key={item.id} style={styles.block}>
              <div style={{ order: reverse ? 2 : 1, ...styles.textWrap }}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemDescription}>{item.description}</p>

                <a href="#contact" style={getButtonStyles("link")}>
                  Let’s talk about this →
                </a>
              </div>

              <div style={{ order: reverse ? 1 : 2, ...styles.imageWrap }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                  loading={lazyLoad ? "lazy" : "eager"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}