import SkillsSection from "../components/SkillsSection";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#7FBBAC] px-6 py-10 md:px-18 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-10 text-center">
        <div className="h-[140px] w-[140px] md:h-[180px] md:w-[180px] rounded-full bg-[#c8d6cc] overflow-hidden flex items-center justify-center text-6xl mx-auto order-0 md:order-1">
          🙂
        </div>
        <h1 className="font-koulen uppercase tracking-widest text-[#1a1a1a] text-3xl md:text-4xl order-1 md:order-0 md:text-left">
          Rosalie
        </h1>
        <p className="font-sans text-sm text-[#1a1a1a] leading-relaxed order-2">
          UX/UI designer, 3D artist and hobbyist game developer based in Lillesand.
          Currently open to full-time opportunities and freelance projects.
        </p>
      </section>

      <div className="h-12 bg-[#EDEDED]" />
      <SkillsSection />
      <div className="h-20 bg-[#EDEDED]" />
    </>
  );
}
