import { cva } from "@styles/css";
import { styled } from "@styles/jsx";

const recipe = cva({
  base: {
    display: "flex",
    flexDir: "column",
    bg: "bg",
    color: "text",
    w: "full",
    h: "full",
    m: { base: "0" },

    md: {
      w: "2xl",
      minH: "dvh",
      my: "48px",
      rounded: "md",
    },
  },
  variants: {
    axis: {
      mid: {
        md: {
          mx: "auto",
        },
      },
      left: {
        md: {
          mr: "auto",
        },
      },
      right: {
        md: {
          ml: "auto",
        },
      },
    },
  },
});

export const Container = styled("section", recipe);
