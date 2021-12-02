module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@themesberg/flowbite/plugin")],
}
