import { usePreference } from "../context/usePreference";

export default function PreferenceToggle() {
  const { theme, toggleTheme } = usePreference();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
