import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({ title="", description="", lang="ja", meta=[] }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const siteTitle = site.siteMetadata.title
  const pageTitle = title
  const pageDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: "description",
          content: pageDescription
        },
        {
          property: "og:title",
          content: pageTitle
        },
        {
          property: "og:description",
          content: pageDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:image",
          content: "https://d3bu.net/assets/icon.png"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:title",
          content: pageTitle
        },
        {
          name: "twitter:description",
          content: pageDescription
        }
      ].concat(meta)}
    />
  )
}
