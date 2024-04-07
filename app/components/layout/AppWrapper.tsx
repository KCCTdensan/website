import { cva } from "@styles/css";
import { styled } from "@styles/jsx";

const recipe = cva({
  base: {
    display: "flex",
    minH: "dvh",
  },
  variants: {
    z: {
      false: {
        bgGradient: "bg",
      },
      true: {
        bgGradient: "z",
        fontFamily: "correct",
      },
    },
  },
});

export const AppWrapper = styled("div", recipe);
