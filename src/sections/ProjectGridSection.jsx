import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { designTokens } from "../styles/designTokens";

export default function ProjectGridSection({
  heading = "Selected Work",
  text = "A few Shopify-related projects and store builds.",
  cardsToShow,
  sectionAlign = "left",
  cardTextAlign = "left",
  imageRatio = "4 / 3",
  layout = "boxed",
  background = designTokens.colors.backgroundAlt,
  lazyLoad = true,
  hoverEffect = "lift",
  headingStyle = {},
  textStyle = {},
}) {
  const visibleProjects = cardsToShow
    ? projects.slice(0, cardsToShow)
    : projects;

  const styles = {
    section: {
      padding:
        layout === "full-no-gap"
          ? "0"
          : `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
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
      marginBottom: "32px",
      textAlign: sectionAlign,
    },

    heading: {
      ...designTokens.typography.sectionHeading,
      ...headingStyle,
    },

    text: {
      ...designTokens.typography.sectionText,
      ...textStyle,
    },

    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(260px, 1fr))",
      gap: designTokens.spacing.gapLarge,
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.heading}>{heading}</h2>
          <p style={styles.text}>{text}</p>
        </div>

        <div style={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              imageRatio={imageRatio}
              textAlign={cardTextAlign}
              lazyLoad={lazyLoad}
              hoverEffect={hoverEffect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}