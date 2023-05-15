import { style } from "@vanilla-extract/css";
import { styled } from "styled-vanilla-extract/qwik";

import { NavigationLinks } from "../../style.css";

import { vars } from "~/styles/variables.css";

export const NavigationLinkWrapper = styled.li`
  ${NavigationLinks} &:not(:last-child)::after {
    // 隣接セレクタだと折り返しが厳しい
    margin-right: 1em;
    content: "";
  }
`;

export const activeLinkClass = style({
  color: vars.color.headerNavStrong,
  textDecoration: "underline",
});
