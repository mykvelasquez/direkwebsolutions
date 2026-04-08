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
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getCardStyle = () => {
    const base = {
      backgroundColor: "#ffffff",
      border: `1px solid ${designTokens.colors.border}`,
      borderRadius: designTokens.radius.card,
      overflow: "hidden",
      boxShadow: designTokens.shadows.card,
      transition: designTokens.transitions.smooth,
    };

    if (hoverEffect === "lift" && isHovered) {
      return {
        ...base,
        transform: "translateY(-6px)",
        boxShadow: designTokens.shadows.cardHover,
      };
    }

    return base;
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: designTokens.transitions.smooth,
    transform:
      hoverEffect === "zoom" && isHovered ? "scale(1.06)" : "scale(1)",
  };

  return (
    <article
      style={getCardStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#f2f2f2",
          aspectRatio: imageRatio,
        }}
      >
        <img
          src={hoverEffect === "swap-image" && isHovered && secondImage ? secondImage : image}
          alt={title}
          style={imageStyle}
          loading={lazyLoad ? "lazy" : "eager"}
        />
      </div>

      <div style={{ padding: "18px", textAlign }}>
        <h3
          style={{
            fontSize: "20px",
            margin: "0 0 10px",
            color: "#111111",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#555555",
            margin: "0 0 14px",
          }}
        >
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              color: "#111111",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            View Project
          </a>
        )}
      </div>
    </article>
  );
}