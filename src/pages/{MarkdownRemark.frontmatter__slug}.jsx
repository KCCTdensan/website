import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Twemoji from "react-twemoji"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "../styles/global.scss"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

export default function MarkdownLayout({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const breakpoints = useBreakpoint()

  const FullHeight = styled(Twemoji)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    img.emoji {
      height: 1em;
      width: 1em;
      margin: 0 .05em 0 .1em;
      vertical-align: -0.1em;
    }
  `
  const Container = styled.main`
    margin: 0 auto auto;

    animation: fadeIn 0.5s ease 0s 1 normal;
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @-webkit-keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    a {
      outline: none;
    }
  `
  const PcContainer = styled(Container)`
    width: 960px;
  `
  const TabContainer = styled(Container)`
    width: 84%;
  `
  const MobileContainer = styled(Container)`
    width: 92%;
  `

  return (
    <FullHeight>
      <Header />
      <Seo title={frontmatter.title} />
      {
        breakpoints.pc
        ? <PcContainer dangerouslySetInnerHTML={{ __html: html }} />
        : null
      }
      {
        breakpoints.tab
        ? <TabContainer dangerouslySetInnerHTML={{ __html: html }} />
        : null
      }
      {
        breakpoints.mobile
        ? <MobileContainer dangerouslySetInnerHTML={{ __html: html }} />
        : null
      }
      <Footer />
    </FullHeight>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
