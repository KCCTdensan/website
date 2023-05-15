import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  layout: {
    sectionMargin: "section-margin",
    sectionMarginSmall: "section-margin-small",
  },
  color: {
    bg: "bg",
    dimBg: "dim-bg",
    text: "text",
    dimText: "dim-text",
    link: "link",
    linkLight: "link-light",

    shadow: "shadow",
    ground: "ground",
    groundShadow: "ground-shadow",

    logoText: "logo-text",
    headerBg: "header-bg",
    headerText: "header-text",
    headerDimText: "header-dim-text",
    headerNavBg: "header-nav-bg",
    headerNavText: "header-nav-text",
    headerNavStrong: "header-nav-strong",

    logoStar: "logo-star",
    groundZ: "ground-z",
    groundShadowZ: "ground-shadow-z",
    headerBgZ: "header-bg-z",
  },
  font: {
    normal: "normal-font",
    mono: "mono-font",
    correct: "correct-font",
  },
});

createGlobalTheme(":root", vars, {
  layout: {
    sectionMargin: "1.5rem",
    sectionMarginSmall: "1rem",
  },
  color: {
    bg: "#fff",
    dimBg: "#ddd",
    text: "#000",
    dimText: "#444",
    link: "#0827f5",
    linkLight: "#64a7df",

    shadow: "#bbb",
    ground: "#000",
    groundShadow: "#444",

    logoText: "#fff",
    headerBg: "#9bbab9",
    headerText: "#fff",
    headerDimText: "rgba(255, 255, 255, .5)",
    headerNavBg: "#2b3030",
    headerNavText: "#fff",
    headerNavStrong: "#ff0",

    logoStar: "#ff0",
    groundZ: "#400",
    groundShadowZ: "#f00",
    headerBgZ: "#d00",
  },
  font: {
    normal: "M PLUS 2, system-ui, sans-serif, Source Han Sans",
    mono: "Fira Code, ui-monospace, monospace",
    correct: "Source Han Sans Without ASCII, serif",
  },
});
