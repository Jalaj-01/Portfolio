/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";

export const PreferenceContext = createContext(null);

export function PreferenceProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [motion, setMotion] = useState(
    localStorage.getItem("motion") || "subtle"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-motion", motion);
    localStorage.setItem("motion", motion);
  }, [motion]);

  return (
    <PreferenceContext.Provider
      value={{ theme, setTheme, motion, setMotion }}
    >
      {children}
    </PreferenceContext.Provider>
  );
}
