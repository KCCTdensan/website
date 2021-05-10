import React from "react"
import styled from "styled-components"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "./global.scss"

import Header from "./header"
import Footer from "./footer"

export default function Layout(props) {
  const breakpoints = useBreakpoint()

  const FullHeight = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `
  const Container = styled.main`
    width: ${breakpoints.sm ? "92%" : (breakpoints.md ? "84%" : "960px")};
    margin: 0 auto auto;
  `
  console.log(breakpoints)

  return (
    <FullHeight>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </FullHeight>
  )
}
