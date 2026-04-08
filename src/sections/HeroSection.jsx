import { designTokens } from "../styles/designTokens";
import { getSectionStyles } from "../styles/sectionStyles";

export default function HeroSection({
  heading = "Default Heading",
  text = "Default text description for hero section",
  align = "center",
  image,
  imageRatio = "16 / 9",
  layout = "boxed",
  background = designTokens.colors.background,
  lazyLoad = false,
  headingStyle = {},
  textStyle = {},
}) {
  const shared = getSectionStyles({
    layout,
    background,
    align,
    headingStyle: {
      ...designTokens.typography.heroHeading,
      ...headingStyle,
    },
    textStyle: {
      ...designTokens.typography.heroText,
      ...textStyle,
    },
  });

  const styles = {
    textWrap: {
      maxWidth: "800px",
      margin: "0 auto 32px",
    },
    imageWrap: {
      width: "100%",
      overflow: "hidden",
      borderRadius: designTokens.radius.image,
      backgroundColor: "#f2f2f2",
      aspectRatio: imageRatio,
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
  };

  return (
    <section style={shared.section}>
      <div style={shared.container}>
        <div style={{ ...styles.textWrap, textAlign: align }}>
          <h1 style={shared.heading}>{heading}</h1>
          <p style={shared.text}>{text}</p>
        </div>

        {image && (
          <div style={styles.imageWrap}>
            <img
              src={image}
              alt={heading}
              style={styles.image}
              loading={lazyLoad ? "lazy" : "eager"}
            />
          </div>
        )}
      </div>
    </section>
  );
}