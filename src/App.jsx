function App() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="hero">
        <div className="hero-content">
          <h1>
            Jalaj <span>Gupta</span>
          </h1>
          <p className="subtitle">Full Stack Developer</p>

          <div className="buttons">
  <a
    href="/resume.pdf"
    className="btn primary"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume
  </a>

  <a
    href="https://github.com/Jalaj-01"
    className="btn secondary"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
</div>

        </div>
      </main>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a Full Stack Developer with a strong foundation in computer
          science and hands-on experience in building modern web applications.
          Currently pursuing my M.Tech in Computer Science, I enjoy working
          across the full stack — from designing clean user interfaces to
          developing scalable and reliable backend systems.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>Projects</h2>

        <div className="project-list">
          <div className="project-card">
            <h3>Sarthi – Student Assistance Platform</h3>
            <p>
              A full-stack platform designed to help students manage academic
              tasks, access learning resources, and stay organized efficiently.
            </p>
            <p className="tech">React · Node.js · MongoDB</p>
          </div>

          <div className="project-card">
            <h3>Real-Time Chat Application</h3>
            <p>
              A real-time messaging application supporting user authentication,
              one-to-one chats, and live message updates using WebSockets.
            </p>
            <p className="tech">React · Node.js · Socket.IO</p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio website built to showcase projects, skills,
              and experience with a clean, responsive, and professional design.
            </p>
            <p className="tech">React · Vite · CSS</p>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Jalaj Gupta ·
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}LinkedIn
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
