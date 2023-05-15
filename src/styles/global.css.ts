import { globalStyle } from "@vanilla-extract/css";
import { css } from "styled-vanilla-extract/qwik";

import { vars } from "./variables.css";

globalStyle(
  "html, body",
  css`
    font-size: 1.2rem;
    font-family: ${vars.font.normal};
  `,
);

globalStyle(
  "body:focus-visible",
  css`
    outline: auto;
  `,
);

globalStyle(
  "a",
  css`
    color: ${vars.color.link};
    font-weight: bolder;
    text-decoration: none;

    /* &:hover {
      text-decoration: underline;
    }

    &:active {
      color: ${vars.color.linkLight};
    } */
  `,
);

globalStyle(
  "code",
  css`
    margin: 0.25em;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    background-color: ${vars.color.dimBg};
    cursor: text;
    font-size: 0.8em;
    font-family: ${vars.font.mono};
  `,
);

globalStyle(
  "pre",
  css`
    padding: 0.5em 1em;
    border-radius: 0.25em;
    background-color: ${vars.color.dimBg};
    font-size: 1.2rem;
    line-height: 1.2;

    /* code {
      margin: 0;
      padding: 0;
      border-radius: 0;
    } */
  `,
);

globalStyle(
  "hr",
  css`
    display: block;
    position: relative;
    height: 2px;
    margin: -1px 0;
    border: none;
  `,
);

globalStyle(
  "hr::before",
  css`
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(${vars.color.shadow}, 1);
  `,
);

globalStyle(
  "hr::after",
  css`
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(${vars.color.shadow}, 0.5);
  `,
);
// // Layout

// .main-normal {
//   margin: $l-section-margin;

//   @include mqUp(md) {
//     margin: $l-section-margin-small;
//   }
// }

// // Component

// .WARN {
//   color: #f00;
//   font-size: 2.5em;
//   font-weight: 900;
// }
