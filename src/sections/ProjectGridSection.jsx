import { useState, useEffect } from "react";
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
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

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
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: designTokens.spacing.gap,
    },

    modalOverlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      zIndex: 9999,
      cursor: "pointer",
    },

    modalImage: {
      maxWidth: "90vw",
      maxHeight: "90vh",
      width: "auto",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      cursor: "default",
    },

    closeButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "rgba(255,255,255,0.15)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      padding: "10px 14px",
      fontSize: "16px",
      cursor: "pointer",
    },
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
              onImageClick={() => setActiveImage(project.image)}
            />
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          style={styles.modalOverlay}
          onClick={() => setActiveImage(null)}
        >
          <button
            style={styles.closeButton}
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>

          <img
            src={activeImage}
            alt="Expanded project preview"
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}