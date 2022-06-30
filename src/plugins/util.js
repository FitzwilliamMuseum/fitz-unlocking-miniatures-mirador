import deepmerge from "deepmerge";
import { createTheme } from "@material-ui/core/styles";

export function getTheme(state) {
  return createTheme(
    deepmerge(
      state.config.theme,
      state.config.themes[state.config.selectedTheme]
    )
  );
}