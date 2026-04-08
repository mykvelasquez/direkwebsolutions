import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";

export default function ContactSection({
  heading = "Start a Project",
  text = "Tell me a bit about your store or idea. I’ll get back to you with next steps.",
  layout = "boxed",
  background = designTokens.colors.backgroundAlt,
}) {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  const styles = {
    section: {
      padding: `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
    },

    container: {
      maxWidth: layout === "boxed" ? "760px" : "100%",
      margin: "0 auto",
    },

    card: {
      backgroundColor: "#ffffff",
      border: designTokens.borders.light,
      borderRadius: designTokens.radius.card,
      padding: isMobile ? "24px" : "36px",
      boxShadow: designTokens.shadows.card,
    },

    header: {
      textAlign: "center",
      marginBottom: "28px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
      marginBottom: "10px",
    },

    text: {
      ...designTokens.typography.sectionText,
    },

    form: {
      display: "grid",
      gap: "16px",
    },

    row: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "16px",
    },

    field: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },

    label: {
      ...designTokens.typography.label,
    },

    input: {
      padding: designTokens.spacing.inputPadding,
      borderRadius: designTokens.radius.input,
      border: designTokens.borders.light,
      fontSize: "15px",
      outline: "none",
    },

    textarea: {
      padding: designTokens.spacing.inputPadding,
      borderRadius: designTokens.radius.input,
      border: designTokens.borders.light,
      fontSize: "15px",
      minHeight: "140px",
      resize: "vertical",
      outline: "none",
    },

    buttonWrap: {
      marginTop: "8px",
      textAlign: "center",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.heading}>{heading}</h2>
            <p style={styles.text}>{text}</p>
          </div>

          <form style={styles.form}>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Name</label>
                <input type="text" style={styles.input} />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Company</label>
                <input type="text" style={styles.input} />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Email</label>
                <input type="email" style={styles.input} />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Type</label>
                <select style={styles.input} defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Inquiry</option>
                  <option>Quote</option>
                  <option>Project</option>
                  <option>Support</option>
                </select>
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Message</label>
              <textarea style={styles.textarea}></textarea>
            </div>

            <div style={styles.buttonWrap}>
              <button type="submit" style={getButtonStyles("solid")}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}