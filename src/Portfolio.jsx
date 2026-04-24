import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

export default function Portfolio() {
  const [page, setPage] = useState("about");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Koulen&family=DM+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[900px] mx-auto min-h-screen bg-[#EDEDED] font-sans">
        <Navbar page={page} setPage={setPage} />
        <main>
          {page === "about" && <AboutPage />}
          {page === "work" && <WorkPage />}
          {page === "contact" && <ContactPage />}
        </main>
        <footer className="text-center py-6 text-xs text-gray-400 bg-[#EDEDED]">
          © 2026 Rosalie · All rights reserved
          <a
            href="https://github.com/RosalieSchriewer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-2"
          >
                GitHub
          </a>
            <a
              href="https://www.linkedin.com/in/rosalie-schriewer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-2"
            >
              LinkedIn
            </a>
        </footer>
      </div>
    </>
  );
}
