import type { SemanticTokens, Tokens } from "@pandacss/dev";

export const tokens: Tokens = {
  fonts: {
    normal: { value: `"M PLUS 2", system-ui, sans-serif, "Source Han Sans"` },
    mono: { value: `"Fira Code", ui-monospace, monospace` },
    correct: { value: `"Source Han Sans Without ASCII", serif` },
  },
  gradients: {
    bg: {
      value: {
        type: "radial",
        placement: "at 50% 0%",
        stops: ["#444", "#000"],
      },
    },
    z: {
      value: {
        type: "radial",
        placement: "at 0% 0%",
        stops: ["#f00", "#400"],
      },
    },
  },
};

export const semanticTokens: SemanticTokens = {
  colors: {
    bg: {
      DEFAULT: { value: "#fff" },
      dim: { value: "#ddd" },
    },
    text: {
      DEFAULT: { value: "#000" },
      dim: { value: "#444" },
    },

    link: {
      DEFAULT: { value: "#0827f5" },
      light: { value: "#64a7df" },
    },

    shadow: { value: "#bbb" },

    logoText: { value: "#fff" },
    logoStar: { value: "#ff0" },

    header: {
      bg: {
        DEFAULT: { value: "#9bbab9" },
        z: { value: "#d00" },
      },
      text: {
        DEFAULT: { value: "#fff" },
        dim: { value: "#fff/50" },
      },
      nav: {
        bg: { value: "#2b3030" },
        text: { value: "#fff" },
        strong: { value: "#ff0" },
      },
    },
  },
};
