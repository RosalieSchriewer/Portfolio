import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/content";

function CardGrid({ projectSlice, bg }) {
  return (
    <section className="px-4 py-8 md:px-18 md:py-12" style={{ background: bg }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projectSlice.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ project }) {
  return (
    <section className="bg-[#D98BA8] px-4 py-8 md:px-18 md:py-12">
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-10">
        <div className="space-y-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-5 rounded-full" style={{ background: "rgba(255,255,255,0.28)" }} />
          ))}
        </div>
        <ProjectCard project={project} center />
        <div className="space-y-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-5 rounded-full" style={{ background: "rgba(255,255,255,0.28)" }} />
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <ProjectCard project={project} />
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <>
      <div className="h-6 md:h-10 bg-[#EDEDED]" />
      <CardGrid projectSlice={projects.slice(0, 3)} bg="#7FBBAC" />
      <div className="h-4 md:h-12 bg-[#EDEDED]" />
      <FeaturedCard project={projects[3]} />
      <div className="h-4 md:h-12 bg-[#EDEDED]" />
      <CardGrid projectSlice={projects.slice(4, 7)} bg="#7FBBAC" />
      <div className="h-20 bg-[#EDEDED]" />
    </>
  );
}
