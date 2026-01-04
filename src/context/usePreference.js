import { useContext } from "react";
import { PreferenceContext } from "./preference-context";

export const usePreference = () => {
  return useContext(PreferenceContext);
};
