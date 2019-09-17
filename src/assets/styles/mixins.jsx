import { css } from "styled-components";
import { color } from "assets/styles/variables";

export const primaryFont = css`
  color: ${color.mainColor};
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
`;

export const shrinkLabel = css`
  color: ${color.mainColor};
  top: -1.8rem;
  font-size: 1.2rem;
`;

export const scrollBar = css`
  ::-webkit-scrollbar {
    width: 1rem;

    &-thumb {
      background: ${color.subColor};
      border-radius: 1rem;
    }
  }
`;
