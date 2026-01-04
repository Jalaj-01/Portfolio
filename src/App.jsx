import { useEffect } from "react";
import emailjs from "emailjs-com";
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

  // 🔹 EMAILJS HANDLER
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nljmkju",          
        "template_e97iv92",         
        e.target,
        "RBRrK9U5poM7u3_hh"           
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          e.target.reset();
        },
        () => {
          alert("Failed to send message 😢");
        }
      );
  };

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
        {/* <section className="hero reveal">
          <h1 className="hero-title">
            I’m <span>Jalaj Gupta</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer building modern, scalable and user-focused web
            applications.
          </p>
        </section>
         */}

         <section className="hero reveal">
  <h1 className="hero-title gradient-text">
    I’m <span>Jalaj Gupta</span>
  </h1>

  <p className="hero-subtitle">
    Full Stack Developer building modern, scalable and user-focused web applications.
  </p>

  
</section>


        {/* ABOUT */}
        <section id="about" className="section reveal">
          <h2>About Me</h2>
          <div className="glass-card">
            <p>
              I am a Full Stack Developer with strong foundations in computer
              science and hands-on experience in building modern web applications.
              Currently pursuing my M.Tech in Computer Science.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section reveal">
          <h2>Education</h2>

          <div className="glass-card">
            <strong>M.Tech – Computer Science & Engineering</strong>
            <p>Indian Institute of Information Technology, Guwahati (2025 – 2027)</p>
          </div>

          <div className="glass-card">
            <strong>B.Tech – Computer Science & Engineering</strong>
            <p>Shri Aurobindo Institute of Technology, Indore (2020 – 2024)</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section reveal">
          <h2>Personal Projects</h2>

          <div className="project-card glass">
            <h3>Sitezy </h3>
            <p className="tech">MongoDB · Express.js · React.js · Node.js · JavaScript (ES6+) · OAuth · Razorpay · Cloudinary </p>
            <p>
              Full-stack marketplace platform for buying, selling, and customizing websites.
            </p>
          </div>

          <div className="project-card glass">
            <h3>Sarthi</h3>
            <p className="tech">React · Node.js · MongoDB</p>
            <p>
              Campus Community web platform for IIIT Guwahati students
            </p>
          </div>

          <div className="project-card glass">
            <h3>Sarthi – Student Assistance Platform</h3>
            <p className="tech">React · Node.js · MongoDB · Socket.IO · Docker</p>
            <p>
              Platform to assist students with academic resources and support.
            </p>
          </div>

          <div className="project-card glass">
            <h3> Buddy– The Exam Portal</h3>
            <p className="tech">Angular · Spring Boot · Java · MySQL</p>
            <p>
              Full-stack online examination system.
            </p>
          </div>

          <div className="project-card glass">
            <h3>AI Personal Virtual Voice Assistant</h3>
            <p className="tech"> Python · AI Logic · Speech Recognition · Text-to-Speech · APIs</p>
            <p>
              AI-powered voice-enabled desktop assistant.
            </p>
          </div>

          <div className="project-card glass">
            <h3>Real-Time Chat Application</h3>
            <p className="tech">Kotlin · Java · XML · Firebase</p>
            <p>
              Real-time mobile chat application for Android devices.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section reveal">
          <h2>Technical Skills & Interests</h2>

          <div className="skills-grid glass-card">
            {[
              "C", "Java", "Python", "JavaScript",
              "React", "Kotlin", "Node.js",
              "MongoDB", "MySQL", "Firebase",
              "Docker", "Git", "GitHub",
              "OOPs", "Docker","Supabase","HTML","CSS",
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
            <strong>Web Developer Intern</strong>
            <p>Advance Computer Networks</p>
            <p>Developed responsive web pages and improved UI performance.</p>
          </div>

          <div className="glass-card">
            <strong>App Developer Intern</strong>
            <p>Bharat Intern</p>
            <p>Built Android applications using Firebase and Java.</p>
          </div>
        </section>

        {/* RESPONSIBILITIES */}
        <section className="section reveal resume-section">
  <h2>Positions of Responsibility</h2>

  <div className="glass resume-card">
    <ul className="resume-list">
      <li>Placement Coordinator – IIIT Guwahati</li>
      <li>Placement Coordinator – SAIT Indore</li>
    </ul>
  </div>
</section>


        {/* ACHIEVEMENTS */}
        <section className="section reveal resume-section">
  <h2>Achievements & Certifications</h2>

  <div className="glass resume-card">
    <ul className="resume-list">
      <li>Android App Development – Internshala</li>
      <li>Blockchain Developer Training – IIT Delhi</li>
    </ul>
  </div>
</section>


        {/* CONTACT FORM (EMAILJS) */}
        <section id="contact" className="section reveal">
          <h2>Contact</h2>

          <form className="contact-form glass-card" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="4" required />
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
