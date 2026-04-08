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
  background = "#214e9b",
}) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const styles = {
    section: {
      width: "100%",
      backgroundColor: background,
      padding: isMobile ? "14px 16px" : "14px 20px",
    },

    container: {
      maxWidth:
        layout === "boxed" ? designTokens.spacing.container : "100%",
      margin: "0 auto",
      width: "100%",
    },

    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: isMobile ? "14px" : "32px",
    },

    link: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: 1.2,
      opacity: 1,
      transition: designTokens.transitions.smooth,
    },
  };

  return (
    <header style={styles.section}>
      <div style={styles.container}>
        <nav style={styles.nav}>
          {links.map((item) => (
            <a key={item.label} href={item.href} style={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}