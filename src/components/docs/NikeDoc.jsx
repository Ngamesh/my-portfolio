import ProjectHero from "./ProjectHero";
import CaseStudyUnderConstruction from "./CaseStudyUnderConstruction";

export default function NikeDoc() {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <ProjectHero
        title="Nike Limited"
        accent="Edition UI"
        description="A high-impact commercial landing page concept for exclusive Nike product launches, designed around bold campaign visuals, urgency-led marketing, and smooth product discovery."
        role="Frontend Developer & UI Designer"
        technologies={["HTML", "CSS", "Bootstrap 4", "jQuery"]}
        metadataClassName="flex flex-col gap-6"
        primaryImage="/assets/nike.png"
        primaryImageAlt="Nike landing page interface"
        secondaryImage="/assets/price.png"
        secondaryImageAlt="Nike pricing cards"
        links={[
          { label: "Live Demo", href: "https://nike-commercial-ui-main.vercel.app/", type: "primary" },
          { label: "View Source Code", href: "https://github.com/Ngamesh/Nike-commercial-UI", type: "source" },
        ]}
      />
      <CaseStudyUnderConstruction />
    </div>
  );
}
