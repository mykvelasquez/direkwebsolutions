import { useState } from "react";
import { designTokens } from "../styles/designTokens";
import { getButtonStyles } from "../styles/buttonStyles";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

export default function ContactSection({
  heading = "Start a Project",
  text = "Tell me a bit about your store or idea. I’ll get back to you with next steps.",
  layout = "boxed",
  background = designTokens.colors.backgroundAlt,
}) {
  const [isSending, setIsSending] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_ecmhekw",
        "DWS_Contact_Us",
        e.target,
        "ZzJL8qVjASYDcDUfL"
      );

      alert("Message sent!");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2 style={styles.heading}>{heading}</h2>
            <p style={styles.text}>{text}</p>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label} htmlFor="company">
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

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label} htmlFor="type">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  style={styles.input}
                  defaultValue=""
                  required
                >
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

            <div style={styles.field}>
              <label style={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                style={styles.textarea}
                required
              ></textarea>
            </div>

            <div style={styles.buttonWrap}>
              <Button
                type="submit"
                style={getButtonStyles("solid")}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}