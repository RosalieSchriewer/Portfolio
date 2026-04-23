import { useState } from "react";

export default function ProjectCard({ project, center = false }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-200
        ${hovered ? "-translate-y-1 shadow-lg" : ""}
        ${center ? "max-w-[220px] mx-auto" : ""}
      `}
    >
      <div className="h-40 overflow-hidden" style={{ background: project.bg }}>
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">
          {project.tag}
        </span>
        <p className="font-koulen text-sm text-[#1a1a1a] tracking-wide mt-1 mb-1">
          {project.name}
        </p>
        <p className="font-sans text-xs text-gray-500 leading-relaxed">
          {project.desc}
        </p>
      </div>
    </div>
  );
}
