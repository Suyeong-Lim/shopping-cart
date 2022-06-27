import { DefaultTheme } from "styled-components";

export const colors = {
  WHITE: "#FFF",
  BLACK: "#000",
  BLACK_OPACITY_70: "rgba(0,0,0,0.7)",
  BLACK_OPACITY_25: "rgba(0,0,0,0.25)",
  BLACK_TEXT: "#333333",
  GRAY_10: "#AAAAAA",
  GRAY_HEAD: "#F6F6F6",
  GRAY_900_OPACITY_55: "rgba(30, 30, 30, 0.55)",
  ORANGE_700: "#F37D3B",
  CYAN: "#94DACD",
  MINT_BLUE: "#2ac1bc",
};

export const fontSize = {
  bigTitle: "28px",
  title: "20px",
  smtitle: "18px",
  text: "16px",
  smallText: "14px",
};

export type ColorsTypes = typeof colors;

export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
