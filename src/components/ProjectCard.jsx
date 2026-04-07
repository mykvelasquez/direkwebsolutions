export default function ProjectCard({
  title,
  description,
  image,
  link,
  imageRatio = "4 / 3",
  textAlign = "left",
}) {
  return (
    <article style={styles.card}>
      <div style={{ ...styles.imageWrap, aspectRatio: imageRatio }}>
        <img src={image} alt={title} style={styles.image} />
      </div>

      <div style={{ ...styles.cardBody, textAlign }}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noreferrer" style={styles.link}>
            View Project
          </a>
        )}
      </div>
    </article>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e7e7e7",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
  },
  imageWrap: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
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
  title: {
    fontSize: "20px",
    margin: "0 0 10px",
    color: "#111111",
  },
  description: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#555555",
    margin: "0 0 14px",
  },
  link: {
    display: "inline-block",
    textDecoration: "none",
    color: "#111111",
    fontWeight: "600",
  },
};