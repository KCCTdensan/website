import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "../components/global.scss"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from '../components/seo'

export default function MarkdownLayout({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const breakpoints = useBreakpoint()

  const FullHeight = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
      <h1>{frontmatter.title}</h1>
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
