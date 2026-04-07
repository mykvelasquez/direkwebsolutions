export default function ProjectGridSection({
    title,
    text,
    align = "left",
    imageRatio = "4/3",
    projects = [],
}) {
    return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={{ ...styles.header, textAlign: align }}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.text}>{text}</p>
        </div>

        <div style={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} style={styles.card}>
              <div style={{ ...styles.imageWrap, aspectRatio: imageRatio }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.image}
                />
              </div>

              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardText}>{project.description}</p>
              </div>
            </article>
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
  title: {
    fontSize: "36px",
    marginBottom: "12px",
    color: "#111111",
  },
  text: {
    fontSize: "17px",
    color: "#555555",
    lineHeight: 1.7,
    maxWidth: "700px",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #e7e7e7",
  },
  imageWrap: {
    width: "100%",
    backgroundColor: "#ececec",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  cardBody: {
    padding: "18px",
  },
  cardTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#111111",
  },
  cardText: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#555555",
    margin: 0,
  },
};