import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { designTokens } from "../styles/designTokens";
import { getSectionStyles } from "../styles/sectionStyles";

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
  headingStyle = {},
  textStyle = {},
  hoverEffect = "lift",
}) {
  const visibleProjects = cardsToShow
    ? projects.slice(0, cardsToShow)
    : projects;

  const shared = getSectionStyles({
    layout,
    background,
    align: sectionAlign,
    headingStyle,
    textStyle,
  });

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: designTokens.spacing.gap,
    },
  };

  return (
    <section style={shared.section}>
      <div style={shared.container}>
        <div style={shared.header}>
          <h2 style={shared.heading}>{heading}</h2>
          <p style={shared.text}>{text}</p>
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