import 'styled-components';
import { BaseTheme } from "./theme.interface";

declare module 'styled-components' {

  export interface DefaultTheme extends BaseTheme {}
}