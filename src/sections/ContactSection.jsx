import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";

export default function ContactSection({
  heading = "Contact Us",
  text = "Tell me a bit about what you need and I’ll get back to you.",
  layout = "boxed",
  background = "#ffffff",
}) {
  const styles = {
    section: {
      padding: `${designTokens.spacing.sectionY} ${designTokens.spacing.sectionX}`,
      backgroundColor: background,
      width: "100%",
    },

    container: {
      maxWidth: layout === "boxed" ? "800px" : "100%",
      margin: "0 auto",
      width: "100%",
    },

    header: {
      textAlign: "center",
      marginBottom: "32px",
    },

    heading: {
      ...designTokens.typography.sectionHeading,
      marginBottom: "12px",
    },

    text: {
      ...designTokens.typography.sectionText,
      maxWidth: "620px",
      margin: "0 auto",
    },

    form: {
      display: "grid",
      gap: "18px",
    },

    rowTwo: {
      display: "grid",
      gridTemplateColumns:
        typeof window !== "undefined" && window.innerWidth <= 768
          ? "1fr"
          : "1fr 1fr",
      gap: "18px",
    },

    fieldWrap: {
      display: "grid",
      gap: "8px",
    },

    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: designTokens.colors.text,
    },

    input: {
      width: "100%",
      padding: "14px 16px",
      border: `1px solid ${designTokens.colors.border}`,
      borderRadius: "12px",
      fontSize: "15px",
      color: designTokens.colors.text,
      backgroundColor: "#ffffff",
      outline: "none",
    },

    textarea: {
      width: "100%",
      minHeight: "140px",
      padding: "14px 16px",
      border: `1px solid ${designTokens.colors.border}`,
      borderRadius: "12px",
      fontSize: "15px",
      color: designTokens.colors.text,
      backgroundColor: "#ffffff",
      resize: "vertical",
      outline: "none",
    },

    buttonWrap: {
      textAlign: "center",
      marginTop: "8px",
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.heading}>{heading}</h2>
          <p style={styles.text}>{text}</p>
        </div>

        <form style={styles.form}>
          <div style={styles.rowTwo}>
            <div style={styles.fieldWrap}>
              <label htmlFor="name" style={styles.label}>
                Name
              </label>
              <input id="name" name="name" type="text" style={styles.input} />
            </div>

            <div style={styles.fieldWrap}>
              <label htmlFor="company" style={styles.label}>
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.rowTwo}>
            <div style={styles.fieldWrap}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                style={styles.input}
              />
            </div>

            <div style={styles.fieldWrap}>
              <label htmlFor="type" style={styles.label}>
                Type
              </label>
              <select id="type" name="type" style={styles.input} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option value="Inquiry">Inquiry</option>
                <option value="Quote">Quote</option>
                <option value="Project">Project</option>
                <option value="Support">Support</option>
              </select>
            </div>
          </div>

          <div style={styles.fieldWrap}>
            <label htmlFor="message" style={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              style={styles.textarea}
            />
          </div>

          <div style={styles.buttonWrap}>
            <button type="submit" style={getButtonStyles("solid")}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}