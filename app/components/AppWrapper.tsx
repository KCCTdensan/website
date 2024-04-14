import { cva } from "@styles/css";
import { styled } from "@styles/jsx";

const recipe = cva({
  base: {
    display: "flex",
    minH: "dvh",
  },
  variants: {
    axis: {
      mid: {
        bgGradient: "bg",
      },
      left: {
        bgGradient: "z",
        fontFamily: "correct",
      },
      right: {},
    },
  },
});

export const AppWrapper = styled("div", recipe);
