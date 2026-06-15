import ProjectHero from "./ProjectHero";
import CaseStudyUnderConstruction from "./CaseStudyUnderConstruction";

export default function FGADoc() {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <ProjectHero
        title="FGA Fitness"
        accent="Gym App"
        description="A high-performance Flutter mobile application designed for workout discovery, nutrition planning, activity tracking, and gamified fitness progress in one polished experience."
        role="Flutter Developer & UI/UX Implementer"
        technologies={["Flutter", "Dart", "Adobe XD", "Chewie"]}
        primaryImage="/assets/fga.png"
        primaryImageAlt="FGA app dashboard"
        imageClassName="mx-auto w-full max-w-[320px] rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
        links={[
          { label: "Live Demo", href: "https://fga-fitness-gym-app.vercel.app/", type: "primary" },
          { label: "View Source Code", href: "https://github.com/Ngamesh/fitness_gym_app", type: "source" },
        ]}
      />
      <CaseStudyUnderConstruction />
    </div>
  );
}
