import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "html, body": {
    h: "full",
  },
  html: {
    fontSize: "clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.7692)), 1.2rem)",
    fontFamily: "normal",
    lineHeight: 1.8,
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",

    _focusWithin: {
      scrollBehavior: "smooth",
    },
  },
  ":where(h1, h2, h3, h4, h5, h6)": {
    fontWeight: "revert",
  },
  ":where(p, h1, h2, h3, h4, h5, h6, li)": {
    cursor: "text",
  },
  h1: {
    fontSize: "2rem",
    my: ".67rem",
  },
  article: {
    "& p": {
      m: "revert",
      p: "revert",
    },

    "& ul, ol": {
      m: "revert",
      p: "revert",
      listStyle: "revert",
    },
  },
  "*, *::before, *::after": {
    borderStyle: "solid",

    _focusVisible: {
      outline: "auto",
    },
  },
  "*::placeholder": {
    opacity: 1,
  },
  "a:not([class])": {
    textDecorationSkipInk: "auto",
  },
  "img, picture, svg, video, canvas": {
    verticalAlign: "middle",
    fontStyle: "italic",
    bgRepeat: "no-repeat",
    bgSize: "cover",
  },
  "@media (prefers-reduced-motion: reduce)": {
    html: {
      _focusWithin: {
        scrollBehavior: "auto",
      },
    },

    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
      transition: "none !important",
    },
  },

  a: {
    color: "link",
    fontWeight: "bold",
    textDecoration: "none",

    _hover: {
      textDecoration: "underline",
    },

    _active: {
      color: "link.light",
    },
  },
  pre: {
    px: "1rem",
    py: ".5rem",
    rounded: "sm",
    bg: "bg.dim",
    fontSize: "1.2rem",
    lineHeight: 1.2,
    whiteSpace: "pre-wrap",
    fontFamily: "mono",

    "& code": {
      m: "0",
      p: "0",
      rounded: "unset",
    },
  },
  code: {
    m: ".25rem",
    px: ".5rem",
    py: ".25rem",
    rounded: "sm",
    bg: "bg.dim",
    cursor: "text",
    fontSize: ".8rem",
    fontFamily: "mono",
  },
  hr: {
    display: "block",
    pos: "relative",
    h: "2px",
    my: "-1px",
    border: "none",

    _before: {
      content: "''",
      pos: "absolute",
      insetInline: 0,
      h: "1px",
      bg: "shadow/100",
    },

    _after: {
      content: "''",
      pos: "absolute",
      top: "1px",
      insetInline: 0,
      h: "1px",
      bg: "shadow/50",
    },
  },
});
