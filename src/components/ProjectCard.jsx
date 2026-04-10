import { useState } from "react";
import { designTokens } from "../styles/designTokens";

export default function ProjectCard({
  title,
  description,
  image,
  secondImage,
  link,
  imageRatio = "4 / 3",
  textAlign = "left",
  lazyLoad = true,
  hoverEffect = "lift",
  onImageClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const currentImage =
    hoverEffect === "swap-image" && isHovered && secondImage
      ? secondImage
      : image;

  const styles = {
    card: {
      backgroundColor: designTokens.colors.background,
      border: designTokens.borders.light,
      borderRadius: designTokens.radius.card,
      overflow: "hidden",
      boxShadow: designTokens.shadows.card,
      transition: designTokens.transitions.smooth,
      transform: "translateY(0)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },

    imageWrap: {
      width: "100%",
      aspectRatio: imageRatio,
      overflow: "hidden",
      backgroundColor: "#eaeef5",
      cursor: onImageClick ? "pointer" : "default",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: designTokens.transitions.smooth,
      transform:
        hoverEffect === "zoom" && isHovered ? "scale(1.05)" : "scale(1)",
    },

    content: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      flexGrow: 1,
    },

    title: {
      ...designTokens.typography.cardTitle,
    },

    description: {
      ...designTokens.typography.cardText,
      flexGrow: 1,
    },

    link: {
      marginTop: "10px",
      fontSize: "14px",
      fontWeight: "600",
      color: designTokens.colors.primary,
      textDecoration: "none",
    },
  };

  return (
    <article
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={(e) => {
        if (hoverEffect === "lift") {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = designTokens.shadows.cardHover;
        }
      }}
      onMouseOut={(e) => {
        if (hoverEffect === "lift") {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = designTokens.shadows.card;
        }
      }}
    >
      <div
        style={styles.imageWrap}
        onClick={() => {
          if (onImageClick) onImageClick(currentImage);
        }}
      >
        <img
          src={currentImage}
          alt={title}
          style={styles.image}
          loading={lazyLoad ? "lazy" : "eager"}
        />
      </div>

      <div style={{ ...styles.content, textAlign }}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noreferrer" style={styles.link}>
            View Project →
          </a>
        )}
      </div>
    </article>
  );
}