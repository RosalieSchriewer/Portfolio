import { useState } from "react";

const NAV_PINK = "#F2B4C8";
const TEAL = "#7FBBAC";
const SKILLS_PINK = "#D98BA8";
const LIGHT_GRAY = "#EDEDED";

const NAV_LINKS = ["Contact", "Previous Work"];

const skills = [
  { label: "Adobe Illustrator", level: 92 },
  { label: "Adobe Photoshop", level: 85 },
  { label: "Adobe After Effects", level: 65 },
  { label: "JavaScript", level: 65 },
  { label: "C#", level: 55 },
  { label: "3D Modeling", level: 88 },
  { label: "UI / UX", level: 90 },
  { label: "Digital course design", level: 80 },
];

const projects = [
  {
    id: 1,
    name: "Plush - Pink Grapefruit",
    tag: "Packaging",
    bg: "#F9D5C5",
    img: "src\assets\GrapefruitPlushPoster.png",
    desc: "",
  },
  {
    id: 2,
    name: "Plush - Can Design",
    tag: "Packaging",
    bg: "#F7E8E0",
    img: "src\assets\PlushCans.png",
    desc: "",
  },
  {
    id: 3,
    name: "Plush - Lemon",
    tag: "Packaging",
    bg: "#FBF2C0",
    img: "src\assets\pinkPlushPoster.png",
    desc: "",
  },
  {
    id: 4,
    name: "Crackle Bar",
    tag: "Packaging",
    bg: "#E8F0D0",
    img: "src\assets\CrackleBar.png",
    desc: "",
  },
];

function Navbar({ page, setPage }) {
  return (
    <nav
      style={{
        background: NAV_PINK,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 48px",
        height: 52,
        gap: 64,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => setPage(link === "Previous Work" ? "work" : "contact")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Koulen', sans-serif",
            fontWeight: 900,
            fontSize: 15,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            padding: "4px 0",
            borderBottom:
              (link === "Previous Work" && page === "work") ||
              (link === "Contact" && page === "contact")
                ? "2px solid #1a1a1a"
                : "2px solid transparent",
            transition: "border-color 0.2s",
          }}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}

function ProgressBar({ level, color = "#f8c8d4" }) {
  return (
    <div
      style={{
        height: 18,
        background: "rgba(255,255,255,0.25)",
        borderRadius: 20,
        overflow: "hidden",
        margin: "6px 0 18px",
      }}
    >
      <div
        style={{
          width: `${level}%`,
          height: "100%",
          background: color,
          borderRadius: 20,
          transition: "width 1s ease",
        }}
      />
    </div>
  );
}

function SkillsSection() {
  const half = Math.ceil(skills.length / 2);
  const left = skills.slice(0, half);
  const right = skills.slice(half);

  return (
    <section style={{ background: SKILLS_PINK, padding: "52px 72px" }}>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Koulen', sans-serif",
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#1a1a1a",
          margin: "0 0 36px",
        }}
      >
        Skills
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
        {[left, right].map((col, ci) => (
          <div key={ci}>
            {col.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "#1a1a1a",
                    letterSpacing: "0.02em",
                  }}
                >
                  {s.label}
                </p>
                <ProgressBar level={s.level} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <section
        style={{
          background: TEAL,
          padding: "56px 72px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 40,
        }}
      >
        <h1
          style={{
            fontFamily: "'Koulen', sans-serif",
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Rosalie
        </h1>

        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "#c8d6cc",
            overflow: "hidden",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          🙂
        </div>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            lineHeight: 1.7,
            color: "#1a1a1a",
            margin: 0,
            textAlign: "center",
          }}
        >
          Brand and packaging designer with a love for bold colour, playful
          typography, and consumer products that feel genuinely alive on shelf.
          Currently open to freelance and full-time opportunities.
        </p>
      </section>

      <div style={{ height: 48, background: LIGHT_GRAY }} />
      <SkillsSection />
      <div style={{ height: 80, background: LIGHT_GRAY }} />
    </>
  );
}

function WorkPage() {
  return (
    <>
      <div style={{ height: 40, background: LIGHT_GRAY }} />

      <section style={{ background: TEAL, padding: "48px 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <div style={{ height: 48, background: LIGHT_GRAY }} />

      <section style={{ background: SKILLS_PINK, padding: "48px 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: 22,
                  background: "rgba(255,255,255,0.28)",
                  borderRadius: 20,
                  margin: "0 0 18px",
                }}
              />
            ))}
          </div>

          <ProjectCard project={projects[3]} center />

          <div>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: 22,
                  background: "rgba(255,255,255,0.28)",
                  borderRadius: 20,
                  margin: "0 0 18px",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 80, background: LIGHT_GRAY }} />
    </>
  );
}

function ProjectCard({ project, center }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 8,
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.12)" : "none",
        cursor: "pointer",
        ...(center ? { maxWidth: 220, margin: "0 auto" } : {}),
      }}
    >
     <div style={{ background: project.bg, height: 160, overflow: "hidden" }}>
  <img
    src={project.img}
    alt={project.name}
    style={{ width: "100%", height: "100%", objectFit: "contain", padding: 16 }}
  />
</div>
      <div style={{ padding: "16px 20px" }}>
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {project.tag}
        </span>
        <p
          style={{
            margin: "4px 0 6px",
            fontFamily: "'Koulen', sans-serif",
            fontSize: 14,
            color: "#1a1a1a",
            letterSpacing: "0.04em",
          }}
        >
          {project.name}
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          {project.desc}
        </p>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div
      style={{
        minHeight: "60vh",
        background: LIGHT_GRAY,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 24,
        padding: 64,
      }}
    >
      <h2
        style={{
          fontFamily: "'Koulen', sans-serif",
          fontSize: 28,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Get in touch
      </h2>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16,
          color: "#444",
          margin: 0,
          textAlign: "center",
          maxWidth: 420,
          lineHeight: 1.7,
        }}
      >
        Available for freelance packaging and brand projects. Drop me a message
        and I'll get back to you within a day.
      </p>
      <a
        href="mailto:rosalie.schriewer@icloud.com"
        style={{
          background: NAV_PINK,
          border: "none",
          borderRadius: 32,
          padding: "14px 36px",
          fontFamily: "'Koulen', sans-serif",
          fontSize: 14,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1a1a1a",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        rosalie@icloud
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState("about");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { background: #EDEDED; }`}</style>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          minHeight: "100vh",
          background: LIGHT_GRAY,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <Navbar page={page} setPage={setPage} />

        <main>
          {page === "about" && <AboutPage />}
          {page === "work" && <WorkPage />}
          {page === "contact" && <ContactPage />}
        </main>

        <footer
          style={{
            textAlign: "center",
            padding: "24px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "#888",
            background: LIGHT_GRAY,
          }}
        >
          © 2026 Rosalie · All rights reserved
        </footer>
      </div>
    </>
  );
}
