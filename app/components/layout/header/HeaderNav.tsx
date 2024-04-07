import { cva } from "@styles/css";
import { styled } from "@styles/jsx";

const recipe = cva({
  base: {
    display: "flex",
    flexDir: "column",
    p: ".5rem",
    bg: "header.nav.bg",
    color: "header.nav.text",
    lineHeight: 1.8,
    fontFamily: "mono",
    cursor: "text",

    "& *": {
      flexWrap: "wrap",
    },
  },
  variants: {
    z: {
      true: {
        fontFamily: "correct",
      },
    },
    gaming: {
      true: {
        "& *": {
          bg: "linear-gradient(to right, cyan, yellow, magenta, cyan) center/200%",
          animation: "bgSlide 4s linear infinite",
          color: "transparent",
          bgClip: "text",
        },
      },
    },
  },
});

export const HeaderNav = styled("nav", recipe);
