import { useState } from "react";

export default function ProjectCard({ project, center = false }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
        className={`bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200
          ${hovered ? "-translate-y-1 shadow-lg" : ""}
          ${center ? "max-w-[220px] mx-auto" : ""}
        `}
      >
        <div className="h-40 overflow-hidden" style={{ background: project.bg }}>
  {project.video ? (
    <video
      src={project.video}
      className="w-full h-full object-cover"
      muted
      loop
      autoPlay
    />
  ) : (
    <img
      src={project.img}
      alt={project.name}
      className="w-full h-full object-contain p-4"
    />
  )}
</div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80" style={{ background: project.bg }}>
  {project.video ? (
    <video
      src={project.video}
      controls
      className="w-full h-full object-contain"
    />
  ) : (
    <img
      src={project.img}
      alt={project.name}
      className="w-full h-full object-contain p-8"
    />
  )}
</div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-widest text-gray-400">
                {project.tag}
              </span>
              <h2 className="font-koulen text-xl text-[#1a1a1a] tracking-wide mt-1 mb-2">
                {project.name}
              </h2>
              {project.desc && (
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {project.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}