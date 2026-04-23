const NAV_LINKS = ["About Me", "Contact", "Previous Work"];

export default function Navbar({ page, setPage }) {
  return (
    <nav className="bg-[#F2B4C8] sticky top-0 z-10 flex items-center justify-around md:justify-end md:gap-16 px-4 md:px-12 h-13">
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => {
            if (link === "Previous Work") setPage("work");
            else if (link === "Contact") setPage("contact");
            else setPage("about");
          }}
          className={`
            font-koulen uppercase tracking-widest text-[11px] md:text-[15px] text-[#1a1a1a]
            border-b-2 transition-colors cursor-pointer bg-transparent border-x-0 border-t-0
            ${(link === "Previous Work" && page === "work") ||
              (link === "Contact" && page === "contact") ||
              (link === "About Me" && page === "about")
              ? "border-b-[#1a1a1a]"
              : "border-b-transparent"}
          `}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}
