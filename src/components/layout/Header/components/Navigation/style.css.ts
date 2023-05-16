import { style } from "@vanilla-extract/css";
import { styled } from "styled-vanilla-extract/qwik";

import { vars } from "~/styles/variables.css";

export const navigationZClass = style({
  fontFamily: "$f-correct",
});

export const NavigationWrapper = styled.nav`
  display: flex;
  padding: 0.5em;
  flex-direction: column;
  background-color: ${vars.color.headerNavBg};
  color: ${vars.color.headerNavText};
  font-size: calc(1rem / 1.8);
  font-family: ${vars.font.mono};
  cursor: text;
`;

export const InnerNavigationLink = styled.a`
  color: ${vars.color.headerNavText};
`;

export const ActiveInnerNavigationLink = styled.span`
  color: ${vars.color.headerNavStrong};
  text-decoration: underline;
`;

export default `
${NavigationWrapper} * {
  flex-wrap: wrap;
}
`;
