import { keyframes, style } from "@vanilla-extract/css";

const movingBackgroundKeyframe = keyframes({
  "0%": {
    backgroundPositionX: "0%",
  },
  "100%": {
    backgroundPositionX: "200%",
  },
});

export const gamingClass = style({
  background: "linear-gradient(to right, cyan, yellow, magenta, cyan) center/200%",
  animation: `${movingBackgroundKeyframe} 4s linear infinite`,
});
