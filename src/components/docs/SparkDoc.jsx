import ProjectHero from "./ProjectHero";
import CaseStudyUnderConstruction from "./CaseStudyUnderConstruction";

export default function SparkDoc() {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <ProjectHero
        title="Share the"
        accent="Spark"
        description="A cross-platform admin dashboard for managing events and mentorship programs, built around real-time platform data, scalable workflows, and clean operational visibility."
        role="Flutter Developer & System Designer"
        technologies={["Flutter", "Supabase", "Firebase", "Riverpod"]}
        primaryImage="/assets/spark.png"
        primaryImageAlt="Share the Spark admin dashboard"
        imageClassName="mx-auto w-full max-w-[320px] rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
        links={[
          { label: "Live Demo", href: "https://share-the-spark.vercel.app/", type: "primary" },
          { label: "View Source Code", href: "https://github.com/bsubash2054/spark_admin", type: "source" },
        ]}
      />
      <CaseStudyUnderConstruction />
    </div>
  );
}
