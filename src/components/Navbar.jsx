import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar glass">
      <a href="#about" className={active === "about" ? "active" : ""}>
        About
      </a>

      <a href="#projects" className={active === "projects" ? "active" : ""}>
        Projects
      </a>

      {/* 🔥 RESUME → OPEN PDF */}
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        Resume
      </a>

      <a href="#contact" className={active === "contact" ? "active" : ""}>
        Contact
      </a>
    </nav>
  );
}
