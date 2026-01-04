import { usePreference } from "../context/usePreference";

export default function PreferenceToggle() {
  const { theme, setTheme, motion, setMotion } = usePreference();

  return (
    <div className="pref-toggle">
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>

      <button
        onClick={() =>
          setMotion(motion === "subtle" ? "minimal" : "subtle")
        }
      >
        {motion === "subtle" ? "✨ Subtle Motion" : "🚫 Minimal Motion"}
      </button>
    </div>
  );
}
