import { useEffect } from "react";
import profileImg from "./assets/profile.png";
import Navbar from "./components/Navbar";

function App() {
  // 🔹 SCROLL REVEAL
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout">
      {/* ================= LEFT SIDEBAR ================= */}
      <aside className="sidebar">
        <div className="profile glass">
          <img src={profileImg} alt="Jalaj Gupta" className="profile-img" />

          <h3>Jalaj Gupta</h3>
          <p className="role">Full Stack Developer</p>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <p>
              <span>📞</span>
              <span>+91 7389927777</span>
            </p>
            <p>
              <span>✉️</span>
              <span>jalajgupta550@gmail.com</span>
            </p>
          </div>

          <p className="location">India 🇮🇳</p>

          {/* SOCIAL LINKS */}
          <div className="links">
            <a href="https://github.com/Jalaj-01" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jalaj-gupta-695a98218/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <a href="#contact" className="cta">
            Let’s Work Together
          </a>
        </div>
      </aside>

      {/* ================= RIGHT CONTENT ================= */}
      <main className="content">
        <Navbar />

        {/* HERO */}
        <section className="hero reveal">
          <h1 className="hero-title">
            I’m <span>Jalaj Gupta</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer building modern, scalable and user-focused web
            applications.
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="section reveal">
          <h2>About Me</h2>
          <p>
            I am a Full Stack Developer with strong foundations in computer
            science and hands-on experience in building modern web applications.
            Currently pursuing my M.Tech in Computer Science.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="section reveal">
          <h2>Education</h2>

          <div className="glass-card">
            <p><strong>M.Tech – Computer Science & Engineering</strong></p>
            <p>IIIT Guwahati (2025 – 2027)</p>
          </div>

          <div className="glass-card">
            <p><strong>B.Tech – Computer Science & Engineering</strong></p>
            <p>Shri Aurobindo Institute of Technology, Indore (2020 – 2024)</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section reveal">
          <h2>Personal Projects</h2>

          <div className="project-card glass">
            <h3>Sarthi – Student Assistance Platform</h3>
            <p className="tech">React · Node.js · MongoDB</p>
            <p>
              A platform to assist students with academic resources and support.
            </p>
          </div>

          <div className="project-card glass">
            <h3>Real-Time Chat Application</h3>
            <p className="tech">React · Node.js · Socket.IO</p>
            <p>
              A real-time messaging application using socket-based communication.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section reveal">
          <h2>Technical Skills & Interests</h2>

          <div className="skills">
            {[
              "C", "Java", "Python", "JavaScript",
              "React", "Angular", "Node.js",
              "MongoDB", "MySQL", "Firebase",
              "Docker", "Git", "GitHub",
              "Distributed Systems", "Web Development"
            ].map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section reveal">
          <h2>Experience</h2>

          <div className="glass-card">
            <p><strong>Web Developer Intern</strong> – Advance Computer Networks</p>
            <p>
              Developed responsive web pages and improved UI performance.
            </p>
          </div>

          <div className="glass-card">
            <p><strong>App Developer Intern</strong> – Bharat Intern</p>
            <p>
              Built Android applications using Firebase and Java.
            </p>
          </div>
        </section>

        {/* RESPONSIBILITIES */}
        <section className="section reveal">
          <h2>Positions of Responsibility</h2>
          <ul className="resume-list">
            <li>Placement Coordinator – IIIT Guwahati</li>
            <li>Placement Coordinator – SAIT Indore</li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="section reveal">
          <h2>Achievements & Certifications</h2>
          <ul className="resume-list">
            <li>Android App Development – Internshala</li>
            <li>Blockchain Developer Training – IIT Delhi</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section reveal">
          <h2>Contact</h2>
          <p>Email: jalajgupta550@gmail.com</p>
          <p style={{ marginTop: "10px" }}>Phone: +91 7389927777</p>
        </section>
      </main>
    </div>
  );
}

export default App;
