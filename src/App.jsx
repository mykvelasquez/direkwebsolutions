import HeroSection from "./sections/HeroSection";
import ProjectGridSection from "./sections/ProjectGridSection";

export default function App() {
  return (
    <main>
      <HeroSection
        heading="Shopify Websites That Convert"
        text="Clean, practical, and ready for real business use."
        align="center"
        image={heroImage}
        imageRation="16 / 9"
      />
      <ProjectGridSection 
        heading="Selected Work"
        text="A few Shopify-related projects and store builds."
        cardsToShow={4}
        sectionAlign="left"
        cardTextAlign="left"
        imageRatio="4 / 3"
      />
    </main>
  );
}