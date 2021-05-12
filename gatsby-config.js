const color = require("./src/components/color")

module.exports = {
  siteMetadata: {
    title: "電算部.net",
    description: "神戸高専電算部公式ウェブサイト",
    author: "神戸市立工業高等専門学校 電子計算機部"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          mobile: "(max-width: 719px)",
          tab: "(min-width: 720px) and (max-width: 1535px)",
          pc: "(min-width: 1536px)"
        },
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "電算部.net",
        short_name: "d3bu",
        start_url: "/",
        background_color: color.light.bg,
        theme_color: color.light.main,
        display: "browser",
        icon: `${__dirname}/src/assets/icon.png`
      }
    },
    // "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    // "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`
      }
    },
    "gatsby-transformer-remark"
  ]
}
