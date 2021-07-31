import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({ title="", disableSiteName=false, description="", keywords="", lang="ja", meta=[] }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
        }
      }
    }
  `)

  const siteTitle = site.siteMetadata.title
  const pageTitle = title
  const pageDescription = description || site.siteMetadata.description
  const siteAuthor = site.siteMetadata.author
  const pageKeywords = site.siteMetadata.keywords + (keywords ? `,${keywords}` : "")

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      {... disableSiteName || {titleTemplate: `%s | ${siteTitle}`}}
      meta={[
        { name: "title",        content: pageTitle        },
        { name: "description",  content: pageDescription  },
        { name: "author",       content: siteAuthor       },
        { name: "keywords",     content: pageKeywords     },

        { property: "og:title",       content: pageTitle        },
        { property: "og:description", content: pageDescription  },
        { property: "og:site_name",   content: siteTitle        },
        { property: "og:type",        content: "website"        },
        { property: "og:image",       content: "https://d3bu.net/assets/icon.png" },

        { name: "twitter:title",      content: pageTitle        },
        { name: "twitter:description",content: pageDescription  },
        { name: "twitter:card",       content: "summary"        },
      ].concat(meta)}
    />
  )
}
