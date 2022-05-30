import Breakpoints from "./breakpoints";

const mediaQuery = (maxWidth: number) => `@media(max-width:${maxWidth}px)`;

const { xlarge, large, small } = Breakpoints;

const media = {
  xlarge: mediaQuery(xlarge),
  large: mediaQuery(large),
  small: mediaQuery(small),
};

export default media;
