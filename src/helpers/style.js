import { screenSizes } from "../constants/style";
import { css } from "styled-components";

/**
 *  Usage example:
 *  ${media.phone`
 *    width: 20px;
 *  `}
 *  ${media.tablet`
 *    width: 60px;
 *  `}
 */
export const media = Object.keys(screenSizes)
  .reduce((mediaPayload, label) => {
    return {
      ...mediaPayload,
      [label]: (...args) => css`
        @media (min-width: ${screenSizes[label] / 16}em) {
          ${css(...args)}
        }
      `
    };
  }, {});

export const makeTheme = theme => ({
  ...theme,
  media
});
