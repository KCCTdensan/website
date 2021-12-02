module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bodyBG: "#0F172A",
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
