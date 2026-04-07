import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectGridSection({
    heading = "Selected Work",
    text = "A few Shopify-related projects and store builds.",
    cardsToShow,
    sectionAlign = "left",
    cardTextAlign = "left",
    imageRation = "4 / 3",
}) {
    const visibleProjects = cardToShow ? projects.slice(0, cardsToShow) : projects;

    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{...styles.header, textAlign: sectionAlign}}>
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
                imageRation={imageRatio}
                textAlign={cardTextAlign}
              />
            ))}
          </div>
        </div>
      </section>
  );
}

const styles = {
  section: {
    padding: "72px 20px",
    backgroundColor: "#f8f8f8",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "32px",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "0 0 12px",
    color: "#111111",
  },
  text: {
    fontSize: "17px",
    color: "#555555",
    lineHeight: 1.7,
    maxWidth: "720px",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
};