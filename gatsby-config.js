const color = require("./src/components/color")

module.exports = {
  siteMetadata: {
    title: "電算部.net",
    description: "神戸高専電算部の公式ウェブサイト",
    author: "神戸市立工業高等専門学校 電子計算機部"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "電算部.net",
        short_name: "d3bu",
        start_url: "/",
        background_color: color.light.bg,
        theme_color: color.light.main,
        display: "browser",
        icon: "static/assets/icon.png"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`
      },
    },
    "gatsby-transformer-remark"
  ]
}
