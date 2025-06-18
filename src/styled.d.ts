import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    background: string;
    text: string;
    header: string;
    itemBackground: string;
  }
}
