import { useContext } from "react";
import { PreferenceContext } from "./PreferenceContext";

export function usePreference() {
  return useContext(PreferenceContext);
}
