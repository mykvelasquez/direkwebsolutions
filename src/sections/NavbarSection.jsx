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
  mode = "sticky",
  background = "#214e9b",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (mode !== "sticky") return;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsAtTop(currentY <= 15);

      if (menuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= 10) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode, menuOpen]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [menuOpen]);

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
      transition:
        "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: background,
      boxShadow: mode === "sticky" ? "0 6px 18px rgba(0,0,0,0.08)" : "none",
      backdropFilter: mode === "sticky" ? "blur(8px)" : "none",
      width: "100%",
    },

    inner: {
      padding: isMobile ? "14px 16px" : "14px 20px",
    },

    container: {
      maxWidth: layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    nav: {
      display: "flex",
      justifyContent: isMobile ? "flex-end" : "center",
      alignItems: "center",
      gap: isMobile ? "0" : "32px",
      minHeight: "32px",
    },

    hamburger: {
      cursor: "pointer",
      fontSize: "28px",
      color: "#ffffff",
      lineHeight: 1,
      userSelect: "none",
    },

    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: 1.2,
    },

    overlay: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      opacity: menuOpen ? 1 : 0,
      pointerEvents: menuOpen ? "auto" : "none",
      transition: "opacity 0.28s ease",
      zIndex: 1200,
    },

    drawer: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "80%",
      maxWidth: "320px",
      backgroundColor: background,
      boxShadow: "8px 0 24px rgba(0,0,0,0.18)",
      transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
      transition: "transform 0.28s ease",
      zIndex: 1300,
      display: "flex",
      flexDirection: "column",
      padding: "20px 20px 28px",
      boxSizing: "border-box",
    },

    drawerTop: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "24px",
      minHeight: "32px",
    },

    closeButton: {
      cursor: "pointer",
      fontSize: "28px",
      color: "#ffffff",
      lineHeight: 1,
      userSelect: "none",
    },

    drawerLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      marginTop: "8px",
    },

    drawerLink: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: 1.25,
    },
  };

  return (
    <>
      <header style={styles.outer}>
        <div style={styles.inner}>
          <div style={styles.container}>
            <nav style={styles.nav}>
              {isMobile ? (
                <div
                  onClick={() => setMenuOpen(true)}
                  style={styles.hamburger}
                  aria-label="Open menu"
                  role="button"
                >
                  ☰
                </div>
              ) : (
                links.map((item) => (
                  <a key={item.label} href={item.href} style={styles.link}>
                    {item.label}
                  </a>
                ))
              )}
            </nav>
          </div>
        </div>
      </header>

      {isMobile && (
        <>
          <div
            style={styles.overlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          <aside style={styles.drawer} aria-hidden={!menuOpen}>
            <div style={styles.drawerTop}>
              <div
                onClick={() => setMenuOpen(false)}
                style={styles.closeButton}
                aria-label="Close menu"
                role="button"
              >
                ✕
              </div>
            </div>

            <div style={styles.drawerLinks}>
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>
        </>
      )}
    </>
  );
}