module.exports = {
  siteMetadata: {
    title: `電算部.net`,
    description: `神戸高専電算部の公式ウェブサイト`,
    author: `神戸市立工業高等専門学校 電子計算機部`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `電算部.net`,
        short_name: `d3bu`,
        start_url: `/`,
        background_color: `#87CEFA`,
        theme_color: `#87CEFA`,
        display: `browser`,
        icon: `assets/icon.png`
      }
    }
  ]
}
