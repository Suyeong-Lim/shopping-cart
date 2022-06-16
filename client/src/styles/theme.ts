import { DefaultTheme } from "styled-components";

export const colors = {
  WHITE: "#FFF",
  BLACK: "#000",
  SKY: "#36caef",
  BLACK_OPACITY_70: "rgba(0,0,0,0.7)",
  BLACK_OPACITY_25: "rgba(0,0,0,0.25)",
  GRAY_10: "#FDFDFD",
  GRAY_50: "#ECEBF1",
  GRAY_80: "#E5E5E5",
  GRAY_100: "#D2D2D2",
  GRAY_150: "#BABABA",
  GRAY_200: "#969696",
  GRAY_300: "#737373",
  GRAY_500: "#525252",
  GRAY_700: "#383838",
  GRAY_900_OPACITY_55: "rgba(30, 30, 30, 0.55)",
  RED_700: "#E24141",
  BLUE_400: "#547CE4",
  GREEN_400: "#73BC6D",
  PINK_600: "#DE59B9",
  PINK_500: "#E76E9A",
  ORANGE_700: "#F37D3B",
  GOLD_400: "#CBBA64",
  YELLOW_500: "#FBCD58",
  MINT_300: "#A5DEDC",
  MINT_500: "#22A6A2",
  CYAN_300: "#94DACD",
  MINT_BLUE: "#2ac1bc",
};

export const fontSize = {
  bigTitle: "20px",
  title: "16px",
  text: "14px",
  smallText: "12px",
};

export type ColorsTypes = typeof colors;

export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
