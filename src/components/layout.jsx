import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import 'reseter.css/css/reseter.min.css'

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
