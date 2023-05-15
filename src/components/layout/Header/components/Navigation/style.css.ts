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

export const NavigationLinks = styled.ul`
  display: flex;
  margin: 0;
`;

export default `
${NavigationWrapper} * {
  flex-wrap: wrap;
}

${NavigationWrapper} a {
  color: ${vars.color.headerNavText};
}
`;
