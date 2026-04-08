import { useEffect, useRef, useState } from "react";
import { designTokens } from "../styles/designTokens";

export default function NavbarSection({
  links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Problems I Fix", href: "#help-fix" },
    { label: "Support", href: "#support" },
    { label: "Contact", href: "#contact" },
  ],
  layout = "boxed",
  mode = "sticky", // "sticky" | "static"
  background = "#214e9b",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (mode !== "sticky") return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsAtTop(currentY <= 15);

      if (currentY <= 10) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  const styles = {
    outer: {
      position: mode === "sticky" ? "sticky" : "relative",
      top: 0,
      zIndex: 1000,
      transform:
        mode === "sticky"
          ? isVisible
            ? "translateY(0)"
            : "translateY(-100%)"
          : "translateY(0)",
      transition: "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      backgroundColor:
        mode === "sticky"
          ? isAtTop
            ? background
            : background
          : background,
      boxShadow:
        mode === "sticky"
          ? "0 6px 18px rgba(0,0,0,0.08)"
          : "none",
      backdropFilter: mode === "sticky" ? "blur(8px)" : "none",
      width: "100%",
    },

    inner: {
      padding: "14px 20px",
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "32px",
    },

    link: {
      color:
        mode === "sticky" && isAtTop
          ? "#ffffff"
          : "#ffffff",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: 1.2,
    },
  };

  return (
    <header style={styles.outer}>
      <div style={styles.inner}>
        <div style={styles.container}>
          <nav style={styles.nav}>
            {links.map((item) => (
              <a key={item.label} href={item.href} style={styles.link}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}