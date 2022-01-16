export interface BaseTheme {
  font?: FontLevelGrade;
  fontSize: FontSizeLevelGrade;
  spacing: BaseSpacing;
  fieldHeight: number;
  colors: BaseColor;
  border: BaseBorder;
}

interface FontLevelGrade {
  soft?: string;
  regular?: string;
  bold?: string;
}
interface FontSizeLevelGrade {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}
interface BaseSpacing {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
}

interface BaseColor {
  primary: string;
  secondary: string;
  success: string;
  error: string;
  info: string;
  alert: string;
  black: ColorLevelGrade;
  gray: ColorLevelGrade;
}
interface ColorLevelGrade {
  light: string;
  regular: string;
  dark: string;
}

interface BaseBorder {
  radius: BorderRadiusLevelGrade;
  width: number;
}
interface BorderRadiusLevelGrade {
  small: number;
  medium: number;
  large: number;
}
