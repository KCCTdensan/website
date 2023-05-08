import { style, styleVariants } from "@vanilla-extract/css";
import { styled } from "styled-vanilla-extract/qwik";

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const appStyles = styleVariants({
  normal: {
    background: "radial-gradient(at 50% 0%, $c-groundShadow, $c-ground)",
  },
  konami: {
    background: "radial-gradient(at 0% 0%, $c-groundShadowZ, $c-groundZ)",
    fontFamily: "$f-correct",
  },
});

export const StyledContainer = styled.div`
  display: flex;
  width: bpVal(md);
  height: 100%;
  margin: 48px auto;
  flex-direction: column;
  border-radius: 8px;
  background-color: $c-bg;
  color: $c-text;

  @include mqUp(md) {
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
