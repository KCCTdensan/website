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
      right: {
        bg: `
          radial-gradient(
            circle at 20em 15em,
            #f00 10em,
            #f00 0.001em,
            transparent 0.001em),
          repeating-conic-gradient(
            from 0deg at 20em 15em,
            #fff 0deg 11.25deg,
            #f00 11.25deg 22.5deg),
        `,
        bgSize: "auto 100%",
        fontFamily: "soul",
      },
    },
  },
});

export const AppWrapper = styled("div", recipe);
