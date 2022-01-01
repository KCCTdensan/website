module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        bodyBG: "#0F172A",
        bodyBG_light: "#F3F4F6",
        mainBG: "#FAFAFA",
        mainText: "#000000",
        headerBG: "#1E3A8A",
        headerText: "#FFFFFF",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
}
