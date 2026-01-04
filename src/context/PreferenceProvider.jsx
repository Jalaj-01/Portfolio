import { useEffect, useState } from "react";
import { PreferenceContext } from "./preference-context";

export default function PreferenceProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <PreferenceContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PreferenceContext.Provider>
  );
}
