import { style, styleVariants } from "@vanilla-extract/css";
import { styled } from "styled-vanilla-extract/qwik";

import { mqUpto } from "~/styles/responsive";
import { vars } from "~/styles/variables.css";

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const appStyles = styleVariants({
  normal: {
    background: `radial-gradient(at 50% 0%, ${vars.color.groundShadow}, ${vars.color.ground})`,
  },
  konami: {
    background: `radial-gradient(at 0% 0%, ${vars.color.groundShadowZ}, ${vars.color.groundZ})`,
    fontFamily: vars.font.correct,
  },
});

export const Container = styled.div`
  display: flex;
  height: 100%;
  margin: 48px auto;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${vars.color.bg};
  color: ${vars.color.text};

  @media ${mqUpto("md")} {
    /* FIXME: probably does not work properly */
    width: 100%;
    min-height: 100vh;
    margin: 0;
    border-radius: 0;
  }
`;

export const konamiContainerStyle = style({
  marginLeft: 0,
});

export const FullWidthAudio = styled.audio`
  width: 100%;
`;

export const Main = styled.main`
  margin: ${vars.layout.sectionMargin};
`;
