import ProjectGridSection from "./sections/ProjectGridSection";

export default function App() {
  return (
    <main>
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