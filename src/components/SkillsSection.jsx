import { skills } from "../data/content";

export default function SkillsSection() {
  const half = Math.ceil(skills.length / 2);
  const cols = [skills.slice(0, half), skills.slice(half)];

  return (
    <section className="bg-[#D98BA8] px-6 py-10 md:px-18 md:py-13">
      <h2 className="font-koulen uppercase tracking-widest text-center text-[#1a1a1a] text-xl mb-9">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        {cols.map((col, ci) => (
          <div key={ci}>
            {col.map((s) => (
              <div key={s.label}>
                <p className="font-sans text-[13px] text-[#1a1a1a] mb-1">{s.label}</p>
                <div className="h-[18px] rounded-full overflow-hidden mb-4" style={{ background: "rgba(255,255,255,0.25)" }}>
                  <div
                    className="h-full rounded-full bg-[#f8c8d4] transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
