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
          {project.youtube ? (
  <img
    src={`https://img.youtube.com/vi/${project.youtube}/hqdefault.jpg`}
    alt={project.name}
    className="w-full h-full object-cover"
  />
) : project.video ? (
  <video src={project.video} className="w-full h-full object-cover" muted loop autoPlay />
) : (
  <img src={project.img} alt={project.name} className="w-full h-full object-contain p-4" />
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
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-600 cursor-pointer font-sans text-lg leading-none z-10"
              >
                ×
              </button>
             {project.youtube ? (
  <iframe
    src={`https://www.youtube.com/embed/${project.youtube}`}
    className="w-full h-full"
    allowFullScreen
  />
) : project.video ? (
  <video src={project.video} controls className="w-full h-full object-contain" />
) : (
  <img src={project.img} alt={project.name} className="w-full h-full object-contain p-8" />
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
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-xs font-sans text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}