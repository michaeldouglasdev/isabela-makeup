import { BaseTheme } from "./theme.interface";

export const Theme: BaseTheme = {
  spacing: {
    xSmall: 4,
    small: 8,
    medium: 16,
    large: 32,
  },

  fieldHeight: 48,

  colors: {
    primary: "#ff9ac5",
    //secondary: "#ffc5d8",
    //secondary: "#ffcfd1",
    secondary: "#ffd7e4",
    success: "#0EB252",
    error: "#D32A3E",
    alert: "#D32A3E",
    info: "#2CB9FF",
    black: {
      light: "#444444",
      regular: "#333333",
      dark: "#141414",
    },
    gray: {
      light: "#EBEBEB",
      regular: "#BDBDBD",
      dark: "#757575",
    },
  },

  border: {
    radius: {
      small: 2,
      medium: 4,
      large: 8,
    },
    width: 1,
  },

  fontSize: {
    xSmall: 12,
    small: 14,
    medium: 16,
    large: 24,
    xLarge: 32,
  },
}
