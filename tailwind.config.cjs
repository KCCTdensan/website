module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [require("@themesberg/flowbite/plugin")],
}
