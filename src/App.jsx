import HeroSection from "./sections/HeroSection";
import heroImage from "./assets/hero.png";
import ProjectGridSection from "./sections/ProjectGridSection";

export default function App() {
  return (
    <main>
      <HeroSection
        heading="Shopify Websites That Convert"
        text="Clean, practical, and ready for real business use."
        align="center"
        //image={heroImage}
        imageRatio="16 / 9"
        layout="boxed"
        background="#ffffff"
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
    </main>
  );
}