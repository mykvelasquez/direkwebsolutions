import NavbarSection from "./sections/NavbarSection";
import HeroSection from "./sections/HeroSection";
import heroImage from "./assets/hero.png";
import ProjectGridSection from "./sections/ProjectGridSection";

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
        imageRatio="16 / 10"
        layout="boxed"
        background="#eef3fb"
        lazyLoad={false}
        primaryButton={{ label: "Get Started", href: "#contact" }}
        secondaryButton={{ label: "View Services", href: "#services" }}
        supportText="Setup • Payments • Delivery • Support"
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
    </main>
  );
}