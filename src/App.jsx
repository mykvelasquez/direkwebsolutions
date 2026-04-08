import NavbarSection from "./sections/NavbarSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import HelpFixSection from "./sections/HelpFixSection";
import OngoingSupportSection from "./sections/OngoingSupportSection";
import supportImage from "./assets/support.png";
import heroImage from "./assets/hero.png";
import ContactSection from "./sections/ContactSection";
import ProjectGridSection from "./sections/ProjectGridSection";
import { designTokens } from "./styles/designTokens";

export default function App() {
  return (
    <main>
      <NavbarSection
        links={[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "Problems I Fix", href: "#help-fix" },
          { label: "Support", href: "#support" },
          { label: "Contact", href: "#contact" },
        ]}
        layout="boxed"
        background="#214e9b"
      />
      
      <HeroSection
        heading="Where Shopify Meets Real Operations"
        text="Shopify stores built around how your business runs — from setup and design to payments, delivery, and day-to-day operations."
        image={heroImage}
        imageRatio="16 / 11"
        layout="boxed"
        background={designTokens.colors.backgroundSoftBlue}
        lazyLoad={false}
        primaryButton={{ label: "Get Started", href: "#contact" }}
        secondaryButton={{ label: "View Services", href: "#services" }}
        supportText="Setup • Payments • Delivery • Support"
      />

      <ServicesSection
        heading="What I Do"
        text="Practical Shopify help focused on setup, store structure, checkout, and ongoing operations."
        layout="boxed"
        background={designTokens.colors.background}
        sectionAlign="center"
        cardTextAlign="center"
        hoverEffect="lift"
      />

      <HelpFixSection
        heading="Problems I Fix"
        background="#f8f8f8"
        layout="boxed"
      />

      <OngoingSupportSection
        heading="Ongoing Support"
        text="Launching your store is only the beginning. I also help with updates, adjustments, and practical support so your Shopify store continues to work for your business over time."
        image={supportImage}
        imageRatio="4 / 3"
        layout="boxed"
        background="#eef3fb"
        lazyLoad={true}
      />

      <ProjectGridSection
        heading="Selected Work"
        text="A few Shopify-related projects and store builds."
        cardsToShow={4}
        sectionAlign="left"
        cardTextAlign="left"
        imageRatio="4 / 3"
        layout="boxed"
        background="#f8f8f8"
        lazyLoad={true}
        hoverEffect="lift"
      />

      <ContactSection
        heading="Contact Us"
        text="Tell me a bit about what you need and I’ll get back to you."
        layout="boxed"
        background="#ffffff"
      />
    </main>
  );
}