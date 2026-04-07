export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>DirekWebSolutions</div>
        <nav style={styles.nav}>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#work" style={styles.link}>Work</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <p style={styles.kicker}>Shopify-focused web design</p>
          <h1 style={styles.heroTitle}>
            Clean Shopify websites for small and growing businesses
          </h1>
          <p style={styles.heroText}>
            I help businesses launch professional Shopify stores with better layout,
            clearer structure, and a smoother customer experience.
          </p>

          <div style={styles.heroButtons}>
            <a href="#contact" style={styles.primaryButton}>I love you Adriel</a>
            <a href="#work" style={styles.secondaryButton}>View Sample Work</a>
          </div>
        </section>

        <section id="services" style={styles.section}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Shopify Store Setup</h3>
              <p style={styles.cardText}>
                Store structure, page setup, collections, navigation, and basic launch preparation.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>UI Improvements</h3>
              <p style={styles.cardText}>
                Better homepage flow, cleaner sections, improved spacing, and stronger visual presentation.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Theme Customization</h3>
              <p style={styles.cardText}>
                Shopify theme edits and practical changes tailored to your business needs.
              </p>
            </div>
          </div>
        </section>

        <section id="work" style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>Sample Work</h2>
          <div style={styles.grid}>
            <div style={styles.workCard}>
              <div style={styles.placeholder}  >Project Preview</div>
              <h3 style={styles.cardTitle}>Restaurant / Café Store</h3>
              <p style={styles.cardText}>~~
                Homepage layout focused on menu visibility, branding, and mobile browsing.
              </p>
            </div>
            <div style={styles.workCard}>
              <div style={styles.placeholder}>Project Preview</div>
              <h3 style={styles.cardTitle} href="">Retail Product Store</h3>
              <p style={styles.cardText}>
                Cleaner collection flow, featured products, and easier shopping experience.
              </p>
            </div>
            <div style={styles.workCard}>
              <div style={styles.placeholder}>Project Preview</div>
              <h3 style={styles.cardTitle} href="">Small Business Brand Site</h3>
              <p style={styles.cardText}>
                Simple Shopify setup designed to help smaller brands launch professionally.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" style={styles.contact}>
          <h2 style={styles.sectionTitle}>Let’s build your Shopify website</h2>
          <p style={styles.contactText}>
            For now, you can place your email, Facebook page, or future contact form here.
          </p>
          <a href="mailto:your@email.com" style={styles.primaryButton}>
            Email Me
          </a>
        </section>
      </main>
    </div>
  )
}

const styles = {
  page: {
    margin: 0,
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    color: '#111111',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #e5e5e5',
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: '22px',
    fontWeight: '700',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#111111',
    textDecoration: 'none',
    fontSize: '14px',
  },
  hero: {
    padding: '90px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  kicker: {
    fontSize: '13px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#666666',
    marginBottom: '16px',
  },
  heroTitle: {
    fontSize: '52px',
    lineHeight: '1.1',
    margin: '0 0 20px',
  },
  heroText: {
    fontSize: '18px',
    lineHeight: '1.7',
    color: '#555555',
    maxWidth: '720px',
    margin: '0 auto',
  },
  heroButtons: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    marginTop: '32px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-block',
    backgroundColor: '#111111',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '14px 24px',
    borderRadius: '10px',
  },
  secondaryButton: {
    display: 'inline-block',
    backgroundColor: '#ffffff',
    color: '#111111',
    textDecoration: 'none',
    padding: '14px 24px',
    borderRadius: '10px',
    border: '1px solid #d9d9d9',
  },
  section: {
    padding: '70px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionAlt: {
    padding: '70px 20px',
    backgroundColor: '#f7f7f7',
  },
  sectionTitle: {
    fontSize: '34px',
    marginBottom: '30px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    border: '1px solid #e5e5e5',
    borderRadius: '16px',
    padding: '24px',
    backgroundColor: '#ffffff',
  },
  workCard: {
    border: '1px solid #e5e5e5',
    borderRadius: '16px',
    padding: '16px',
    backgroundColor: '#ffffff',
  },
  placeholder: {
    height: '180px',
    borderRadius: '12px',
    backgroundColor: '#ececec',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666666',
    marginBottom: '16px',
    fontSize: '14px',
  },
  cardTitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#555555',
    margin: 0,
  },
  contact: {
    padding: '80px 20px',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  contactText: {
    fontSize: '17px',
    color: '#555555',
    marginBottom: '24px',
  },
}