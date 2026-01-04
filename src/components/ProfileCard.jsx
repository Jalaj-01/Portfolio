function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src="/profile.jpg"
        alt="Jalaj Gupta"
        className="profile-img"
      />

      <h3>Jalaj Gupta</h3>
      <p className="role">Full Stack Developer</p>

      <p className="location">India 🇮🇳</p>

      <div className="socials">
        <a href="https://github.com/Jalaj-01" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        className="contact-btn"
      >
        Let’s Work Together
      </a>
    </div>
  );
}

export default ProfileCard;
