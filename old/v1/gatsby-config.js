module.exports = {
  pathPrefix: "/old/v1",
  siteMetadata: {
    title: "電算部.net",
    description: "神戸高専電算部 公式ウェブサイト",
    author: "神戸高専 電子計算機部",
    keywords: `
      電算部,でんさんぶ,電子計算機部,神戸高専,神戸高専電子計算機部,KCCT,高専,神戸,部活,部活動,
      パソコン,パソコン部,コンピューター,コンピュータークラブ,コンピューター部,
      プログラミング,作曲,電子回路,CG,2DCG,3DCG
    `.replace(/\s/g, ""),
  },
  plugins: [
    "gatsby-plugin-pnpm",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "電算部.net",
        short_name: "電算部.net",
        description: "神戸高専電算部 公式ウェブサイト",
        lang: "ja",
        display: "browser",
        icon: "static/assets/icon.png",
        start_url: "/",
        background_color: "#87cefa",
        theme_color: "#fff",
      },
    },
    // "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    // "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: "src/markdown-pages",
      },
    },
    "gatsby-transformer-remark",
  ],
}
